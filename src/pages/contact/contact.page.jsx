import './contact.style.scss';

const Contact= ()=>{
    return(
        <div className='page'>
        <div className='contact-section'> 
        <h1> Contact Us</h1>
        <div className='contactcards '>
        <div className='contactcard-WP grow'>
            <h2 className='logo'> Logo WP </h2>
            <h3 className='header'> WhatsApp</h3>
            <span className='info'>+212 689 622 822</span>
        </div>
            <div className='contactcard-email grow'>
            <h2 className='logo'> Logo Email </h2>
            <h3 className='header'> Email Address</h3>
            <span className='info'>Yacoutlouryagli@gmail.com</span>
            
            </div>
            <div className='contactcard-phone grow'>
            <h2 className='logo'> Logo phone </h2>
            <h3 className='header'> Phone Number </h3>
            <span className='info'>+212 689 622 822</span>
            
            </div>

        </div>

        </div>
        </div>
    )

}

export default Contact;