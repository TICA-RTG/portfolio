import { BrowserRouter } from "react-router-dom"
import { HashLink as Link } from "react-router-hash-link"
import { useState } from "react"

const NavBar = ()=> {

    const [menuOpen, setMenuOpen] = useState(false)


    return (
        <BrowserRouter>
        <div className="nav-bar">
            <Link to='#home' smooth>
                    <h1 className="h1">RTG.Inc</h1>
            </Link>
            <div className="menu-button" onClick={()=> {
                setMenuOpen(!menuOpen)
                }}>
                <span></span>
                <span></span>
                <span></span>
            </div>
                    <ul className={menuOpen ? "menu-open" : "menu-closed"}>
                        <Link to="#project" smooth>
                            <li>Skills</li>
                        </Link>
                        <Link to="#about" smooth>
                            <li>About</li>
                        </Link>
                        <Link to="#contact" smooth>
                            <li>Contact</li>
                        </Link>
                    </ul>
                
        </div>
        </BrowserRouter>
    )
}

export default NavBar