import React from 'react'
import {useStaticQuery, graphql } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import styled from 'styled-components'
const query = graphql`
{
	allFile {
		nodes {
			name
			childImageSharp {
				gatsbyImageData(
					placeholder: BLURRED
					layout: FIXED
					height: 179
					width: 297
				)
			}
		}
	}
}
`

const Test = () => {
	const data = useStaticQuery(query)
	const nodes = data.allFile.nodes
	
	return (
		<Wrapper>
			{nodes.map((image, id) => {
				const {name} = image
				const pathImage = getImage(image)
				return (
					<article key={id.toString()}>
						<GatsbyImage 
						image={pathImage}
						alt={name}
						/>
						<p>{name}</p>
					</article>
				)
			})}
		</Wrapper>
	)
}
const Wrapper = styled.section`

`
export default Test
