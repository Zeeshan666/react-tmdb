import React from 'react'
import './Header.css'
import {Link} from  'react-router-dom'

const Header = () => {
  return (
    <div>
      <div className="rmdb-header">
          <div className='rmdb-header-content'>
             <Link to='/'>
              <img className="rmdb-logo" src="./images/shan.png" alt="zee"/>
              </Link>

              <img  className="rmdb-tmdb-logo" src="./images/tmdb_logo.png" alt=""/>

          </div>
      </div>
    </div>
  )
}

export default Header;
