const Sequelize = require('sequelize')
const AuthorsModel = require('./authors')
const NovelsModel = require('./novels')
const GenresModel = require('./genres')
const Novels_Genres_LinkModel = require('./novels_genres_link')

const connection = new Sequelize('novels', 'novels', 'novels$$', {
    host: 'localhost', dialect: 'mysql'
  })
  