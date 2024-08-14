import { useAuth } from '../../providers/Auth';
import { Link } from 'react-router-dom';

const Inicio = () => {
	const auth = useAuth();

	return (
		<div>
			<h1>where dashboards go</h1>
			<Link to="/carga">carga</Link>
			<Link to="/stuff">404</Link>
			<button
				onClick={() => {
					auth?.action?.endSession();
				}}
			>
				log out
			</button>
		</div>
	);
};

export default Inicio;
