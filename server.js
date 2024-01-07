import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import router from './routes/index.js';

const app = express();
const PORT = 8000;

app.use(cors());
app.use(bodyParser.json());

app.use('/api', router);

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});