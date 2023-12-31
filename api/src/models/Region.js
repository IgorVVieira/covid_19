const { Model, DataTypes } = require('sequelize');

class Region extends Model {
  static init(sequelize) {
    super.init({
      name: DataTypes.STRING,
    }, {
      sequelize
    });
  }
}

module.exports = Region;