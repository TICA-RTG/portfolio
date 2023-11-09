import svg from '../images/api-interface.svg'
import RI from '../images/ReactIcon.png'
import SkillCard from './SkillCard'
const Projects = ()=> {
    return (
        <div className="projects" id="project">
            <p className='header'>Skills</p>
            <div className="skill-set">
                <SkillCard description={"JavaScript"} skillIcon={svg}/>
                <SkillCard description={"React"} skillIcon={RI}/>
                <SkillCard description={"Node Js / Express Js"} skillIcon={RI}/>
                <SkillCard description={"MongoDb"} skillIcon={RI}/>
                <SkillCard description={"Postgres"} skillIcon={RI}/>
            </div>
        </div>
    )
}

export default Projects