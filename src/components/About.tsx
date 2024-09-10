'use client';

import tw from 'twin.macro';
import styled from 'styled-components';
import gsap from 'gsap'
import '@styles/fonts/typography.css';
import Gradient from '../images/aboutGradient.webp'
import Image from 'next/image';

export default function Hero() {

  return (
    <Wrapper>
      <GradientImage src={Gradient} alt='purple gradient'/>
    </Wrapper>
  );
}

const GradientImage = tw(Image)`

`
const Wrapper = tw.div`
relative
  bg-bgMain
  h-screen
  w-screen
  p-10
`;