import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import styled from "styled-components"

//import {space} from '../assets/img/mainPage/braine.jpg'
//тут імпортуй
const Image = () => {
  return (
    <Wrapper>
      <article>
        <StaticImage
          src="../assets/image/posts/astronaut-dj-with-turntable-open-space.jpg"
          alt="text img default"
					height={380}
					placeholder='tracedSVG'
					layout="constrained"
					className="image"
        />
      </article>
    </Wrapper>
  )
}
const Wrapper = styled.section``
export default Image
