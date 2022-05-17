import React, { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { GalleryWrap, ImgHoverZoom, GalleryImg, ImgHoverBody, ImgHoverMask, VideoWrap } from './GalleryElements';
import Video from './video';
import { pictures } from './Data';

export default function Gallery() {
    const [isLoaded, setLoaded] = useState(false)
    const [images, setImages] = useState([]);
    const [numberOfRow, setNumberOfRow] = useState(1);
    const [rows, setRows] = useState(1);
    const columns = Array.from(Array(4).keys());
    let nextNumber = 0;
    const loadImages = async () => {
        try {
            const res = await fetch('/api/images');
            const data = await res.json();
            setImages(data);
        } catch (err) {
            console.error(err);
        }
    };
    useEffect(() => {
        if (!isLoaded) {
            loadImages();
            setLoaded(true);
        }
    }, []);
    useEffect(() => {
        if (isLoaded) {
            getNumberOfRow(images);
            getRows(numberOfRow);
            console.log(rows)
        }
    }, [images]);

    const getNumberOfRow = (data) => {
        setNumberOfRow(Math.ceil(data.length / columns.length));
    }
    const getRows = (number) => {
        setRows(Array.from({length: number}, (_, i) => i + 1));
    }

    return (
        <div id="gallery">
            <VideoWrap>
                <Container>
                    <Video />
                </Container>
            </VideoWrap>
            <Container>
                <GalleryWrap>
                    <Row>
                    {/* {columns.map((_, i) => {
                        return (
                            <Col key={i} sm={6} md={6} lg={3}>
                            {rows.map((_, x) => {
                                nextNumber = (i * numberOfRow);
                                if (pictures[nextNumber + x]) {
                                    return (
                                    <ImgHoverBody key={x}>
                                        <ImgHoverZoom>
                                            <GalleryImg src={pictures[nextNumber + x].src} alt="img" />
                                            <ImgHoverMask>{pictures[nextNumber + x].text}</ImgHoverMask>
                                        </ImgHoverZoom>
                                    </ImgHoverBody>
                                    )
                                }
                            })}
                            </Col>
                        )
                    })} */}
                    </Row>
                </GalleryWrap>
            </Container>
        </div>
    )
}
