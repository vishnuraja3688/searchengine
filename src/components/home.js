import React from "react";
import Searchinput from './Searchinput';
import ImageList from './ImageList'
import axios from 'axios'

class home extends React.Component{

    constructor(props){
        super(props)
        this.state ={images:[]}
        this.onSearchSubmit=this.onSearchSubmit.bind(this)
    }
   
    async onSearchSubmit(entry){
        const response =await axios.get(`https://pixabay.com/api/?key=24998371-26623a4b91fbb8d4c8b806915&q=${entry}&image_type=photo&pretty=true`)
        console.log(response.data.hits)
        this.setState({images: response.data.hits})
    }
    render(){
        return(
          
            <div className="ui container" style={{marginTop:'30px'}}>
            <Searchinput onSearchSubmit={this.onSearchSubmit}/>   
           <ImageList images={this.state.images}/>
            </div> 
          
        )

    }
    }
export default home;