import {useState, useEffect} from 'react';
import logo from './logo.svg';
import axios from 'axios';
import './App.css';


function App() {
  const[res, setRes] = useState()
 
  useEffect(() => {
    (async() => {
      const api = axios.create({
        baseURL: 'http://127.0.0.1:5000'
      });
      
      await api.get('/api').then(response => setRes(response.data));
    })()
  },[])

  if (res == undefined) {
    return <div></div>
  }

  return (
    <div className="App">
      <header className="App-header">
        {res.data}
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
