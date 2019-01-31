import React, { Component } from 'react';
import { API_KEY, API_URL, BACKDROP_SIZE, IMAGE_BASE_URL, POSTER_SIZE } from '../../config';
import FourColGrid from '../elements/FourColGrid/FourColGrid';
import HeroImage from '../elements/HeroImage/HeroImage';
import LoadMoreBtn from '../elements/LoadMoreBtn/LoadmoreBtn';
import SearchBar from '../elements/SearchBar/SearchBar';
import Spinner from '../elements/Spinner/Spinner';
import MovieThumb from '../elements/MovieThumb/MovieThumb';
import './Home.css';
import LoadmoreBtn from '../elements/LoadMoreBtn/LoadmoreBtn';
class Home extends Component {
  state={
    movies:[],
    HeroImage:'',
    currentpage:0,
    totalPage:0,
    searchTerm:'',
    loading:false
  }
  componentDidMount(){
    this.setState({
loading:true,
    })
    const mylink = `${API_URL}movie/popular?api_key=${API_KEY}&language=en-US&page=1`
    this.fetchlink(mylink);
  }


searchItem=(searchTerm)=>{
 
 let mylink ="";
this.setState({
loading:true,
movies:[],
searchTerm,
})

if(searchTerm===""){
mylink =`${API_URL}movie/popular?api_key=${API_KEY}&language=en-US&page=1`
}
else{
  mylink=`${API_URL}search/movie?api_key=${API_KEY}&language=en-US&query=${searchTerm}`
}
console.log(searchTerm);
this.fetchlink(mylink)

  
}






LoadMore=()=>{  
this.setState({
  loading:true
})
  let mylink='';
  if(this.state.searchTerm===''){
  mylink = `${API_URL}movie/popular?api_key=${API_KEY}&language=en-US&page=${this.state.currentpage+1}`
  }else{
    mylink=`${API_URL}search/movie?api_key=${API_KEY}&language=en-US&query=${this.state.searchTerm}`
  }
  this.fetchlink(mylink)
}


  fetchlink=(mylink)=>{
    fetch(mylink)
    .then(res=>res.json())
    .then(res=>{
      console.log(res)
      const randompage= Math.floor(Math.random()*20)
      
      this.setState({
        movies:[...this.state.movies,...res.results],
        HeroImage:this.state.HeroImage || res.results[randompage],//heroimage k saman
        loading:false,
        currentpage:res.page,
        totalPage:res.total_pages 
      })
      console.log(this.state.HeroImage.backdrop_path)
     })
     .catch(error=>console.error("erroe:",error))
  }
  

  render() {
    return (
      <div className="rmdb-home">
        {this.state.HeroImage ? 
        <div>
        <HeroImage  
        image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${this.state.HeroImage.backdrop_path}`}
      title={this.state.HeroImage.title}
      date={this.state.HeroImage.release_date}
      text={this.state.HeroImage.overview}
      rating={this.state.HeroImage.vote_average}

         />
        <SearchBar  searchItem={this.searchItem}/> 
        </div>
        : null }
    <div className="rmdb-home-grid">
    <FourColGrid
title={this.state.searchTerm ?  'Search movies' : 'Popular Movies'}
loading={this.state.loading}
    >{
      this.state.movies.map((element,id)=>{
return(
  <MovieThumb   key={id}
  clickable={true}
  image={element.poster_path ?  `${IMAGE_BASE_URL}${POSTER_SIZE}${element.poster_path}`:'./images/no_image.jpg'}
   movieId={element.id}
   movieName={element.orginiol_title}
   
   />
)
      })
    }
    </FourColGrid>

    {this.state.loading ?    <Spinner/> : null}
        {this.state.currentpage <= this.state.totalPage && !this.state.loading  ?
         <LoadmoreBtn  text={'laod more'} LoadMore={this.LoadMore} /> :null }
        
    </div>
      
      </div>
    )
    
  }
}

export default Home;