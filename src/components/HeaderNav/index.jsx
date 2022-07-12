import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class HeaderNav extends Component {
  render() {
    return (
      <nav className='navbar navbar-expand-lg navbar-light bg-light'>
        <div className='container-fluid'>
          <Link className="navbar-brand" to="/">React 登录系统</Link>
          <div className='navbar-collapse'>
            <ul className='navbar-nav mr-auto'>
              <li className='nav-item'>
                <Link className='nav-link' to='/signup'>注册</Link>
              </li>
              <li className='nav-item'>
                <Link className='nav-link' to='/signin'>登录</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    )
  }
}