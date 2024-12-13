import { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import { IconFileUpload } from '@tabler/icons-react';
import toast, { Toaster } from 'react-hot-toast';

const ACCEPTED_FILE_FORMATS = ['jpeg', 'jpg', 'png' /* 'pdf' */]; // not sure how pdf would be handled

export default function DropZone({ setFileList, listFiles }) {
	function fileToBase64(file) {
		return new Promise((resolve, reject) => {
			const reader = new FileReader();
			reader.onloadend = () =>
				resolve({
					name: file.name,
					type: 'image',
					// instead of file.type as the backend only requires either 'image' or 'text'
					image: reader.result,
				});
			reader.onerror = reject;
			reader.readAsDataURL(file);
		});
	}

	const onDrop = useCallback(
		async (acceptedFiles) => {
			if (
				!acceptedFiles.some(({ type }) =>
					ACCEPTED_FILE_FORMATS.includes(type.split('/')[1])
				)
			) {
				console.error('Formato incorrecto.'); // TODO: could use some toast
				toast.error('Formato incorrecto');
				return;
			}

			try {
				const filesAsBase64 = (
					await Promise.allSettled(
						acceptedFiles.map((file) => fileToBase64(file))
					)
				)
					.filter((promise) => promise.status === 'fulfilled')
					.map((promise) => promise.value);
				setFileList((prev) => [...prev, ...filesAsBase64]);
				toast.success('Archivo cargado');
			} catch (err) {
				consle.error('Error convirtiendo a Base64'); // TODO: could use some toast
				toast.error('Error importando el archivo');
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
