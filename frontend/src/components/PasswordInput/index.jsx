import { useState, useId } from 'react';
import Icons from '../Icons';

const Icon = {
	text: ({ ...iconProps }) => <Icons.OpenEye {...iconProps} />,
	password: ({ ...iconProps }) => <Icons.ClosedEye {...iconProps} />,
};

const PasswordInput = ({
	className,
	label = 'Password',
	placeholder,
	required,
	name,
	id,
	...restOfInputProps
}) => {
	const [type, setType] = useState('password');
	const defaultId = useId();

	const htmlFor = id ?? defaultId;

	const switchType = () => {
		setType((prev) => (prev === 'password' ? 'text' : 'password'));
	};

	return (
		<label
			className={`flex flex-col gap-brand ${className}`}
			htmlFor={htmlFor}
		>
			<span className="text-grey-900">{label}</span>
			<div className="border border-grey-500 rounded-brand py-brand px-brand-2 flex gap-brand">
				<input
					className="flex-1 text-grey-900 placeholder:text-grey-500 rounded-brand no-autofill"
					type={type}
					id={htmlFor}
					name={name}
					placeholder={placeholder}
					required={required}
					{...restOfInputProps}
				/>
				<button
					type="button"
					className="w-6 h-6"
					onClick={() => {
						switchType();
					}}
				>
					{Icon[type]({
						className:
							'w-full h-full fill-grey-500 stroke-brand-500',
					})}
				</button>
			</div>
		</label>
	);
};

export default PasswordInput;
