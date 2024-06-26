import { useEffect } from "react"
import { Routes, Route, Outlet } from 'react-router-dom'
import axios from 'axios'

import Header from "./components/Header"
import Footer from "./components/Footer"
import About from "./components/About"
import Home from "./components/Home"
import Friends from "./components/Friends"
import Single from "./components/Single"
import Form from "./components/Form"
import Error from "./components/Error"

const App =()=> {


    return(
        <>
    <Header />
    <Routes>
        <Route path='/' element={ <Home />} />
        <Route path='/home' element={ <Home />} />
        <Route path='/about' element={ <About />} />
        <Route path='/friends' element={ <Friends />} />
        <Route path='/friends/:id' element={ <Single />} /> 
        <Route path='/adduser' element={ <Form /> } />
        <Route path='*' element={ <Error />} />
        
        
    </Routes >
    
    <Footer />


        </>

    )
}
export default App