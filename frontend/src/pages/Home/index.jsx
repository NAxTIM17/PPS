import { Link, useNavigate } from 'react-router-dom';
import { useSession } from '../../providers/Session';
import { ROUTES } from '../../router/config';

const Home = () => {
	const session = useSession();
	const navigate = useNavigate();

	return (
		<div className="flex flex-row">
			<div className="flex flex-col">
				<div className="bg-brand-50 w-16 h-16 rounded-brand"></div>
				<div className="bg-brand-100 w-16 h-16 rounded-brand"></div>
				<div className="bg-brand-200 w-16 h-16 rounded-brand"></div>
				<div className="bg-brand-300 w-16 h-16 rounded-brand"></div>
				<div className="bg-brand-400 w-16 h-16 rounded-brand"></div>
				<div className="bg-brand-500 w-16 h-16 rounded-brand"></div>
				<div className="bg-brand-600 w-16 h-16 rounded-brand"></div>
				<div className="bg-brand-700 w-16 h-16 rounded-brand"></div>
				<div className="bg-brand-800 w-16 h-16 rounded-brand"></div>
				<div className="bg-brand-900 w-16 h-16 rounded-brand"></div>
			</div>
			<div className="flex flex-col">
				<div className="bg-violet-50 w-16 h-16 rounded-brand"></div>
				<div className="bg-violet-100 w-16 h-16 rounded-brand"></div>
				<div className="bg-violet-200 w-16 h-16 rounded-brand"></div>
				<div className="bg-violet-300 w-16 h-16 rounded-brand"></div>
				<div className="bg-violet-400 w-16 h-16 rounded-brand"></div>
				<div className="bg-violet-500 w-16 h-16 rounded-brand"></div>
				<div className="bg-violet-600 w-16 h-16 rounded-brand"></div>
				<div className="bg-violet-700 w-16 h-16 rounded-brand"></div>
				<div className="bg-violet-800 w-16 h-16 rounded-brand"></div>
				<div className="bg-violet-900 w-16 h-16 rounded-brand"></div>
			</div>
			<div className="flex flex-col">
				<div className="bg-blue-50 w-16 h-16 rounded-brand"></div>
				<div className="bg-blue-100 w-16 h-16 rounded-brand"></div>
				<div className="bg-blue-200 w-16 h-16 rounded-brand"></div>
				<div className="bg-blue-300 w-16 h-16 rounded-brand"></div>
				<div className="bg-blue-400 w-16 h-16 rounded-brand"></div>
				<div className="bg-blue-500 w-16 h-16 rounded-brand"></div>
				<div className="bg-blue-600 w-16 h-16 rounded-brand"></div>
				<div className="bg-blue-700 w-16 h-16 rounded-brand"></div>
				<div className="bg-blue-800 w-16 h-16 rounded-brand"></div>
				<div className="bg-blue-900 w-16 h-16 rounded-brand"></div>
			</div>
			<div className="flex flex-col">
				<div className="bg-pink-50 w-16 h-16 rounded-brand"></div>
				<div className="bg-pink-100 w-16 h-16 rounded-brand"></div>
				<div className="bg-pink-200 w-16 h-16 rounded-brand"></div>
				<div className="bg-pink-300 w-16 h-16 rounded-brand"></div>
				<div className="bg-pink-400 w-16 h-16 rounded-brand"></div>
				<div className="bg-pink-500 w-16 h-16 rounded-brand"></div>
				<div className="bg-pink-600 w-16 h-16 rounded-brand"></div>
				<div className="bg-pink-700 w-16 h-16 rounded-brand"></div>
				<div className="bg-pink-800 w-16 h-16 rounded-brand"></div>
				<div className="bg-pink-900 w-16 h-16 rounded-brand"></div>
			</div>
			<div className="flex flex-col">
				<div className="bg-grey-50 w-16 h-16 rounded-brand"></div>
				<div className="bg-grey-100 w-16 h-16 rounded-brand"></div>
				<div className="bg-grey-200 w-16 h-16 rounded-brand"></div>
				<div className="bg-grey-300 w-16 h-16 rounded-brand"></div>
				<div className="bg-grey-400 w-16 h-16 rounded-brand"></div>
				<div className="bg-grey-500 w-16 h-16 rounded-brand"></div>
				<div className="bg-grey-600 w-16 h-16 rounded-brand"></div>
				<div className="bg-grey-700 w-16 h-16 rounded-brand"></div>
				<div className="bg-grey-800 w-16 h-16 rounded-brand"></div>
				<div className="bg-grey-900 w-16 h-16 rounded-brand"></div>
			</div>
			<Link to="/carga">carga</Link>
			<Link to="/cuenta">cuenta</Link>
			<button
				className="border bg-green-500"
				onClick={() => {
					session.end();
					navigate(ROUTES.UNAUTHED_ROUTES.LOGIN);
				}}
			>
				{JSON.stringify(session.user, null, 2)}
				<strong className="block w-max px-brand-4 mx-auto text-black border border-black rounded-brand-2">
					log out
				</strong>
			</button>
		</div>
	);
};

export default Home;
