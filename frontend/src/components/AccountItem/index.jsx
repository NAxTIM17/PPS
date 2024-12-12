import ChevronDownIcon from '../Icons/ChevronDown';
const AccountItem = ({ onClick, icon, title, subtitle }) => {
	return (
		<div
			className="min-h-20 p-4 flex border rounded-brand bg-white gap-4 hover:bg-lime-200 items-center justify-between"
			onClick={onClick}
		>
			<div className="flex gap-4">
				<div className=" text-gray-500">{icon}</div>
				<div className="flex flex-col justify-center">
					<span className="text-xl">{title}</span>
					<span className="text-md">{subtitle}</span>
				</div>
			</div>
			<div className="w-8 text-gray-500 m-4">
				<ChevronDownIcon />
			</div>
		</div>
	);
};
export default AccountItem;
