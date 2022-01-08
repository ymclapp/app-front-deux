import { Link, Route, Switch } from 'react-router-dom';
import './App.css';


import Home from './components/Content/Home';
import AddTutorial from './components/Tutorial/AddTutorial';
import Tutorial from './components/Tutorial/Tutorial';
import TutorialsList from './components/Tutorial/TutorialsList';


function App() {
  return (
    <div>
      <nav className='navbar navbar-expand navbar-dark bg-dark'>
        <Link to={'/'} className='navbar-brand'>
          In Progress
        
        </Link>

        <div className='navbar-nav mr-auto'>

          <li className='nav-item'>
            <Link to={'/home'} className='nav-link'>
              Home
            </Link>
          </li>

          <li className='nav-item'>
            <Link to={'/tutorials'} className='nav-link'>
              Tutorials
            </Link>
          </li>
          <li className='nav-item'>
            <Link to={'/add'} className='nav-link'>
              Add a Tutorial
            </Link>
          </li>
          </div>
          </nav>
          <div className='container mt-3'>
        <Switch>
          <Route exact path={['/', '/home']} component={Home} />
          <Route exact path='/tutorials' component={TutorialsList} />
          <Route exact path='/add' component={AddTutorial} />
          <Route path='/tutorials/:id' component={Tutorial} />
          </Switch>
      </div>
    </div>
  );





}

export default App;
