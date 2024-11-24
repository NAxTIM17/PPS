import { Request, Response } from 'express';
import messages from '../../config/messages';
import OpenAI from 'openai';

async function getData(request: Request, response: Response) {
	const openai = new OpenAI({
		apiKey: process.env.OPENAI_API_KEY,
	});
	try {
		const body = request.body;
		let array: any[] = [
			{
				type: 'text',
				text: ` 
        Cree un objeto JSON para cada imagen que represente una lista de productos de una farmacia y añádalos a un array. El objeto debe incluir el nombre de la farmacia("drogueria"), una lista de productos y el periodo de validez de la oferta. Cada producto de la lista debe tener estas propiedades «nombre» (nombre del producto con detalles de presentación), “laboratorio” (nombre del fabricante) y “precio” (formato numérico). Además, incluya «ofeta_valida» con las fechas de inicio y fin de la promoción en formato día y mes. Asegúrese de que la estructura se sigue con precisión, con detalles precisos en cada campo. si la imagen no coincide simplemente ignorar y sólo me dan el resultado json y sin sintaxis de bloque de código.`,
			},
		];
		for (let i = 0; i < body.length; i++) {
			array = [
				...array,
				{
					type: 'image_url',
					image_url: {
						url: body[i].image,
					},
				},
			];
		}
		// console.log(array);
		const res = await openai.chat.completions.create({
			model: 'gpt-4o-mini',
			messages: [
				{
					role: 'user',
					content: array,
				},
			],
		});
		response.json(res);
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
