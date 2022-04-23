import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import Logos from './Logos'

const Layout = ({children}) => {
	
	return (
		<>
		<div className='container grid'>
		<header className='grid'>
			<Logos/>
			<Navbar/>
		</header>
		<div className='main'>
		{children}
		</div>
		<Footer/>
		</div>
		
		</>
	)
}

export default Layout
