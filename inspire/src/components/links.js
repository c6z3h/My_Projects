
const Links = ({url, randomNumber}) => {
    // console.log("weblinks: ",url)
    // console.log("weblinks randNo: ",randomNumber)
    if (url.length !== 0){
        return (
            <div>
                <a href={url[randomNumber].link} target="_blank" rel="noreferrer">Inspiration here!</a>
            </div>
        )
    }
    return null
}

export default Links