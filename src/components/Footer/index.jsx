import React from 'react'
import './index.css'
const Footer = () => {
    return (
        <>
            <footer>
                <div className='qodef_page_footer'>
                    <div className='footer_container_one'>
                        <div className='footer_image'>
                            <img src="https://coppola.qodeinteractive.com/wp-content/uploads/2021/11/footer-img.png" alt="" />
                        </div>
                        <div className='top_area_main'>
                            <div className='footer_top_area'>
                                <ul>
                                    <li>WHAT WE DO</li>
                                    <li>ABOUT US</li>
                                    <li>HELP AND FAQ</li>
                                </ul>
                            </div>
                            <div className='footer_top_area'>
                                <ul>
                                    <li>TEAM </li>
                                    <li>CONTACT US</li>
                                    <li>SPEAKERS</li>
                                </ul>
                            </div>
                            <div className='footer_top_area'>
                                <ul>
                                    <li>PROGRAM</li>
                                    <li>SHOP</li>
                                    <li>BLOG</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className='footer_container_two'>
                        <div className='text_left'>
                            <div className='social_icons_group'>
                                <i class="fa-brands fa-instagram"></i>
                                <i class="fa-brands fa-youtube"></i>
                                <i class="fa-brands fa-vimeo-v"></i>
                                <i class="fa-brands fa-twitter"></i>
                            </div>
                            <div className='icons_text'>
                                <p>© 2022 <a href="#">QODE INTERACTIVE</a>, ALL RIGHTS RESERVED</p>
                            </div>
                        </div>
                        <div className='text_right'>
                            <div className='text_parione'>
                                <a href="#">
                                    1316 Via del Parione <br />
                                    Florence CA 90291,Italy
                                </a>
                            </div>
                            <div className='sign_up_text'>
                                <p> Sign up to Newsletter</p>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>

    )
}

export default Footer