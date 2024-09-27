import { Table, Button, Steps, Input, InputGroup } from 'rsuite';
import { useState } from 'react';
import { IconSearch } from '@tabler/icons-react';

const NewDashboard = () => {
	const { Column, HeaderCell, Cell } = Table;
	const [currentStep, setCurrentStep] = useState(1);
	const STEPS = 2;
	const columns = [
		{
			key: 'pro',
			label: 'Producto',
			flexGrow: 1.5,
		},
		{
			key: 'lab',
			label: 'Laboratorio',
			flexGrow: 1.25,
		},
		{
			key: 'drg',
			label: 'Drogerias',
			flexGrow: 1.25,
		},
		{
			key: 'prc',
			label: 'Precio',
			flexGrow: 0.5,
		},
	];

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
					<div className="w-full flex justify-center">
						<InputGroup className="w-1/2">
							<Input />
							<InputGroup.Addon>
								<IconSearch />
							</InputGroup.Addon>
						</InputGroup>
					</div>
					<div className="w-full grow flex justify-center items-center">
						<Table className="!h-full !w-[80%]" data={[]}>
							{columns.map((column) => {
								const { key, label, ...rest } = column;
								return (
									<Column {...rest} key={key}>
										<HeaderCell>{label}</HeaderCell>
										<Cell dataKey={key} />
									</Column>
								);
							})}
						</Table>
					</div>
				</>
			) : (
				<div className="h-full w-full justify-center items-center flex flex-col gap-spacing">
					<h1 className="text-2xl font-bold">Los mejores precios</h1>
					<Table className="!h-full !w-[80%]" data={[]}>
						{columns.map((column) => {
							const { key, label, ...rest } = column;
							return (
								<Column {...rest} key={key}>
									<HeaderCell>{label}</HeaderCell>
									<Cell dataKey={key} />
								</Column>
							);
						})}
					</Table>
				</div>
			)}
			<div className="flex justify-between w-full">
				<Button
					onClick={() => {
						if (currentStep > 1) setCurrentStep(currentStep - 1);
					}}
					appearance="default"
					className="rounded-inner-border w-32"
				>
					Atras
				</Button>
				<Button
					onClick={() => {
						if (currentStep < STEPS)
							setCurrentStep(currentStep + 1);
					}}
					appearance="primary"
					className="w-32 rounded-inner-border"
				>
					Analizar
				</Button>
			</div>
		</div>
	);
};

export default NewDashboard;
