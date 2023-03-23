import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/images.jpeg'
import IMG2 from '../../assets/images (1).jpeg'
import IMG3 from '../../assets/images (2).jpeg'

const Portfolio = () => {
  return (
    <section id='portfoilio'>
      <h5>My Recent work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        <article className='portfolio__item'>
          <div className="portfolio__item image">
            <img src={IMG1} alt="" />
          </div>
            <h3>This is a portfolio item title</h3>
            <a href="https://github.com"className='btn' target='_blank'>Github</a>
        </article>
        <article className='portfolio__item'>
          <div className="portfolio__item image">
            <img src={IMG2} alt="" />
          </div>
            <h3>This is a portfolio item title</h3>
            <a href="https://github.com"className='btn' target='_blank'>Github</a>
        </article>
        <article className='portfolio__item'>
          <div className="portfolio__item image">
            <img src={IMG3} alt="" />
          </div>
            <h3>This is a portfolio item title</h3>
            <a href="https://github.com"className='btn' target='_blank'>Github</a>
        </article>
      </div>
    </section>
  )
}

export default Portfolio