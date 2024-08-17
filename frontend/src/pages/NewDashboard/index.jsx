import { Link } from 'react-router-dom';

const NewDashboard = () => {
	return (
		<div>
			<Link to="/inicio">Home</Link>
			<Link to="/carga">carga</Link>
		</div>
	);
};

export default NewDashboard;
