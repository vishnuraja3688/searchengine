import React from "react";


const ImageList =(props)=>{

const images = props.images.map((images)=>

    {return <img key={images.id} src={images.webformatURL} alt="images"/>})

return(
    <div>{images}</div>
)
}
export default ImageList;