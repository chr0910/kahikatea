import styled from'styled-components';

export const GalleryRow = styled.div`
    display: flex;
    flex-wrap: wrap;
    padding: 100px;

    @media screen and (max-width: 700px) {
        padding: 50px;
    }
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

export const ImgHoverBody = styled.div`
    width: 100%;
    position: relative;
    overflow: hidden;
`

export const ImgHoverMask = styled.div`
    width: 100% - 5px;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: 5px;
    background: rgba(0, 0, 0, 0.5);
    opacity: 0;
    transition: all 0.6s ease;
    color: #fff;
    display: flex;
    align-items: center;
    text-align: start;
    padding-left: 20px;

    &:hover {
        opacity: 1;
    }
`