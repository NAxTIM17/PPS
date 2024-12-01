import { Button, Steps, Input, InputGroup } from 'rsuite';
import { useEffect, useState } from 'react';
import { IconFileTypeXls, IconSearch } from '@tabler/icons-react';
import CopyCheck from '../../components/CopyComponent';

import { utils, writeFile } from 'xlsx';

const NewDashboard = () => {
	const [currentStep, setCurrentStep] = useState(1);
	const [arraySelected, setArraySelected] = useState([]);
	const [arrayBestPrice, setArrayBestPrice] = useState([]);
	const [search, setSearch] = useState();
	const [selectDrugstore, setSelectDrugstore] = useState();
	const [productData, setProductData] = useState();
	const STEPS = 2;

	useEffect(() => {
		getStoredData();
		handleDrugstore();
	}, [arrayBestPrice]);

	const updateArrayBestPriceItemQuantityById = (id, updater) => {
		setArrayBestPrice((prev) =>
			prev.map((prevItem) => ({
				...prevItem,
				cantidad:
					prevItem.id === id
						? updater(prevItem.cantidad)
						: prevItem.cantidad,
			}))
		);
	};

	const columns = [
		{
			key: 'nombre',
			label: 'Producto',
			flexGrow: 1.5,
		},
		{
			key: 'laboratorio',
			label: 'Laboratorio',
			flexGrow: 1.25,
		},
		{
			key: 'droguerias',
			label: 'Drogerias',
			flexGrow: 1.25,
		},
	];
	const columnsBestPrice = [
		{
			key: 'nombre',
			label: 'Producto',
			flexGrow: 1.5,
		},
		{
			key: 'laboratorio',
			label: 'Laboratorio',
			flexGrow: 1.25,
		},
		{
			key: 'droguerias',
			label: 'Drogerias',
			flexGrow: 0.5,
		},
		{
			key: 'precio',
			label: 'Mejor Precio',
			flexGrow: 0.25,
		},
		{
			key: 'cantidad',
			label: 'Cantidad',
			flexGrow: 0.5,
		},
	];
	const handleData = (data) => {
		const productosUnicos = {};
		data?.forEach((items) => {
			items.productos.forEach((item) => {
				const nombreProducto = item.nombre;
				if (productosUnicos[nombreProducto]) {
					productosUnicos[nombreProducto] = {
						...productosUnicos[nombreProducto],
						droguerias: [
							...productosUnicos[nombreProducto].droguerias,
							items.drogueria,
						],
						precios: [
							...productosUnicos[nombreProducto].precios,
							item.precio,
						],
					};
				} else {
					productosUnicos[nombreProducto] = {
						nombre: item.nombre,
						laboratorio: item.laboratorio,
						precios: [item.precio],
						droguerias: [items.drogueria],
					};
				}
			});
		});

		// Convertir el objeto de productos únicos en un array
		const productosFinales = Object.values(productosUnicos);

		return productosFinales;
	};
	const handleDrugstore = () => {
		let drugstore = [];
		arrayBestPrice.forEach((element) => {
			if (!drugstore.includes(...element.droguerias)) {
				drugstore = [...drugstore, ...element.droguerias];
			}
		});
		setSelectDrugstore(drugstore);
	};
	const comparePrices = () => {
		let array = [];
		arraySelected.forEach((item, index) => {
			if (item.droguerias.length >= 1 && item.precios.length >= 1) {
				const bestPrice = Math.min(...item.precios);
				const indexSlice = item.precios.indexOf(bestPrice);
				array = [
					...array,
					{
						id: index,
						nombre: item.nombre,
						laboratorio: item.laboratorio,
						precios: bestPrice,
						droguerias: [item.droguerias[indexSlice]],
						cantidad: 0,
					},
				];
			} else {
				array = [...array, item];
			}
		});
		setArrayBestPrice(array);
		handleDrugstore();
	};
	const handleSearch = (e) => {
		setSearch(e);
	};
	const getStoredData = () => {
		const storedData = localStorage.getItem('pharmacyData');

		if (storedData) {
			try {
				const parsedData = JSON.parse(storedData);
				setProductData(parsedData);
			} catch (error) {
				console.error('Error parsing JSON:', error);
			}
		} else {
			console.log('No data found in localStorage');
		}
	};

	const exportSelectedAsXlsx = () => {
		const workbook = utils.book_new();
		const worksheet = utils.json_to_sheet(
			arraySelected.map((i) => ({
				product: i.nombre,
				laboratorio: i.laboratorio,
				precio: i.precios[0] ?? 'Sin precio',
				drogueria: i.droguerias[0] ?? '',
			}))
		);
		utils.book_append_sheet(workbook, worksheet);
		const today = new Date().toLocaleDateString('es-ES');
		writeFile(workbook, `productos_seleccionados_${today}.xlsx`);
	};

	return (
		<div className="w-full h-full flex flex-col items-center relative gap-spacing">
			<div className="w-1/2">
				<Steps current={currentStep - 1}>
					<Steps.Item />
					<Steps.Item />
				</Steps>
			</div>
			{currentStep === 1 ? (
				<>
					<div className="w-full flex justify-center items-center gap-2">
						<InputGroup className="w-1/2">
							<Input
								value={search}
								onChange={(e) => handleSearch(e)}
							/>
							<InputGroup.Addon>
								<IconSearch />
							</InputGroup.Addon>
						</InputGroup>
						<button
							className="bg-green-200 pr-2 pl-1.5 py-1 rounded-brand flex items-center gap-0.5 disabled:opacity-50"
							disabled={!arraySelected.length}
							onClick={exportSelectedAsXlsx}
						>
							<IconFileTypeXls />
							<span className="font-bold">Exportar</span>
						</button>
					</div>
					<div className="w-full grow flex overflow-auto">
						<div className="w-full">
							<table className="w-full overflow-auto bg-white">
								<thead className="w-full">
									<tr className="items-end">
										{columns.map((item, i) => (
											<th className="text-left" key={i}>
												{item.label}
											</th>
										))}
									</tr>
								</thead>
								<tbody>
									{handleData(productData)
										.filter((item) => {
											if (search === undefined) {
												return item;
											} else {
												return item.nombre
													.toLocaleLowerCase()
													.includes(
														search?.toLocaleLowerCase()
													);
											}
										})
										.map((items, i) => (
											<tr
												key={i}
												onClick={() => {
													if (
														arraySelected.find(
															(item) =>
																item.nombre ===
																items.nombre
														)
													) {
														setArraySelected(
															arraySelected.filter(
																(product) =>
																	product.nombre !==
																	items.nombre
															)
														);
													} else {
														setArraySelected([
															...arraySelected,
															items,
														]);
													}
												}}
												className={`${arraySelected.find((item) => item.nombre === items.nombre) && 'bg-zinc-200'} gap-spacing border items-center transition-all cursor-pointer h-auto`}
											>
												<td className="pl-spacing">
													{items.nombre}
												</td>
												<td>{items.laboratorio}</td>
												<td className="flex w-auto gap-spacing">
													{items.droguerias.map(
														(drug, j) => (
															<div
																className="bg-color-fill-low-contrast p-1 rounded-md text-color-text-primary mt-spacing mb-spacing"
																key={j}
															>
																{drug}
															</div>
														)
													)}
												</td>
											</tr>
										))}
								</tbody>
							</table>
						</div>
					</div>
				</>
			) : (
				<div className="h-full w-full flex flex-col overflow-auto gap-spacing">
					<h1 className="text-2xl font-bold text-center">
						Los mejores precios
					</h1>
					<div className="w-full flex items-center gap-spacing">
						<table className="table-auto w-full overflow-auto bg-white">
							<thead className="w-full">
								<tr className="items-end">
									{columnsBestPrice.map((item, i) => (
										<th className="text-left" key={i}>
											{item.label}
										</th>
									))}
								</tr>
							</thead>
							<tbody className="!p-10">
								{arrayBestPrice.map((items, i) => (
									<tr
										key={i}
										className={`gap-spacing border items-center transition-all cursor-pointer`}
									>
										<td className="pl-spacing">
											{items.nombre}
										</td>
										<td>{items.laboratorio}</td>
										<td className="flex w-auto gap-spacing">
											{items.droguerias.map((drug, j) => (
												<div
													className="bg-color-fill-low-contrast p-1 rounded-md text-color-text-primary mt-spacing mb-spacing"
													key={j}
												>
													{drug}
												</div>
											))}
										</td>
										<td>${items.precios}</td>
										<td className="flex w-max">
											<button
												className="bg-zinc-100 w-5 rounded-md flex justify-center font-semibold cursor-pointer hover:bg-zinc-200 transition-all"
												onClick={() => {
													updateArrayBestPriceItemQuantityById(
														items.id,
														(prev) =>
															prev === 0
																? 0
																: prev - 1
													);
												}}
											>
												-
											</button>
											<input
												className="m-0 w-10 text-center font-bold"
												type="digit"
												min={0}
												value={items.cantidad}
												onChange={(event) => {
													const newQuantity = Number(
														event.target.value
													);
													if (isNaN(newQuantity))
														return;
													updateArrayBestPriceItemQuantityById(
														items.id,
														() => newQuantity
													);
												}}
											/>
											<button
												className="bg-zinc-100 w-5 rounded-md flex justify-center font-semibold cursor-pointer hover:bg-zinc-200 transition-al"
												onClick={() => {
													updateArrayBestPriceItemQuantityById(
														items.id,
														(prev) => prev + 1
													);
												}}
											>
												+
											</button>
										</td>
									</tr>
								))}
							</tbody>
						</table>
						<div className="w-32 bg-color-bg rounded-outer-border flex flex-col items-center gap-spacing p-spacing">
							{selectDrugstore.map((item, i) => (
								<CopyCheck
									key={i}
									name={item}
									arrayBestPrice={arrayBestPrice}
								/>
							))}
						</div>
					</div>
				</div>
			)}
			<div className="flex justify-between w-full">
				<Button
					onClick={() => {
						if (currentStep > 1) setCurrentStep(currentStep - 1);
						setArrayBestPrice([]);
					}}
					appearance="default"
					className="rounded-inner-border w-32"
				>
					Atras
				</Button>
				{currentStep < STEPS && (
					<Button
						onClick={() => {
							if (currentStep < STEPS)
								setCurrentStep(currentStep + 1);
							comparePrices();
						}}
						appearance="primary"
						className="w-32 rounded-inner-border"
					>
						Analizar
					</Button>
				)}
			</div>
		</div>
	);
};

export default NewDashboard;
