import { useAuth } from '../../providers/Auth';

const Inicio = () => {
	const auth = useAuth();

	return (
		<div>
			<h1>where dashboards go</h1>
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
