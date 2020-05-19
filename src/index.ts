// eslint-disable-next-line no-unused-vars
import express, { Request, Response } from 'express';
import morgan from 'morgan';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const port = process.env.PORT || 9000;

app.use(morgan('tiny'));

app.listen(port, () => console.log(`Server Started on ${port}`));

app.get('/', (req: Request, res: Response) => {
	res.status(200).json({
		data: null,
		message: 'Hello World',
	});
});
