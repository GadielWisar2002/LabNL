import React from "react";
import './Footer.css';


const Footer = () => {

    return (
        <div className="footer">
            <div className="sb_footer_section_padding">
                <div className="sb_footer_links">
                    <div className="sb_footer_links_div">
                        <h4>For Business</h4>
                        <a href="#">
                            <p>Sell on BookLab</p>
                        </a>
                        <a href="#">
                            <p>Sell on BookLab</p>
                        </a>
                        <a href="#">
                            <p>Sell on BookLab</p>
                        </a>
                    </div>
                    <div className="sb_footer_links_div">
                        <h4>For Business</h4>
                        <a href="#">
                            <p>Sell on BookLab</p>
                        </a>
                        <a href="#">
                            <p>Sell on BookLab</p>
                        </a>
                        <a href="#">
                            <p>Sell on BookLab</p>
                        </a>
                    </div>
                    <div className="sb_footer_links_div">
                        <h4>For Business</h4>
                        <a href="#">
                            <p>Sell on BookLab</p>
                        </a>
                    </div>
                    <div className="sb_footer_links_div">
                        <h4>For Business</h4>
                        <a href="#">
                            <p>Sell on BookLab</p>
                        </a>
                    </div>
                    <div className="sb_footer_links_div">
                        <h4>For Business</h4>
                        <div className="socialmedia">
                            <p><img src={fb} alt="" /></p>
                            <p><img src={twitter} alt="" /></p>
                            <p><img src={instagram} alt="" /></p>
                            <p><img src={youtube} alt="" /></p>
                        </div>
                    </div>
                </div>

                <hr></hr>

                <div className="sb_footer_below">
                    <div className="sb-footer-copyright">
                        <p>
                            @(new Date().getFullYear()) BookLab. All Rights Reserved.
                        </p>
                    </div>
                    <div className="sb_footer_below_links">
                        <a href="#">Privacy Policy</a>
                        <a href="#">Terms of Use</a>
                        <a href="#">Cookies</a>
                        <a href="#">Accessibility</a>
                    </div>
                </div>
            </div>
        </div>
    )


}


export default Footer;



