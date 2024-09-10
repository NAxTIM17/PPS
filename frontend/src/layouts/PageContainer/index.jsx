import UserBadge from "../../components/UserBadge";
import { IconUser } from "@tabler/icons-react";

const PageContainer = ({ children }) => {
	return (
		<div className="absolute inset-0 h-full bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] dark:bg-zinc-900 min-h-screen w-full flex justify-center items-center md:py-brand-2 md:px-brand-32">
			<div className="absolute right-5 top-5 min-w-20 text-white h-10 p-3 bg-[#5F9F66] rounded-brand-2 flex flex-row items-center drop-shadow-md hover:bg-[#426e47] transition-all select-none cursor-pointer">
				<IconUser stroke={2} size={20}/>
				User name
			</div>
			{children}
		</div>
	);
};

export default PageContainer;
