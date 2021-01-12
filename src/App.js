import './App.scss';
import { Route, Switch } from 'react-router-dom';
import HomePage from './Pages/HomePage/HomePage';
import RedirectPage from './Pages/RedirectPage/RedirectPage';
import Header from './components/Header';


import firebase from 'firebase/app';
import {useCollectionData} from 'react-firebase-hooks/firestore';
import 'firebase/firestore';

firebase.initializeApp({
  // this key is safe to expose, you wont get nothing by copying them - 
  // https://stackoverflow.com/questions/37482366/is-it-safe-to-expose-firebase-apikey-to-the-public + direct contact to firebase support
    apiKey: "AIzaSyDfeI8Pp3PtOxSsl-8SD39whRli9RWcs-I",
    authDomain: "mugaly-f1fc4.firebaseapp.com",
    projectId: "mugaly-f1fc4",
    storageBucket: "mugaly-f1fc4.appspot.com",
    messagingSenderId: "653100497992",
    appId: "1:653100497992:web:122b93720aede80b102c7d",
    measurementId: "G-658V5ZSFG4" 
})

const firestore = firebase.firestore();


function App() {
  return (
    <div className="App">
      <Header className='nav'>muga.ly</Header>
      <Switch>
        <Route exact path="/" component={HomePage}></Route>
        <Route path='/l/:linkID' component={RedirectPage}></Route>
        <Route path='*'> Page not found or not yet developed, come back later</Route>
      </Switch>



    </div>
  );
}

export default App;
