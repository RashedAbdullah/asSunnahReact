import React from 'react';
import './Skills.css';

const Skills = () => {
  return (
    <div className='mainSkillDiv'>
      <div>
        <div className='skillHead'>
          <h2>My Skills</h2>
        </div>

        <div className='skillsDiv'>

          <div className='developmentSkills'>
            <p>Development</p>
            <div className='singleSkills'>
              <div className="React">
                <p>React.js 70% </p>
                <p className='reactSkill'></p>
              </div>
              <h4 style={{textAlign: "end"}}>Javascript</h4>
              <div className="javascript">
                <div style={{display: "flex", width: "100%"}}>
                  <p className='jsSkill2'>60%</p>
                  <p className='jsSkill'></p>
                </div>
              </div>
              <div className="css">
                <p>CSS 75%</p>
                <p className='cssSkill'></p>
              </div>
              <div className="html">
                <p>HTML 80%</p>
                <p className='htmlSkill'></p>
              </div>
            </div>
          </div>
          <div className='otherSkills'>
          <p>Others</p>
            <div className='singleSkills'>
              <div className="premierePro">Premiere pro</div>
              <div className="afterEffects">After Effects</div>
              <div className="photoshop">Photoshop</div>
              <div className="illustrator">illustrator</div>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Skills