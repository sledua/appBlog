import React from 'react'
import NoteList from './NoteList'
import {graphql, useStaticQuery} from 'gatsby'
const query = graphql`
  {
    allContentfulNote(sort: {fields: title, order: ASC}) {
      nodes {
        id
        title
        description
        path
        hot
        lists
        content {
          note
        }
        image {
          gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED)
          title
        }
      }
    }
  }
`
const AllNote = () => {
	const data = useStaticQuery(query)
	const note = data.allContentfulNote.nodes
	console.log(note)
	// 6:31
	return (
		<div>
			<h4>All Notes</h4>
			<NoteList note={note}/>
		</div>
	)
}

export default AllNote
