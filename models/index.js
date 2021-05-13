const User = require('./User');
const Clothes = require('./Clothes');


User.hasMany(Clothes, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
})


Clothes.belongsTo(User, {
  foreignKey: 'user_id',
});

module.exports = { User, Clothes };
