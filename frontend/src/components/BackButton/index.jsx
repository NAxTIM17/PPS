import Icons from "../Icons";
import { Link } from "react-router-dom";
import { ROUTES } from "../../router/config";
const BackButton = () => {
    return (
        <Link 
            className='flex items-center gap-brand-2 p-brand-2 rounded-brand-2 bg-grey-500 dark:bg-grey-100 text-grey-50 dark:text-grey-900'
            to={ROUTES.AUTHED_ROUTES.HOME}
        >
            <span className='text-5xl font-bold leading-[120%]'>Volver</span>
            <Icons.BackArrow className='h-8 w-8'/>
        </Link>
    );
}
export default BackButton;