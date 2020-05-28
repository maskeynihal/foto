export default class FotoCollection {
	static collection(data: any) {
		return {
			photos: data.photos.map((photo: any) => ({
				id: photo.id,
				description: photo.description,
				thumb: photo.thumb,
				image_raw: photo.raw,
				image: photo.regular,
				image_link: photo.html,
				by: photo.by,
				by_link: photo.by_link,
				from: photo.from,
			})),
			next_page: data.next_page,
			page_number: data.page_number,
			keyword: [Object.values(data.keyword)[0]],
		};
	}
}
