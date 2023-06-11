import React from "react"
import logo from "../logo.svg"
import "../index.css"

export default function NavBar() {
  return (
    <nav>
      <img src={logo} alt="Logo" className="nav--icon" />
      <h3 className="nav--logo_text">React Facts</h3>
      <h4 className="nav--title">React Course - Project1</h4>
    </nav>
  )
}
