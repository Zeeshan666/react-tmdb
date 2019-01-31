import React from 'react'
import './LoadMoreBtn.css'
const LoadmoreBtn = (props) => {
  return (
    <div className="rmdb-loadmorebtn" onClick={props.LoadMore}>
      <p>{props.text}</p>
      
    </div>
  )
}

export default LoadmoreBtn
