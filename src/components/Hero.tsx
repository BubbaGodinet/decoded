'use client';

import tw from 'twin.macro';
// import gsap from 'gsap'
import '@styles/fonts/typography.css';
import CornerSVG from '@images/cornersvg.svg';
import BlobHero from './BlobHero';
import PlaceHolder from '@images/profilePlaceholder.webp'
import Image from 'next/image';

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
      <ProfileContainer>
        <ProfilePic src={PlaceHolder} alt='profile pic of Bubba'/>
      </ProfileContainer>
    </Wrapper>
  );
}

const Socials = tw.div`

`
const ProfilePic = tw(Image)`
  rounded-30
  h-[38rem]
`

const ProfileContainer = tw.div`
  flex 
  flex-col
  gap-6
  w-[30.75rem]
  h-full
`
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
 fill-bgMain
`
const BLCornerSVG = tw(CornerSVG)`
absolute
bottom-[2.9rem]
left-[6.1rem]
 w-12
 h-16
//  border-2 border-bubblegum
 -rotate-90
 fill-bgMain
`
const TLCornerSVG = tw(CornerSVG)`
absolute
z-10
top-[6.5rem]
left-[5.9rem]
 w-12
 h-16
 fill-bgMain
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
  w-[60.75rem]
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
  h-[14rem] 
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
  w-24
  // border-2
  // border-bubblegum
  pt-40
  writing-mode-vertical-rl
  text-orientation-upright
`;
const Wrapper = tw.div`
relative
flex
flex-row
justify-center
  bg-bgMain
  h-screen
  w-screen
  pt-10
  pr-12
  pl-0
  gap-14
`;