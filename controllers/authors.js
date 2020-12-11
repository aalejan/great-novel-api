const models = require('../models')

const getAllAuthors = async (req, res) => {
  const authors = await models.Authors.findAll()

  return res.send(authors)
}

const getAuthorByName = async (req, res) => {
  const { name } = req.params

  const author = await models.Authors.findOne({
    where: {
      name: { [models.Op.like]: `%${name}%` }
    },
    include: [{
      model: models.Novels,
      include: [{ model: models.Genres }],
    }]
  })

  return author
    ? res.send(author)
    : res.sendStatus(404)
}


const getAuthorById = async (req, res) => {
  const { id } = req.params

  const author = await models.Authors.findOne({
    where: { id },
    include: [{
      model: models.Novels,
      include: [{ model: models.Genres }],
    }]
  })

  return author
    ? res.send(author)
    : res.send(404)
}

module.exports = { getAllAuthors, getAuthorById, getAuthorByName }
