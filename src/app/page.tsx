'use client';

import tw from 'twin.macro';
import gsap from 'gsap'
import '@styles/fonts/typography.css';
// import cornersvg from '@images/cornersvg.svg';
import Hero from '../components/Hero'

export default function Home() {

  return (
    <Wrapper>
      <Hero/>
    </Wrapper>
  );
}

const Wrapper = tw.div`
  bg-bgMain
`;
