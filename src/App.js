import './App.scss';
import { Route, Switch } from 'react-router-dom'
import HomePage from './Pages/HomePage/HomePage'

import Header from './components/Header';



function App() {
  return (
    <div className="App">
      <Header className='nav'>muga.ly</Header>
      <Switch>
        <Route exact path="/" component={HomePage}></Route>
        <Route path='*'> Page not found or not yet developed, come back later</Route>
      </Switch>



    </div>
  );
}

export default App;
