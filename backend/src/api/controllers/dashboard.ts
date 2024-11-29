import { Dashboard } from '../../models/Dashboard';
import { History } from '../../models/History';
import { Request, Response } from 'express';

async function createDashboard(
	history: History[],
	consumption: { tokens_used: number }
) {
	const savedDashboards = [];

	for (let dashboardData of history) {
		const newDashboard = new Dashboard(dashboardData); // Crear un nuevo documento Dashboard con los datos
		const savedDashboard = await newDashboard.save(); // Guardar el documento Dashboard
		savedDashboards.push(savedDashboard._id); // Almacenar los IDs de los dashboards guardados
	}

	// 2. Crear un nuevo documento 'History' con los IDs de los dashboards guardados
	const newHistory = new History({
		tokens_used: consumption.tokens_used,
		history: savedDashboards, // Los IDs de los dashboards que acabamos de guardar,
	});

	await newHistory.save(); // Guardar el documento History

	return newHistory;
}

async function getAllDashboard(_request: Request, response: Response) {
	try {
		// Obtenemos todas las droguerías de la base de datos
		const allDashboard = await History.find().populate('history').exec();

		// Respondemos con la lista de droguerías
		response.status(200).json(allDashboard);
	} catch (error: any) {
		response.status(500).json({ message: error.message });
	}
}

export default {
	createDashboard,
	getAllDashboard,
};
