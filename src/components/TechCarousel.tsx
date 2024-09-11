'use client';

import tw from 'twin.macro';
// import gsap from 'gsap'
import '@styles/fonts/typography.css';
import Image from 'next/image';
import FigmaSVG from '@images/figma.svg'

export default function Hero() {
return (
<CarouselContainer>

</CarouselContainer>
)
}

const Figma = tw(FigmaSVG)`
  
`

const CarouselContainer = tw.div`
  flex
  flex-row
  gap-7
`
