import React from 'react'
import {Link} from 'react-router-dom'

const Header = () => {
  return (
    <div className="inside_app">
    <Link to="/" className="title" ><h1>IMAGE BLOG</h1></Link>
  </div>
  )
}

export default Header