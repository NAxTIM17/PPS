import { useId } from 'react';

const TextInput = ({
	className = '',
	label = 'Text',
	type = 'text',
	name,
	placeholder,
	required,
	id,
	...restOfInputProps
}) => {
	const defaultId = useId();

	const htmlFor = id ?? defaultId;

	return (
		<label
			className={`flex flex-col gap-brand ${className}`}
			htmlFor={htmlFor}
		>
			<span className="text-grey-900">{label}</span>
			<input
				className="border border-grey-500 text-grey-900 placeholder:text-grey-500 rounded-brand py-brand px-brand-2 no-autofill"
				type={type}
				id={htmlFor}
				name={name}
				placeholder={placeholder}
				required={required}
				{...restOfInputProps}
			/>
		</label>
	);
};

export default TextInput;
