import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import './App.css'
import Posts from './pages/Posts/Posts'
import Login from "./pages/Login/Login";
import WritePost from "./pages/WritePost/WritePost";

import Navbar from "./components/Navbar/Navbar";

import { ChakraProvider, extendTheme, ColorModeScript } from '@chakra-ui/react'

import './App.css'
import theme from './theme'

function Main() {
    let location = useLocation()

    const navbarPaths = [
      '/posts',
      '/new-story'
    ];

    const [showNavbar, setShowNavbar] = useState(false);

    useEffect(()=>{
      setShowNavbar(navbarPaths.includes(location.pathname))
    }, [location])

  return (
    <>
      { showNavbar && <Navbar/> }
      <div className='pages'>
        <Routes>
          <Route path="/posts" element={<Posts />} />
          <Route path="/login" element={<Login/>} />
          <Route path="/new-story" element={<WritePost/>} />
          <Route path="/" element={<Login/>} />
        </Routes>
      </div>
    </>
  )
}

function App() {
  return (
    <ChakraProvider theme={theme}>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <BrowserRouter>
          <ColorModeScript initialColorMode={theme.config.initialColorMode} />
          <Main />
      </BrowserRouter>
    </ChakraProvider>
  )
}

export default App
