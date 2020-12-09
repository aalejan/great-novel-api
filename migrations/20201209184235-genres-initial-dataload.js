'use strict'

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    return queryInterface.bulkInsert('genres', [
      {
        id: 1,
        name: 'Adventure',

      },
      {
        id: 2,
        name: 'African Literature',

      },
      {
        id: 3,
        name: 'Crime',

      },
      {
        id: 4,
        name: 'Drama',

      },
      {
        id: 5,
        name: 'Dyystopia',

      },
      {
        id: 6,
        name: 'Fantasy',

      },
      {
        id: 7,
        name: 'Fiction',

      },
      {
        id: 8,
        name: 'French Literature',

      },
      {
        id: 9,
        name: 'Gothic',

      },
      {
        id: 10,
        name: 'Historical Fiction',

      },
      {
        id: 11,
        name: 'Horror',

      },
      {
        id: 12,
        name: 'Mystery',

      },
      {
        id: 13,
        name: 'Plays',

      },
      {
        id: 14,
        name: 'Russian Literature',

      },
      {
        id: 15,
        name: 'Science Fiction',

      },
      {
        id: 16,
        name: 'Thriller',

      },
      {
        id: 17,
        name: 'Time Travel',

      },
      {
        id: 18,
        name: 'War',

      }

    ])
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    return queryInterface.bulkDelete('genres')
  }
}
