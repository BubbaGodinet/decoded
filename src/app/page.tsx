'use client';

import tw from 'twin.macro';
import '@styles/fonts/typography.css';
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
  max-w-full
  overflow-hidden
`;
