
import './App.css';
import { useState, useEffect } from 'react';

function App() {
  const[user , setUser] = useState([]);

  useEffect( ()=>{
    fetch('http://localhost:5000/users')
    .then(res =>res.json())
    .then(data => setUser(data))
  },[] )


  return (
    <div className="App">
      <h3>user Number:{user.length}</h3>
      <ul>
        {
          user.map(user =>
           <li
           key={user.id}
           >
             {user.name}
          </li>)
        }
      </ul>
    </div>
  );
}

export default App;
