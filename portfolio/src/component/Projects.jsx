import svg from '../images/api-interface.svg'
const Projects = ()=> {
    return (
        <div className="projects">
            <p className='header'>What I Do</p>
            <div>
                <img src={svg} className='project-icon' alt='project-pic'></img>
            </div>
        </div>
    )
}

export default Projects