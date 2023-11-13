import React from 'react'
import './Footer.scss'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer>        
        <div className="footer-grid">
            <div className="map">
                <h3>Nuestra ubicación</h3>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13108.808163055948!2d-58.3944981!3d-34.7756887!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcd2de01f2dc6b%3A0xc50dcc723506b9eb!2sLa%20vie%20est%20belle.%20Fragancias%20spa%2C%20bath%20%26%20body.!5e0!3m2!1ses-419!2sar!4v1696279760572!5m2!1ses-419!2sar"
                    allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"
                    className="footer-mapa "></iframe>
            </div>
            <div className="footer-links">
                <Link className="cursive lveb-footer" to={"/"}>La vie est Belle</Link>
            </div>
            
            <div className="social-icons">
                <a className="social-media" target="_blank" href="https://www.instagram.com/la_vie_est_belle_fragancias"><i
                        className="bi bi-instagram"></i></a>
                <a className="social-media" target="_blank" href="https://www.facebook.com/lavieestbellefragancias"><i
                        className="bi bi-facebook"></i></a>
                <a className="social-media" target="_blank" href="https://web.whatsapp.com/"><i className="bi bi-whatsapp"></i></a>
            </div>
            <div className="copyright">
                <p>&copy; 2023 La Vie Est Belle - Fragancias. Todos los derechos reservados.</p>
            </div>
        </div>
    </footer>    
  )
}

export default Footer