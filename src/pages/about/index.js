import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import Layout from "../../components/Layout"
import AllNote from "../../components/AllNote"

const About = () => {
  return (
    <Layout>
      <section className="container">
        <StaticImage
          src="../../assets/image/about/cartoon-galaxy-background.jpg"
          alt="cartoon-galaxy-background"
          height={380}
          placeholder='blurred'
          layout="constrained"
          className="image"
        />
        <div className="content">
          <div className="head">
            <h1>
              Детальна інформація про виконавця цього невеликого статичного
              проєту
            </h1>
						<span>Автор Артем <span> Оновленна 28.05.2022</span></span>
          </div>
          <div className="info">
            <p>
              Всім привіт, тут я постараюсь розповісти більш детально про себе.
              Мене звати Артем, мое позицінування в світі розробки як фронтенд
              спеціаліст, цей статичний проєкт зробив за рахунок своеї само
              мотивації бо якщо відсутня мотивайія нічого не получиться.
            </p>
            <span>Що за нотатки? Як вони допожуть автору а також читачу ?</span> 
            <p>
              Нотатки це невелекі замальовки про світ фронтенду, в здебільшому я
              знаходжу інформацію переварюю її, після чого роблю висновки про
              легкість, складність, сумнівність, того чи іншого матиріалу. Це
              повинно допомогти мені здобути свое місце в цій сфері, а також
              тобі мій талоновитий читач.
            </p>
            <span>Автор ти сам вже щось вміеш ?</span>
            <p> 
              Ось невеликий список того де е можливість подивитись на мої
              можливості. <a href="https://github.com/sledua">Гітхаб</a>, <a href="https://www.frontendmentor.io/profile/sledua">Фрондендментор</a>, <a href="https://github.com/sledua">Сторінка з моїми Самописнми
              проєктами</a> доречі якщо ти тут, то це е один із мох ПП. Тому
              відповідати на таке питання я б не хотів робити перераховуванням
              назв технологій, для цього у вас є можливість завітати на мій
              Лінкід додавайтесь до друзів, а також мое СВ також можете завітати
            </p>
						<span>Цю сторінку потрібно бачити один раз ?</span>
						<p>
						Гарне запитання, один раз на тиждень, хоча дивітся на дату оновлення біля заголовку.
						</p>
          </div>
        </div>
				<div>
					<h5>Look new</h5>
					<AllNote/>
				</div>
      </section>
    </Layout>
  )
}

export default About
