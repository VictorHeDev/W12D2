import React, { Component } from 'react'

export default class Signup extends Component {
  constructor(props) {
    super(props)
    this.state = {
      username: '',
      email: '',
      password: ''
    }
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleInput(type) {
    return () => {
      // wrapped in square brackets to indicate the "key"
      // this means, it will be evaluated before assigned to the key
      this.setState({ [type]: e.target.value })
    }
  }

  // we receive the createNewUser method from the container
  handleSubmit(e) {
    e.preventDefault()
    this.props.createNewUser(this.state)
      .then(() => this.props.history.push('/chirps'));
  }


  render() {
    return (
      <div className='session-form'>
        <h2>Sign Up!</h2>
        <form>
          <label htmlFor="username">Username:
            <input
              type="text"
              value={this.state.username}
              onChange={this.handleInput('username')}
            />
          </label>
          <label htmlFor="email">Email:
            <input
              type="text"
              value={this.state.email}
              onChange={this.handleInput('email')}
            />
          </label>
          <label htmlFor="password">Password:
            <input
              type="password"
              value={this.state.password}
              onChange={this.handleInput('password')}
            />
          </label>
          <button onClick={this.handleInput}>Sign Up!</button>
        </form>

      </div>
    )
  }
}

