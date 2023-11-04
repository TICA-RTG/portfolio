import dp from '../images/Robert1.JPG'
import About from './About'
import Contact from './Contact'
import Projects from './Projects'

const Introduction = ()=> {
    return (
        <div className="main">
            <div className='intro'>
                <div className='style'><img src={dp} className="profile-picture" alt='my pic'></img></div>
                <div className='me'>
                    <h3>Hi, my name is Robert.<br/>
                        I am a web developer.<br/>
                        Have an idea?</h3>
                        <button className='reach-out'>Let's Talk!</button>
                </div> 
            </div>
            <Projects/>
            <About/>
            <Contact/>
            <p>&copy; 2023 RTG.Inc. All rights reserved. </p>
        </div>
    )
}

export default Introduction