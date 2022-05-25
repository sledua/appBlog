import { Link } from "gatsby"
import React from "react"

const Navbar = () => {
  return (
    <div className="container nav flex">
      <div className="logo">
        <Link to="/">ЧашкаНотатків</Link>
      </div>
      <form className="none">
        <label>
          <input />
        </label>
      </form>
      <nav>
        <ul>
          <li>
            <Link to="/">Головна</Link>
          </li>
          <li>
            <Link to="/blog">Нотатки</Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar
