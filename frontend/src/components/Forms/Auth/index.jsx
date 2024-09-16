import { useState } from 'react';
import { Link } from 'react-router-dom';
import Spinner from '../../Loaders/Spinner';

const AuthForm = ({
	title = 'Form',
	buttonText = 'Submit',
	description = '',
	links = [],
	onSubmit,
	children,
	...restOfFormProps
}) => {
	const [submitState, setSubmitState] = useState(null);
	const [isSubmitting, setIsSubmitting] = useState(false);

	const startSubmitting = () => {
		setIsSubmitting(true);
	};

	const endSubmitting = (text, type = 'error') => {
		setIsSubmitting(false);
		if (!text) return;
		setSubmitState({ text, type });
	};

	const handleSubmit = (event) => {
		if (isSubmitting) return;
		setSubmitState(null);
		startSubmitting();
		onSubmit(event, endSubmitting);
	};

	return (
		<div className="w-full h-screen flex justify-center items-center bg-gradient-to-r from-lime-100 to-lime-300">
			<div className="bg-color-background flex flex-col p-8 w-max h-max rounded-brand-2 drop-shadow-md">
				<h1 className="text-center text-[68px] font-brand text-grey-900">
					ADvenir
				</h1>
				{!!title && (
					<h3 className="text-[26px] font-inter font-bold text-lime-500 mt-brand-4 text-center w-full">
						{title}
					</h3>
				)}
				{!!description && (
					<p className="font-medium text-center max-w-[40ch]">
						{description}
					</p>
				)}
				<form
					className="flex flex-col mt-brand-3 gap-brand-2"
					onSubmit={handleSubmit}
					{...restOfFormProps}
				>
					{children}
					{!!submitState && (
						<span
							dangerouslySetInnerHTML={{
								__html: submitState?.text,
							}}
							className={`text-sm mt-brand-2 inline-block mx-auto ${submitState.type === 'error' ? 'text-red-500' : 'text-lime-500'}`}
						/>
					)}
					{buttonText && (
						<button
							disabled={isSubmitting}
							className={`bg-lime-500 text-brand-50 text-color-text-primary font-bold rounded-brand px-brand-4 py-brand w-full mx-auto mt-brand-2 h-9 grid place-items-center transition-opacity ${isSubmitting ? 'cursor-progress opacity-75' : 'cursor-pointer'}`}
							type="submit"
						>
							{isSubmitting ? <Spinner /> : buttonText}
						</button>
					)}
				</form>
				{!!links.length && (
					<div className="mt-brand-4 flex gap-brand flex-col md:justify-center md:flex-row md:divide-x md:divide-grey-700">
						{links.map((link, index) => (
							<Link
								key={index}
								className="text-sm text-grey-700 underline md:pl-brand md:first:pl-0 hover:text-lime-500"
								to={link.to}
							>
								{link.text}
							</Link>
						))}
					</div>
				)}
			</div>
		</div>
	);
};

export default AuthForm;
