import './App.css';
import React, { useState } from 'react'

function App() {
 const [name,setName]=useState("");
 const [email,setEmail]=useState("");
 const [body,setBody]=useState("");
function addData()
{
  let data={name,email,body}
// console.warn(data);
  fetch("http://localhost:3000/users", {
    method: "POST",
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body:JSON.stringify(data)
  }).then((resp)=>{
    // console.warn("resp",resp);;
    resp.json().then((result)=>{
      console.warn("result",result)
    })
  })
}
  return (
    <div className="App">
      
      <img className="logo" src='icon.jpg' />
      <h1>POST API Web App </h1>  
      <input type="text" name="name" value={name} onChange={(e)=>{setName(e.target.value)}}  /> <br /> <br />
      <input type="text" name="email"  value={email} onChange={(e)=>{setEmail(e.target.value)}} /> <br /> <br />
      <input type="text" name="body"  value={body} onChange={(e)=>{setBody(e.target.value)}}/> <br /> <br />
      <button type="button" onClick={addData} >Add New User</button>
    </div>
  );
}
export default App;