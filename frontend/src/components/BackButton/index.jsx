import Icons from '../Icons';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../router/config';
const BackButton = () => {
	return (
		<Link
			className="flex items-center gap-brand-4 px-brand-2 py-brand rounded-brand bg-grey-500 dark:bg-grey-100 text-grey-50 dark:text-grey-900"
			to={ROUTES.AUTHED_ROUTES.HOME}
		>
			<span className="text-2xl font-bold leading-[120%]">Volver</span>
			<Icons.BackArrow className="w-4" />
		</Link>
	);
};
export default BackButton;
