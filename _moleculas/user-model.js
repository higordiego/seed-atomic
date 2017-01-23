'use strict'
import mongoose, {Schema} from 'mongoose';
import Organelles   from '../_atomo/user-config'

const User = new Schema(Organelles);

User.index({login: 1});

const molecule =  mongoose.model('Users', User);

module.exports = molecule


