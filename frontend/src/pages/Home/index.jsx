import { useState } from 'react';
import { Modal, Button, Uploader } from 'rsuite';
import { IconUpload, IconPhotoUp } from '@tabler/icons-react';

import Bentogrid from '../../components/Bentogrid';
import History from '../../components/Historial'
import CardBento from '../../components/CardBento';
import ReactECharts from 'echarts-for-react';
import New from '../../components/New';
import PieChart from '../../components/pieChart';
import BarChart from '../../components/barChart';


const Home = () => {

	const [openModal, setOpenModal] = useState(false);

	const handleOpenModal = () => {
		setOpenModal(!openModal)
	}

	console.log(openModal);
	

	return (
		<>
			<Bentogrid className={'grid-cols-2 grid-rows-8'}>
				<CardBento
					className={
						'col-span-1 row-span-1 '
					}
				>
				<New handleOpen={handleOpenModal}/>
				</CardBento>
				<CardBento
					title={"Historial"}
					className={
						'col-span-1 row-span-7 bg-color-bg'
					}
				>
					<History />
				</CardBento> 
				<CardBento
					title={'Gasto por drogueria'}
					className={
						'col-span-1 row-span-5 bg-color-bg'
					}
				>
					<PieChart data={[
						{
							name: 'Margarita',
							value: 300,
						},
						{
							name: 'Garnica',
							value: 100,
						},
						{
							name: 'Savencia',
							value: 400,
						},
						{
							name: 'Soledad',
							value: 500,
						},
						{
							name: 'Monte',
							value: 200,
						},
					]}/>
				</CardBento>
				<CardBento
					className={
						'col-span-1 row-span-3 bg-color-bg'
					}
					title={"Productos por drogueria"}
				>
					<BarChart yAxisData={[100, 20, 300, 500, 100, 600, 100]} xAxisData={["mon", "tus", "wed", "tur", "fri", "sat", "sun"]}/>
				</CardBento>
			</Bentogrid>
			<Modal open={openModal} onClose={handleOpenModal} size={"lg"} backdrop={"static"}>
				<Modal.Header>
				<Modal.Title>Subir Archivos</Modal.Title>
				</Modal.Header>
				<Modal.Body className='flex gap-spacing items-center justify-center h-[600px]'>
				<Uploader
						timeout={2000}
						className='w-full h-full flex gap-spacing'
						listType="picture-text"
						action={""}
						onChange={(e) => console.log(e)}
						draggable
						shouldQueueUpdate={() => {
							//fijarse si es pdf o img.
							return true;
						}}
						shouldUpload={() => {
							//comprobar la integridad de los archivos.
						return true;
						}}
					>
						<div className="w-full h-full">
							<IconPhotoUp size={150} className='text-color-fill-low-contrast w-full'/>
							<h1 className='text-2xl font-bold text-color-fill-low-contrast'>Click para cargar</h1>
							<p className='text-lg font-bold text-color-fill-low-contrast'>o</p>
							<h1 className='text-lg font-bold text-color-fill-low-contrast'>Arrastre su archivo aqui</h1>
						</div>
					</Uploader>
				</Modal.Body>
				<Modal.Footer>
				<Button onClick={handleOpenModal} appearance="subtle">
					Cancel
				</Button>
				<Button onClick={handleOpenModal} appearance="primary">
					Continuar
				</Button>
				</Modal.Footer>
			</Modal>
		</>
	);
};

export default Home;
