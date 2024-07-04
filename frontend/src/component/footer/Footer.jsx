import footerBg from '../../Images/site_assets/footer-bg.webp'
import communityLogo from '../../Images/site_assets/main_t.webp'
import whatsapp from '../../Images/site_assets/WhatsApp.svg'
import gmail from '../../Images/site_assets/gmail.svg'
import './footer.css'
//import x LOGO

import x from '../../Images/site_assets/X-white.svg';
import contact from '../../Images/contact.pdf'
import tc from '../../Images/t&c.pdf'

const Footer = () => {
    return (
        <footer className="footer" id="footer" style={{ "backgroundImage": `url(${footerBg})` }}>
            <div className="footer-top">
                <div className="container">
                    <div className="footer-brand" >
                        <div >
                            <img src={communityLogo}
                                width={320}
                                height={120}
                                style={{ marginLeft: '-52px'}}
                                alt="community logo"
                            />
                            <p className="footer-brand-text" >
                                Thank You for visiting our website. <br />
                                Wishing you a very happy day ahead.
                            </p>
                            <div className="wrapper" >
                                <ul className="social-list" >
                                    <li>
                                        <a href="https://www.facebook.com/profile.php?id=100088472180461" target="_blank" className="social-link">
                                            <ion-icon name="logo-facebook"></ion-icon>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://www.linkedin.com/company/resourcio-community2022/" target="_blank" className="social-link">
                                            <ion-icon name="logo-linkedin"></ion-icon>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://www.instagram.com/resourciocommunity22/" target="_blank" className="social-link">
                                            <ion-icon name="logo-instagram"></ion-icon>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://twitter.com/ResourcioC" target="_blank" className="social-link">
                                            <img className='X-logo' src={x} />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://github.com/Resourcio-Community" target="_blank" className="social-link">
                                            <ion-icon name="logo-github"></ion-icon>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://discord.gg/j2cMDF6Dtx" target="_blank" className="social-link">
                                            <ion-icon name="logo-discord"></ion-icon>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className='flexlinks'>
                            <p>
                                Feel free to leave a message <br />
                                if you have any questions.
                            </p>
                            <br />

                            <div className="wrapper">
                                <img src={whatsapp} height={45} width={45} alt="whatsapp" />
                                <a href="https://chat.whatsapp.com/Km6AX9di04ZLIpFEcXTiNK" target="_blank" className="footer-link">
                                    WhatsApp
                                </a>
                            </div>
                            <div className="wrapper" >
                                <img src={gmail} className='wrapper-1' height={30} width={30} alt="gmail" />
                                <a href="mailto:resourciocommunity22@gmail.com" target="_blank" className="footer-link">
                                    resourciocommunity22@gmail.com
                                </a>
                            </div>
                            <div className="wrapper" >
                                <a href={contact} target='_blank' className="footer-link" rel='noreferrer'>
                                    Contact details
                                </a>
                            </div>
                            
                            <div className="wrapper" >
                                <a href={tc} target='_blank' className="footer-link" rel='noreferrer'>
                                    Terms and Conditions
                                </a>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <div className="container">
                    <p className="copyright">
                        Copyright &copy; {new Date().getFullYear()} All Rights Reserved <span className="copyright-link">Resourcio Community</span>
                    </p>
                </div>
            </div>
        </footer>
    )
}

export default Footer
