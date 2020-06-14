/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('churches', {
    Id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    Name: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    Description: {
      type: "BLOB",
      allowNull: true
    },
    Mailing_One: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    Mailing_Two: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    City: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    State: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    PostalCode: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    Denomination: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    Web_URL: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    Latitude: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    Longitude: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: false
    },
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: false
    }
  }, {
    tableName: 'churches'
  });
};
