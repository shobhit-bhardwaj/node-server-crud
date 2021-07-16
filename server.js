import express from 'express';
import cors from 'cors';
import compress from 'compression';
import path from 'path';

import config from './config/app_config.js';
import route from './routes/routes.js';
import logger from './utils/logger.js';

const __dirname = path.resolve();

var app = express();
app.use(compress());
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

route(app);

app.listen(config.port, (error) => {
    if(error)
        logger.error('Error in Server Startup - ', error);
    else
        logger.info('Server Started on port - ', config.port);
});
