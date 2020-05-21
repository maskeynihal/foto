import { Request, Response } from 'express';
import Unsplash from 'unsplash-js';
import UnsplashServices from '../services/unsplash/UnsplashServices';

class UnsplashController {
	public search = async (req: Request, res: Response) => {
		const searched = await UnsplashServices.search('dog', 10, 10);
		console.log(searched);
		res.status(200).json({
			data: searched,
			message: 'here is mesage',
		});
	}

	public random = async (req: Request, res: Response) => {
		const response = await UnsplashServices.random();
		res.status(200).json({
			data: response,
			message: 'Random Photo',
		});
	}
}

const unsplashController: UnsplashController = new UnsplashController();

export default unsplashController;
