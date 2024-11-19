import { Dashboard } from '../../models/Dashboard';
import { History } from '../../models/History';
import { Request, Response } from 'express';

async function postDashboard(request: Request, response: Response) {
	try {
		const body = request.body;
		const { history } = body; // 'history' es un array de objetos completos de 'Dashboard'

		// 1. Guardar los objetos 'Dashboard' y obtener sus IDs
		const savedDashboards = [];

		for (let dashboardData of history) {
			const newDashboard = new Dashboard(dashboardData); // Crear un nuevo documento Dashboard con los datos
			const savedDashboard = await newDashboard.save(); // Guardar el documento Dashboard
			savedDashboards.push(savedDashboard._id); // Almacenar los IDs de los dashboards guardados
		}

		// 2. Crear un nuevo documento 'History' con los IDs de los dashboards guardados
		const newHistory = new History({
			history: savedDashboards, // Los IDs de los dashboards que acabamos de guardar
		});

		await newHistory.save(); // Guardar el documento History

		// 3. Enviar la respuesta con el documento History recién creado
		response.status(201).send(newHistory);
	} catch (error: any) {
		response.status(400).json({ message: error.message });
	}
}
async function getAllDashboard(request: Request, response: Response) {
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
	postDashboard,
	getAllDashboard,
};
