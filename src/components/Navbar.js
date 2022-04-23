import { Link } from 'gatsby'
import React from 'react'

const Navbar = () => {
	return (
		<nav>
			<ul>
				<li><Link to='/'>home</Link></li>
				<li><Link to='/deliver'>blog</Link></li>
				<li><Link to='/about'>about</Link></li>
				<li><Link to='/practice'>practice</Link></li>
			</ul>
		</nav>
	)
}

export default Navbar
