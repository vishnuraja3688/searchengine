import React from "react";


const ImageList =(props)=>{

const images = props.images.map((images)=>

    {return <a href={images.largeImageURL} target="_blank"> <img key={images.id} src={images.webformatURL} alt="images"/></a>})

return(
    <div>{images}</div>
    
)
}
export default ImageList;