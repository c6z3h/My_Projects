import axios from 'axios'
// const baseUrl = 'http://localhost:3001/links'
const baseUrl = '/api/links' // Use relative url
// Now HTTP GET requests to the address www.serversaddress.com/index.html or www.serversaddress.com will show the React frontend. GET requests to the address www.serversaddress.com/api/notes will be handled by the backend's code.

const getAll = () => {
    const request = axios.get(baseUrl)
    return request.then(response => response.data)
}

const getAllGIFs = () => {
  const request = axios.get(`${baseUrl}/GIF`)
  // return request.then(response => response.data)
   return request.then(response => {
    // console.log(response) 
    return response.data
   })
}

const getAllLinks = () => {
  const request = axios.get(`${baseUrl}/link`)
  // return request.then(response => response.data)
  return request.then(response => {
    // console.log(response)
    return response.data
   })
}

const create = linkObject => {
  const request = axios.post(baseUrl, linkObject)
  return request.then(response => response.data)
}

const update = (id, linkObject) => {
  const request = axios.put(`${baseUrl}/${id}`, linkObject)
  return request.then(response => response.data)
}

const remove = (id) => {
  // const request = 
  axios.delete(`${baseUrl}/${id}`)
  return getAll()
}
export default { getAll, getAllGIFs, getAllLinks, create, update, remove }