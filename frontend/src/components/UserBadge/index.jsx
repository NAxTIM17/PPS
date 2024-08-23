import Icons from '../Icons';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../router/config';
import { useSession } from '../../providers/Session';

const UserBadge = () => {
	const session = useSession();

	return (
		<Link
			to={ROUTES.AUTHED_ROUTES.ACCOUNT}
			className="flex justify-between items-center gap-brand-4 px-brand-2 py-brand bg-grey-500 dark:bg-grey-100 text-grey-50 dark:text-grey-900 rounded-brand w-max h-max"
		>
			<span className="text-2xl font-bold">
				{session?.user?.firstname ? session.user.firstname : 'User'}
			</span>
			<Icons.User className="h-4" />
		</Link>
	);
};
export default UserBadge;
