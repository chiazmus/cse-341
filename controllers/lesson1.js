const getProfessionalData = (req, res) => {
  //#swagger.tags=['Professional']
  const professionalData = require("../data/professional.json");
  res.json(professionalData);
};

module.exports = { getProfessionalData };
