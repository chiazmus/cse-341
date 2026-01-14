const helloWorldRoute = (req, res) => {
  res.send("Hello");
};

const getProfessionalData = (req, res) => {
  const professionalData = require('../data/professional.json');
  res.json(professionalData);
};

module.exports = {helloWorldRoute, getProfessionalData}