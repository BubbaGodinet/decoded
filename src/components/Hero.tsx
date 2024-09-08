'use client';

import tw from 'twin.macro';
import styled from 'styled-components';
import gsap from 'gsap'
import '@styles/fonts/typography.css';
import CornerSVG from '@images/cornersvg.svg';

export default function Hero() {

  return (
    <Wrapper>
      <Gradient>
      <Nav>
        <NavOption>Projects</NavOption>
        <NavOption>About</NavOption>
        <NavOption>Contact</NavOption>
      </Nav>
      <TRCornerSVG />
      <TLCornerSVG />
      <BLCornerSVG/>
      <NameBox>
        Bubba Godinet
      </NameBox>
      </Gradient>
    </Wrapper>
  );
}

const BLCornerSVG = tw(CornerSVG)`
absolute
bottom-[1.9rem]
left-[9.7rem]
 w-12
 h-16
//  border-2 border-bubblegum
 -rotate-90
`
const TLCornerSVG = tw(CornerSVG)`
absolute
z-10
top-[9.2rem]
left-[9.4rem]
 w-12
 h-16
//  border-2 border-bubblegum
`

const TRCornerSVG = tw(CornerSVG)`
absolute
z-10
left-[14.3rem]
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
const Gradient = tw.div`
  flex
  z-0
  bg-bermuda
  h-full
  w-3/6
  rounded-[2.5rem]
`

const NavOption = tw.a`
  cursor-pointer
  flex
  items-center
  justify-center
  font-humane
  text-silver
  text-[2rem]
  h-[20rem]   /* Set a height for each item */
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
  pt-28
  writing-mode-vertical-rl
  text-orientation-upright
`;
const Wrapper = tw.div`
relative
  bg-bgMain
  h-screen
  w-screen
  p-10
`;