const Links = ({url, randomNumber}) => {
    console.log("weblinks: ",url)
    console.log("weblinks randNo: ",randomNumber)
    if (url.length !== 0){
        return (
            <div>
            {/* <img alt="" src=""> image </img>
            <ul className='link' href={url.link}> description </ul> */}
            <a href={url[randomNumber].link}>Inspiration here!</a>
            </div>
        )
    }
    return null
}

export default Links