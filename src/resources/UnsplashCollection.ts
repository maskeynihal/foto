export default class UnsplashCollection {
	static collection(data: any) {
		return {
			photos: data.results.map((photo: any) => ({
				id: photo.id,
				description: photo.description,
				thumb: photo.urls.thumb,
				image_raw: photo.urls.raw,
				image: photo.urls.regular,
				image_link: photo.links.html,
				by: photo.user.username,
				by_link: photo.user.links.html,
				from: 'unsplash',
			})),
			next_page: data.page + 1,
			page_number: data.page,
			keyword: data.keyword,
			providerName: 'unsplash',
		};
	}
}
