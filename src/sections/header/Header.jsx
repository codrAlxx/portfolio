import { useEffect } from 'react'
import HeaderImage from '../../assets/alokJha.jpg'
import data from './data'
import AOS from 'aos'
import 'aos/dist/aos.css'
import './header.css'

const Header = () => {
  useEffect(() => {
    AOS.init({duration: 2000})
  }, [])

  return (
    <header id="header">
      <div className="container header__container">
        <div className="header__profile" data-aos="fade-in">
          <img src={HeaderImage} alt="Header Portait" />
        </div>
        <h3  data-aos="fade-up">ALOK JHA</h3>
        <p  data-aos="fade-up">
          'I am a passionate web developer in my final year of college, 
        eager to create immersive online experiences.
         With a keen eye for design and a knack for coding, 
         I specialize in crafting dynamic and user-friendly websites.'
        </p>
        <p data-aos="fade-up">FULL STACK DEVLOPER WHO WANTS TO LEARN NEW TECHNOLOGIES</p>
        <div className="header__cta"  data-aos="fade-up">
          <a href="#contact" className='btn primary'>Let's Talk</a>
          <a href="#portfolio" className='btn light'>My Projects</a>
        </div>
        <div className="header__socials">
          {
            data.map(item => <a key={item.id} href={item.link} target="_blank" rel="noopener noreferrer">{item.icon}</a>)
          }
        </div>
      </div>
    </header>
  )
}

export default Header