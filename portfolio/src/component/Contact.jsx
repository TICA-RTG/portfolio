
const Contact = ()=>{
    const phone = "tel:+233503353666";
    return (
        <div className="contact" id="contact">
            <p className="header">Drop A Line</p>
            <div className="for-business">
            <p>For business and freelancing enquiries, feel free 
                to send a message through any of the links below</p>
            </div>
            
            <ul className="reach-me">
                <a href="mailto:grantrobert85@gmail.com">
                <li>Gmail</li>
                </a>
                <a href="https://www.linkedin.com/in/robert-okoe-se" target="_blank" rel="noreferrer">
                    <li>LinkedIn</li>
                    </a>
                    <a href="https://twitter.com/TicaGrant?s=09" target="_blank" rel="noreferrer">
                    <li>X</li>
                    </a>
                
                    <a href={phone}>
                        <li>Phone</li>
                    </a>
                
            </ul>
            
        </div>
    )
}

export default Contact