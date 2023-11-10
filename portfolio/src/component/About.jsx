// import dp from '../images/Robert1.JPG'

const About = ()=> {
    return (
        <div className='About' id='about'>
            <p className='header'>About Me</p>
            <div className='container'>
                <div className="bio">
                <p>
                I earned my BSc. in Computer Science in 2020 after
                going to school full-time for 4 years. I worked as a data specialist for a year and half.
                I did data annotation, learnt about computer vision and natural language processing during 
                my time as a data specialist.
                I mostly use my free time to teach myself something completely new or further develop my
                existing knowledge base. I went from
                learning how to play piano to learning how to make music with
                software, then on to learning how to make software.
                </p>
                </div>
                <div className="gallery">
                    {/* <img src={dp} className='photo' alt='developer'/> */}
                </div>
            </div>
            
        </div>
    )
 }

 export default About