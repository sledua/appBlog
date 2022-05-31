import React from "react"
import { Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const NoteList = ({ note = [] }) => {
  return (
    <div>
    
      {note.map(post => {
        const { id, title, path, image, description } = post
				const pathToImage = getImage(image)
        return (
          <Link to={`${path}`} key={id}>
            <GatsbyImage image={pathToImage} alt={image.title}/>
            <h5>{title}</h5>
						<p>{description}</p>
          </Link>
        )
      })}
    </div>
  )
}

export default NoteList
