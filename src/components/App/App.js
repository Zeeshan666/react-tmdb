import React from 'react'
import Home from '../Home/Home'
import Header from '../elements/Header/Header'
import {BrowserRouter ,Route,Switch} from 'react-router-dom'
import Notfound from '../elements/Notfound/Notfound'
import Movie from '../Movie/Movie'

const App=() =>{
  return (


<BrowserRouter>
<React.Fragment>
<Header/>
  <Switch>
    <Route exact path='/' component={Home}  />
    <Route exact path='/:MovieId' component={Movie}  />
    <Route component={Notfound}/>
  </Switch>
</React.Fragment>

</BrowserRouter>

    

  

  
    
    
  )
}
export default App;