import crypto from 'crypto';
import User from './user_model.js';
import logger from '../../utils/logger.js';

export function addUser(requestObject) {
    return new Promise((resolve, reject) => {
        var newUser = new User({
			userName : requestObject.userName,
			password : crypto.createHash('sha256').update(requestObject.password).digest("hex"),
			mobileNumber : requestObject.mobileNumber,
			emailId : requestObject.emailId,
			status : requestObject.status
		});

		newUser.save((error, data) => {
			if (error) {
				logger.error('addUser Error - ', error);
				reject(error);
			} else {
				logger.info('addUser Response - ', data);
				resolve(data);
			}
		});
    });
}

export function findAllUsers(requestObject) {
    return new Promise((resolve, reject) => {
		var query = User.find({});
		if(requestObject.status)
			query.where("status").equals(requestObject.status);

		var responseObject = new Object();
		query.exec((error, data) => {
			if (error) {
				logger.error('findAllUsers Error - ', error);
				reject(error);
			} else {
				logger.info('findAllUsers Response - ', data);
				resolve(data);
			}
		});
	});
}

export function findUserByProperty(requestObject) {
	return new Promise((resolve, reject) => {
		var query = User.findOne({});
		if(requestObject.userName)
			query.where("userName").equals(requestObject.userName);
		if(requestObject.mobileNumber)
			query.where("mobileNumber").equals(requestObject.mobileNumber);
		if(requestObject.emailId)
			query.where("emailId").equals(requestObject.emailId);
		if(requestObject.status)
			query.where("status").equals(requestObject.status);

		var responseObject = new Object();
		query.exec(function (error, data) {
			if (error) {
				logger.error('findUserByProperty Error - ', error);
				reject(error);
			} else {
				logger.info('findUserByProperty Response - ', data);
				resolve(data);
			}
		});
	});
}

export function updateUser(requestObject) {
    return new Promise((resolve, reject) => {
		var updateObject = new Object();
        if(requestObject.userName)
			updateObject.userName = requestObject.userName;
		if(requestObject.password)
			updateObject.password = crypto.createHash('sha256').update(requestObject.password).digest("hex");
		if(requestObject.mobileNumber)
			updateObject.mobileNumber = requestObject.mobileNumber;
		if(requestObject.emailId)
			updateObject.emailId = requestObject.emailId;
		if(requestObject.status)
			updateObject.status = requestObject.status;
		updateObject.updateAt = new Date();

		var query = {_id: requestObject._id};
		User.findOneAndUpdate(query, updateObject, function (error, data) {
			var responseObject = new Object();
			if (error) {
				logger.error('updateUser Error - ', error);
				reject(error);
			} else {
				logger.info('updateUser Response - ', data);
				resolve(data);
			}
		});
	});
}

export function deleteUser(requestObject) {
	return new Promise((resolve, reject) => {
		var responseObject = new Object();
		var query = {_id: requestObject._id};
		User.findOneAndRemove(query, function (error, data) {
			if (error) {
				logger.error('deleteUser Error - ', error);
				reject(error);
			} else {
				logger.info('deleteUser Response - ', data);
				resolve(data);
			}
		});
	});
}
