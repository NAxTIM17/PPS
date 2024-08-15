import Spin from '../Icons/Spin';

const Spinner = ({ className = '' }) => {
	return <Spin className={`animate-spin h-5 w-5 text-white ${className}`} />;
};

export default Spinner;
