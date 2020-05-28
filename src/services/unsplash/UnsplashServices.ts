import { toJson } from 'unsplash-js';
import unsplash from './auth';

class UnsplashServices {
	public search = async (keyword:string, perPage: number = 10, page: number = 1) => {
		const response = await unsplash.search.photos(keyword, page, perPage);
		const photo = await toJson(response);
		photo.keyword = keyword;
		photo.page = page;
		return photo;
	}

	// will remove if the functionality doesnt change and is same to search
	public nextPage = async (keyword: string, perPage: number = 10, page: number) => {
		const response = await unsplash.search.photos(keyword, page, perPage);
		const photo = await toJson(response);
		photo.keyword = keyword;
		photo.page = page;
		return photo;
	}

	public random = async () => {
		const response = await unsplash.photos.getRandomPhoto({});
		return toJson(response);
	}
}

const unsplashServices: UnsplashServices = new UnsplashServices();

export default unsplashServices;
