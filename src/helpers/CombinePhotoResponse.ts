
export default function combine(photos: any): any {
	const combinedPhotos: any = {
		photos: [],
		next_page: {},
		page_number: {},
		keyword: {},
	};
	Object.values(photos).forEach((provider: any) => {
		combinedPhotos.photos.push(provider.photos);
		combinedPhotos.next_page[provider.providerName.toLowerCase()] = provider.next_page;
		combinedPhotos.page_number[provider.providerName.toLowerCase()] = provider.page_number;
		combinedPhotos.keyword[provider.providerName.toLowerCase()] = provider.keyword;
	});
	combinedPhotos.photos = combinedPhotos.photos.flat();
	return combinedPhotos;
}
