import React, { Component } from 'react'
import FontAwesome from 'react-fontawesome'
import './SearchBar.css'
 class SearchBar extends Component {
 
    state={
    value:'',
    }
   dosomething=(e)=>{
   
      this.setState({
        value:e.target.value,
      })
      clearTimeout(this.timeout)
    this.timeout= setTimeout(()=>{
     this.props.searchItem(this.state.value)
    },500)
    }


    render() {
      
    return (
      <div className="rmdb-searchbar">
        <div className="rmdb-searchbar-content">
          <FontAwesome  className="rmdb-fa-search"  name="search" size="2x"></FontAwesome>
          <input type="text" 
          onChange={this.dosomething.bind(this)}
          className="rmdb-searchbar-input"
          placeholder="search"
          value={this.state.value}
          />

        </div>
        
      </div>
    )
  }
}

export default SearchBar
