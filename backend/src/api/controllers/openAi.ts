import { Request, Response } from 'express';
import messages from '../../config/messages';
import OpenAI from 'openai';
import dashboard from './dashboard';
import system from '../../config/system';
import { APIPromise } from 'openai/core';

async function getData(request: Request, response: Response) {
	// > this approach adds (n-1) * tokens_per_prompt to the the total usage,
	// where n is the amount of images passed
	// > broader contexts tend to make the model lose focus on minor details,
	// hence losing data
	// > because of this, calling the api once per image, so that vision processes
	// each image independently, retaining accuracy, allows us to keep as much
	// data as possible

	try {
		const openai = new OpenAI({
			apiKey: process.env.OPENAI_API_KEY,
		});

		if (!request.body.length) throw new Error('No file list provided');

		const requests = request.body.map((file: { image: string }) => {
			return openai.chat.completions.create({
				model: 'gpt-4o-mini',
				messages: [
					{
						role: 'user',
						content: [
							{ type: 'text', text: system.APP_PROMPT },
							{
								type: 'image_url',
								image_url: { url: file.image },
							},
						],
					},
				],
			});
		});

		const responses =
			await Promise.all<
				APIPromise<OpenAI.Chat.Completions.ChatCompletion>[]
			>(requests);

		const out = [];
		let tokens_used = 0;

		for (let response of responses) {
			if (!response.choices.length) continue;

			const digest = response.choices[0].message.content?.replace(
				/json|`*/g,
				''
			);

			if (!digest)
				throw new Error('Unable to extract data from model digest');

			const parsed = JSON.parse(digest);

			out.push(parsed);
			tokens_used =
				tokens_used +
				(response.usage?.total_tokens ??
					system.APP_PROMPT_TOKENS_REQUIRED);
		}

		await dashboard.createDashboard(out, { tokens_used });

		response.json(out);
	} catch (e) {
		const error = (e as { message?: string }).message ?? '';
		response
			.status(500)
			.json({ message: messages.SERVER_ERROR, reason: error });
	}
}

export default {
	getData,
};
