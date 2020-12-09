'use strict'

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    return queryInterface.createTable('novelsGenres', {
      genreId: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        references: {
          model: 'genres',
          key: 'id'
        },
        allowNull: false
      },
      novelId: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        references: {
          model: 'novels',
          key: 'id'
        },
        allowNull: false
      },
      createdAt: { type: Sequelize.DATE, defaultValue: Sequelize.literal('CURRENT_TIMESTAMP') },
      updatedAt: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP'),
      },
      deletedAt: { type: Sequelize.DATE },
    })
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    return queryInterface.dropTable('novelsGenres')
  }
}
