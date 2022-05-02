import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { GalleryWrap, ImgHoverZoom, GalleryImg, ImgHoverBody, ImgHoverMask } from './GalleryElements';
import Video from './video';
import { pictures } from './Data';

const Gallery = () => {
    const columns = Array.from(Array(4).keys());
    const numberOfRow = Math.ceil(pictures.length / columns.length);
    const rows = Array.from({length: numberOfRow}, (_, i) => i + 1);
    let nextNumber = 0;

    return (
        <Container id="gallery">
            <Video />
            <GalleryWrap>
                <Row>
                {columns.map((_, i) => {
                    return (
                        <Col key={i} sm={6} md={6} lg={3}>
                        {rows.map((_, x) => {
                            nextNumber = (i * numberOfRow);
                            if (pictures[nextNumber + x]) {
                                return (
                                <ImgHoverBody key={x}>
                                    <ImgHoverZoom>
                                        <GalleryImg src={pictures[nextNumber + x].src} alt="img" />
                                        <ImgHoverMask>test test test</ImgHoverMask>
                                    </ImgHoverZoom>
                                </ImgHoverBody>
                                )
                            }
                        })}
                        </Col>
                    )
                })}
                </Row>
            </GalleryWrap>
        </Container>
    )
}

export default Gallery;
