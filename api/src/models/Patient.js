const { Model, DataTypes } = require('sequelize');

class Patient extends Model {
  static init(sequelize) {
    super.init({
      name: DataTypes.STRING,
      age: DataTypes.INTEGER,
      cpf: DataTypes.STRING,
      gender: DataTypes.STRING,
      health_condition: DataTypes.STRING,
      region_id: DataTypes.INTEGER,
    }, {
      sequelize
    });
  }

  static associate(models) {
    this.belongsTo(models.Region, { foreignKey: 'region_id', as: 'region' });
  }
}

module.exports = Patient;