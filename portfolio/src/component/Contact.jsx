import mail from '../images/mail-icon.svg'
import linkedin from '../images/linkedin-logo.svg'
import X from '../images/twitter-logo.svg'
import telephone from '../images/phone-icon.svg'
const Contact = ()=>{
    const phone = "tel:+233503353666";
    return (
        <div className="contact" id="contact">
            <p className="header">Drop A Line</p>
            <div className="for-business">
            <p>For business and freelancing enquiries, feel free 
                to send a message through any of the links below</p>
            </div>
            
            <div className="reach-me">
                <a href="mailto:grantrobert85@gmail.com">
                <img src={mail} alt='mail-address' className='reach-icon'/>
                </a>
                <a href="https://www.linkedin.com/in/robert-okoe-se" target="_blank" rel="noreferrer">
                    <img src={linkedin} alt='linkedIn-address' className='reach-icon'/>
                    </a>
                    <a href="https://twitter.com/TicaGrant?s=09" target="_blank" rel="noreferrer">
                    <img src={X} alt='X-icon' className='reach-icon'/>
                    </a>
                
                    <a href={phone}>
                        <img src={telephone} alt='telephone-number' className='reach-icon'/>
                    </a>
                
            </div>
            
        </div>
    )
}

export default Contact