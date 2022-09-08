const Gender = require("../model/Gender");

const genderController = {
  listAll: async (req, res) => {
    const genders = await Gender.findAll();

    return res.json(genders);
  },
};

module.exports = genderController;
