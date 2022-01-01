import React from "react";
import './gallary.css'


const ImageList =(props)=>{

const images = props.images.map((images)=>

    {return <a href={images.largeImageURL} target="_blank"> <img className="gallary" key={images.id} src={images.webformatURL}  alt="images"/></a>})

return(
    <div>{images}</div>
    
)
}
export default ImageList;