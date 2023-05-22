import React from 'react';
import './App.css';
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import Navbar from './components/Navbar';
import  Home  from './Pages/Home';
import Form from './components/Form';
import DashBoard from './Pages/DashBoard.jsx';
import { Provider } from "react-redux"
import { store } from './app/store.js';

function App() {
  return (
   <>
  <Provider store={store}> 
         <BrowserRouter>
        <Navbar/>
          <Routes>
              <Route path="/"  element={<Home />}/>
              <Route path='/dashboard'   element={<DashBoard/>}/>
              <Route path='/contactform'   element={<Form/>}/>

          </Routes>
      </BrowserRouter> 
      </Provider>

   </>
  );
}

export default App;
