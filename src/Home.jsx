import { BrowserRouter as Router, Routes, Route, Link, Outlet, NavLink } from "react-router-dom";

function Home() {
  return (
    <>
      <div className="container text-center">
        <h1 className="p-2">Helpdesk</h1>
        <p className="p-3 fs-2">Kokku on tehtud 10 postitust</p>
        <NavLink to="/posts">
          <button type="button" class="btn btn-primary btn-lg btn-block">
            Vaata kõiki pöördumisi
          </button>
        </NavLink>
        <br></br><br></br>
        <NavLink to="/newpost">
          <button type="button" class="btn btn-primary btn-lg btn-block">
            Lisa uus pöördumine
          </button>
        </NavLink>
      </div>
    </>
  )
}

export default Home