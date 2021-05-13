const sequelize = require('../config/connection');
const seedUser = require('./userData');
const seedClothes = require('./clothesData');

const seedAll = async () => {
  await sequelize.sync({ force: true });

  await seedUser();
  
  await seedClothes();

  process.exit(0);
};

seedAll();
