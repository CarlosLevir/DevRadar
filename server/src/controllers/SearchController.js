const Dev = require('../models/Dev');
const parseStringArray = require('../utils/parseStringArray');

module.exports = {
  async index(req, res) {
    const { techs, latitude, longitude } = req.query;
    const coordinates = { latitude, longitude };

    const devs = await Dev.findNear(coordinates, {
      techs: {
        $in: parseStringArray(techs),
      },
    });

    return res.json(devs);
  },
}