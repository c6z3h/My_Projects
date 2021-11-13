// import DropdownButton from 'react-bootstrap/DropdownButton';
// import Dropdown from 'react-bootstrap/Dropdown'
// import React, { useState, useEffect } from 'react'
// import { SafeAreaView, StyleSheet, TextInput } from "react-native";

const SubmitForm = ({addLink,data}) => {
    // const [display, handleDisplayChange] = useState('');
    // const onChangeDisplay = (event) => handleDisplayChange(event.target.value)

    return(
        <form onSubmit={addLink}>
            <div>
                {/* <SafeAreaView> */}
                URL: <input
                value={data.newLink}
                onChange={data.handleLinkChange}
                placeholder="https://upload.wikimedia.org/wikipedia/commons/..."
                />
                {/* </SafeAreaView> */}
                <select value={data.newType} onChange={data.handleTypeChange}>
                    <option> </option>
                    <option value="GIF">GIF</option>
                    <option value="link">Link</option>
                </select>
                {/* make this a button: GIF or link */}
                {/* Type (GIF / link): <input
                value={data.newType}
                onChange={data.handleTypeChange}
                /> */}
                {/* <DropdownButton id="dropdown-basic-button" title="Dropdown button" onSelect={data.handleTypeChange}>
                    {/* <Dropdown.Item href="#/action-1">GIF</Dropdown.Item> */}
                    {/* <Dropdown.Item eventKey="GIF">GIF</Dropdown.Item>
                    <Dropdown.Item eventKey="Link">Link</Dropdown.Item>
                </DropdownButton> */}
                {/* <br /> */}
                <button type="submit">add</button>
            </div>
            {/* <div>
                
            </div> */}
        </form>
    )
}

export default SubmitForm