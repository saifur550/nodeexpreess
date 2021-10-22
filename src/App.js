
import './App.css';
import { useState, useEffect, useRef } from 'react';

function App() {
  const[user , setUser] = useState([]);
  const nameRef = useRef()
  const emailRef = useRef()

  useEffect( ()=>{
    fetch('http://localhost:5000/users')
    .then(res =>res.json())
    .then(data => setUser(data))
  },[])


  const handleAdduser = e =>{
    const name = nameRef.current.value;
    const email = emailRef.current.value;
    const newUser = { name : name , email : email}




    //send data to the server
    fetch('http://localhost:5000/users', {
      method:'post',
      headers:{
        'Content-type':'application/json'
      },
      body:JSON.stringify(newUser)
    })

    .than(res=>res.json())
    .then(data =>{
      console.log(data);
      const addedUser = data;
      const newUsers = [...user, addedUser];
      setUser(newUsers)
    })





    //send data to the server
    e.preventDefault();
  }


  return (
    <div className="App">
      <h3>user Number:{user.length}</h3>
      <ul>

      <form onSubmit={handleAdduser}>
        <input type="text" ref={nameRef} placeholder ="Name"/> <br />
        <input type="email" ref={emailRef} placeholder ="email"/> <br />
        <input type="submit" value="Submit" />
      </form>
        
        {
          user.map(user =>
           <li
           key={user.id}
           >
             {user.id}  

             {user.name}  

             {user.email}
          </li>)
        }
      </ul>
    </div>
  );
}

export default App;
