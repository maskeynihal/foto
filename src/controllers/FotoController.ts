import { Response, Request } from 'express';
import { randomNumber } from '../helpers/RandomNumberGenerator';
import pexelServices from '../services/pexel/PexelServices';
import unsplashServices from '../services/unsplash/UnsplashServices';
import UnsplashCollection from '../resources/UnsplashCollection';
import FotoServices from '../services/foto/FotoServices';
import FotoCollection from '../resources/FotoCollection';

class FotoController {
	public search = async (req: Request, res: Response) => {
		const photos = await FotoServices.search('Dog', 10, 1);
		res.status(200).json({
			data: FotoCollection.collection(photos),
			message: 'Search',
		});
	}

	public random = async (req: Request, res: Response) => {
		let photo;
		if (randomNumber() % 2) {
			photo = await pexelServices.random();
		} else {
			photo = await unsplashServices.random();
		}
		UnsplashCollection.collection(photo);
		res.status(200).json({
			data: photo,
			message: 'random photo',
		});
	}
}

const fotoController: FotoController = new FotoController();

export default fotoController;
