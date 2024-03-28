import { BrowserRouter as Router, Routes, Route, Link, Outlet, NavLink } from "react-router-dom";
import { useState, useEffect } from 'react'

export default function NotFound() {
  return (
    <>
      <div class="container">
        <p style={{ color: "black" }} className="fs-2">Soovitud lehte ei leitud :(</p>
        <NavLink to="/">
          <button type="button" className="btn btn-primary btn-lg btn-block">
            Tagasi avalehel
          </button>
        </NavLink>
      </div>
    </>
  )
}