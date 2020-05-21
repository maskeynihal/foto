import { createClient } from 'pexels';
import axios from 'axios';
import config from '../../config/config';


const client = createClient(`${config.pexelApiKey}`);

export const axiosClient = axios.create({
	headers: { Authorization: config.pexelApiKey },
});

export default client;
