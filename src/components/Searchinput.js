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
                        <div className="ui huge icon input">
                            <input type="text" placeholder="Search..."
                            onChange={(event)=>this.setState({entry: event.target.value})}
                            value={this.state.entry} />


                       <div class="ui left corner label">
                            <i class="asterisk icon"></i>
                       </div>

                    <i class="inverted circular search link icon"></i>

                        </div>
                    </div>
                </form>
            </div>
           

        )
    }
}
export default Searchinput;
