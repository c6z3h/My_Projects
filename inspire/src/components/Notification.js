import React from 'react'
import { useSelector } from 'react-redux'

const Notification = () => {
	const notification = useSelector((state) => state.notification)
	console.log(notification)
	const style = {
		border: 'solid',
		padding: 15,
		borderWidth: 1,
	}
	if (notification === '') {
		return <div /*style={style}*/ className="header_notif"> </div>
	} else {
		return (
			<div /*style={style}*/ className="header_notif">
				Thanks for sharing {notification} !
			</div>
		)
	}
}

export default Notification 