const express = require('express')
const app = express()
const { getAllNovels, getNovelById } = require('./controllers/novels')
const { getAllGenres, getGenreById } = require('./controllers/genres')
const { getAllAuthors, getAuthorById } = require('./controllers/authors')

app.get('/authors', getAllAuthors)

app.get('/authors/:id', getAuthorById)

app.get('/genres', getAllGenres)

app.get('/genres/:id', getGenreById)

app.get('/novels', getAllNovels)

app.get('/novels/:id', getNovelById)


const PORT = 3001

// eslint-disable-next-line no-console
app.listen(PORT, () => console.log('listening on port 3001'))
