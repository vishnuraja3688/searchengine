import React from 'react'



function myfun() {
    <a href='/home'></a>
}

const navbar =()=>{
    return(
        
    <div>
        <div onLoad={myfun()}></div>
       
    <nav className="ui raisedvery padded segment">

    <a className="ui teal invrted segment">Vishnu's Image Search Engine!</a>
    <div className="ui right floated header">
        <button className="ui button"><a href='/home'>Home</a></button>
        <button className="ui button"><a href='/about'>About</a></button>
        <button className="ui button"><a href='/contact'>Contact</a></button>
    </div>
    </nav>
    </div>
    )
}

export default navbar;