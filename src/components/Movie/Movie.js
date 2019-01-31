import React, { Component } from 'react'
import {API_KEY, API_URL} from '../../config';
import Navigation from '../elements/Navigation/Navigation';
import MovieInfo from '../elements/MovieInfo/MovieInfo';
import MovieInfoBar from '../elements/MovieInfoBar/MovieInfoBar';
import Spinner from '../elements/Spinner/Spinner';
import Actor from '../elements/Actor/Actor';
import FourColGrid from '../elements/FourColGrid/FourColGrid'
import './Movie.css'
 class Movie extends Component {

state={
movie:null,
loading:false,
Actor:null,
Directors:[]

}
componentDidMount(){
  this.setState({
loading:true,
  })
  const mylink = `${API_URL}movie/${this.props.match.params.MovieId}?api_key=${API_KEY}&language=en-US&page=1`
 console.log(mylink)
  this.fetchlink(mylink);
}

fetchlink=(mylink)=>{
  
fetch(mylink)
.then(res=>res.json())
.then(res=>{
  console.log(res);
 
  if(res.status_code){
this.setState({
  loading:false
})
  }else{
    this.setState({
      movie:res
    },()=>{
    //fetch actrs and directors ki link
    
    let mylink=`${API_URL}movie/${this.props.match.params.MovieId}/credits?api_key=${API_KEY}&language=en-US&page=1`
    fetch(mylink)
.then(res=>res.json())
.then(res=>{
  const Directors= res.crew.filter(member=>{
return(
  member.job==='Director'
)
  })
  //ye rahy crew or cast
  console.log(res.cast)
  console.log(res.crew[0].job)
  this.setState({
    
    Actor:res.cast,
    Directors,
    loading:false
  })
})

    })

  }
})
.catch(error=>console.error('error',error))
  
}



  render() {
    return (
      <div className="rmdb-movie">
        { this.state.movie ?
          <div>
          <Navigation name={this.state.movie.title}/>
          <MovieInfo movie={this.state.movie} directors={this.state.Directors} />
          <MovieInfoBar time={this.state.movie.runtime} budget={this.state.movie.budget} revenue={this.state.movie.revenue}/>
          </div>
          : null
        }
        {
          this.state.Actor ?
          <div className='rmdb-movie-grid'>
            <FourColGrid   title={'Actor'}>
          
            { this.state.Actor.map((e,i)=>{ 
               return <Actor key={i} actor={e}/>
               })
            }
            
          </FourColGrid>
          </div>
          :
          null
        }

        {
          !this.state.Actor && !this.state.loading ? <h1>No movie found</h1> : null
        }
        {
          this.state.loading ? <Spinner/> : null
        }
      </div>
    )
  }
}
export default Movie