import React from 'react'
import './gallary.css'



const navbar =()=>{
    return(
        
    <div>
        
       
    <nav className="ui raisedvery padded segment">

    <a className="ui teal invrted segment">Vishnu's Image Search Engine!</a>
    <div className="ui right floated header">
        <button className="ui red basic button"><a href='/home'>Home</a></button>
        <button className="ui green basic button"><a href='/about'>About</a></button>
        <button className="ui yellow basic button"><a href='/contact'>Contact</a></button>
    </div>
    </nav>
    </div>
    )
}

export default navbar;