import './Hero1.css';
import { FaGithub } from "react-icons/fa";
import { IoLogoLinkedin } from "react-icons/io5";
import { RiInstagramFill } from "react-icons/ri";
import { FaFacebook } from "react-icons/fa";
import { ImDownload3 } from "react-icons/im";
import 'animate.css';
// import 'animate.min.css';
// import 'animate.compat.css';




const Hero1 = () => {
  return (
    <div className='mainHeroDiv'>
        <div className='threeDiv'>

            {/* <div className='SocialMediaBox'>
                <ul>
                    <li><a target='_blank' href="https://github.com/RashedAbdullah"><FaGithub /></a></li>
                    <li><a target='_blank' href="https://www.linkedin.com/in/rashed4abdullah"><IoLogoLinkedin /></a></li>
                    <li><a target='_blank' href="https://www.instagram.com/Rashed4Abdullah"><RiInstagramFill /></a></li>
                    <li><a target='_blank' href="https://www.facebook.com/Rashed4Abdullah"><FaFacebook /></a></li>
                </ul>
            </div> */}

            <div className='centerHeroArea'>
                <div>
                    <h2 className='animate__animated animate__fadeInDown'>Abdul Ahad <span>Rashed</span></h2>
                    <h3 className='animate__animated animate__fadeInDown'>Fron-end developer</h3>
                    <div className='heroPara animate__animated animate__fadeInUp'><p>Passionate front-end developer with a flair for creating immersive and user-centric web experiences. Proficient in <span>React.js</span> and <span>JavaScript.</span> Dedicated to crafting visually appealing and responsive websites that captivate audiences.</p></div>
                    <div className='resumeDownload animate__animated animate__fadeInUp'><div><span><ImDownload3 /></span>Resume</div></div>
                </div>
            </div>
            
        </div>
    </div>
  )
}

export default Hero1;