import styled from 'styled-components';
import { BiRightArrowAlt } from 'react-icons/bi';
import { FaArrowRight } from "react-icons/fa";


export const HeroContainer = styled.div`
    background: #93ac70;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 140px;
    padding: 0 30px;
    height: 880px;
    position: relative;
    z-index: 1;
`

export const HeroBg = styled.div`
    position: absolute;
    top: 80px;
    right: 5%;
    width: 60%;
    height: 100%;
    overflow: hidden;

    @media screen and (max-width: 940px) {
        width: 90%;
    }

    @media screen and (max-width: 600px) {
        right: 0;
        width: 100%;
    }
`

export const ImgBg = styled.img`
    width: 100%;
    height: 100%;
    -o-object-fit: cover;
    object-fit: cover;
`

export const HeroContent = styled.div`
    z-index: 3;
    position: absolute;
    left: 20%;
    padding: 10px 10px;
    display: flex;
    flex-direction: column;
`

export const HeroH1 = styled.h1`
    color: #fff;
    font-size: 48px;
    font-weight: 400;
    text-align: center;

    @media screen and (max-width: 768px) {
        font-size: 40px;
    }

    @media screen and (max-width: 480px) {
        font-size: 32px;
    }
`

export const HeroP = styled.p`
    margin-top: 24px;
    color: #fff;
    font-family: 'Noto Sans JP', sans-serif;
    font-size: 18px;
    text-align: center;
    max-width: 600px;

    @media screen and (max-width: 768px) {
        font-size: 24px;
    }

    @media screen and (max-width: 480px) {
        font-size: 18px;
    }
`

export const HeroBtnWrapper = styled.div`
    margin-top: 32px;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const RightArrow = styled(BiRightArrowAlt)`
    margin-left: 8px;
    font-size: 20px;
`

export const ArrowRight = styled(FaArrowRight)`
    margin-left: 8px;
    font-size: 20px;
`
