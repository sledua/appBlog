import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const getData = graphql`
{
  site {
    siteMetadata {
      author
      description
      simpleData
      title
      complexData {
        age
        name
      }
      person {
        age
        name
      }
    }
  }
}
`
const FatchData = () => {
	const data = useStaticQuery(getData)
  return (
		<h2>Fetch data</h2>
	)
}

export default FatchData