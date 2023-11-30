import './Hero1.css';
import { FaGithub } from "react-icons/fa";
import { IoLogoLinkedin } from "react-icons/io5";
import { RiInstagramFill } from "react-icons/ri";
import { FaFacebook } from "react-icons/fa";
import { MdOutlineWeb } from "react-icons/md";
import { ImHome } from "react-icons/im";
import { FaCode } from "react-icons/fa";
import { IoDocumentText } from "react-icons/io5";
import { FaUser } from "react-icons/fa6";





const Hero1 = () => {
  return (
    <div className='mainHeroDiv'>
        <div className='threeDiv'>

            <div className='SocialMediaBox'>
                <ul>
                    <li><div><a target='_blank' href="https://github.com/RashedAbdullah"><FaGithub /></a></div></li>
                    <li><div><a target='_blank' href="https://www.linkedin.com/in/rashed4abdullah"><IoLogoLinkedin /></a></div></li>
                    <li><div><a target='_blank' href="https://www.instagram.com/Rashed4Abdullah"><RiInstagramFill /></a></div></li>
                    <li><div><a target='_blank' href="https://www.facebook.com/Rashed4Abdullah"><FaFacebook /></a></div></li>
                </ul>
                <div className='sociaBorder'></div>
            </div>
            <div>Hero Area</div>
            <div className='infoBox'>
                <div className="infoBorder"></div>
                <ul>
                    <li><a href=""><div><ImHome /></div></a></li>
                    <li><a href=""><div><FaCode /></div></a></li>
                    <li><a href=""><div><IoDocumentText /></div></a></li>
                    <li><a href=""><div><FaUser /></div></a></li>
                </ul>
            </div>

        </div>
    </div>
  )
}

export default Hero1;