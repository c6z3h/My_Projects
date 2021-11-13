const express = require('express')
const app = express()
const cors = require('cors')
app.use(express.json())
app.use(cors())

let links = [
    {
      id: 1,
      link: "https://helloworld.com",
      type: "GIF"
    },
    {
      id: 2,
      link: "https://worldview.com",
      type: "Link"
    },
    {
      id: 3,
      link: "https://benFranklin.com",
      type: "Link"
    }
  ]

app.get('/', (request, response) => {
  response.send('<h1>Hello World!</h1>')
})

app.get('/api/links', (request, response) => {
  response.json(links)
})

app.get('/api/links/:id', (request, response) => {
    const id = Number(request.params.id)
    console.log(id)
    const link = links.find(link => link.id === id)
    
    if (link) {
        response.json(link)
      } else {
        response.status(404).end()
      }
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

  const link = {
    id: generateId(),
    link: body.link,
    type: body.type,
  }

  links = links.concat(link)

  response.json(link)
})

app.delete('/api/links/:id', (request, response) => {
const id = Number(request.params.id)
links = links.filter(link => link.id !== id)

response.status(204).end()
})

const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
