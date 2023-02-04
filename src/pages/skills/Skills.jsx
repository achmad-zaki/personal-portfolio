import React from 'react'
import Button from '../../components/button/Button'
import LogoDiamond from '../../assets/icons/diamond.svg'
import './skills.css'

const Skills = () => {
  return (
    <div className='skills-section' id='skills'>
      <div className="container-skills">
        <div className="left-content-skills">
          <div className="text-skills">
            <span>
              My Skills
            </span>
          </div>
          <div className="text-title-skills">
            <h1>Why Hire Me For Your Next <span>Project ?</span></h1>
            <p>I’m specialist in UI/UX Designe. My passion is designing & solving 
              problems through user experience and research.
            </p>
          </div>
          <div className="button-skills">
            <Button
              text='Hire Me'
              className='btn-green'
            />
          </div>
        </div>
        <div className="right-content-skills">
          <div className="grid-item-skills">
            <img src={LogoDiamond} className='logo-skills' alt="" />
            <div className="desc-skills">
              <h3>
                Visual Design
              </h3>
              <p>
                Create user interface design with
                unique & modern ideas
              </p>
            </div>
          </div>
          <div className="grid-item-skills">
            <img src={LogoDiamond} className='logo-skills' alt="" />
            <div className="desc-skills">
              <h3>
                Visual Design
              </h3>
              <p>
                Create user interface design with
                unique & modern ideas
              </p>
            </div>
          </div>
          <div className="grid-item-skills">
            <img src={LogoDiamond} className='logo-skills' alt="" />
            <div className="desc-skills">
              <h3>
                Visual Design
              </h3>
              <p>
                Create user interface design with
                unique & modern ideas
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skills