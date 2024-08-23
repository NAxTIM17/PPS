import { Link, useNavigate } from 'react-router-dom';
import { useSession } from '../../providers/Session';
import { ROUTES } from '../../router/config';

import PieChart from '../../components/pieChart';

const Home = () => {
	const session = useSession();
	const navigate = useNavigate();

	return (
		<div className="flex flex-row w-full h-full">
			<PieChart data={[
				{
					title : 'Margarita',
					amount : 300
				},
				{
					title : 'Garnica',
					amount : 100
				},
				{
					title : 'Savencia',
					amount : 400
				}
			]}/>
			
			<Link to="/carga">carga</Link>
			<Link to="/cuenta">cuenta</Link>
			<button
				className="border bg-green-100"
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
