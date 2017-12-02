import React, {Component} from 'react';
import axios from 'axios';

class List extends Component{
    constructor(props){
        super(props);

        this.state = {
            tasks: [],
            completedTasks: [],
            notCompletedTasks : [],
        }
    }

    componentDidMount(){
        axios.get(`http://quip-todos.herokuapp.com/get_todos?email=pranay@apple.com`).then(res => {
            let tasks = res.data.map(obj => obj.text);
            this.setState({tasks})
        })
    }


    render(){
        return(
            <div>
                <button>Completed</button>
                <button>Not Completed</button>
                <button>All</button>

                <h1>Tasks Lists</h1>
                <ul>
                    {this.state.tasks.map( list =>
                        <li>{list}</li>
                    )}
                </ul>
            </div>
        )
    }
}

export default List;