import styled from'styled-components';

export const GalleryRow = styled.div`
    display: flex;
    flex-wrap: wrap;
    padding: 100px;
`

export const GalleryColumn = styled.div`
    flex: 25%;
    max-width: 25%;

    @media screen and (max-width: 800px) {
        flex: 50%;
        max-width: 50%;
    }
    @media screen and (max-width: 500px) {
        flex: 100%;
        max-width: 100%;
    }
`

export const GalleryImg = styled.img`
    width: 100%;
    vertical-align: middle;
    margin: 0;
    padding: 0;
    border: 0;
    transition:  transform .5s ease;
`

export const ImgHoverZoom = styled.div`
    height: auto;
    overflow: hidden;
    border: 5px solid #ffff;

    &:hover ${GalleryImg} {
        transform: scale(1.1);
    }
`