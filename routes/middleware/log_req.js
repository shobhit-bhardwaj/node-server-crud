import logger from '../../utils/logger.js';

export default function logRequest(request, response, next) {
	logger.info(request.url, " - Request Data - ", request.body);
	next();
}
