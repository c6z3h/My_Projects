require('dotenv').config()
const express = require('express')
const app = express()
const cors = require('cors')
app.use(express.json())
app.use(cors())
app.use(express.static('build'))
const Link = require('./models/link')

app.get('/', (request, response) => {
  response.send('<h1>Hello World!</h1>')
})

app.get('/api/links', (request, response) => {
  Link.find({}).then(links => {
    response.json(links)
  })
})

app.get('/api/links/:id', (request, response) => {
  Link.findById(request.params.id).then(link => {
      if (link) {
        response.json(link)
      } else {
        response.status(404).end()
      }
    })
    .catch(error => {
      console.log(error)
      response.status(400).send({ error: 'malformatted id' })
    })
  })

const generateId = () => {
  const maxId = links.length > 0
    ? Math.max(...links.map(l => l.id))
    : 0
  return maxId + 1
}

app.post('/api/links', (request, response) => {
  const body = request.body

  if (!body.link) {
    return response.status(400).json({ 
      error: 'content missing' 
    })
  }

  const link = new Link({
    id: generateId(),
    link: body.link,
    type: body.type,
  })

  link.save().then(savedLink => {
    response.json(savedLink)
    mongoose.connection.close()
  })
  // links = links.concat(link)
  // response.json(link)
})

// UPDATE THIS mongoose.connection.close()
app.delete('/api/links/:id', (request, response) => {
const id = Number(request.params.id)
links = links.filter(link => link.id !== id)

response.status(204).end()
})

const PORT = process.env.PORT
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
