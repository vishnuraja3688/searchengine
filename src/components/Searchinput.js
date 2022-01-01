import React from "react";

class Searchinput extends React.Component{  
   
    constructor(props){
        super(props)
        this.state={ entry:''}
    }
    onFormSubmit =(event)=>{
        event.preventDefault();
        this.props.onSearchSubmit(this.state.entry)
    }
    render(){
        return(
             
            <div className="ui red segment,ui raised segment,ui stacked segment,ui mini segment">
                <form action="" onSubmit={this.onFormSubmit} className="ui form">
                    <div className="field">
                        <div className="ui massive icon input">
                            <input type="text" placeholder="Search here..."
                            onChange={(event)=>this.setState({entry: event.target.value})}
                            value={this.state.entry} />
                        
                            <i className="heart icon"></i>
                        </div>
                    </div>
                </form>
            </div>
           

        )
    }
}
export default Searchinput;