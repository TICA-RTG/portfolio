import { Link } from "react-router-dom"
import workout from '../images/workout-project-interface.PNG'

const Projects = () => {
    return (
        <div className="projects">
           <div className="nav-bar">
                    <h1>Latest Projects</h1>
                    <ul className="project-li">
                     <Link to="/"><li> Home </li></Link>    
                    </ul>
           </div>
           <div className="projects-so-far">
            <p className="sub-header">WORKOUT APP</p>
                <div className="project-card">
                    <div className="project-description">
                    <p>This software is a Workout tracker where a user can track his or her 
                        exercise routine and monitor progress. It comes with an authentication 
                        feature that makes sure all required fields are filled before any workout 
                        can be added. More authentication features such as signup and sign in are being worked on.
                        This App was built with Node.Js, MongoDB and React.js, making use of React Context API.
                    </p>
                    </div>
                    <div className="d4"><img src={workout} alt="" className="project-interface"></img></div>
                </div>
           </div>
        </div>
    )
}

export default Projects