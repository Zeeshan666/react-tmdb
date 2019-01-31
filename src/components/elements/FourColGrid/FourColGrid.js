import React from 'react'

import './FourColGrid.css'

const FourColGrid = (props) => {

const  renderElements=()=>{
    const gridelements = props.children.map((movies,id)=>{
return(
<div key={id} className="rmdb-grid-element">
  {movies}
</div>
)
    })
    return gridelements;
  }




  return (
    <div className="rmdb-grid">
      {props.title && !props.loading ? <h1>{props.title}</h1>:null}
      <div className="rmdb-grid-content">
        {renderElements()}

      </div>
      
    </div>
  )
}


export default FourColGrid
