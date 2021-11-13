import React, { useState, useEffect } from 'react'
// import Persons from './components/Persons'
// import Filter from './components/Filter'
import SubmitForm from './components/SubmitForm'
import Notification from './components/Notification'
import linkService from './services/links'
// import 'bootstrap/dist/css/bootstrap.min.css';
// import './index.css'

const Footer = () => {
  const footerStyle = {
    color: 'blue',
    background: 'gray',
    fontStyle: 'italic',
    fontSize: 25,
  }
  return (
    <div style={footerStyle}>
      <em>comments/feedback to: <a href="https://github.com/c6z3h">c6z3h</a></em>
    </div>
  )
}

const App = () => {
  
  // // 1. READ PERSON(s)
  const hook = () => {
    linkService
    .getAll()
    .then(allLinks => {
      console.log(`this is allLinks: ${allLinks}`)
      setLinks(allLinks)
    })
  }

  useEffect(hook, [])

  // // 1. INITIALIZE
  const [ links, setLinks ] = useState([]) 
  const [ newLink, setNewLinks ] = useState('')
  const [ newType, setNewType ] = useState('GIF')
  // const [ filter, setFilter ] = useState('')
  const [notifMessage, setNotifMessage] = useState('')

  // // Event Handler
  const handleLinkChange = (event) => setNewLinks(event.target.value)
  const handleTypeChange=(event)=>{
    console.log(event.target.value)
    setNewType(event.target.value)
    console.log("newType here: " + newType)
  }
  // const handleTypeChange = (event) => {
  //   console.log(event)
  //   setNewType(event.target.value)
  // }
  // const handleFilterChange = (event) => setFilter(event.target.value)

  // // Filter
  // const peopleToShow = filter
  //       ? persons.filter(person => person.name.toLowerCase().includes(filter.toLowerCase()))
  //       : persons

  // 2. CREATE or UPDATE PERSON
  const addLink = (event) => {
    event.preventDefault()
    const linkObject = {
      // id: links.length + 1,
      link: newLink,
      type: newType,
    }
    console.log(`This is the linkObject ${linkObject}, link ${linkObject.link}, and type ${linkObject.type}`)
    // const personsArray = persons.map(person => person.name.toLowerCase())
    // // Throw Error If Name Already in List
    // console.log("personsArray", personsArray)
    // console.log("${newName}",`${newName}`)
    // if (personsArray.includes(`${newName}`.toLowerCase())){
    //     if (window.confirm(`${newName} is already added to phonebook, replace the old number with a new one?`)){
    //       const updateMan = persons.filter(person => person.name === `${newName}`)
    //       console.log("updateMan is", updateMan[0])
    //       console.log("updateMan.id is", updateMan[0].id)
    //       personService
    //         .update(updateMan[0].id, personObject)
    //         .catch(error => {
    //           setNotifMessage(
    //             `Information of '${newName}' has already been removed from server`
    //           )
    //           setTimeout(() => {
    //             setNotifMessage('')
    //           }, 5000)
    //           setPersons(persons.filter(p => p.id !== updateMan[0].id))
    //         })
    //         .then(newMan => {
    //           setPersons(persons.map(person => person.id !== newMan.id ? person : newMan))
    //           setNotifMessage(`Updated ${newName}`)
    //           setTimeout(() => {
    //             setNotifMessage('')
    //           }, 5000)
    //         })
    //     }
    //   } else {
      linkService
        .create(linkObject)
        .then(returnedLinks =>{
          setLinks(links.concat(returnedLinks))
        setNotifMessage(`Added ${linkObject.link}`)
        setTimeout(() => {
          setNotifMessage('')
        }, 5000)
      })
      .catch(error => {
        console.log(error.response.data)
        setNotifMessage(`${error.response.data.error}`)
        setTimeout(() => {
          setNotifMessage('')
        }, 5000)
      })
    // }
    setNewLinks('')
    setNewType('')
  }
 
  const addLinkData = {
    // INITIALLY addPerson, newName and newNumber
    newLink,
    newType,
    handleLinkChange,
    handleTypeChange
  }
  
  // // 3. DELETE PERSON
  // const deletePerson = id => {
  //   const dangerMan = persons.filter(person => person.id === id)
  //   console.log(dangerMan)
  //   if (window.confirm(`Delete ${dangerMan[0].name} ?`)){
  //     personService
  //       .remove(id)
  //       .then(persons =>{
  //       setPersons(persons)
  //   })
  //   }
    
  // }

  return (
    <div>
       <Notification message={notifMessage} />
  {/* //     <h2>Phonebook</h2>
  //     <Filter onChange={handleFilterChange} value={filter} />
  //     <h2>add a new</h2> */}
      <SubmitForm addLink={addLink} data={addLinkData} />
  {/* //     <h2>Numbers</h2>
  //     <div>
  //       {peopleToShow.map(persons =>
  //           <Persons persons={persons} deletePerson={() => deletePerson(persons.id)} />
  //       )}
  //     </div>
  //     <br />
  //     <br />*/}
       <Footer /> 
    </div>
  )
}

export default App