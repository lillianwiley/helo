import React, {Component} from 'react';

class Dashboard extends Component{
    constructor(){
        super();

        this.state = {
            
        }
    }

    render(){
        return(
            <div>
                <input type="text" placeholder="Search by Title"/>
                <button>Search</button>
                <button>Reset</button>
                My Posts:
                <input type="checkbox"/>
            
            </div>
        )
    }
}

export default Dashboard;