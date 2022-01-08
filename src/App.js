import { Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';



import Navbar from './components/Partials/NavMenu';
import Home from './components/Content/Home';
import AddTutorial from './components/Tutorial/AddTutorial';
import Tutorial from './components/Tutorial/Tutorial';
import TutorialsList from './components/Tutorial/TutorialsList';


function App() {

  return (
    <>
    <Navbar />
      <Switch>
        <Route exact path={['/', '/home']} component={Home} />
        <Route exact path='/tutorials' component={TutorialsList} />
        <Route exact path='/add' component={AddTutorial} />
        <Route path='/tutorials/:id' component={Tutorial} />
      </Switch>
    </>

  );





}

export default App;
