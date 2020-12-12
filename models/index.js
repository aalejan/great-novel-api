const Sequelize = require('sequelize')
const AuthorsModel = require('./authors')
const NovelsModel = require('./novels')
const GenresModel = require('./genres')
const NovelsGenresModel = require('./novelsGenres')
const allConfigs = require('../config/sequelize')
const environment = process.env.NODE_ENV || 'development'
const config = allConfigs[environment]

const connection = new Sequelize(config.database, config.username, config.password, {
  host: config.host, dialect: 'mysql'
})


const Authors = AuthorsModel(connection, Sequelize)
const Novels = NovelsModel(connection, Sequelize, Authors)
const Genres = GenresModel(connection, Sequelize)
const NovelsGenres = NovelsGenresModel(connection, Sequelize, Novels, Genres)

Authors.hasMany(Novels)
Novels.belongsTo(Authors)

Genres.belongsToMany(Novels, { through: NovelsGenres })
Novels.belongsToMany(Genres, { through: NovelsGenres })

module.exports = { Authors, Novels, Genres, NovelsGenres }

module.exports = {
  Authors,
  Novels,
  Genres,
  NovelsGenres,
  Op: Sequelize.Op,
}

