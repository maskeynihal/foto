import client, { axiosClient } from './auth';

class PexelServices {
	public search = async (query: string, per_page: number = 10) => {
		console.log(query);
		const photos: any = await client.photos.search({ query, per_page });
		photos.keyword = query;
		// photos.page = 1;
		console.log(photos);
		return photos;
	}

	public nextPage = async (nextPage: string) => {
		const photos = await axiosClient.get(nextPage);
		console.log(photos.data);
		return photos.data;
	}

	public random = async () => {
		const photo = await client.photos.curated({ per_page: 1 });
		console.log(photo);
		return photo;
	}
}

const pexelServices: PexelServices = new PexelServices();

export default pexelServices;
