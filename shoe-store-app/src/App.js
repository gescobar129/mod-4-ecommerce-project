import React from 'react';
import Home from './Home';
import Login from './Login';
import Checkout from './Checkout';
import WomanIndex from './WomanIndex';
import MenIndex from './MenIndex';
import NavbarComponent from './NavbarComponent'
import ShoeShowPage from './ShoeShowPage'
import About from './About'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import ShoeCard from './ShoeCard'

class App extends React.Component {

  state = {
    token: null,
    loggedInUserId: null,
    cartItems: []
  }

  addToCart = (shoe) => {
    this.setState({
      cartItems: [...this.state.cartItems, shoe]
    })
  }

  shoePageWithProps = (routeProps) => {
    return <ShoeShowPage location={routeProps.location} addToCart={this.addToCart} />
  }

  componentDidMount(){
  // this.setToken({
  //   token: localStorage.token,
  //   user_id: localStorage.userId
  // })
    this.setState({
      token: localStorage.token,
      loggedInUserId: localStorage.userId
    })
  }

  setToken = ({ token, user_id })  =>{

    console.log(token, user_id)

    localStorage.token = token
    localStorage.userId = user_id

    this.setState({
      token: token,
      loggedInUserId: user_id
    })
  }

  logOutClick = () => {
    localStorage.userId = undefined
    localStorage.token = undefined

    this.setState({
      loggedInUserId: null,
      token: null
    })
  }

  render() {
  
  return (
    <div>
       { !!this.state.token ? <button onClick={ this.logOutClick }>Log out</button> : "" }
      <Router>
      <NavbarComponent cartItems={this.state.cartItems} />
      <div>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          
          <Route 
          path="/shoe-show-page" 
          component= {this.shoePageWithProps}>
          </Route>

          <Route path="/men-collection">
            <MenIndex />
          </Route>
          <Route path="/woman-collection">
            <WomanIndex />
          </Route>
          <Route path="/checkout">
            <Checkout token={this.state.token} loggedInUserId={ this.state.loggedInUserId } cartItems={this.state.cartItems} />
          </Route>
          <Route path="/login">
            <Login setToken={this.setToken} token={this.state.token} />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>

    {/* <div>
    { !!this.state.token ? <button onClick={ this.logOutClick }>Log out</button> : "" }
      {!!this.state.token ? <Home /> : <Login setToken={ this.setToken } />} */}
    {/* </div> */}

    </div>
    
  );
}
}

export default App;
