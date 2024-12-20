export default function CardBento({
	children,
	className,
	title,
	onDrop,
	onClick,
	onDragOver,
	onDragLeave,
}) {
	return (
		<>
			<div
				onDragLeave={onDragLeave}
				onDragOver={onDragOver}
				onDrop={() => onDrop}
				onClick={onClick}
				className={`flex items-center w-full h-full rounded-inner-border relative border border-zinc-100 drop-shadow-sm ${className}`}
			>
				<div className="flex flex-col w-full h-full gap-spacing justify-center items-center">
					{title && (
						<h1 className="text-2xl font-bold mt-4">{title}</h1>
					)}
					{children}
				</div>
			</div>
		</>
	);
}
