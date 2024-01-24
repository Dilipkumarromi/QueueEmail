'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class tbl_queue_email extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  tbl_queue_email.init({
    from: DataTypes.STRING,
    to: DataTypes.STRING,
    subject: DataTypes.STRING,
    body: DataTypes.STRING,
    send_status: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'tbl_queue_email',
  });
  return tbl_queue_email;
};