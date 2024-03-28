import { BrowserRouter as Router, Routes, Route, Link, Outlet, NavLink } from "react-router-dom";
import { useState, useEffect } from 'react'
import axios from 'axios';

function Home() {
  const url = "https://localhost:7256/api/";
  const [postsCount, setPostsCount] = useState(0);
  const [postsCount2, setPostsCount2] = useState(0);
  useEffect(() => {
    axios.get(url + "helpdesk/posts_count")
      .then(res => {
        setPostsCount2(res.data.total);
      })
  }, []);
  useEffect(() => {
    const intervalId = setInterval(() => {
      if (postsCount < postsCount2) {
        let calc = 1;
        let currentPosts = postsCount + calc;
        if (currentPosts > postsCount2) {
          currentPosts = postsCount2;
        }
        setPostsCount(currentPosts);
      }
    }, 25);
    return () => clearInterval(intervalId);
  });
  return (
    <>
      <div className="container text-center">
        <h1 className="p-2">Helpdesk</h1>
        <p className="p-3 fs-2">Kokku on tehtud {postsCount} postitust</p>
        <NavLink to="/posts">
          <button type="button" className="btn btn-primary btn-lg btn-block">
            Vaata kõiki pöördumisi
          </button>
        </NavLink>
        <br></br><br></br>
        <NavLink to="/newpost">
          <button type="button" className="btn btn-primary btn-lg btn-block">
            Lisa uus pöördumine
          </button>
        </NavLink>
      </div>
    </>
  )
}

export default Home