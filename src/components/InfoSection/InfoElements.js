import styled from 'styled-components';


export const InfoContainer = styled.div`
    color: #fff;
    background: ${({lightBg}) => (lightBg ? '#fff' : '#010606')};
`

export const InfoWrapper = styled.div`
    display: grid;
    z-index: 1;
    height: 100%;
    width: 100%;
    max-width: 1300px;
    margin: 0 auto;
    padding: 50px 24px;
    justify-content: center;

    @media screen and (max-width: 768px) {
        padding: 20px 24px;
    }
`

export const InfoRow = styled.div`
    display: grid;
    grid-auto-columns: minmax(auto, 1fr);
    align-items: center;
    grid-template-areas: ${({imgStart}) => (imgStart ? `'col2 col1'` : `'col1 col2'`)};

    @media screen and (max-width: 768px) {
        grid-template-areas: ${({imgStart}) => (imgStart ? `'col1' 'col2'` : `'col1 col1' 'col2 col2'`)}
    }
`

export const Column1 = styled.div`
    margin-bottom: 15px;
    padding: 0 15px;
    grid-area: col1;
`

export const Column2 = styled.div`
    margin-bottom: 15px;
    padding: 0 15px;
    grid-area: col2;
`

export const TextWrapper = styled.div`
    max-width: 600px;
    padding-top: 0;
    padding-bottom: 60px;
`

export const TopLine = styled.p`
    color: #01bf71;
    font-size: 16px;
    line-height: 16px;
    font-weight: 700;
    letter-spacing: 1.4px;
    text-transform: uppercase;
    margin-bottom: 16px;
`

export const Heading = styled.h1`
    margin-bottom: 24px;
    font-size: 2rem;
    font-weight: bold;
    color: ${({lightText}) => (lightText ? '#f7f8fa': '#010606')};

    @media screen and (max-width: 480px) {
        font-size: 32px;
    }
`

export const Subtitle = styled.p`
    font-size: 1.3rem;
    font-family: 'Noto Sans JP', sans-serif;
    color: ${({darkText}) => (darkText ? '#010606' : '#fff')};
    white-space: pre-line;
`

export const BtnWrap = styled.div`
    display: flex;
    justify-content: flex-start;
`

export const ImgWrap = styled.div`
    max-width: 550px;
    display: flex;
    justify-content: ${({imgStart}) => (imgStart ? 'flex-start' : 'flex-end')};
`

export const Img = styled.img`
    width: 80%;
    margin: 0 0 10px 0;
    padding-right: 0;
`