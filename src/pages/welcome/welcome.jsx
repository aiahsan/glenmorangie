import React from 'react';
import Logo from '../../images/logo.png';
import Swipe from '../../images/welcome/swipe.png';
import Giraf from '../../images/welcome/geraf.png'
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import {useHistory} from 'react-router-dom'
const Sldide1 = () => {
    return <div className="welcome bg-1">
        <div className="flex-main">
            <div className="welcome-inner-1">
                <img src={Logo} className="logo" />

                <div className="mt-3">
                    <h2 className="text-center color-white sads92-asdasd2j3">DELICIOUS ADVENTURE.</h2>
                    <h2 className="text-center color-white sads92-asdasd2j3">ARE YOU READY?</h2>
                </div>
            </div>
        </div>

        <img className="welcome-23js34-e" src={Swipe} />
    </div>
}
const Sldide2 = () => {
    return <div className="welcome bg-2">
        <div className="flex-main">
            <div className="welcome-inner-1">

                <div className="mt-15p">
                    <h2 className="text-center color-white sads92-asdasd2j3">TRAVEL THE COUNTRY</h2>
                    <h5 className="text-center color-white sads92-asdasd2j3-231">Travel around Malaysia, hunting for our
                icon “The Giraffe” and learn more about Glenmorangie’s whisky.</h5>
                </div>
            </div>
        </div>
        <div className="flex-main jst-end">
            <img src={Giraf} className="cst-giraf" />

        </div>
    </div>
}

const Sldide3 = () => {
    return <div className="welcome bg-4">
        <div className="flex-main">
            <div className="welcome-inner-1">

                <div className="mt-15p">
                    <h2 className="text-center color-white sads92-asdasd2j3">WIN PRIZES</h2>
                    <h5 className="text-center color-white sads92-asdasd2j3-231">Earn points for every Giraffe caught!
                    Catch and be in to win many prizes!
How many Giraffe can you find?</h5>
                </div>
            </div>
        </div>
        <div className="flex-main jst-end">
            <img src={Giraf} className="cst-giraf" />

        </div>
    </div>
}

const Sldide4 = () => {
    return <div className="welcome bg-3">
        <div className="flex-main">
            <div className="welcome-inner-1">

                <div className="mt-15p">
                    <h2 className="text-center color-white sads92-asdasd2j3">CATCH THE GIRAFFE</h2>
                    <h5 className="text-center color-white sads92-asdasd2j3-231">Find the hidden Giraffe, scan the QR code, and experience the world of delicious whisky.</h5>
                </div>
            </div>
           
        </div>
        <div className="flex-main jst-end">
            <img src={Giraf} className="cst-giraf" />

        </div>
    </div>
}

export default () => {
    const history = useHistory();

    return <CarouselProvider
        naturalSlideWidth={window.innerWidth}
        naturalSlideHeight={window.innerHeight}
        totalSlides={4}
        
    >
        <Slider>
            <Slide  index={0}><Sldide1 /></Slide>
            <Slide index={1}><Sldide2 /></Slide>
            <Slide index={2}><Sldide3 /></Slide>
            <Slide index={3} onTouchEnd={()=>history.push('uploadprofile')}><Sldide4 /></Slide>
        </Slider>
    </CarouselProvider>
}