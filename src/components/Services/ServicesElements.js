import styled from 'styled-components';

export const ServicesContainer = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const ServicesWrap = styled.div`
    margin: 20% auto 0;
`

export const ServicesImg = styled.img`
    width: 100%;
    object-fit: cover;
    opacity: 0.8;
    margin-top: 10%;
`

export const ServicesH1 = styled.h1`
    font-size: 2.5rem;
    color: #707070;
    margin-bottom: 64px;

    @media screen and (max-width: 480px) {
        font-size: 2rem;
    }
`

export const ServicesH2 = styled.h2`
    color: #98A57E;
    font-size: 1rem;
    letter-spacing: 4rem;
    text-align: center;
    margin: 80px 0;
`

export const ServicesP = styled.p`
    max-width: 600px;
    margin: 20px 30px;
    font-family: 'Noto Sans JP', sans-serif;
    font-size: 1.3rem;
    text-align: center;
`
