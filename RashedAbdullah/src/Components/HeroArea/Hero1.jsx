import './Hero1.css';
import { FaGithub } from "react-icons/fa";
import { IoLogoLinkedin } from "react-icons/io5";
import { RiInstagramFill } from "react-icons/ri";
import { FaFacebook } from "react-icons/fa";
import { ImDownload3 } from "react-icons/im";
import 'animate.css';
import { useTranslation } from 'react-i18next';

const Hero1 = () => {

    const { t } = useTranslation();
    
  return (
    <div className='mainHeroDiv'>
        <div className='threeDiv'>

            <div className='centerHeroArea'>
                <div>
                    <h2 className='animate__animated animate__fadeInDown'>{t("fname")} <span>{t("lname")}</span></h2>
                    <h3 className='animate__animated animate__fadeInDown'>{t("frontend")}</h3>
                    <div className='heroPara animate__animated animate__fadeInUp'><p>{t("aboutmeInhome1")} <span>{t("react")}</span>{t("and")}<span>{t("js")}</span>{t("aboutmeInhome2")}</p></div>
                    <div className='resumeDownload animate__animated animate__fadeInUp'><div><span><ImDownload3 /></span>{t("resume")}</div></div>
                </div>
            </div>
            
        </div>
    </div>
  )
}

export default Hero1;