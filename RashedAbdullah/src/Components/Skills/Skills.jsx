import React from 'react';
import './Skills.css'

const Skills = () => {
  return (
    <div className='skillsMainDiv'>
      <div>
        <div className="skillsHeadDiv">
          <h2>My Skills</h2>
        </div>
        
        <div className="skillsItemsDiv">

          <div className='React-js'>
              <p>React.js</p>
              <div className="bgColor">
                  <div className="mainColor"></div>
              </div>
          </div>

          <div className='React-js'>
              <p>Javascript</p>
              <div className="bgColor mainColor2">
                  <div className="mainColor"></div>
              </div>
          </div>

          <div className='React-js'>
              <p>CSS</p>
              <div className="bgColor">
                  <div className="mainColor"></div>
              </div>
          </div>

          <div className='React-js'>
              <p>HTML5</p>
              <div className="bgColor">
                  <div className="mainColor"></div>
              </div>
          </div>
          
        </div>

      </div>
    </div>
  )
}

export default Skills;