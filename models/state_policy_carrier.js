'use strict'
const { Model } = require('sequelize')

module.exports = (sequelize, DataTypes) => {
  class State_Policy_Carrier extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.State_Policy_Carrier.belongsTo(models.Carrier, {
        foreignKey: 'carrierId',
        as: 'carrier',
        onDelete: 'cascade',
      })
    }
  }

  State_Policy_Carrier.init(
    {
      policy: DataTypes.STRING,
      carrierId: DataTypes.INTEGER,
      state: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'State_Policy_Carrier',
    },
  )

  return State_Policy_Carrier
}
