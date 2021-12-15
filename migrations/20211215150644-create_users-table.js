"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("usres", {
      id: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      username: {
        type: Sequelize.STRING(35),
        allowNull: false,
        unique: true,
      },
      password: {
        type: Sequelize.STRING(20),
        allowNull: false,
      },
      content: Sequelize.STRING(300),
      createdAt: Sequelize.DATE,
      updatedAt: Sequelize.DATE,
    });
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable("users");
  },
};
