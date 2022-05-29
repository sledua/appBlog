import React from "react"
import brain from "../assets/image/mainPage/brain.jpg"
const Logos = () => {
  return (
    <header>
      <div className="container">
        <div className="row flex">
          <div className="column text-box">
            <h1>Вітаю у ноттках, того самого космонавта</h1>
            <p>Відкривати нове завжди е магіею для твого мозку, невтрачай такої можлисості залітай у нотатки і поглинай нове.</p>
          </div>
          <div className="column img-box">
            <img src={brain} alt="alt" />
          </div>
        </div>
      </div>
    </header>
  )
}

export default Logos
