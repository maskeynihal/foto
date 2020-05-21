import { Router } from 'express';

import UnsplashController from '../controllers/UnsplashController';
import PexelController from '../controllers/PexelController';

const routes: Router = Router();

routes.get('/unsplash', UnsplashController.search);

routes.get('/unsplash/random', UnsplashController.random);

routes.get('/pexel', PexelController.search);
routes.get('/pexel/nextPage', PexelController.nextPage);


export default routes;
