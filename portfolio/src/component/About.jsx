import dp from '../images/Robert1.JPG'

const About = ()=> {
    return (
        <div className='About'>
            <p className='header'>About Me</p>
            <div className='container'>
                <div className="bio">
                <p>
                I earned my B.S. in Mechanical Engineering in 2016 after working full-time
                and going to school full-time for 5 years. Then I proceeded to use all the 
                extra time I had to teach myself something completely new. I went from
                learning how to play guitar and piano to learning how to make music with
                software, then on to learning how to make the software itself.
                </p>
                </div>
                <div className="gallery">
                    <img src={dp} className='photo'/>
                    <img src={dp} className='photo'/>
                    <img src={dp} className='photo'/>
                    <img src={dp} className='photo'/>
                </div>
            </div>
            
        </div>
    )
 }

 export default About