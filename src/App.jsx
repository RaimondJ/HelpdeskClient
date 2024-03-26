import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './scss/style.scss';
import 'jquery/dist/jquery.min.js'
import 'bootstrap/dist/js/bootstrap.min.js'
import Header from './Header.jsx'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Home.jsx'
import Post from './Post.jsx'
import Posts from './Posts.jsx'
import NotFound from './NotFound.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route index element={<Home />} />
        <Route path="posts" element={<Posts />} />
        <Route path="newpost" element={<Post />} />
        <Route path='*' element={<NotFound />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
