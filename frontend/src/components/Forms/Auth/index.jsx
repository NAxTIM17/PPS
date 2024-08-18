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
		setSubmitState(null);
		startSubmitting();
		onSubmit(event, endSubmitting);
	};

	return (
		<div className="bg-brand-50 flex flex-col items-center pt-brand-8 pb-brand-4 px-brand-4 h-max rounded-brand-2 drop-shadow-md">
			<h1 className="text-[78px] font-brand text-grey-900">ADvenir</h1>
			{!!title && (
				<h3 className="text-[36px] font-inter font-bold text-brand-800 mt-brand-4 text-center">
					{title}
				</h3>
			)}
			{!!description && (
				<p className="mt-brand-8 font-medium text-center">
					{description}
				</p>
			)}
			<form
				className="flex flex-col mt-brand-8 gap-brand-2 w-full"
				onSubmit={handleSubmit}
				{...restOfFormProps}
			>
				{children}
				{!!submitState && (
					<span
						dangerouslySetInnerHTML={{ __html: submitState?.text }}
						className={`text-sm mt-brand-2 inline-block mx-auto ${submitState.type === 'error' ? 'text-red-500' : 'text-brand-700'}`}
					/>
				)}
				{buttonText && (
					<button
						disabled={isSubmitting}
						className={`bg-brand-800 text-brand-50 font-medium rounded-brand-2 px-brand-4 py-brand w-max mx-auto mt-brand-2 h-9 grid place-items-center transition-opacity ${isSubmitting ? 'cursor-progress opacity-75' : 'cursor-pointer'}`}
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
							className="text-sm text-grey-700 underline md:pl-brand md:first:pl-0 hover:text-brand-700"
							to={link.to}
						>
							{link.text}
						</Link>
					))}
				</div>
			)}
		</div>
	);
};

export default AuthForm;
