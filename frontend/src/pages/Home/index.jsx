import { useState } from 'react';
import { Modal, Button, Uploader } from 'rsuite';
import { IconUpload, IconPhotoUp } from '@tabler/icons-react';

import Bentogrid from '../../components/Bentogrid';
import History from '../../components/Historial';
import CardBento from '../../components/CardBento';
import ReactECharts from 'echarts-for-react';
import New from '../../components/New';
import PieChart from '../../components/pieChart';
import BarChart from '../../components/barChart';

const Home = () => {
	const [openModal, setOpenModal] = useState(false);

	const handleOpenModal = () => {
		setOpenModal(!openModal);
	};

	return (
		<>
			<Bentogrid className={'grid-cols-2 grid-rows-8'}>
				<CardBento className={'col-span-1 row-span-1 '}>
					<New handleOpen={handleOpenModal} />
				</CardBento>
				<CardBento
					title={'Historial'}
					className={'col-span-1 row-span-7 bg-color-bg'}
				>
					<History />
				</CardBento>
				<CardBento
					title={'Gasto por drogueria'}
					className={'col-span-1 row-span-5 bg-color-bg'}
				>
					<PieChart
						data={[
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
						]}
					/>
				</CardBento>
				<CardBento
					className={'col-span-1 row-span-3 bg-color-bg'}
					title={'Productos por drogueria'}
				>
					<BarChart
						yAxisData={[100, 20, 300, 500, 100, 600, 100]}
						xAxisData={[
							'mon',
							'tus',
							'wed',
							'tur',
							'fri',
							'sat',
							'sun',
						]}
					/>
				</CardBento>
			</Bentogrid>
			<Modal
				open={openModal}
				onClose={handleOpenModal}
				size={'lg'}
				backdrop={'static'}
			>
				<Modal.Header>
					<Modal.Title className="text-3xl">
						Subir Archivos
					</Modal.Title>
				</Modal.Header>
				<Modal.Body className="flex gap-spacing items-center justify-center h-[600px]">
					<Uploader
						className="w-full h-full flex !gap-spacing"
						listType="picture-text"
						action={() => {}}
						draggable
						shouldQueueUpdate={() => {
							return true;
						}}
						shouldUpload={() => {
							return true;
						}}
					>
						<div
							className="w-full h-full"
							style={{
								height: '100%',
								width: 500,
								display: 'flex',
								alignItems: 'center',
								justifyContent: 'center',
								backgroundColor: 'var(--rs-primary-200)',
								borderRadius: 'var(--inner-border)',
							}}
						>
							<IconPhotoUp
								size={150}
								className="text-color-fill-low-contrast w-full"
							/>
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
