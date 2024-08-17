import Icons from '../Icons';

const Spinner = ({ className = '' }) => {
	return (
		<Icons.Spin
			className={`animate-spin h-5 w-5 text-white ${className}`}
		/>
	);
};

export default Spinner;
