import React, { useState } from 'react';
import Gallery from '../components/Gallery';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import HeroSection from '../components/HeroSection';
import InfoSection from '../components/InfoSection';
import { homeObjOne, homeObjTwo, homeObjThree, homeObjFour, homeObjFive, homeObjSix } from '../components/InfoSection/Data';
import Navbar from '../components/Navbar';
import Services from '../components/Services';
import Sidebar from '../components/Sidebar';
import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom';
import { ServicesH2 } from '../components/Services/ServicesElements';
import { LetterImg } from '../components/InfoSection/InfoElements';


const Home = () => {
    // open mobile sidebar menu
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => {
        setIsOpen(!isOpen)
    }
    
    return (
        <>
        {/* pass these value to Sidebar Navbar index.js */}
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <Navbar toggle={toggle} />
            <HeroSection />
            <Services />
            <Fade bottom duration={2000}>
                <InfoSection {...homeObjOne} />
            </Fade>
            <Fade bottom duration={2000}>
                <InfoSection {...homeObjTwo} />
            </Fade>
            <Zoom duration={1000}>
                <ServicesH2>■■■</ServicesH2>
            </Zoom>
            <Fade bottom duration={2000}>
                <InfoSection {...homeObjThree} />
            </Fade>
            <Fade bottom duration={2000}>
                <LetterImg src={require('../assets/images/letter.jpg').default} alt="letter" />
            </Fade>
            <Fade bottom duration={2000}>
                <InfoSection {...homeObjFour} />
            </Fade>
            <Fade bottom duration={2000}>
                <InfoSection {...homeObjFive} />
            </Fade>
            <Fade bottom duration={2000}>
                <InfoSection {...homeObjSix} />
            </Fade>
            <Zoom duration={1000}>
                <ServicesH2>■■■</ServicesH2>
            </Zoom>
            <Gallery />
            <Footer />
        </>
    )
}

export default Home;
