import { BrowserRouter as Router, Routes, Route, Link, Outlet, NavLink } from "react-router-dom";

export default function Header() {
    return (
        <>
            <nav className="navbar navbar-expand-md bg-body-tertiary">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/">
                        Helpdesk
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/">Avaleht</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/posts">Postitused</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/newpost">Lisa postitus</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}