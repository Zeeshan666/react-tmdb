import React from 'react'
import {Link} from 'react-router-dom'
import './Navigation.css'

const Navigation =(props)=> {
  return (
    <div className="rmdb-navigation ">
      <div className="rmdb-navigation-content">
<Link to='/'>
<p>HOME</p>
</Link>

<p>/</p>

<p>{props.name}</p>
      </div>
      
    </div>
  )
}

export default Navigation;
 