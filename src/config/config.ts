import dotenv from 'dotenv';

dotenv.config();

const config = {
	unsplashAccessKey: process.env.UNSPLASH_ACCESS_KEY,
	unsplashSecretKey: process.env.UNSPLASH_SECRECT_KEY,
	pexelApiKey: process.env.PEXEL_API_KEY,
};

export default config;
