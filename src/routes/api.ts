import { Router } from 'express';

import UnsplashController from '../controllers/UnsplashController';
import PexelController from '../controllers/PexelController';
import FotoController from '../controllers/FotoController';

const routes: Router = Router();

routes.get('/foto', FotoController.search);
routes.get('/random', FotoController.random);
// unsplash routes
routes.get('/unsplash', UnsplashController.search);
routes.get('/unsplash/random', UnsplashController.random);

// pexel routes
routes.get('/pexel', PexelController.search);
routes.get('/pexel/nextPage', PexelController.nextPage);
routes.get('/pexel/random', PexelController.random);


export default routes;
