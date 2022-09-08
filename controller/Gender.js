const Gender = require("../model/Gender");

const genderController = {
  listAll: async (req, res) => {
    const genders = await Gender.findAll();

    return res.json(genders);
  },
  postgender: async (req, res) => {
    const { gender } = req.body;
    const novoGenero = await Gender.create({
      gender,
    });

    res.json(novoGenero);
  },
};

module.exports = genderController;
