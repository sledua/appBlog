import React from 'react'
import Layout from '../../components/Layout'

const TemplateNotes = (props) => {
	return (
		<Layout>
			<div className='container'>
			{props.params.title}
		</div>
		</Layout>
		
	)
}

export default TemplateNotes
