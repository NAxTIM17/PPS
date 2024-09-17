import { Link } from 'react-router-dom';

import Bentogrid from '../../components/Bentogrid';
import CardBento from '../../components/CardBento';


const NewDashboard = () => {
	return (
		<Bentogrid className={"grid-cols-5 grid-rows-1"}>
			<CardBento className={"col-span-3 row-span-1 bg-color-fill-secondary border border-color-border border-dashed"}>

			</CardBento>
			<CardBento className={"col-span-2 row-span-1 bg-color-bg"}>

			</CardBento>
		</Bentogrid>
	);
};

export default NewDashboard;
