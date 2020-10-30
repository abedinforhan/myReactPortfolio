import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './Components/Home/Home';
import Projects from './Components/Projects/Projects';
import NavBar from './Components/NavBar/NavBar';
import Blog from './Components/Blog/Blog';
import Resume from './Components/Resume/Resume';
import ContactMe from './Components/ContactMe/ContactMe';

function App() {
  return (
    <div className="app">
      <Router>
        <NavBar/>
        <Switch>
          <Route exact path='/'>
            <Home/>
          </Route>
          <Route  path='/home'>
            <Home/>
          </Route>
          <Route path='/project'>
            <Projects/>
          </Route>
          <Route path='/blog'>
            <Blog/>
          </Route>
          <Route path='/resume'>
            <Resume/>
          </Route>
          <Route path='/about'>
            <ContactMe/>
          </Route>
          <Router path='*'>
            <h3>Error 404 Not Found</h3>
          </Router>
        </Switch>
         </Router>
      
    </div>
  );
}

export default App;
