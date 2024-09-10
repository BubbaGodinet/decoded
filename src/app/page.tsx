'use client';

import tw from 'twin.macro';
import gsap from 'gsap'
import '@styles/fonts/typography.css';
// import cornersvg from '@images/cornersvg.svg';
import Hero from '../components/Hero'
import About from '../components/About'

export default function Home() {

  return (
    <Wrapper>
      <Hero/>
      <About/>
    </Wrapper>
  );
}

const Wrapper = tw.div`
  bg-bgMain
`;
