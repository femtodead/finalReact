import { Link } from "react-router-dom";
import "../model.css"

function FooterModel() {
    return ( <>
        <div className="newsletter centr">
        <img src="/img/back_op.png" alt="" className="newsletter_back" />
        <div className="newsletter_left">
            <img src="/img/nl_ava.png"alt="" className="newsletter_left_img" />
            <div className="newsletter_left_text">
                <p className="newsletter_left_text_comment">“Vestibulum quis porttitor dui! Quisque viverra nunc mi,
                    a pulvinar purus condimentum a. Aliquam condimentum mattis neque sed pretium”</p>
                <h5 className="newsletter_left_text_h5">Bin Burhan</h5>
                <h6 className="newsletter_left_text_h6">Dhaka, Bd;</h6>
                <div className="newsletter_left_text_slider">
                    <button className="newsletter_left_text_slider_button"></button>
                    <button className="newsletter_left_text_slider_button"></button>
                    <button className="newsletter_left_text_slider_button"></button>
                </div>
            </div>

        </div>
        <div className="newsletter_right">
            <h3 className="newsletter_right_h3">Subscribe</h3>
            <h4 className="newsletter_right_h4">FOR OUR NEWLETTER AND PROMOTION</h4>
            <div className="newsletter_right_input">
                <input className="newsletter_right_input_inputline" type="text" placeholder="Enter Your Email" />
                <input className="newsletter_right_input_button" type="button" value="Subscribe"/>
            </div>
        </div>
    </div>

        <nav className="bottomNav centr">
        <div className="bottomNav_logoAndDescription">
            <div className="bottomNav_logoAndDescription_logo">
                <a href="./index.html">
                    <img src="/img/logo.png"
 alt="" className="bottomNav_logoAndDescription_logo_img" />
                </a>
                <span className="bottomNav_logoAndDescription_logo_brandName">BRAN<span
                        className="bottomNav_logoAndDescription_logo_brandName_D">D</span></span>
            </div>
            <p className="bottomNav_logoAndDescription_discr1">
                Objectively transition extensive data rather than cross functional solutions. Monotonectally syndicate
                multidisciplinary materials before go forward benefits. Intrinsicly syndicate an expanded array of
                processes and cross-unit partnerships.
            </p>
            <p className="bottomNav_logoAndDescription_discr2">
                Efficiently plagiarize 24/365 action items and focused infomediaries.
                Distinctively seize superior initiatives for wireless technologies.
                Dynamically optimize.
            </p>
        </div>
        <div className="bottomNav_card">
            <h4 className="bottomNav_card_h4">
                COMPANY
            </h4>
            <Link to="/" className="bottomNav_card_subsection">Home</Link>
            <Link to="/Catalog" className="bottomNav_card_subsection">Shop</Link>
            <a href="#" className="bottomNav_card_subsection">About</a>
            <a href="#" className="bottomNav_card_subsection">How It Works</a>
            <a href="#" className="bottomNav_card_subsection subsectionLast">Contact</a>
        </div>
        <div className="bottomNav_card">
            <h4 className="bottomNav_card_h4">
                INFORMATION
            </h4>
            <a href="#" className="bottomNav_card_subsection">Tearms & Condition</a>
            <a href="#" className="bottomNav_card_subsection">Privacy Policy</a>
            <a href="#" className="bottomNav_card_subsection">How to Buy</a>
            <a href="#" className="bottomNav_card_subsection">How to Sell</a>
            <a href="#" className="bottomNav_card_subsection subsectionLast">Promotion</a>
        </div>
        <div className="bottomNav_card">
            <h4 className="bottomNav_card_h4">
                SHOP CATEGORY
            </h4>
            <a href="#" className="bottomNav_card_subsection">Men</a>
            <a href="#" className="bottomNav_card_subsection">Women</a>
            <a href="#" className="bottomNav_card_subsection">Child</a>
            <a href="#" className="bottomNav_card_subsection">Apparel</a>
            <a href="#" className="bottomNav_card_subsection subsectionLast">Brows All</a>
        </div>
    </nav>

    <footer className="footer centr">
        <p className="footer_signature">
            © 2017 Brand All Rights Reserved.
        </p>
        <div className="footer_socialMedia">
            <div className="footer_socialMedia_logo">
                <svg className="footer_socialMedia_logo_img" xmlns="http://www.w3.org/2000/svg" height="16" width="9"
                    viewBox="0 0 320 512">
                    <path
                        d="M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z"
                        fill="#b2b2b2" />
                </svg>
            </div>
            <div className="footer_socialMedia_logo"><svg xmlns="http://www.w3.org/2000/svg" height="13" width="15"
                    viewBox="0 0 512 512">
                    <path
                        d="M459.4 151.7c.3 4.5 .3 9.1 .3 13.6 0 138.7-105.6 298.6-298.6 298.6-59.5 0-114.7-17.2-161.1-47.1 8.4 1 16.6 1.3 25.3 1.3 49.1 0 94.2-16.6 130.3-44.8-46.1-1-84.8-31.2-98.1-72.8 6.5 1 13 1.6 19.8 1.6 9.4 0 18.8-1.3 27.6-3.6-48.1-9.7-84.1-52-84.1-103v-1.3c14 7.8 30.2 12.7 47.4 13.3-28.3-18.8-46.8-51-46.8-87.4 0-19.5 5.2-37.4 14.3-53 51.7 63.7 129.3 105.3 216.4 109.8-1.6-7.8-2.6-15.9-2.6-24 0-57.8 46.8-104.9 104.9-104.9 30.2 0 57.5 12.7 76.7 33.1 23.7-4.5 46.5-13.3 66.6-25.3-7.8 24.4-24.4 44.8-46.1 57.8 21.1-2.3 41.6-8.1 60.4-16.2-14.3 20.8-32.2 39.3-52.6 54.3z"
                        fill="#b2b2b2" />
                </svg></div>
            <div className="footer_socialMedia_logo"><svg xmlns="http://www.w3.org/2000/svg" height="14" width="14"
                    viewBox="0 0 448 512">
                    <path
                        d="M100.3 448H7.4V148.9h92.9zM53.8 108.1C24.1 108.1 0 83.5 0 53.8a53.8 53.8 0 0 1 107.6 0c0 29.7-24.1 54.3-53.8 54.3zM447.9 448h-92.7V302.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V448h-92.8V148.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V448z"
                        fill="#b2b2b2" />
                </svg></div>
            <div className="footer_socialMedia_logo"><svg xmlns="http://www.w3.org/2000/svg" height="15" width="12"
                    viewBox="0 0 384 512">
                    <path
                        d="M204 6.5C101.4 6.5 0 74.9 0 185.6 0 256 39.6 296 63.6 296c9.9 0 15.6-27.6 15.6-35.4 0-9.3-23.7-29.1-23.7-67.8 0-80.4 61.2-137.4 140.4-137.4 68.1 0 118.5 38.7 118.5 109.8 0 53.1-21.3 152.7-90.3 152.7-24.9 0-46.2-18-46.2-43.8 0-37.8 26.4-74.4 26.4-113.4 0-66.2-93.9-54.2-93.9 25.8 0 16.8 2.1 35.4 9.6 50.7-13.8 59.4-42 147.9-42 209.1 0 18.9 2.7 37.5 4.5 56.4 3.4 3.8 1.7 3.4 6.9 1.5 50.4-69 48.6-82.5 71.4-172.8 12.3 23.4 44.1 36 69.3 36 106.2 0 153.9-103.5 153.9-196.8C384 71.3 298.2 6.5 204 6.5z"
                        fill="#b2b2b2" />
                </svg></div>
            <div className="footer_socialMedia_logo"><svg xmlns="http://www.w3.org/2000/svg" height="14" width="21"
                    viewBox="0 0 640 512">
                    <path
                        d="M386.1 228.5c1.8 9.7 3.1 19.4 3.1 32C389.2 370.2 315.6 448 204.8 448c-106.1 0-192-85.9-192-192s85.9-192 192-192c51.9 0 95.1 18.9 128.6 50.3l-52.1 50c-14.1-13.6-39-29.6-76.5-29.6-65.5 0-118.9 54.2-118.9 121.3 0 67.1 53.4 121.3 118.9 121.3 76 0 104.5-54.7 109-82.8H204.8v-66h181.3zm185.4 6.4V179.2h-56v55.7h-55.7v56h55.7v55.7h56v-55.7H627.2v-56h-55.7z"
                        fill="#b2b2b2" />
                </svg></div>
        </div>
    </footer></> );
}

export default FooterModel;