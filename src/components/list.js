import React, {Component} from 'react';
import axios from 'axios';
import '../App.css';

class List extends Component{
    constructor(props){
        super(props);

        this.state = {
            tasks: [],
            initialTasks: [],
            completedTasks: [],
            notCompletedTasks : [],
            search:'',
            status:[]
        }
    }

    componentDidMount(){
        axios.get(`https://quip-todos.herokuapp.com/get_todos?email=pranay@apple.com`).then(res => {
            let tasks = res.data.map(obj => obj.text);
            this.setState({tasks:tasks, initialTasks: tasks})

            let status = res.data.map(obj => obj.completed);
            let completedTask=[];
            let notCompletedTasks=[];
            for(let i=0; i<status.length;i++){
                if(status[i]=== true){
                   completedTask.push(tasks[i]); // completed tasks
                }else {
                    notCompletedTasks.push(tasks[i]);  //not completed tasks
                }
            }
            this.setState({completedTasks: completedTask});
            this.setState({notCompletedTasks:notCompletedTasks});
        })
    }

    completedStatus(){
        let tasks=this.state.completedTasks;
        this.setState({tasks: tasks});
    }

    notCompletedStatus(){
        let tasks=this.state.notCompletedTasks;
        this.setState({tasks: tasks});
    }

    allTickets(){
        let tasks = this.state.initialTasks;
        this.setState({tasks: tasks})
    }

    //for search
    updateSearch(event){
        let search = event.target.value.toString();
            let updatedList = this.state.initialTasks;
            updatedList = updatedList.filter(function (item) {
                let findTask = item.toLowerCase().search(search.toLowerCase())!== -1;
                if(findTask){
                    return true;
                }else{
                    return false;
                }
            })
        this.setState({tasks: updatedList, search})
    }

    render(){
        return(
            <div className="filter-list">

                <input className="input-box" type="text" placeholder="Enter here" value={this.state.search} onChange={this.updateSearch.bind(this)}/>
                <hr/>
                <div class="status-buttons">
                    <input className="col-md-4 col-lg-4" type="button" value="Completed" onClick={this.completedStatus.bind(this)} />
                    <input className="col-md-4 col-lg-4" type="button" value="Not Completed" onClick={this.notCompletedStatus.bind(this)} />
                    <input className="col-md-4 col-lg-4" type="button" value="All tasks" onClick={this.allTickets.bind(this)} />
                </div>
                <br/>

                <h3>Lists of tasks</h3>

                    {this.state.tasks.map( list =>
                        <li>{list}</li>
                    )}
                <hr/>
                <p>
                    <span>change the to-do list here : <a href="http://www.pranayraj.com/apps/todo">http://www.pranayraj.com/apps/todo</a></span>
                </p>
            </div>
        )
    }
}

export default List;