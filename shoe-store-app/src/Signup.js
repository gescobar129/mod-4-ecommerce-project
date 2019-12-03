import React, { Component } from 'react'
import './Signup.css'

export default class Signup extends Component {
  render() {
    return (
      <div>
        <form>
          <div class="form-row">
            <div class="form-group col-md-6">
              <label for="inputEmail4">Email</label>
              <input type="email" class="form-control" id="inputEmail4"></input>
            </div>
            <div class="form-group col-md-6">
              <label for="inputPassword4">Password</label>
              <input type="password" class="form-control" id="inputPassword4"></input>
            </div>
          </div>
          <button type="submit" class="btn btn-primary">Sign in</button>
        </form>
      </div>
    )
  }
}
