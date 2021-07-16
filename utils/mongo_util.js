import mongoose from 'mongoose';
import logger from './logger.js';
import config from '../config/app_config.js';

mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
var connection = mongoose.connect(config.mongoConfig.urlString);

var db = mongoose.connection;
db.on("error", logger.error);
