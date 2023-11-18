// import { BrowserRouter } from "react-router-dom"
import { HashLink } from "react-router-hash-link"
import { Link } from "react-router-dom"
import { useState } from "react"
// import Projects from "./Projects"

const NavBar = ()=> {

    const [menuOpen, setMenuOpen] = useState(false)


    return (
        <div className="nav-bar">
            <HashLink to='#home' smooth>
                    <h1 className="h1">RTG.Inc</h1>
            </HashLink>
            <div className="menu-button" onClick={()=> {
                setMenuOpen(!menuOpen)
                }}>
                <span></span>
                {/* <span></span>
                <span></span> */}
            </div>
            
                    <ul className={menuOpen ? "menu-open" : "menu-closed"}>
                        <HashLink to="#skill" smooth>
                            <li>Skills</li>
                        </HashLink>
                        <HashLink to="#about" smooth>
                            <li>About</li>
                        </HashLink>
                        <HashLink to="#contact" smooth>
                            <li>Contact</li>
                        </HashLink>
                        
                        <Link to="/Projects">
                            <li>Projects</li>
                        </Link>
                        
                    </ul>
                
        </div>
    )
}

export default NavBar