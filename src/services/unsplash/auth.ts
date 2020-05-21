import Unsplash from 'unsplash-js';
import config from '../../config/config';

const unsplash = new Unsplash({ accessKey: `${config.unsplashAccessKey}` });

export default unsplash;
