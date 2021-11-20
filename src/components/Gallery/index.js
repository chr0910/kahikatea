import React from 'react';
import { GalleryRow, GalleryColumn, ImgHoverZoom, GalleryImg } from './GalleryElements';
import "react-multi-carousel/lib/styles.css";
import Img1 from '../../assets/images/201902221.jpg';
import Img2 from '../../assets/images/201902222.jpg';
import Img3 from '../../assets/images/202002263.jpg';
import Img4 from '../../assets/images/202002261.jpg';
import Img5 from '../../assets/images/202002262.jpg';
import Img6 from '../../assets/images/202102211.jpg';
import Img7 from '../../assets/images/202102212.jpg';
import Img8 from '../../assets/images/Screenshot_20210222.jpg';
import Img9 from '../../assets/images/Screenshot_20210201.jpg';
import Img10 from '../../assets/images/kahikateaToyama.png';
import Img11 from '../../assets/images/202102221.jpg';


const Gallery = () => {
    return (
        <GalleryRow>
            <GalleryColumn>
                <ImgHoverZoom>
                    <GalleryImg src={Img1} alt="img" />
                </ImgHoverZoom>
                <ImgHoverZoom>
                    <GalleryImg src={Img2} alt="img" />
                </ImgHoverZoom>
            </GalleryColumn>
            <GalleryColumn>
                <ImgHoverZoom>
                    <GalleryImg src={Img3} alt="img" />
                </ImgHoverZoom>
                <ImgHoverZoom>
                    <GalleryImg src={Img4} alt="img" />
                </ImgHoverZoom>
                <ImgHoverZoom>
                    <GalleryImg src={Img5} alt="img" />
                </ImgHoverZoom>
            </GalleryColumn>
            <GalleryColumn>
                <ImgHoverZoom>
                    <GalleryImg src={Img7} alt="img" />
                </ImgHoverZoom>
                <ImgHoverZoom>
                    <GalleryImg src={Img8} alt="img" />
                </ImgHoverZoom>
                <ImgHoverZoom>
                    <GalleryImg src={Img11} alt="img" />
                </ImgHoverZoom>
                <ImgHoverZoom>
                    <GalleryImg src={Img9} alt="img" />
                </ImgHoverZoom>
            </GalleryColumn>
            <GalleryColumn>
                <ImgHoverZoom>
                    <GalleryImg src={Img6} alt="img" />
                </ImgHoverZoom>
                <ImgHoverZoom>
                    <GalleryImg src={Img10} alt="img" />
                </ImgHoverZoom>
            </GalleryColumn>
        </GalleryRow>
    )
}

export default Gallery;
