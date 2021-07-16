import mongoose from 'mongoose';
import * as mongoUtil from '../../utils/mongo_util.js';

var UserSchema = new mongoose.Schema({
	userName: {type: String, unique: true},
	password: {type: String},
	mobileNumber: {type: String, unique: true},
	emailId: {type: String, unique: true},
	status: {type: String, enum: ['ACTIVE', 'INACTIVE','BLOCK']},
	createAt: {type: Date, default: Date.now},
	updateAt: {type: Date}
});

export default mongoose.model('User', UserSchema, "users");
