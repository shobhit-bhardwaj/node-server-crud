var config = {
    environment : 'dev',

    dev : {
        port: 3000,
        mongoConfig: {
            urlString: 'mongodb://192.168.29.148:27017/node_app_db'
        },
        logConfig : {
			log_file_path : './log/node_app_log.log',
			file_level : 'info',
			file_max_size : 5242880,	//5MB
			file_max_files : 5,

			console_level : 'debug'
		}
    },

    prod : {
        port: 5000,
        mongoConfig: {
            urlString: 'mongodb://localhost:27017/node_app_db'
        },
        logConfig : {
			log_file_path : './log/node_app_log.log',
			file_level : 'info',
			file_max_size : 5242880,	//5MB
			file_max_files : 5,

			console_level : 'debug'
		}
    }
};

var configuration = {};

if (config.environment === 'dev')
    configuration = config['dev'];
else if (config.environment === 'prod')
    configuration = config['prod'];

export default configuration;
