interface FileResponse {
	filename: string;
	size: number;
	firstLine: string;
	characters: number;
	words: number;
}

const processFiles = (files: Express.Multer.File[]): FileResponse[] => {
	return files.map((file): FileResponse => {
		const content = file.buffer.toString('utf8');
		const firstLine = extractFirstLine(content);
		const characters = countFileCharacters(content);
		const words = countFileWords(content);

		return {
			filename: file.originalname,
			size: file.size,
			firstLine,
			characters,
			words,
		};
	});
};

const countFileCharacters = (fileContent: string): number => {
	const characters = fileContent.split('');
	return characters.length;
};

const countFileWords = (fileContent: string): number => {
	const words = fileContent.split(/(\w+)/);
	return words.length;
};

const extractFirstLine = (fileContent: string): string => {
	const lines = fileContent.split('\n');
	return lines[0] || '';
};

export { FileResponse, processFiles };
