import Icons from '../Icons';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../router/config';
import { useSession } from '../../providers/Session';
import { Dropdown, Avatar } from 'rsuite';
import { IconUser, IconLogout } from "@tabler/icons-react";


const UserBadge = () => {
	const session = useSession();
	const renderToggle = props => (
		<IconUser {...props} className='' />
	  )

	return (
		<div className="absolute text-color-text-primary right-5 top-5 bg-color-brand-primary p-2 rounded-full">
			<Dropdown placement='bottomEnd' renderToggle={renderToggle}>
				<Dropdown.Item className='p-3 w-32' panel>
				<strong className='text-color-text-secondary'>{session?.user?.firstname ? session.user.firstname : 'User'}</strong>
				</Dropdown.Item>
				<Dropdown.Separator />
				<Dropdown.Item>
					<Link
						to={ROUTES.AUTHED_ROUTES.ACCOUNT}
						className='text-zinc-900'
					>
						Cuenta
					</Link>
				</Dropdown.Item>
				<Dropdown.Separator />
				<Dropdown.Item className='hover:bg-red-50'>
					<div className='flex gap-2 items-center'>
						<p>Salir</p>
						<IconLogout className='text-red-500'/>
					</div>	
				</Dropdown.Item>
		</Dropdown>
	  </div>

	);
};
export default UserBadge;
