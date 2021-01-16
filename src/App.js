import './App.scss';
import { Route, Switch } from 'react-router-dom';
import HomePage from './Pages/HomePage/HomePage';
import RedirectPage from './Pages/RedirectPage/RedirectPage';
import Header from './components/Header';
import firebase from 'firebase/app';
import 'firebase/firestore';

firebase.initializeApp({
  // this key is safe to expose, you wont get nothing by copying them - 
  // https://stackoverflow.com/questions/37482366/is-it-safe-to-expose-firebase-apikey-to-the-public + direct contact to firebase support
  // Alternatively you could do this https://medium.com/@devesu/how-to-secure-your-firebase-project-even-when-your-api-key-is-publicly-available-a462a2a58843
    apiKey: "AIzaSyDfeI8Pp3PtOxSsl-8SD39whRli9RWcs-I",
    authDomain: "mugaly-f1fc4.firebaseapp.com",
    projectId: "mugaly-f1fc4",
    storageBucket: "mugaly-f1fc4.appspot.com",
    messagingSenderId: "653100497992",
    appId: "1:653100497992:web:122b93720aede80b102c7d",
    measurementId: "G-658V5ZSFG4" 
})

const firestore = firebase.firestore();
const linkRef = firestore.collection('links');

function App() {

  return (
    <div className="App">
      <Header className='nav'>muga.ly</Header>
      <Switch>
        <Route exact path="/">
          <HomePage linkRef={linkRef}/>
        </Route>
        <Route path='/l/:linkID'>
          <RedirectPage linkRef={linkRef}/>
        </Route>
        <Route path='*'> Page not found or not yet developed, come back later</Route>
      </Switch>
    </div>
  );
}

export default App;
