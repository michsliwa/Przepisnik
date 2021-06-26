import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './scss/main.scss';
import Start from './components/Start';
import Recipes from './components/Recipes';
import Plans from './components/Plans';

function App() {
  return (

      <Router>
        <div className="App">
      <Switch>
        <Route path="/" exact component={Start}></Route>
        <Route path="/przepisy" component={Recipes}></Route>
        <Route path="/plany" component={Plans}></Route>
      </Switch>
      </div>
      </Router>


  );
}
export default App;
