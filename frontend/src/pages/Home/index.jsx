import Bentogrid from '../../components/Bentogrid';
import Historial from '../../components/Historial';
import NewDashboardButton from '../../components/NewDashboardButton';
import Stats1 from '../../components/Stats1';
import Stats2 from '../../components/Stats2';

const Home = () => {
	return (
		<>
			<Bentogrid>
                <NewDashboardButton className='col-span-1 row-span-1'/>
                <Stats1 classname='col-span-1 row-span-4'/>
                <Historial classname='col-span-1 row-span-7'/>
                <Stats2 classname='col-span-1 row-span-4'/>
            </Bentogrid>
		</>
	);
};

export default Home;
