import React from 'react';
import {ButtonBack, ButtonNext, CarouselProvider, Slider, Slide} from "pure-react-carousel";
import 'pure-react-carousel/dist/react-carousel.es.css';
import {Box, IconButton} from "@mui/material";
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';

import ImageContainer from "../../common/images/ImageContainer";


const container = {
    textAlign: 'center',
    height: '100%',
    width: '80%',
};

const wrapper = {
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',

    width: '100%',
};

const button = (side) => ({
    outline: 'none',
    border: 'none',
    backgroundColor: 'transparent',

    position: 'absolute',
    top: '42%',
    left: side === 'l' && '10px',
    right: side === 'r' && '10px',

});

const ImagesCarousel = ({task}) => {
    const images = task.images.map(i => i.image_url);

    return (
        <Box sx={wrapper}>
            <Box sx={container}>
                <CarouselProvider
                    naturalSlideWidth={20}
                    naturalSlideHeight={10}
                    totalSlides={images.length}
                >
                    <Slider style={{width: '100%', height: '100%'}}>
                        {images.map((url, i) => <Slide index={i}>
                            <ImageContainer url={url}/>
                        </Slide>)}
                    </Slider>

                    <ButtonBack style={button('l')}>
                        <IconButton >
                            <NavigateBeforeIcon/>
                        </IconButton>
                    </ButtonBack>
                    <ButtonNext style={button('r')}>
                        <IconButton>
                            <NavigateNextIcon />
                        </IconButton>
                    </ButtonNext>
                </CarouselProvider>
            </Box>
        </Box>
    );
};

export default ImagesCarousel;
