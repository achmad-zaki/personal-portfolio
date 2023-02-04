import React from 'react'
import Button from '../../components/button/Button'
import HeroImg from '../../assets/avatar-hero.png'
import BackgroundImg from '../../assets/rectangle.svg'
import RectangleBorder from '../../assets/rectangle-border.svg'
import Arrow from '../../assets/arrow.svg'
import Dot from '../../assets/dot.svg'
import './about.css'

const About = () => {
  return (
    <div className='about-section' id='about'>
        <img src={Dot} className='dot-image' alt="" />
        <div className="container-about">
            <div className="left-content">
                <div className="text-welcome">
                    <span>
                        Welcome
                    </span>
                </div>
                <div className="text-about">
                    <h1>
                        I have <span>Creative Design</span> Experience
                    </h1>
                    <p>I'm Tanvir, a creative Product Designer. I've been helping businesses 
                        to solve their problems with my design for 2 years.
                    </p>
                </div>
                <div className="button-contact">
                    <Button
                        text='Contact Me'
                        className='btn-green'
                    />
                    <Button
                        text='View Portfolio'
                        className='btn-text'
                        isImage={true}
                        images={Arrow}
                        alt='arrow-logo'
                    />
                </div>
            </div>
            <div className="right-content">
                <div className="image-hero">
                    <img src={HeroImg} className='hero-img' alt="" width={350} />
                    <img src={BackgroundImg} className='background-img' alt="" width={380} />
                    <img src={RectangleBorder} className='rectangle-border' alt="" width={380} />
                </div>
            </div>
        </div>
    </div>
  )
}

export default About