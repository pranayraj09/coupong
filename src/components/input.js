import React, {Component} from 'react';

class Search extends Component{
    constructor(props){
        super(props);

        this.state = {
            lists: []
        }
    }

    render(){
        return(
            <div>
                <input placeholder="task"/>
            </div>
        )
    }
}

export default Search;