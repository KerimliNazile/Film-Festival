import React from 'react'
import './index.css'
const Moviess = () => {
    return (
        <>
            <section>
                <div className='movies_section'>
                    <div className='movie_title'>
                        <h4>POPULAR MOVIES</h4>
                    </div>
                    <div className='movies_navbar'>
                        <ul className='menu'>
                            <li>
                                <a href="#">Show All</a>
                            </li>
                            <li>
                                <a href="#">Comedy</a>
                            </li>
                            <li>
                                <a href="#">Documentary</a>
                            </li>
                            <li>
                                <a href="#">Drama</a>
                            </li>
                            <li>
                                <a href="#">Fantasy</a>
                            </li>
                            <li>
                                <a href="#">Romance</a>
                            </li>
                            <li>
                                <a href="#">Sci-Fi</a>
                            </li>
                        </ul>
                    </div>
                    <div className='main_container'>
                        <div className='movies_container'>
                            <div className='qodef_post'>
                                <img src="https://coppola.qodeinteractive.com/wp-content/uploads/2021/11/product-9.jpg" alt="" />
                            </div>
                            <div className='movies_text'>
                                <h4>COUNTREY</h4>
                                <p>$21</p>
                            </div>
                        </div>
                        <div className='movies_container'>
                            <div className='qodef_post'>
                                <img src="https://coppola.qodeinteractive.com/wp-content/uploads/2021/11/product-8.jpg" alt="" />
                            </div>
                            <div className='movies_text'>
                                <h4>PERFECT EDITION</h4>
                                <p>$51</p>
                            </div>
                        </div>
                        <div className='movies_container'>
                            <div className='qodef_post'>
                                <img src="https://coppola.qodeinteractive.com/wp-content/uploads/2021/11/product-7.jpg" alt="" />
                            </div>
                            <div className='movies_text'>
                                <h4>GONE</h4>
                                <p>$51</p>
                            </div>
                        </div>
                        <div className='movies_container'>
                            <div className='qodef_post'>
                                <img src="https://coppola.qodeinteractive.com/wp-content/uploads/2021/11/product-6.jpg" alt="" />
                            </div>
                            <div className='movies_text'>
                                <h4>BALUNGAN KERE</h4>

                                <p>$31</p>
                            </div>
                        </div>
                        <div className='movies_container'>
                            <div className='qodef_post'>
                                <img src="https://coppola.qodeinteractive.com/wp-content/uploads/2021/11/product-5.jpg" alt="" />
                            </div>
                            <div className='movies_text'>
                                <h4>HOME</h4>
                                <p>$36</p>
                            </div>
                        </div>
                        <div className='movies_container'>
                            <div className='qodef_post'>
                                <img src="https://coppola.qodeinteractive.com/wp-content/uploads/2021/11/product-4.jpg" alt="" />
                            </div>
                            <div className='movies_text'>
                                <h4>DOUBLE LIFE</h4>
                                <p>$23</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default Moviess