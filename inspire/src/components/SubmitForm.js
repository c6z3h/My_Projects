// import { useSelector, useDispatch } from 'react-redux'
import React from 'react'
import  useField from '../hooks/index'
import { useDispatch } from 'react-redux'
import { createLink } from '../reducers/linkReducer'
import { addNotification } from '../reducers/notificationReducer'
// import { addNotification } from '../reducers/notificationReducer'

// const SubmitForm = ({addLink,data}) => {
const SubmitForm = () => {
    const dispatch = useDispatch()

    const link = useField('text')
    const type = useField('text')

    const add = async (event) => {
        event.preventDefault()
        if (type.value === ''){
            type.value = 'GIF'
        }
        // console.log(`link and type here: ${event}, ${link.value}, ${type.value}`)
        let linkObject = {
            link: link.value,
            type: type.value,
        }
        // console.log(`link and type here: ${event}, ${link.value}, ${type.value}`)
        reset()
        dispatch(createLink(linkObject))
        console.log("it breaks here")
        dispatch(addNotification(linkObject.link, 1))
        // props.addNotification(`${link} added.`, 1)
    }

    const reset = () => {
        link.reset()
        type.reset()
      }

    return(
        <form onSubmit={add}>
            <div>
                URL:
                <input {...link} reset='' placeholder="https://upload.wikimedia.org/wikipedia/commons/..."/>
                <select {...type} reset='GIF'>
                    <option value="GIF">GIF</option>
                    <option value="link">Link</option>
                </select>
                <button type="submit">add</button>
            </div>
        </form>
        // <form onSubmit={addLink}>
        //     <div>
        //         {/* <SafeAreaView> */}
        //         URL: <input
        //         value={data.newLink}
        //         onChange={data.handleLinkChange}
        //         placeholder="https://upload.wikimedia.org/wikipedia/commons/..."
        //         />
        //         {/* </SafeAreaView> */}
        //         <select value={data.newType} onChange={data.handleTypeChange}>
        //             <option> </option>
        //             <option value="GIF">GIF</option>
        //             <option value="link">Link</option>
        //         </select>
        //         <button type="submit">add</button>
        //     </div>
        // </form>
    )
}

export default SubmitForm