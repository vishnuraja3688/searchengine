import React from "react";
import './gallary.css'


const ImageList =(props)=>{

const images = props.images.map((images)=>

    {return <a href={images.largeImageURL} target="_blank"><div className="gallary"> <img 
     key={images.id} src={images.webformatURL} alt="images"/> </div>   </a>})

return(
    <div>{images}</div>
    
)
}
export default ImageList;
