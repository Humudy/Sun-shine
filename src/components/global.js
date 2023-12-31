import React from 'react'
import logo from '../static/log.png'
import fa from '../static/facebook.png'
import insta from '../static/insta.png'

const Global = React.memo(({ children }) => {
    return (
        <div className='wrapper'>
            <div className='appbar'>
                <div className='left-section'>
                    <span className='logo-name'>
                        Sunshine
                    </span>
                </div>
                {/* <div className='right-section'>right</div> */}
            </div>
            <div className='main'>
                {children}
            </div>
            <div className='sub-footer'>
                <div className='sub-footer-info'>
                    <div className='logo'>
                        <img src={logo} alt='logo' />
                    </div>
                </div>
                <div className='sub-footer-info'>
                    <div className='info'>
                        <div className='title'>Mawasiliano</div>
                        <div className='inner'>
                            <div className='icon'>
                                <i className="material-icons-round">
                                    call
                                </i>
                            </div>
                            <div>+255 715 557 228</div>
                        </div>
                        <div className='inner'>
                            <i className="material-icons-round">
                                location_on
                            </i>
                            <div>PO Box 166, Morogoro, Tanzania</div>
                        </div>
                        {/* <div className='inner'>
                            <i className="material-icons-round">
                                mail
                            </i>
                            <div></div>
                        </div> */}
                    </div>
                </div>
                <div className='sub-footer-info'>
                    <div className='info'>
                        <div className='title'>Mitandao ya Kijamii</div>
                        <div className='inner'>
                            <a
                                href="https://www.facebook.com/profile.php?id=61550254547733&mibextid=ZbWKwL"
                                className="link"
                                onClick={(e) => {
                                    e.preventDefault();
                                    window.location.href = "https://www.facebook.com/profile.php?id=61550254547733&mibextid=ZbWKwL";
                                }}
                            >
                                <img src={fa} alt="facebook" />
                                <span>facebook</span>
                            </a>

                        </div>
                        <div className='inner'>
                            <a
                                href="https://instagram.com/step_upsdaycare?utm_source=qr&igshid=NGExMmI2YTkyZg%3D%3D"
                                className="link"
                                onClick={(e) => {
                                    e.preventDefault();
                                    window.location.href = "https://instagram.com/step_upsdaycare?utm_source=qr&igshid=NGExMmI2YTkyZg%3D%3D";
                                }}
                            >
                                <img src={insta} alt='insta' />
                                <span>instagram</span>
                            </a>
                        </div>
                        {/* <div className='inner'>
                            <Link to="#">
                                <img src={twitter} alt='twitter' />
                                <span>twitter</span>
                            </Link>
                        </div> */}
                    </div>
                </div>
            </div>
            <footer className='footer'>
                Copyright © 2023. Developed and Maintained by PamojaSoft.
            </footer>
        </div>
    )
})

export default Global