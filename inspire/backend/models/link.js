const mongoose = require('mongoose')
const url = process.env.MONGODB_URI

mongoose.connect(url)
.then(result => {
  console.log('connected to MongoDB')
})
.catch((error) => {
  console.log('error connecting to MongoDB:', error.message)
})

const linkSchema = new mongoose.Schema(
  {link: String,
  type: String},
  {collection: 'user_submission'}
)

const linkSchemaGIF = new mongoose.Schema(
  {link: String,
  type: String},
  {collection: 'GIF'}
)

const linkSchemaLink = new mongoose.Schema(
  {link: String,
  type: String},
  {collection: 'links'}
)

linkSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString()
    delete returnedObject._id
    delete returnedObject.__v
  }
})

linkSchemaGIF.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString()
    delete returnedObject._id
    delete returnedObject.__v
  }
})

linkSchemaLink.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString()
    delete returnedObject._id
    delete returnedObject.__v
  }
})

// [ ] ONLY Exports the last one... but if i copy this to 3 separate files, I have to connect to mongoose 3 times??
// 
const Link = mongoose.model('Link', linkSchema)
const Linklink = mongoose.model('Linklink', linkSchemaLink)
const LinkGIF = mongoose.model('LinkGIF', linkSchemaGIF)
module.exports = { Link, Linklink, LinkGIF }