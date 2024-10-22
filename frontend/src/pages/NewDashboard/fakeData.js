const fakeData = [
	{
		drogeria: 'NovaMed',
		productos: [
			{
				nombre: 'AMOXICILINA 500mg X8',
				laboratorio: 'SAVANT',
				precio: 10700,
			},
			{
				nombre: 'AZITROMICINA 500mg X8',
				laboratorio: 'MICROSULES',
				precio: 950,
			},
			{
				nombre: 'AMOXI + CLAV. 1gr X7',
				laboratorio: 'LEPETIT',
				precio: 2800,
			},
			{
				nombre: 'PULMONIX GRIP X20',
				laboratorio: 'BIOTENK',
				precio: 2750,
			},
			{
				nombre: 'LOPERAMIDA 2mg X10',
				laboratorio: 'ECZANE',
				precio: 249,
			},
			{
				nombre: 'BUCOANGIN CARAMELOS X9',
				laboratorio: 'OFAR',
				precio: 1880,
			},
			{
				nombre: 'AMOXI + CLAV. 500mg/125 X16',
				laboratorio: 'SAVANT',
				precio: 5900,
			},
			{
				nombre: 'CLARITROMICINA 500mg X8',
				laboratorio: 'VANNIER',
				precio: 2679,
			},
			{
				nombre: 'CEFALEXINA 500mg X8',
				laboratorio: 'SAVANT',
				precio: 1280,
			},
			{
				nombre: 'AZITRO JBE 15ml',
				laboratorio: 'LEPETIT',
				precio: 2700,
			},
			{
				nombre: 'CEFALEXINA 250mg x60ml',
				laboratorio: 'FABRA',
				precio: 1570,
			},
			{
				nombre: 'ALIVIATOS JBE x120ml',
				laboratorio: 'DENVER',
				precio: 2650,
			},
			{
				nombre: 'AMOXI 500mg x60ml',
				laboratorio: 'FABRA',
				precio: 1885,
			},
			{
				nombre: 'IBU 4% x90ml',
				laboratorio: 'GEZZI',
				precio: 997,
			},
			{
				nombre: 'IBU 2% x90ml',
				laboratorio: 'VALMAX',
				precio: 810,
			},
			{
				nombre: 'SALBUTAMOL AER',
				laboratorio: 'DENVER',
				precio: 3790,
			},
			{
				nombre: 'BUDESONIDE gotas 20ml',
				laboratorio: 'LAFEDAR',
				precio: 3879,
			},
			{
				nombre: 'SALBUTAMOL gotas 20ml',
				laboratorio: 'VALMAX',
				precio: 585,
			},
			{
				nombre: 'SALES DE REHIDRATACION x1 saborizada',
				laboratorio: 'NOVARUM',
				precio: 1190,
			},
			{
				nombre: 'POVITILOL spray incoloro',
				laboratorio: 'OFAR',
				precio: 2800,
			},
			{
				nombre: 'NEXT X10',
				categoria: 'ETICOS',
				descuento: 'PUB - 36%',
			},
			{
				nombre: 'NEXT FORTE X50 sobres',
				categoria: 'ETICOS',
				descuento: 'PUB - 38%',
			},
			{
				nombre: 'NEXT PLUS X20',
				categoria: 'ETICOS',
				descuento: 'PUB - 38%',
			},
			{
				nombre: 'Producto Duplicado',
				laboratorio: 'SAVANT',
				precio: 10,
			},
		],
		oferta_valida: {
			desde: '13/05',
			hasta: '17/05',
		},
	},
	{
		drogeria: 'Aries',
		productos: [
			{
				nombre: 'ENALAPRIL 10 mg x 10',
				laboratorio: 'SAVANT',
				precio: 277.54,
			},
			{
				nombre: 'AMOXICILINA 500mg X8',
				laboratorio: 'SAVANT',
				precio: 10000,
			},
			{
				nombre: 'Producto Duplicado',
				laboratorio: 'DUPLICADO',
				precio: 20,
			},
			{
				nombre: 'AZITROMICINA 500mg X8',
				laboratorio: 'MICROSULES',
				precio: 950,
			},
			{
				nombre: 'AMOXI + CLAV. 1gr X7',
				laboratorio: 'LEPETIT',
				precio: 2800,
			},
			{
				nombre: 'PULMONIX GRIP X20',
				laboratorio: 'BIOTENK',
				precio: 2750,
			},
			{
				nombre: 'LOPERAMIDA 2mg X10',
				laboratorio: 'ECZANE',
				precio: 249,
			},
			{
				nombre: 'CEFALEXINA 500 mg x 8',
				laboratorio: 'SAVANT',
				precio: 1360.92,
			},
			{
				nombre: 'PENICILINA ORAL 1.500.000 U x 6',
				laboratorio: 'FABRA',
				precio: 2470.64,
			},
			{
				nombre: 'LORATADINA 10 mg x 10',
				laboratorio: 'VANNIER',
				precio: 363.43,
			},
			{
				nombre: 'METFORMINA 1 GR x 10',
				laboratorio: 'BIOTENK',
				precio: 878.6,
			},
			{
				nombre: 'KETOROLAC Sublingual x 10',
				laboratorio: 'BIOTENK',
				precio: 314.38,
			},
			{
				nombre: 'ATORVASTATIN 40 mg x 10',
				laboratorio: 'VANNIER',
				precio: 1185.71,
			},
			{
				nombre: 'SALBUTAMOL 0.5% Gotas x 20 ml',
				laboratorio: 'HLB PHARMA',
				precio: 325.5,
			},
			{
				nombre: 'BROMEXINA 0.2% Jarabe x 120 ml',
				laboratorio: 'DUNCAN',
				precio: 967.16,
			},
			{
				nombre: 'NORGESTREL PLUS x 21',
				laboratorio: 'BIOTENK',
				precio: 3174.18,
			},
			{
				nombre: 'AMOX + Ac. CLAVULÁNICO 1 GR x 14',
				laboratorio: 'MICROSULES',
				precio: 5538.09,
			},
			{
				nombre: 'CARAMELOS ATB LEFMAR x 9',
				laboratorio: 'OFAR',
				precio: 1600.0,
			},
			{
				nombre: 'VIRIPOTENS MAX 20 mg x 4',
				laboratorio: 'MICROSULES',
				precio: 5897.75,
				observaciones: 'TADALAFILO',
			},
			{
				nombre: 'AZITROMICINA Suspensión x 15 ml',
				laboratorio: 'LEPETIT',
				precio: 4338.13,
			},
			{
				nombre: 'RHINAL Gotas x 30 ml',
				laboratorio: 'MICROSULES',
				precio: 1254.44,
			},
			{
				nombre: 'SALBUTAMOL Aerosol x 250 dosis',
				laboratorio: 'LEPETIT',
				precio: 4497.55,
				observaciones: 'AEROLEP',
			},
			{
				nombre: 'BUCOANGIN FORTE S/AÚCAR x 9',
				laboratorio: 'OFAR',
				precio: 500.0,
				observaciones: 'VTO:30/06/24',
			},
			{
				nombre: 'RISPERIDONA 1 mg x 10',
				laboratorio: 'VANNIER',
				precio: 150.0,
				observaciones: 'VTO:31/07/24',
			},
			{
				nombre: 'GENTAMICINA 400 mg F.A.',
				laboratorio: 'LARJAN',
				precio: 390.0,
				observaciones: 'VTO:31/08/24',
			},
		],
		oferta_valida: {
			desde: '20/05',
			hasta: '24/05',
		},
	},
	{
		drogeria: 'Árnica',
		productos: [
			{
				nombre: 'AMOXICILINA 500mg X8',
				laboratorio: 'SAVANT',
				precio: 1070,
			},
			{
				nombre: 'AMOXICILINA 500 MG x 8 COMP',
				laboratorio: 'PUNTANOS',
				precio: 935,
			},
			{
				nombre: 'BETAMETASONA x 15 ML, GTS',
				laboratorio: 'VALMAX',
				precio: 595,
			},
			{
				nombre: 'FITOT, GTS - T.M. (TODA VARIEDAD)',
				laboratorio: 'FITOT',
				precio: 3000,
			},
			{
				nombre: 'IBUPROFENO 4% x 90 ML, ESTUCH.',
				laboratorio: 'KLONAL',
				precio: 1100,
			},
			{
				nombre: 'IBUPROFENO 4% JBE, HOSPITAL',
				laboratorio: 'SAVANT',
				precio: 975,
			},
			{
				nombre: 'Producto Duplicado',
				laboratorio: 'DUPLICADO',
				precio: 30,
			},
		],
		oferta_valida: '20/05',
	},
];

export default fakeData;
