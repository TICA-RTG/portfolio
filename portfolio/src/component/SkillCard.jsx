
const SkillCard = ({description, skillIcon})=> {
    return (
        <div className="skill">
            <img src={skillIcon} alt='skill' className="skill-icon"/>
            {<p>{description}</p>}
        </div>
    )
}

export default SkillCard