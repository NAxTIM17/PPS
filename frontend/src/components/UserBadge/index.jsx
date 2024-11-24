import Icons from '../Icons';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../router/config';
import { useSession } from '../../providers/Session';
import { Dropdown, Avatar } from 'rsuite';
import { IconUser, IconLogout } from '@tabler/icons-react';
import { useNavigate } from 'react-router-dom';

const UserBadge = () => {
	const session = useSession();
	const navigate = useNavigate();

	const renderToggle = (props) => <IconUser {...props} className="" />;
	const handleLogut = () => {
		try {
			localStorage.removeItem('SergioYalux_token');
			navigate(ROUTES.UNAUTHED_ROUTES.LOGIN);
		} catch (error) {
			console.log('error en Logout...');
		}
	};

	return (
		<div className="absolute text-color-text-primary right-5 top-5 bg-color-fill-primary p-2 rounded-full">
			<Dropdown placement="bottomEnd" renderToggle={renderToggle}>
				<Dropdown.Item className="p-spacing w-32" panel>
					<strong className="text-black">
						{session?.user?.firstname
							? session.user.firstname
							: 'User'}
					</strong>
				</Dropdown.Item>
				<Dropdown.Separator />
				<Dropdown.Item>
					<Link
						to={ROUTES.AUTHED_ROUTES.ACCOUNT}
						className="text-zinc-900"
					>
						Cuenta
					</Link>
				</Dropdown.Item>
				<Dropdown.Separator />
				<Dropdown.Item
					className="hover:bg-red-50"
					onClick={() => handleLogut()}
				>
					<div className="flex gap-2 items-center">
						<p>Salir</p>
						<IconLogout className="text-red-500" />
					</div>
				</Dropdown.Item>
			</Dropdown>
		</div>
	);
};
export default UserBadge;
