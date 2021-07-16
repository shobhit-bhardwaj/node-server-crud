import Logger from 'bunyan';
import path from 'path';
import config from '../config/app_config.js';

const __dirname = path.resolve();

const log = new Logger({
	name : 'node-app-logger',
	streams : [ {
		level : 'trace',
		stream : process.stdout
	}, {
		level : 'trace',
		path : path.join(__dirname, config.logConfig.log_file_path)
	} ]
});

export default log;
