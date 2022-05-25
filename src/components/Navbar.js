import React, {useState} from "react"
import { Link } from "gatsby"
import {AiFillGithub, AiFillLinkedin, AiTwotoneRocket, AiOutlineMenu} from 'react-icons/ai'

const Navbar = () => {
	const [show, setShow] = useState(false)
  return (
    <div className="container navigation flex">
      <div className="logo">
        <Link to="/">ЧашкаНотатків</Link>
      </div>
      <form className="none">
        <label>
          <input />
        </label>
      </form>
			<button className="nav-btn" onClick={() => setShow(!show)}><AiOutlineMenu/></button>
      <nav className={show ? "nav" : "nav none"}>
        <ul>
          <li>
            <Link to="/" activeClassName="active-link" onClick={() => setShow(false)}>Головна</Link>
          </li>
          <li>
            <Link to="/blog" activeClassName="active-link" onClick={() => setShow(false)}>Нотатки</Link>
          </li>
					<li>
						<a href="http://" className="soc-link"><AiFillGithub/></a>	
					</li>
					<li>
						<a href="http://" className="soc-link"><AiFillLinkedin/></a>
					</li>
					<li>
						<a href="http://" className="soc-link"><AiTwotoneRocket/></a>
					</li>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar
