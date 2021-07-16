import logRequest from '../middleware/log_req.js';
import * as user from './user_controller.js'

export default function userApis(app) {
    app.post('/user', logRequest, user.addUser);

    app.get('/users', logRequest, user.findAllUsers);

    app.get('/user/:userName', logRequest, user.findUserByUserName);

    app.get('/user', logRequest, user.findUserByProperty);

    app.put('/user', logRequest, user.updateUser);

    app.delete('/user', logRequest, user.deleteUser);
}
