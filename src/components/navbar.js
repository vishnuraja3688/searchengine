import React from 'react'


const navbar =()=>{
    return(
        
    <div>
        
       
    <nav className="ui raisedvery padded segment">

    <a className="ui teal invrted segment,ui tertiary segment,ui tall stacked segment">Vishnu's Image Search Engine!</a>
    <div className="ui right floated header">
        <div className='ui inverted segment'>
        <button className="ui inverted olive button"><a href='/home'>Home</a></button>
        <button className="ui inverted purple button"><a href='/about'>About</a></button>
        <button className="ui inverted yellow button"><a href='/contact'>Contact</a></button>
        </div>
    </div>
    </nav>
    </div>
    )
}

export default navbar;
