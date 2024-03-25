import { BrowserRouter as Router, Routes, Route, Link, Outlet, NavLink } from "react-router-dom";

export default function Header() {
    return (
        <>
            <nav class="navbar navbar-expand-md bg-body-tertiary">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#">Helpdesk</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav">
                            <li class="nav-item">
                                <NavLink className="nav-link" to="/">Avaleht</NavLink>
                            </li>
                            <li class="nav-item">
                                <NavLink className="nav-link" to="/post">Lisa postitus</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}