'use client';

import tw from 'twin.macro';
import styled from 'styled-components';
// import gsap from 'gsap'
import '@styles/fonts/typography.css';
import CornerSVG from '@images/cornersvg.svg';
import BlobHero from './BlobHero';

export default function Hero() {

  return (
    <Wrapper>
      <BlobBox>
      <Nav>
        <NavOption>Projects</NavOption>
        <NavOption>About</NavOption>
        <NavOption>Contact</NavOption>
      </Nav>
      <TRCornerSVG />
      <TLCornerSVG />
      <BLCornerSVG/>
      <BRCornerSVG/>
      <NameBox>
        Bubba Godinet
      </NameBox>
        <Blob/>
        <LogoBlock/>
      </BlobBox>
    </Wrapper>
  );
}

const LogoBlock = tw.div`
  absolute
  bottom-0
  w-full
  h-14
  bg-bgMain
`
const Blob = tw(BlobHero)`
  absolute
`
const BRCornerSVG = tw(CornerSVG)`
absolute
bottom-[3.1rem]
right-[-0.1rem]
 w-12
 h-16
//  border-2 border-bubblegum
 rotate-180
`
const BLCornerSVG = tw(CornerSVG)`
absolute
bottom-[2.9rem]
left-[8.6rem]
 w-12
 h-16
//  border-2 border-bubblegum
 -rotate-90
`
const TLCornerSVG = tw(CornerSVG)`
absolute
z-10
top-[6.6rem]
left-[6.9rem]
 w-12
 h-16
//  border-2 border-bubblegum
`

const TRCornerSVG = tw(CornerSVG)`
absolute
z-10
left-[11.6rem]
 w-14
 h-16
//  border-2 border-bubblegum
`
const NameBox = tw.div`
absolute
z-20
bg-bgMain
w-48
h-28
rounded-br-52
font-humane
text-6xl
flex
justify-center
items-center
// border-2
// border-bubblegum
`
const BlobBox = tw.div`
relative
  flex
  z-0
  bg-bermuda
  h-full
  w-3/5
  rounded-[2.5rem]
  overflow-hidden
`

const NavOption = tw.a`
  cursor-pointer
  flex
  items-center
  justify-center
  font-humane
  text-silver
  text-[2rem]
  h-[14rem]   /* Set a height for each item */
  w-full 
  hover:text-hoverPurple
  // border-2 border-bermuda
`;

const Nav = tw.div`
  relative
  z-10
  bg-bgMain
  flex
  flex-row
  h-full
  w-1/6
  // border-2
  // border-bubblegum
  pt-40
  writing-mode-vertical-rl
  text-orientation-upright
`;
const Wrapper = tw.div`
relative
  bg-bgMain
  h-screen
  w-screen
  pt-10
  px-10
`;