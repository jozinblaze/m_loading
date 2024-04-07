import { useRef } from 'react';
import Autoplay from 'embla-carousel-autoplay';
import { Carousel } from '@mantine/carousel';
import { Image } from '@mantine/core';
import classes from './carousel.module.css';

export default function Media() {
  const autoplay = useRef(Autoplay({ delay: 5000 }));
  const images = [
    'https://raw.githubusercontent.com/jozinblaze/m_loading/main/web/src/assets/images/1.png',
    'https://raw.githubusercontent.com/jozinblaze/m_loading/main/web/src/assets/images/2.png',
    'https://raw.githubusercontent.com/jozinblaze/m_loading/main/web/src/assets/images/3.png',
    'https://raw.githubusercontent.com/jozinblaze/m_loading/main/web/src/assets/images/4.png',
  ];

  const slides = images.map((url) => (
    <Carousel.Slide key={url}>
      <Image src={url} />
    </Carousel.Slide>
  ));

  return (
    <div className={classes.container}>
      <Carousel className={classes.carousel} slideSize='100%' plugins={[autoplay.current]} loop draggable={false} withControls={false}>
        {slides}
      </Carousel>
    </div>
  );
}