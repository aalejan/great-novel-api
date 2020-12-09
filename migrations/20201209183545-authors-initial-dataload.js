'use strict'

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    return queryInterface.bulkInsert('authors', [
      {
        id: 1,
        name: 'Bram Stoker',

      },
      {
        id: 2,
        name: 'Oscar Wilde',

      },
      {
        id: 3,
        name: 'Alice Walker',

      },
      {
        id: 4,
        name: 'Leo Tolstoy',

      },
      {
        id: 5,
        name: 'Charles Dickens',

      },
      {
        id: 6,
        name: 'Arthur Miller',

      },
      {
        id: 7,
        name: 'Alexandre Dumas',

      },
      {
        id: 8,
        name: 'Arthur Conan Doyle',

      },
      {
        id: 9,
        name: 'Robert Louis Stevenson',

      },
      {
        id: 10,
        name: 'Fyodor Dostoyevsky',

      },
      {
        id: 11,
        name: 'Agatha Christie',

      },
      {
        id: 12,
        name: 'Ray Bradbury',

      },
      {
        id: 13,
        name: 'Georfe Orwell',

      },
      {
        id: 14,
        name: 'H.G. Wells',

      },
      {
        id: 15,
        name: 'Chinua Achebe',
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
    return queryInterface.bulkDelete('authors')
  }
}
