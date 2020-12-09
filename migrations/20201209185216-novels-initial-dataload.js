'use strict'

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    return queryInterface.bulkInsert('novels', [
      {
        id: 1,
        title: 'Dracula',
        authorId: 1,

      },
      {
        id: 2,
        title: 'The Picture of Dorian Gray',
        authorId: 2,

      },
      {
        id: 3,
        title: 'The Color Purple',
        authorId: 3,

      },
      {
        id: 4,
        title: 'War and Peace',
        authorId: 4,

      },
      {
        id: 5,
        title: 'A Tale of Two Cities',
        authorId: 5,

      },
      {
        id: 6,
        title: 'The Crucible',
        authorId: 6,

      },
      {
        id: 7,
        title: 'The Three Musketeers',
        authorId: 7,

      },
      {
        id: 8,
        title: 'The Hound of the Baskervilles',
        authorId: 8,

      },
      {
        id: 9,
        title: 'The Strange Case of Dr. Jekyll and Mr. Hyde',
        authorId: 9,

      },
      {
        id: 10,
        title: 'Crime and Punishment',
        authorId: 10,

      },
      {
        id: 11,
        title: 'Murder on the Orient Express',
        authorId: 11,

      },
      {
        id: 12,
        title: 'Fahrenheit',
        authorId: 12,

      },
      {
        id: 13,
        title: 'Animal Farm',
        authorId: 13,
      },
      {
        id: 14,
        title: 'The Time Machine',
        authorId: 14,

      },
      {
        id: 15,
        title: 'Things Fall Apart',
        authorId: 15,
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
    return queryInterface.bulkDelete('novels')
  }
}
