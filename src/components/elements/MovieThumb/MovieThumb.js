import React from 'react'
import './MovieThumb.css'
import {Link} from  'react-router-dom'


const MovieThumb = (props) => {
  return (
    <div className="rmdb-moviethumb">
     {
       props.clickable ?
       <Link to={{ pathname:`/${props.movieId}`,moviename:`${props.movieName}`}}>
       <img src={props.image} alt="movies"/>
       </Link>
       :   
       
       <img src={props.image} alt="movies"/>
      

     }
      
    </div>
      
      
     
  )
}
 
export default MovieThumb;
