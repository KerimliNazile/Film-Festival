import React, { useState } from 'react'
import './index.css'
function Sidebar() {

  const [openDropdown, setOpenDropdown] = useState(null);
  const [openDropdownMedia, setOpenDropdownMedia] = useState(null);
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);
  const [isNavbarOpenMedia, setIsNavbarOpenMedia] = useState(false);
  const toggleNavbar = () => {
    setIsNavbarOpen(!isNavbarOpen);
  };
  const toggleNavbarMedia = () => {
    setIsNavbarOpenMedia(!isNavbarOpenMedia);
  };
  const toggleDropdown = (dropdownName) => {
    setOpenDropdown(openDropdown === dropdownName ? null : dropdownName);
  }
  const toggleDropdownMedia = (dropdownNameMedia) => {
    setOpenDropdownMedia(openDropdownMedia === dropdownNameMedia ? null : dropdownNameMedia);
  }
  return (
    <nav>
      {/* navbar vertikal start  */}
      <div id="navbar">
        <div className="vertikal-nav">
          <div className="flex-nav">
            <div
              className={`nav-bar ${isNavbarOpen ? "close" : ""}`}
              onClick={toggleNavbar}
            >
              <div className="line1"></div>
              <div className="line2"></div>
            </div>
            <div
              className={`nav-bar2 ${isNavbarOpen ? "open" : ""}`}
              onClick={toggleNavbar}
            >
              <div className="line1"></div>
            </div>
            <p className="coppola-text">coppola</p>
            <div className="sosial-media">
              <ul>
                <li className="sosial">
                  <i class="fa-brands fa-instagram"></i>
                </li>
                <li className="sosial">
                  <i class="fa-brands fa-youtube"></i>
                </li>
                <li className="sosial">
                  <i class="fa-brands fa-vine"></i>
                </li>
                <li className="sosial">
                  <i class="fa-brands fa-twitter"></i>
                </li>
              </ul>
            </div>
          </div>
        </div>


      </div>
      {/* navbar vertikal end  */}
      {/* navbar toogle start  */}
      <div className={`navbarOpen ${isNavbarOpen ? "open" : ""}`}>
        <div className="nav-center">
          <ul className="navigations">
            <li className="navig first">
              <a href="#" onClick={() => toggleDropdown("home")}>home</a>
              <ul className={`dropdown ${openDropdown === "home" ? "open-drop" : ""}`}>
                <li className="navig-drop">
                  <a href="">Main Home</a>
                </li>
                <li className="navig-drop">
                  <a href="">Film Festival</a>
                </li>
                <li className="navig-drop">
                  <a href="">Horizontal Scroll Showcase</a>
                </li>
                <li className="navig-drop">
                  Vertical Split Showcase<a href=""></a>
                </li>
              </ul>
            </li>
            <li className="navig">
              <a href="#" onClick={() => toggleDropdown("pages")}>pages</a>
              <ul className={`dropdown ${openDropdown === "pages" ? "open-drop" : ""}`}>
                <li className="navig-drop">
                  <a href="">About Us</a>
                </li>
                <li className="navig-drop">
                  <a href="">Our Team</a>
                </li>
                <li className="navig-drop">
                  <a href="">Contact Us</a>
                </li>
              </ul>
            </li>
            <li className="navig">
              <a href="#" onClick={() => toggleDropdown("portfolio")}>portfolio</a>
              <ul className={`dropdown ${openDropdown === "portfolio" ? "open-drop" : ""}`}>
                <li className="navig-drop">
                  <a href="">Fullscreen Slider</a>
                </li>
                <li className="navig-drop">
                  <a href="">Scrolling Portfolio</a>
                </li>
                <li className="navig-drop">
                  <a href="">Slider</a>
                </li>
              </ul>
            </li>
            <li className="navig">
              <a href="#" onClick={() => toggleDropdown("blog")}>blog</a>
              <ul className={`dropdown ${openDropdown === "blog" ? "open-drop" : ""}`}>
                <li className="navig-drop">
                  <a href="">Right Sidebar List</a>
                </li>
                <li className="navig-drop">
                  <a href="">Without Sidebar List</a>
                </li>
              </ul>
            </li>
            <li className="navig">
              <a href="#" onClick={() => toggleDropdown("shop")}>shop</a>
              <ul className={`dropdown ${openDropdown === "shop" ? "open-drop" : ""}`}>
                <li className="navig-drop">
                  <a href="">Product List</a>
                </li>
                <li className="navig-drop">
                  <a href="">Product Single</a>
                </li>
              </ul>
            </li>
            <li className="navig">
              <a href="">landing</a>
            </li>
          </ul>
        </div>
      </div>
      {/* navbar toogle end  */}

      {/* navbar for media start  */}
      <div className="navbar-media">
        <div className="navbar-media-dis">
          <img
            className="img-cop"
            src="https://coppola.qodeinteractive.com/wp-content/uploads/2021/12/logo-main-light-height14px.png"
            alt=""
          />
          {/* "nav-bar-media" */}
          <div className={`nav-bar-media ${isNavbarOpenMedia ? "closeMed" : ""}`} onClick={toggleNavbarMedia}>
            <div className="line1"></div>
            <div className="line2"></div>
          </div>
          <div
            className={`nav-bar-media2 ${isNavbarOpenMedia ? "openMed" : ""}`}
            onClick={toggleNavbarMedia}
          >
            <div className="line1"></div>
          </div>
        </div>

        {/* navbar accordion start */}
        <div
          className={`navbar-media-accord ${isNavbarOpenMedia ? "openMedia" : ""
            }`}
        >
          <div className="nav-med-d">
            <ul className="navigations-media">
              <li className="navig-media" onClick={() => toggleDropdownMedia("home")}>
                <a href="#" >home<i class="fa-solid fa-angle-right"></i></a>
                <ul className={`nav-drop-media ${openDropdownMedia === "home" ? "open-dropm" : ""}`}>
                  <li className="navig-dropm">
                    <a href="">Main Home</a>
                  </li>
                  <li className="navig-dropm">
                    <a href="">Fullscreen Slider</a>
                  </li>
                  <li className="navig-dropm">
                    <a href="">Interactive Corners Showcase</a>
                  </li>
                  <li className="navig-dropm">
                    <a href="">Film Festival</a>
                  </li>
                  <li className="navig-dropm">
                    <a href="">Film Presentation</a>
                  </li>
                  <li className="navig-dropm">
                    <a href="">Video Slider</a>
                  </li>
                  <li className="navig-dropm">
                    <a href="">Interactive Scroll Showcase</a>
                  </li>
                  <li className="navig-dropm">
                    <a href="">Landing</a>
                  </li>
                </ul>
              </li>
              <li className="navig-media" onClick={() => toggleDropdownMedia("pages")}>
                <a href="#" >pages<i class="fa-solid fa-angle-right"></i></a>
                <ul className={`nav-drop-media ${openDropdownMedia === "pages" ? "open-dropm" : ""}`}>
                  <li className="navig-dropm">
                    <a href="">About Me</a>
                  </li>
                  <li className="navig-dropm">
                    <a href="">About Us</a>
                  </li>
                  <li className="navig-dropm">
                    <a href="">Contact Us</a>
                  </li>
                  <li className="navig-dropm">
                    <a href="">Pricing Plans</a>
                  </li>
                  <li className="navig-dropm">
                    <a href="">Speakers</a>
                  </li>
                  <li className="navig-dropm">
                    <a href="">FAQ Page</a>
                  </li>
                  <li className="navig-dropm">
                    <a href="">Drop Us A Note</a>
                  </li>
                  <li className="navig-dropm">
                    <a href="">What We Do</a>
                  </li>
                  <li className="navig-dropm">
                    <a href="">Get In Touch</a>
                  </li>
                  <li className="navig-dropm">
                    <a href=""> Coming Soon</a>
                  </li>
                </ul>
              </li>
              <li className="navig-media" onClick={() => toggleDropdownMedia("portfolio")}>
                <a href="#" >portfolio<i class="fa-solid fa-angle-right"></i></a>
                <ul className={`nav-drop-media ${openDropdownMedia === "portfolio" ? "open-dropm" : ""}`}>
                  <li className="navig-dropm">
                    <a href=""> Lists</a>
                  </li>
                  <li className="navig-dropm">
                    <a href="">Layouts</a>
                  </li>
                  <li className="navig-dropm">
                    <a href="">Hover Types</a>
                  </li>
                  <li className="navig-dropm">
                    <a href="">Singles</a>
                  </li>
                </ul>
              </li>
              <li className="navig-media" onClick={() => toggleDropdownMedia("blog")}>
                <a href="#" >blog<i class="fa-solid fa-angle-right"></i></a>
                <ul className={`nav-drop-media ${openDropdownMedia === "blog" ? "open-dropm" : ""}`}>
                  <li className="navig-dropm">
                    <a href="">Right Sidebar</a>
                  </li>
                  <li className="navig-dropm">
                    <a href=""> Left Sidebar</a>
                  </li>
                  <li className="navig-dropm">
                    <a href="">No Sidebar</a>
                  </li>
                  <li className="navig-dropm">
                    <a href="">Post Types</a>
                  </li>
                </ul>
              </li>
              <li className="navig-media" onClick={() => toggleDropdownMedia("shop")}>
                <a href="#" >shop<i class="fa-solid fa-angle-right"></i></a>
                <ul className={`nav-drop-media ${openDropdownMedia === "shop" ? "open-dropm" : ""}`}>
                  <li className="navig-dropm">
                    <a href="">Product List</a>
                  </li>
                  <li className="navig-dropm">
                    <a href="">Product Single</a>
                  </li>
                  <li className="navig-dropm">
                    <a href="">No Sidebar</a>
                  </li>
                  <li className="navig-dropm">
                    <a href="">Post Types</a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* navbar accordion end  */}
      {/* navbar for media end  */}
    </nav>
  

  );
}

export default Sidebar;