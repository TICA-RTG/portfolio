import { Link } from "react-router-dom";
const Contact = ()=>{
    const phone = +2331111111111;
    return (
        <div className="contact" id="contact">
            <p className="header">Drop A Line</p>
            <p>For business and freelancing enquiries, feel free 
                to send a message through any of the links below</p>
            <ul className="reach-me">
                <a href="mailto:grantrobert85@gmail.com">
                <li>Gmail</li>
                </a>
                <a href="https://www.linkedin.com/in/robert-okoe-se" target="_blank">
                    <li>LinkedIn</li>
                    </a>
                    <a href="https://twitter.com/TicaGrant?s=09">
                    <li>X</li>
                    </a>
                
                <Link to={phone}>
                    <li>Phone</li>
                </Link>
            </ul>
            
        </div>
    )
}

export default Contact