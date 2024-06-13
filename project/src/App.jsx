// import React, { useState } from 'react'

// export default function App() {
//   const api='https://jsonplaceholder.typicode.com/users/3';

//   const [data,setData]=useState([]);

// async function fetchFromApi () {
//     try{
//         let response=await fetch(api);
//         let data=await response.json();
//         console.log(data);
//         setData(data);
//     }
//     catch(err){
//         console.log(err);
//     }
// }

//   return (
//     <div>
//       <div>
//         <h2>Name:{data.name}</h2>
//         <h2>Username:{data.username}</h2>
//         <h2>Email:{data.email}</h2>
//       </div>
//     </div>
//   )
// }

import React from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import User from './pages/User.jsx';
import Dashboard from './pages/Dashboard.jsx';


export default function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/user' element={<User />} />
      <Route path='/dashboard' element={<Dashboard />} />
    </Routes>
    </BrowserRouter>
  )
}
