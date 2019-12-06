import React, { Component } from 'react';

export class PastOrders extends Component {

    state = {
        currentUser: {}
    }

     

    getLoggedinUser = () => {
        fetch(`http://localhost:3000/users/` + this.props.loggedInUserId)
        .then(r => r.json())
        .then(data => {console.log(data)})
         
    }



    render() {
        console.log(this.props.loggedInUserId)
        return (
            <div>
                <h2>hello</h2>
                <h1>{this.state.currentUser.username}</h1>
            </div>
        );
    }

    componentDidMount (){
        this.getLoggedinUser()
    }
}

export default PastOrders;
