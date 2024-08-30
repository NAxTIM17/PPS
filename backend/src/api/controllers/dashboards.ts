import { Response } from 'express';
import { AuthRequest } from './types';
import { Dashboard } from '../../models/Dashboard';
import { processFiles, FileResponse } from '../services/upload';
import messages from '../../config/messages';

async function getUserDashboards(request: AuthRequest, response: Response) {
	try {
		const dashboard = await Dashboard.find({
			registeredByUser: request.user?.id,
		});
		response.json({ dashboard });
	} catch (e) {
		const error = (e as { message?: string }).message ?? '';
		response
			.status(500)
			.json({ message: messages.SERVER_ERROR, reason: error });
	}
}

async function createNewFromAutoUpload(
	request: AuthRequest,
	response: Response
) {
	const files = request.files as Express.Multer.File[];

	try {
		if (!files || !files.length) {
			response.status(400).json({ message: 'No files uploaded' });
			return;
		}

		const fileSizes: FileResponse[] = processFiles(files);

		response.status(200).json({ file_sizes: fileSizes });
	} catch (e) {
		const error = (e as { message?: string }).message ?? '';
		response
			.status(500)
			.json({ message: messages.SERVER_ERROR, reason: error });
	}
}

export default { getUserDashboards, createNewFromAutoUpload };
