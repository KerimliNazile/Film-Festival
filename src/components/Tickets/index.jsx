import React from 'react'
import './index.css'
const Tickets = () => {
  return (
    <>

    <div className='tickets_container'>
        <div className='tickets_elementor'>
            <div className='elementor_left'>
                <h1>ONE DAY</h1>
                <p>Type: Regular ticket</p>
                <p>Price:$10</p>
                <div className='elementor_bottom'>
                    <p>*Lorem ipsum dolores sit amet, dlores sit.</p>
                </div>
            </div>
            <div className='elementor_right'>
                <span className='elementor_circle'></span>
                <div className='elementor_right_bottom'>
                    <p>Buy</p>
                </div>
            </div>
        </div>
        <div className='tickets_elementor_two'>
            <div className='elementor_left_two'>
                <h1>VIP PASS</h1>
                <p>Type: Regular ticket</p>
                <p>Price:$100</p>
                <div className='elementor_bottom'>
                    <p>*Lorem ipsum dolores sit amet, dlores sit.</p>
                </div>
            </div>
            <div className='elementor_right'>
                <span className='elementor_circle'></span>
                <div className='elementor_right_bottom'>
                    <p>Buy</p>
                </div>
            </div>
        </div>
        <div className='tickets_elementor_three'>
            <div className='elementor_left'>
                <h1>7 DAYS PACK</h1>
                <p>Type: Regular ticket</p>
                <p>Price:$60</p>
                <div className='elementor_bottom'>
                    <p>*Lorem ipsum dolores sit amet, dlores sit.</p>
                </div>
            </div>
            <div className='elementor_right'>
                <span className='elementor_circle'></span>
                <div className='elementor_right_bottom'>
                    <p>Buy</p>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Tickets