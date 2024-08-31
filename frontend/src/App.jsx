import { BrowserRouter, Routes, Route } from "react-router-dom";

import './App.css'
import Posts from './pages/Posts/Posts'
import TabListComponent from "./components/Tabs/Tabs";
import Navbar from "./components/Navbar/Navbar";

import { ChakraProvider } from '@chakra-ui/react'

import { extendTheme } from "@chakra-ui/react"

const theme = extendTheme({
  colors: {
    brand: {
      100: "#f7fafc",
      // ...
      900: "#1a202c",
    },
  },
})

function App() {
  return (
    <>
        <ChakraProvider theme={theme}>
          <BrowserRouter>
              <Navbar/>
              <TabListComponent/>
              <Routes>
                <Route path="/" element={<Posts />} />
              </Routes>
          </BrowserRouter>
        </ChakraProvider>
    </>
  )
}

export default App
