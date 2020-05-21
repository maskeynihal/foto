import { toJson } from 'unsplash-js';
import unsplash from './auth';

class UnsplashServices {
	public search = async (keyword:string, page: number, perPage: number) => {
		const response = await unsplash.search.photos(keyword, page, perPage);
		return toJson(response);
	}

	public random = async () => {
		const response = await unsplash.photos.getRandomPhoto({});
		return toJson(response);
	}
}

const unsplashServices: UnsplashServices = new UnsplashServices();

export default unsplashServices;
