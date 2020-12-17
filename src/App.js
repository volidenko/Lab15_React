import logo from './logo.svg';
import './App.css';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import { About, Main, News, NotFound, Product, Staff } from './Main';
import NavMenu from './NavMenu';

function App() {
  let artist={
    name:"Pablo",
    surname:"Picasso"
  }
  return (
    <div className="App">
      <Router>
        <NavMenu></NavMenu>
        <Switch>
            <Route exact path="/" component={Main}></Route>
          {/* <Route exact path="/" component={Main}></Route>
          <Route path="about" component={About}></Route>
          <Route strict path="/news" component={News}></Route>
          <Route path="/staff/:departmen?/:id?" component={Staff}></Route>
          <Route path="/products/:id?(\d+)" component={Product}></Route>
          <Route children={()=><h2>Not found from arrow function</h2>}></Route> */}
          <Route exact path="/" component={Main}></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
