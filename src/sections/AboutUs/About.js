import './About.css'
import aboutus from '../../assets/images/aboutus.png'

const About = () => {
  return (
    <div id="abt">
        <section className="about">
            <div className="main">
                <img src={aboutus} alt="" />
                <div className="all-text">
                    <h4>About Us</h4>
                    <h1>A House of Creative & Intelligent</h1>
                    <p>lorem ipsum dolor sit amet, conhfhfh lorem ipsum dolor sit amet, lorem ipsum dolor sit ametlorem ipsum dolor sit ametlorem ipsum dolor sit amet, conhfhfh lorem ipsum dolor sit amet, lorem ipsum dolor sit ametlorem ipsum dolor sit amet</p>
                    <div className="btn">
                    <button  className="btn2">Our Team</button>
                </div>
                </div>
               
            </div>
        </section>
    </div>
  )
}

export default About