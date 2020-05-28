import pexelServices from '../pexel/PexelServices';
import unsplashServices from '../unsplash/UnsplashServices';
import PexelCollection from '../../resources/PexelCollection';
import UnsplashCollection from '../../resources/UnsplashCollection';
import combine from '../../helpers/CombinePhotoResponse';
import FotoCollection from '../../resources/FotoCollection';

class FotoServices {
	public search = async (keyword: string, per_page: number, page: number) => {
		const photoResponse: any = {
			pexel: PexelCollection.collection(await pexelServices.search(keyword, per_page)),
			unsplash: UnsplashCollection.collection(await unsplashServices.search(keyword, per_page, page)),
		};
		return combine(photoResponse);
	}
}

const fotoServices: FotoServices = new FotoServices();
export default fotoServices;
