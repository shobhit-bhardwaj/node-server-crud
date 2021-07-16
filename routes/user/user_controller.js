import * as userService from './user_service.js';
import responseCode from '../../utils/response_code.js';

export function addUser(request, response) {
    const requestObject = request.body;

    var responseObject = new Object();
    userService.addUser(requestObject)
        .then((data) => {
            responseObject.responseCode = responseCode.SUCCESS.CODE;
            responseObject.responseMessage = responseCode.SUCCESS.MESSAGE;
            responseObject.responseData = data;
            response.json(responseObject);
        })
        .catch((error) => {
            responseObject.responseCode = responseCode.MONGO_ERROR.CODE;
            responseObject.responseMessage = responseCode.MONGO_ERROR.MESSAGE;
            responseObject.error = error;
            response.json(responseObject);
        });
}

export function findAllUsers(request, response) {
    const requestObject = request.query;

    var responseObject = new Object();
    userService.findAllUsers(requestObject)
        .then((data) => {
            responseObject.responseCode = responseCode.SUCCESS.CODE;
            responseObject.responseMessage = responseCode.SUCCESS.MESSAGE;
            responseObject.responseData = data;
            response.json(responseObject);
        })
        .catch((error) => {
            responseObject.responseCode = responseCode.MONGO_ERROR.CODE;
            responseObject.responseMessage = responseCode.MONGO_ERROR.MESSAGE;
            responseObject.error = error;
            response.json(responseObject);
        });
}

export function findUserByUserName(request, response) {
    const requestObject = new Object();
    requestObject.userName = request.params.userName;

    var responseObject = new Object();
    userService.findUserByProperty(requestObject)
        .then((data) => {
            responseObject.responseCode = responseCode.SUCCESS.CODE;
            responseObject.responseMessage = responseCode.SUCCESS.MESSAGE;
            responseObject.responseData = data;
            response.json(responseObject);
        })
        .catch((error) => {
            responseObject.responseCode = responseCode.MONGO_ERROR.CODE;
            responseObject.responseMessage = responseCode.MONGO_ERROR.MESSAGE;
            responseObject.error = error;
            response.json(responseObject);
        });
}

export function findUserByProperty(request, response) {
    const requestObject = request.query;

    var responseObject = new Object();
    userService.findUserByProperty(requestObject)
        .then((data) => {
            responseObject.responseCode = responseCode.SUCCESS.CODE;
            responseObject.responseMessage = responseCode.SUCCESS.MESSAGE;
            responseObject.responseData = data;
            response.json(responseObject);
        })
        .catch((error) => {
            responseObject.responseCode = responseCode.MONGO_ERROR.CODE;
            responseObject.responseMessage = responseCode.MONGO_ERROR.MESSAGE;
            responseObject.error = error;
            response.json(responseObject);
        });
}

export function updateUser(request, response) {
    const requestObject = request.body;

    var responseObject = new Object();
    userService.updateUser(requestObject)
        .then((data) => {
            responseObject.responseCode = responseCode.SUCCESS.CODE;
            responseObject.responseMessage = responseCode.SUCCESS.MESSAGE;
            responseObject.responseData = data;
            response.json(responseObject);
        })
        .catch((error) => {
            responseObject.responseCode = responseCode.MONGO_ERROR.CODE;
            responseObject.responseMessage = responseCode.MONGO_ERROR.MESSAGE;
            responseObject.error = error;
            response.json(responseObject);
        });
}

export function deleteUser(request, response) {
    const requestObject = request.body;

    var responseObject = new Object();
    userService.deleteUser(requestObject)
        .then((data) => {
            responseObject.responseCode = responseCode.SUCCESS.CODE;
            responseObject.responseMessage = responseCode.SUCCESS.MESSAGE;
            responseObject.responseData = data;
            response.json(responseObject);
        })
        .catch((error) => {
            responseObject.responseCode = responseCode.MONGO_ERROR.CODE;
            responseObject.responseMessage = responseCode.MONGO_ERROR.MESSAGE;
            responseObject.error = error;
            response.json(responseObject);
        });
}
