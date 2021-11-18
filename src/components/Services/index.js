import React from 'react';
import Zoom from 'react-reveal/Zoom';
import Fade from 'react-reveal/Fade';
import { ServicesContainer, ServicesWrap, ServicesH1, ServicesH2, ServicesP, ServicesImg } from './ServicesElements';
import Icon1 from '../../assets/images/kahikateatree1.png';
import Icon2 from '../../assets/images/kahikateatree2.png';
import Icon3 from '../../assets/images/kahikateatree3.png';
import Img from '../../assets/images/forest.png';

const Services = () => {
    return (
        <ServicesContainer id="about">
            <Fade bottom duration={2000}>
                <ServicesWrap>
                    <ServicesP>It commemorates the 28 Japanese and all others who perished in the Christchurch earthquakes on 22nd February 2011 and was funded by the families in Japan.</ServicesP>
                </ServicesWrap>
            </Fade>
                <ServicesImg src={Img} alt="forest" />
            <Fade bottom duration={2000}>
                <ServicesWrap>
                    <ServicesP>The Base of the sculpture represents the New Zealand Native Tree "KAHIKATEA".</ServicesP>
                    <ServicesP>The kahikatea tree grows in clumps, with  the roots and branches into twined like us today standing together  with arms linked. The Kahikatea tree grows tall and strong like a parents love for their children. The glass peak represents pure running water of a mountain stream flowing from the mountain top. The spirits of our love ones can travel to this world and return to heaven down.</ServicesP>
                </ServicesWrap>
            </Fade>
            <Zoom duration={1000}>
                <ServicesH2>■■■</ServicesH2>
            </Zoom>
        </ServicesContainer>
    )
}

export default Services
