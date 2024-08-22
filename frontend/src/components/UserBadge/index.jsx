import Icons from "../Icons";
import { Link } from "react-router-dom";
import { ROUTES } from "../../router/config";
import { useSession } from "../../providers/Session";

const UserBadge = () => {
    const session = useSession()
    return (
        <Link 
            to={ROUTES.AUTHED_ROUTES.ACCOUNT}
            className='flex justify-between items-center w-[350px] h-[86px] bg-grey-500 dark:bg-grey-100 text-grey-50 dark:text-grey-900 rounded-brand-2 px-brand-4 py-brand-2'
        >
            <span className='text-5xl font-bold leading-[120%]'>{session?.user?.firstname ? session.user.firstname : 'User'}</span>
            <Icons.User className='h-8'/> 
        </Link>
    );
}
export default UserBadge;