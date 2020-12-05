const express = require('express')
const app = express()
const{getAllAuthors, getAuthorById} = require('./controllers/authors')
const{}

app.get('/authors', getAllAuthors)

app.get('/authors/:id', getAuthorById)

app.get('/genres', getAllGenres)

app.get('/genres/:id', getGenreById)

app.get('/novels', getAllNovels)

app.get('/novels/:id', getNovelById)


const PORT = 3001
app.listen(PORT, () => console.log('listening on port 3001'))