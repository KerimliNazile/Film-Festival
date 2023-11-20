import React from 'react'
import './index.css'
const Magazine = () => {
    return (
        <>
            <div className='magazine'>
        <div className='magazine_left_box'>
            <p>MAGAZINE</p>
            <div className='producer_box'>
                <p className='box_text_1'>PRODUCERS</p>
                <p className='box_text_2'> DECEMBER 10</p>
            </div>
            <h1>INTERVIEW WITH MOVIE PRODUCER PAUL GANGE</h1>
            <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>
            <div className='magazine_btn'>View More</div>
        </div>
        <div className='magazine_right_box'>
            <img src="https://coppola.qodeinteractive.com/wp-content/uploads/2021/12/blog-list-h4.jpg" alt="" />
        </div>
    </div>
        </>
    )
}

export default Magazine