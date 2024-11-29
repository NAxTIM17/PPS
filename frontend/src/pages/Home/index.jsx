import { useEffect, useState } from 'react';
import { Modal, Button, Loader } from 'rsuite';
import { IconList, IconFileTypePng, IconX } from '@tabler/icons-react';
import { useNavigate } from 'react-router-dom';
import axiosInstance from '../../services/axios';

import Bentogrid from '../../components/Bentogrid';
import History from '../../components/Historial';
import { ROUTES } from '../../router/config';
import CardBento from '../../components/CardBento';
import New from '../../components/New';
import PieChart from '../../components/pieChart';
import BarChart from '../../components/barChart';
import DropZone from '../../components/DropZone';

const Home = () => {
	const [openModal, setOpenModal] = useState(false);
	const [listFiles, setListFiles] = useState([]);
	const [text, setText] = useState();
	const [isSending, setIsSending] = useState(false);
	const [arrayDates, setArrayDates] = useState([]);

	useEffect(() => {
		getHistory();
	}, []);

	const navigate = useNavigate();
	const handleOpenModal = () => {
		setOpenModal(!openModal);
	};
	const handleIcons = (type) => {
		switch (type) {
			case 'jpeg':
			case 'png':
				return <IconFileTypePng />;
			default:
				break;
		}
	};
	const handleText = () => {
		setListFiles([
			...listFiles,
			{
				type: 'text',
				name: 'Texto',
				text: text,
			},
		]);
	};
	const sendInfo = async () => {
		try {
			setIsSending(true);
			const res = await axiosInstance.post('/openai', listFiles);
			localStorage.setItem(`pharmacyData`, JSON.stringify(res.data));
			navigate(ROUTES.AUTHED_ROUTES.NEW_DASHBOARD);
		} catch (error) {
			console.log(error);
		}
	};
	const getHistory = async () => {
		try {
			const { data } = await axiosInstance.get('/history/get');
			setArrayDates(data);
		} catch (error) {
			console.log(error);
		}
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
					<History arrayDates={arrayDates} />
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
					<Bentogrid className={'grid-cols-2 grid-rows-8 w-full'}>
						<CardBento className={'col-span-2 row-span-4'}>
							<DropZone
								listFiles={listFiles}
								setFileList={setListFiles}
							/>
						</CardBento>
						<CardBento
							className={
								'col-span-1 row-span-4 bg-color-bg-surface p-spacing '
							}
						>
							<textarea
								onChange={(e) => setText(e.target.value)}
								className="w-full h-full rounded-md p-spacing resize-none"
								placeholder="Ingrese aqui su texto..."
								disabled={isSending}
							></textarea>
							<Button
								onClick={handleText}
								appearance="primary"
								className="w-full !rounded-md"
								disabled={isSending}
							>
								Agregar
							</Button>
						</CardBento>
						<CardBento
							className={
								'col-span-1 row-span-4 bg-color-bg-surface text-zinc-300 p-spacing'
							}
						>
							{listFiles.length <= 0 ? (
								<IconList size={50} />
							) : (
								<div className="w-full h-full overflow-auto overflow-x-hidden flex flex-col gap-spacing">
									{listFiles.map((item, index) => (
										<div
											key={index}
											className="w-full h-10 bg-color-bg rounded-md flex items-center justify-between p-spacing"
										>
											<div className="flex gap-spacing">
												{handleIcons(item.type)}
												<p>{item.name}</p>
											</div>
											<IconX
												onClick={() =>
													setListFiles(
														listFiles.filter(
															(item) =>
																item !==
																listFiles[index]
														)
													)
												}
												className="hover:text-red-500 transition-all cursor-pointer"
											/>
										</div>
									))}
								</div>
							)}
						</CardBento>
					</Bentogrid>
					{isSending && (
						<Loader size="md" className="absolute" backdrop />
					)}
				</Modal.Body>
				<Modal.Footer>
					<Button
						onClick={handleOpenModal}
						appearance="subtle"
						disabled={isSending}
					>
						Cancelar
					</Button>
					<Button
						onClick={sendInfo}
						appearance="primary"
						disabled={isSending}
					>
						Continuar
					</Button>
				</Modal.Footer>
			</Modal>
		</>
	);
};

export default Home;
