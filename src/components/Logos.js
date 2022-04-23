import React from 'react'
import git from '../assets/img/icon/github-brands.svg'
import lin from '../assets/img/icon/linkedin-in-brands.svg'
const Logos = () => {
	return (
		<div className='logo'>
			<div className='imgage-box'>
				<a href='https://github.com/sledua'>
					<img src={git} alt='git'/>
				</a>
			</div>
			<div className='imgage-box'>
				<a href='https://www.linkedin.com/in/artem-guida-27660917a/'>
					<img src={lin} alt='link'/>
				</a>
			</div>
		</div>
	)
}

export default Logos
