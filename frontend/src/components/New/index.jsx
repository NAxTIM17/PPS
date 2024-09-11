import { Link } from "react-router-dom";

import { ROUTES } from "../../router/config";


const New = () => {
    return (
        <Link 
            to={ROUTES.AUTHED_ROUTES.NEW_DASHBOARD}
            className="rounded-brand-2 font-bold w-full h-full flex justify-center items-center text-4xl text-white bg-[#5F9F66] hover:bg-[#528a59] cursor-pointer transition-all hover:no-underline hover:text-[#385c3c]"
        >
            NUEVO
        </Link>
    );
}
export default New;