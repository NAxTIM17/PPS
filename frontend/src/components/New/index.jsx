import { Link } from "react-router-dom";

import { ROUTES } from "../../router/config";


const New = () => {
    return (
        <Link 
            to={ROUTES.AUTHED_ROUTES.NEW_DASHBOARD}
            className="rounded-inner-border font-bold w-full h-full flex justify-center items-center text-4xl text-color-text-primary bg-color-fill-primary hover:bg-color-bg-surface-hover cursor-pointer transition-all hover:no-underline hover:text-color-brand-secondary"
        >
            NUEVO
        </Link>
    );
}
export default New;