const models = require('../models')

const getAllNovels = async (req, res) => {
  const novels = await models.Novels.findAll({
    include: [
      { model: models.Authors }
    ]
  })

  return res.send(novels)
}

const getNovelByTitle = async (req, res) => {
  const { title } = req.params

  const novel = await models.Novels.findOne({
    where: {
      title: { [models.Op.like]: `%${title}%` }
    },
    include: [
      { model: models.Authors },
      { model: models.Genres },
    ]
  })

  return novel
    ? res.send(novel)
    : res.sendStatus(404)
}

const getNovelById = async (req, res) => {
  const { id } = req.params

  const novel = await models.Novels.findOne({
    where: { id },
    include: [
      { model: models.Authors },
      { model: models.Genres },
    ]
  })

  return novel
    ? res.send(novel)
    : res.sendStatus(404)
}



module.exports = { getAllNovels, getNovelById, getNovelByTitle }
