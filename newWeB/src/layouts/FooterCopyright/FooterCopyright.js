import React from 'react'
import { Link } from 'react-router-dom'
import "../Footer/Footer.css"

const FooterCopyright = () => {
    return (
        <div className="footer__bottom color-offwhite text-center">
            <div className="container">
                <div className="footer__bottom--inner">
                    <p className="copyright__content mb-0 text-center">
                        <span className="text__secondary pt-3">© 2024 WPM India</span> Designed by {" "}
                        <Link
                        
                            className="copyright__content--link"
                            target="_blank"
                            to="https://www.adsrole.com/"
                        >
                            AdsRole
                          
                        </Link>{" "}
                        . All Rights Reserved.
                    </p>

                </div>
            </div>
        </div>
    )
}

export default FooterCopyright