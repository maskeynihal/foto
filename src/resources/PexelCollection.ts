export default class PexelCollection {
	static collection(data: any) {
		return {
			photos: data.photos.map((photo: any) => ({
				id: photo.id,
				description: null,
				thumb: photo.src.medium,
				image_raw: photo.src.original,
				image: photo.src.large,
				image_link: photo.url,
				by: photo.photographer,
				by_link: photo.photographer_url,
				from: 'pexel',
			})),
			next_page: data.next_page || null,
			page_number: data.page || 1,
			keyword: data.keyword || null,
			providerName: 'pexel',
		};
	}
}
