import { keyframes } from '@pigment-css/react';
import { styled } from "@pigment-css/react";

import img_1 from "../assets/1.jpg";
import img_2 from "../assets/2.jpg";
import img_3 from "../assets/3.jpg";
import img_4 from "../assets/4.jpg";
import img_5 from "../assets/5.jpg";

const IMAGES = [img_1, img_2, img_3, img_4, img_5];


const rotate360 = keyframes`
from {
  transform: rotateY(0deg);
}
to {
  transform: rotateY(-360deg);
}
`;

const Container = styled("main")({
  height: "300px",
  display: "flex",
  gap: '1rem',
  transformStyle: "preserve-3d", 
  animation: `${rotate360} 60s infinite forwards linear`,
  width: "320px",
  '& > *:nth-child(1)': {
    transform: "rotateY(0deg) translateZ(200px)"
  },
  '& > *:nth-child(2)': {
    transform: 'rotateY( 40deg) translateZ(200px)'
  },
  '& > *:nth-child(3)': {
    transform: 'rotateY( 80deg) translateZ(200px)'
  },
  '& > *:nth-child(4)': {
    transform: 'rotateY( 120deg) translateZ(200px)'
  },
  '& > *:nth-child(5)': {
    transform: 'rotateY( 160deg) translateZ(200px)'
  },
});

const Image = styled("img")({
  height: "100%",
});

export const Gallery = () => {
  return (
    <Container>
      {IMAGES.map((i) => (
        <Image src={i} alt="asdads" />
      ))}
    </Container>
  );
};
