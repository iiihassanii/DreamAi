const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const dreamRoute = require('./router/dreamRoutes.js');

dotenv.config();

const HOST = process.env.HOST || 'localhost';
const PORT = process.env.PORT || 5000;
const app = express();
app.use(cors());
app.use(express.json());


app.use('/', dreamRoute);


app.listen(PORT, () => console.log(`Server Started on http://${HOST}:${PORT}`));
