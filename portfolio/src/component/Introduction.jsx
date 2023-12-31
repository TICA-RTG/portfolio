import dp from '../images/Robert1.JPG'
import About from './About'
import Contact from './Contact'
import Skill from './Skill'
// import Projects from './Projects'
// import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { HashLink as Link } from 'react-router-hash-link'

const Introduction = ()=> {
    return (

        <div className="main">
            <div className='intro' id='home'>
                <div className='style'><img src={dp} className="profile-picture" alt='developer'></img></div>
                <div className='me'>
                    <h3>Hi, my name is Robert.<br/>
                        I am a web developer.<br/>
                        Have an idea?</h3>
                        <Link to='#contact'>
                            <button className='reach-out'>Let's Talk!</button>
                        </Link>
                </div> 
            </div>
            <Skill/>
            <About/>
            <Contact/>
            <p className='footer'>&copy; 2023 RTG.Inc. All rights reserved. </p>
        </div>

    )
}

export default Introduction