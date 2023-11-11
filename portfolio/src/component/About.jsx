// import dp from '../images/Robert1.JPG'

const About = ()=> {
    return (
        <div className='About' id='about'>
            <p className='header'>About Me</p>
            <div className='container'>
                <div className="bio">
                <p>
                A dedicated and versatile professional with a Bachelor's degree in Computer Science, 
                earned in 2020, complemented by 1.5 years of hands-on experience as a data specialist. 
                Specialized in data annotation and gained expertise in computer vision and natural 
                language processing. Proven ability to adapt and learn quickly, demonstrated through 
                self-initiated pursuits, such as transitioning from piano playing to music production 
                and expanding skills from software use to software development during free time. 
                Committed to continuous learning and adept at navigating diverse domains to broaden 
                knowledge and skill sets. Passionate about pushing boundaries and contributing to 
                the dynamic landscape of technology.
                </p>
                </div>
                {/* <div className="gallery">
                    <img src={dp} className='photo' alt='developer'/>
                </div> */}
            </div>
            
        </div>
    )
 }

 export default About