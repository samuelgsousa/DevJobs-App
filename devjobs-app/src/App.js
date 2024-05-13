import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import './App.css'
import Header from './containers/Header/Header'
import Home from './containers/Home/Home'
import Apply from './containers/VagaSelec/Apply'
import Footer from './containers/Footer/Footer'
import React, { useEffect, useState} from 'react'

const  App = () => {

  return (
    <>

    <link
    href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css"
    rel="stylesheet"
    integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN"
    crossorigin="anonymous"/>
    
    <Header/>
 {/*Depois arranjar uma forma de passar o search para o header apenas na página de home*/}


 <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/apply/:id" element={<Apply />} />
      </Routes>
    </Router>
        {/* <Route exact path="/" component={Home} />
        <Route path="/apply/:id" component={Apply} /> */}

      
  
    <Footer/>
    
    </>
  );
}

export default App;
