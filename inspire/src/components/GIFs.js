const GIFs = ({url, randomNumber, refresh}) => {
    console.log("GIFs: ",url)
    console.log("GIFs randNo: ",randomNumber)
    // console.log(`GIF to render: ${url[randomNumber].link}`)
    if (url.length !== 0){
        
        return (
            // <div style={{ backgroundImage: `url(${url[randomNumber].link})` }}>
            <div>
            {/* <img alt="GIF" src={url.link}> image </img> */}
            <p>
                <img src={url[randomNumber].link} alt="GIF"></img>
                < br />
                <button onClick={() => refresh}>
                    Refresh Image
                </button>
            </p>
            </div>
        )
    }
    return null
}

export default GIFs