import React from 'react'
import './index.css'
const Audience = () => {
    return (
        <>

            <div className='background_audience'>
                <div className='auidience_title'>
                    <h3>AUDIENCE CHOICE</h3>
                </div>
                <div className='audience_container'>
                    <div className='video_audience'>
                    <video class="elementor-video" src="https://coppola.qodeinteractive.com/wp-content/uploads/2021/11/home4-video.mp4" autoplay="" loop="" muted="muted" playsinline="" controlslist="nodownload" poster="https://coppola.qodeinteractive.com/wp-content/uploads/2021/11/h4-img1.jpg"></video>
                    </div>
                    <div className='audience_right'>
                        <p>DOCUMENTARY</p>
                        <h1>LIFE ON THE ISLAND</h1>
                        <p>documentary film by Mirela Bagaric / Croatia 2021</p>
                        <div className='image_audience'>
                            <div className='image_one'>
                                <img src="https://coppola.qodeinteractive.com/wp-content/uploads/2021/11/h4-icon1.png" alt="" />
                            </div>
                            <div className='image_one'>
                                <img src="https://coppola.qodeinteractive.com/wp-content/uploads/2021/11/h4-icon2.png" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </>
    )
}

export default Audience