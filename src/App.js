import './App.scss';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import Index from './components/Index';
import Search from './Search/Search';
import Artist from './Artist/Artist';

function App() {
  return (
    <Router basename="/">
      <Switch>
        <Route exact path="/" component={Index} />
        <Route path="/artist/:name" component={Artist} />
        <Route path="/search" component={Search} />
      </Switch>
    </Router>
  );
}

export default App;
