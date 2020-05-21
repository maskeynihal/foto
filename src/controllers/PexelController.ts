import { Response, Request } from 'express';
import pexelServices from '../services/pexel/PexelServices';

class PexelController {
	public search = async (req: Request, res: Response) => {
		const photos = await pexelServices.search('Dog', 1);
		res.status(200).json({
			data: photos,
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
}

const pexelController: PexelController = new PexelController();

export default pexelController;
