const Sequelize = require('sequelize')
const AuthorsModel = require('./authors')
const NovelsModel = require('./novels')
const GenresModel = require('./genres')
const Novels_Genres_LinkModel = require('./novels_genres_link')

const connection = new Sequelize('novels', 'novels', 'novels$$', {
    host: 'localhost', dialect: 'mysql'
  })

const Authors = AuthorsModel(connection, Sequelize)
const Novels = NovelsModel(connection, Sequelize, Authors)
const Genres = GenresModel(connection, Sequelize)
const Novels_Genres_Link = Novels_Genres_LinkModel(connection, Sequelize, Novels, Genres)

Authors.hasMany(Novels)
Novels.belongsTo(Authors)

Genres.belongsToMany(Novels, {through: Novels_Genres_Link})
Novels.belongsToMany(Genres, {through: Novels_Genres_Link})

module.exports = {Authors, Novels, Genres, Novels_Genres_Link}
