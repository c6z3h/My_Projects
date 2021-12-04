import React, { useState, useEffect } from 'react'
// import GIFs from './components/GIFs'
import Links from './components/Links'
import SubmitForm from './components/SubmitForm'
import Notification from './components/Notification'
import linkService from './services/links'
import './App.css'
import './responsive.css'
import './services/reactGA'
import { initGA, trackingPageGA } from './services/reactGA'

const Footer = () => {
  // const footerStyle = {
  //   color: 'blue',
  //   background: 'gray',
  //   fontStyle: 'italic',
  //   fontSize: 25,
  //   left:0,
  //   bottom:0,
  //   right:0
  // }
  return (
    <div /*style={footerStyle}*/ className="footer">
      comments/feedback to: <a href="https://github.com/c6z3h">c6z3h</a>
    </div>
  )
}

const App = () => {
  
  const hook = () => {
    initGA()
    trackingPageGA('/')
  }

  useEffect(hook, [])
  
 // google analytics events
//  const googleAnalyticsEvent = () => {
//   eventGA('main-button', 'buttonAction');
// }

// return (
//   <div className="App">
//     <header className="App-header">
//       <img src={logo} className="App-logo" alt="logo" />
//       <button className="App-button" onClick={googleAnalyticsEvent}>

  // 0. READ GIFs
const hook1 = () => {
  linkService
  .getAllGIFs()
  .then(allLinks => {
    // console.log(`this is allLinks: ${allLinks}`)
    setGIFLinks(allLinks)
  })
}

useEffect(hook1, [])
// 0. READ LINKs
const hook2 = () => {
  linkService
  .getAllLinks()
  .then(allLinks => {
    // console.log(`this is allLinks: ${allLinks}`)
    setWebLinks(allLinks)
  })
}

useEffect(hook2, [])

  // 1. INIT -- for user-submission
  // const [ links, setLinks ] = useState([]) 
  // const [ newLink, setNewLinks ] = useState('')
  // const [ newType, setNewType ] = useState('GIF')
// 1. INIT -- for rendering GIF or weblinks
  const [ GIFLinks, setGIFLinks ] = useState([])
  const [ webLinks, setWebLinks ] = useState([])

  // // Event Handler
  // const handleLinkChange = (event) => setNewLinks(event.target.value)
  // const handleTypeChange= (event) => setNewType(event.target.value)
  // const handleGIFChange = (event) => setGIFLinks(...GIFLinks)

  const randomNumberGenerator = (ListOfLinkOfChoice) => {
    return Math.floor(Math.random()*ListOfLinkOfChoice.length)
  }

  // const refresh = {
  //   handleGIFChange
  // }

const GIFArray = GIFLinks.map(GIFobject => GIFobject.link)
// console.log(`IMMA GIFLINKS ${JSON.stringify(GIFLinks)}`)
// console.log(`IMMA GIFARRAY ${GIFArray}`)
const randomIndex = Math.floor(Math.random() * GIFArray.length);
const selectedPicture = GIFArray[randomIndex];
// console.log(`IMMA selected ${selectedPicture}`)

return (
  <div style={{ backgroundImage: `url(${selectedPicture}`}} className="background-image responsive">
       <Notification className="body"/>
       <br/>
       <h1 className="line__1">Welcome! What inspiration</h1>
       <h1 className="line__2">will you find today?</h1>
       <Links  url={webLinks} randomNumber={randomNumberGenerator(webLinks)}/>
       <p className="body"> Add a GIF or Link to inspire someone else below! </p>
       <SubmitForm />
       <a target="_blank" href={selectedPicture} rel="noreferrer">Image Credits</a>
       <Footer/> 
    </div>
  )
}

export default App