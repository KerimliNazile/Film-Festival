import React from 'react'
import './index.css'
const Magazine = () => {
    return (
        <>
            <section>
                <div className='section_magazine'>
                    <div className='magazine_left'>
                        <div className='magazine_title'>
                            <h4>MAGAZINE</h4>
                        </div>
                        <div className='qodef_info'>
                            <div className='producer'>
                            <a href="producer">PRODUCERS</a>
                            </div>
                            <div className='december'>
                            <a href="december">DECEMBER 10</a>
                            </div>
                        </div>
                        <div className='qodef_m_text'>
                            <h3>INTERVIEW WITH MOVIE <br /> PRODUCER PAUL GANGE</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </div>
                        <div className='qodef_botton'>
                            <button>View More</button>
                        </div>
                    </div>
                    <div className='magazine_right'>
                        <img src="https://coppola.qodeinteractive.com/wp-content/uploads/2021/12/blog-list-h4.jpg" alt="" />
                    </div>
                </div>
            </section>
        </>
    )
}

export default Magazine