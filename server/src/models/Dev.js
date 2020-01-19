const mongoose = require('mongoose');
const PointSchema = require('./utils/PointSchema');

const DevSchema = new mongoose.Schema({
  github_username: String,
  name: String,
  bio: String,
  avatar_url: String,
  location: {
    type: PointSchema,
    index: '2dsphere',
  },
  techs: [String],
}, {
  timestamps: true,
});

DevSchema.statics.findNear = function(coordinates, whereOptions = {}, maxDistance = 10000) {
  const { latitude, longitude } = coordinates;

  return this.find({
    ...whereOptions,
    location: {
      $near: {
        $geometry: {
           type: "Point" ,
           coordinates: [longitude, latitude]
        },
        $maxDistance: maxDistance,
      }
    },
  });
}

module.exports = mongoose.model('Dev', DevSchema);