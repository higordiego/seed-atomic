'use strict'
import mongoose, {Schema} from 'mongoose';
import Organelles   from '../_atomo/artifacts-config'

const Artifact = new Schema(Organelles);

Artifact.index({name: 1,description:1,create_at:1,geolocation:1});

const molecule =  mongoose.model('Artifacts', Artifact);

module.exports = molecule


