const novels = require("./novels")

const Novels_Genres_Link = (connection, Sequelize, Genres, Novels) => {
    return connection.define('novels_genres_link', {
      genresId: {type: Sequelize.INTEGER, references: {model: Genres, key: 'id'}},
      novelsId: { type: Sequelize.INTEGER, references: { model: Novels, key: 'id' } },
    }, { paranoid: true })
  }
  
  module.exports = Novels_Genres_Link