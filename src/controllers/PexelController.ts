import { Response, Request, response } from 'express';
import pexelServices from '../services/pexel/PexelServices';
import PexelCollection from '../resources/PexelCollection';

class PexelController {
	public search = async (req: Request, res: Response) => {
		const photos = await pexelServices.search('Dog', 1);
		res.status(200).json({
			data: PexelCollection.collection(photos),
			message: 'Search Result of Dog',
		});
	}

	public nextPage = async (req: Request, res: Response) => {
		const url = 'https://api.pexels.com/v1/search/?page=2&per_page=1&query=dog';
		const photos = await pexelServices.nextPage(url);
		res.status(200).json({
			data: photos,
			message: 'next Page',
		});
	}

	public random = async (req: Request, res: Response) => {
		const photo = await pexelServices.random();
		res.status(200).json({
			data: photo,
			message: 'Real-time photos curated by the Pexels team.',
		});
	}
}

const pexelController: PexelController = new PexelController();

export default pexelController;
