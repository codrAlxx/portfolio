import AboutImage from '../../assets/AlokAbout.jpg'
import CV from '../../assets/Alok_s_CV.pdf'
import {HiDownload} from 'react-icons/hi'
import data from './data'
import Card from '../../components/Card'
import './about.css'

const About = () => {
  return (
    <section id="about" data-aos="fade-in">
        <div className="container about__container">
            <div className="about__left">
                <div className="about__portrait">
                    <img src={AboutImage} alt="About Image" />
                </div>
            </div>
            <div className="about__right">
                <h2>About Me</h2>
                <div className="about__cards">
                    {
                        data.map(item => (
                            <Card key={item.id} className="about__card">
                                <span className='about__card-icon'>{item.icon}</span>
                                <h5>{item.title}</h5>
                                <small>{item.desc}</small>
                            </Card>
                        ))
                    }
                </div>
                <p>
                I love Writing Code and am obsessed with the idea of using software to solve practical Problems. Currently, I am pursuing my Integrated Masters(B.Tech + M.Tech) In Information Technology From Indian Institute of Information Technology(IIIT), Gwalior. 
                </p>
                <p>        
                        I also Like to practice competitive programming and to solve problems, I have been driven by My Intellectual curiosity to find the Most optimal and Best answers to the Most Pressing Questions.
                        My Specialties include learning new skills, problem solving skills and also possess Management and Team skills.
                </p>
                <p>
                Beside Being Online I also love Football, Speed Skating and Reading Fictional Novels.
                </p>
                <a href={CV} download className='btn primary'>Download CV <HiDownload/></a>
            </div>
        </div>
    </section>
  )
}

export default About