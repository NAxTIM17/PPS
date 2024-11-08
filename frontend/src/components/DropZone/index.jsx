import { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import { IconFileUpload } from '@tabler/icons-react';

export default function DropZone({ setFileList, listFiles }) {
	function fileToBase64(file) {
		return new Promise((resolve, reject) => {
			const reader = new FileReader();
			reader.onloadend = () => resolve(reader.result);
			reader.onerror = reject;
			reader.readAsDataURL(file);
		});
	}

	const onDrop = useCallback(
		(acceptedFiles) => {
			const formatType = acceptedFiles[0].type.split('/')[1];
			if (
				formatType === 'jpeg' ||
				formatType === 'jpg' ||
				formatType === 'png' ||
				formatType === 'pdf'
			) {
				const file = acceptedFiles[0];
				fileToBase64(file)
					.then((base64) => {
						console.log(base64); // Logs the Base64 string representation of the file
						setFileList([
							...listFiles,
							{
								name: acceptedFiles[0].name,
								base64: base64,
								type: formatType,
							},
						]);
					})
					.catch((error) => {
						console.error('Error converting file to Base64', error);
					});
			} else {
				console.log('Formato incorrecto...');
			}
		},
		[listFiles]
	);

	const { getRootProps, getInputProps, isDragActive } = useDropzone({
		onDrop,
	});

	return (
		<div
			className={`bg-color-fill-low-contrast w-full h-full rounded-inner-border border-2 border-dashed border-color-border cursor-pointer ${isDragActive && 'bg-[--rs-primary-400]'} transition-all`}
			{...getRootProps()}
		>
			<input {...getInputProps()} />
			<div className="flex justify-center items-center w-full h-full flex-col text-color-fill-primary">
				<IconFileUpload size={50} />
				<p className="text-xl">Haga clik para importar</p>
			</div>
		</div>
	);
}
