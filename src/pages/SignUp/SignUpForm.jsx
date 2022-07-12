import React, { Component } from 'react'

export default class SignUpForm extends Component {
  /**
   * 受控组件
   */

  constructor() {
    super()
    this.state = {
      username: '',
      email: '',
      password: '',
      passWordConfirmation: ''
    }
  }

  onSubmit = (e) => {
    e.preventDefault()
    console.log(this.state)
  }

  changeHandle = (e) => {
    /**
     * ES6: Object扩展
     * Object = {
     *  [key]: value
     * }
     */
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  render() {
    const { username, email, password, passWordConfirmation } = this.state
    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <h1>Join Hyperluo's Login System</h1>
          <div className='form-group'>
            <label className='control-label'>UserName</label>
            <input
              className='form-control'
              type='text'
              name='username'
              value={ username }
              onChange={ this.changeHandle }
            />
          </div>
          <div className='form-group'>
            <label className='control-label'>Email</label>
            <input
              className='form-control'
              type='text'
              name='email'
              value={ email }
              onChange={ this.changeHandle }
            />
          </div>
          <div className='form-group'>
            <label className='control-label'>PassWord</label>
            <input
              className='form-control'
              type='password'
              name='password'
              value={ password }
              onChange={ this.changeHandle }
            />
          </div>
          <div className='form-group'>
            <label className='control-label'>PassWordConfirmation</label>
            <input
              className='form-control'
              type='password'
              name='passWordConfirmation'
              value={ passWordConfirmation }
              onChange={ this.changeHandle }
            />
          </div>
          <div className='form-group'>
            <button className='btn btn-primary btn-lg'>注册</button>
          </div>
        </form>
      </div>
    )
  }
}