import { BrowserRouter } from "react-router-dom"
import { HashLink as Link } from "react-router-hash-link"

const NavBar = ()=> {
    return (
        <BrowserRouter>
        <div className="nav-bar">
            <Link to='#home' smooth>
                <h1>RTG.Inc</h1>
            </Link>
            
                <ul>
                    <Link to="#project" smooth>
                        <li>Work</li>
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