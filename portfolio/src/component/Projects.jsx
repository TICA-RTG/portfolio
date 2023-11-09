import postgres from '../images/postgresql.svg'
import RI from '../images/ReactIcon.png'
import css from '../images/css-icon.svg'
import js from '../images/javascript-icon.svg'
import mongo from '../images/mongodb-icon.svg'
import nodejs from '../images/node-js-icon.svg'
import expressjs from '../images/express-js-icon.svg'

import SkillCard from './SkillCard'
const Projects = ()=> {
    return (
        <div className="projects" id="project">
            <p className='header'>Skills</p>
            <div className="skill-set">
                <SkillCard description={"JavaScript"} skillIcon={js}/>
                <SkillCard description={"React"} skillIcon={RI}/>
                <SkillCard description={"CSS"} skillIcon={css}/>
                <SkillCard description={"Node Js"} skillIcon={nodejs}/>
                <SkillCard description={"Express Js"} skillIcon={expressjs}/>
                <SkillCard description={"MongoDB"} skillIcon={mongo}/>
                <SkillCard description={"Postgresql"} skillIcon={postgres}/>
            </div>
        </div>
    )
}

export default Projects