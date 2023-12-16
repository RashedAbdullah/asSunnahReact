import './Projects.css';
import { FaGithub } from "react-icons/fa";
import { FaLink } from "react-icons/fa";
import CodeImg from '../../assets/Img/codeimg.png'
import { useTranslation } from 'react-i18next';


const Projects = () => {
    const { t } = useTranslation();
  return (
    <div className='projectsMainDiv1'>
        <div className='projectHead animate__animated animate__flipInX'><h2>{t("projects")}</h2></div>
        <div className='projectsMainDiv2'>
            <div className='ProjectCard animate__animated animate__fadeInUp'>
                <div className='projectsImgBox'>
                    <img src={CodeImg} alt="" />
                </div>
                <div className='projectsTitleBox'>

                </div>
                <div className='ProjectsDetailsBox'>
                    <h3>{t("projectTitle")}</h3>
                </div>
                <div className='projectInfo'>
                    <p>{t("projectDesc")}</p>
                </div>
                <div className='ProjectGithubAndLiveLink'>
                    <p><a href=""><FaGithub /></a></p>
                    <p><a href=""><FaLink /></a></p>
                </div>
            </div>
            <div className='ProjectCard animate__animated animate__fadeInUp'>
                <div className='projectsImgBox'>
                    <img src={CodeImg} alt="" />
                </div>
                <div className='projectsTitleBox'>

                </div>
                <div className='ProjectsDetailsBox'>
                    <h3>{t("projectTitle")}</h3>
                </div>
                <div className='projectInfo'>
                    <p>{t("projectDesc")}</p>
                </div>
                <div className='ProjectGithubAndLiveLink'>
                    <p><a href=""><FaGithub /></a></p>
                    <p><a href=""><FaLink /></a></p>
                </div>
            </div>
            <div className='ProjectCard animate__animated animate__fadeInUp'>
                <div className='projectsImgBox'>
                    <img src={CodeImg} alt="" />
                </div>
                <div className='projectsTitleBox'>

                </div>
                <div className='ProjectsDetailsBox'>
                    <h3>{t("projectTitle")}</h3>
                </div>
                <div className='projectInfo'>
                    <p>{t("projectDesc")}</p>
                </div>
                <div className='ProjectGithubAndLiveLink'>
                    <p><a href=""><FaGithub /></a></p>
                    <p><a href=""><FaLink /></a></p>
                </div>
            </div>
            <div className='ProjectCard animate__animated animate__fadeInUp'>
                <div className='projectsImgBox'>
                    <img src={CodeImg} alt="" />
                </div>
                <div className='projectsTitleBox'>

                </div>
                <div className='ProjectsDetailsBox'>
                    <h3>{t("projectTitle")}</h3>
                </div>
                <div className='projectInfo'>
                    <p>{t("projectDesc")}</p>
                </div>
                <div className='ProjectGithubAndLiveLink'>
                    <p><a href=""><FaGithub /></a></p>
                    <p><a href=""><FaLink /></a></p>
                </div>
            </div>
            <div className='ProjectCard animate__animated animate__fadeInUp'>
                <div className='projectsImgBox'>
                    <img src={CodeImg} alt="" />
                </div>
                <div className='projectsTitleBox'>

                </div>
                <div className='ProjectsDetailsBox'>
                    <h3>{t("projectTitle")}</h3>
                </div>
                <div className='projectInfo'>
                    <p>{t("projectDesc")}</p>
                </div>
                <div className='ProjectGithubAndLiveLink'>
                    <p><a href=""><FaGithub /></a></p>
                    <p><a href=""><FaLink /></a></p>
                </div>
            </div>
            <div className='ProjectCard animate__animated animate__fadeInUp'>
                <div className='projectsImgBox'>
                    <img src={CodeImg} alt="" />
                </div>
                <div className='projectsTitleBox'>

                </div>
                <div className='ProjectsDetailsBox'>
                    <h3>{t("projectTitle")}</h3>
                </div>
                <div className='projectInfo'>
                    <p>{t("projectDesc")}</p>
                </div>
                <div className='ProjectGithubAndLiveLink'>
                    <p><a href=""><FaGithub /></a></p>
                    <p><a href=""><FaLink /></a></p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Projects;