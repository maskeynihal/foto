import client, { axiosClient } from './auth';

class PexelServices {
	public search = async (query: string, per_page: number = 10) => {
		console.log(query);
		const photos = await client.photos.search({ query, per_page });
		console.log(photos);
		return photos;
	}

	public nextPage = async (nextPage: string) => {
		const photos = await axiosClient.get(nextPage);
		console.log(photos.data);
		return photos.data;
	}
}

const pexelServices: PexelServices = new PexelServices();

export default pexelServices;
