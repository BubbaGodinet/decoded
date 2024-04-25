import React, {useEffect} from "react"

import gsap from "gsap"
import styled from 'styled-components'
import sakuna1 from "@/app/images/jjk3.jpeg"
import sakuna2 from '@/app/images/jjk3.jpeg'
import luffy from '@/app/images/jjk3.jpeg'
import goku from '@/app/images/jjk3.jpeg'

const Cursor = () => {

    gsap.set(".cursorBox", {
      xPercent: -50,
      yPercent: -50,
      scale: 0,
    })
  
    window.addEventListener("mousemove", e => {
      gsap.to(".cursorBox", {
        overwrite: "auto",
        x: e.clientX,
        y: e.clientY,
        ease: "slow",
        stagger: -.25
      })
    })
    document.addEventListener('mouseleave', (e) => {
      gsap.to(".cursorBox", {
        duration: 0.7,
        opacity: 0,
      });
    });
  
    document.addEventListener('mouseenter', (e) => {
      gsap.to(".cursorBox", {
        duration: 0.7,
        opacity: 1,
      });
    });

  return (
    <Wrapper className='innerWindowWrapper'>
      <CursorWrapper bgimg={sakuna2}  className="cursorBox"></CursorWrapper>
      <CursorWrapper bgimg={luffy}  className="cursorBox"></CursorWrapper>
      <CursorWrapper bgimg={goku}  className="cursorBox"></CursorWrapper>
      <CursorWrapper bgimg={sakuna1} className="cursorBox"></CursorWrapper>
    </Wrapper>
  )
}

const CursorWrapper = styled.div`
background-image: ${props => `url(${props.bgimg})`};
background-size:cover;
background-repeat: no-repeat;
  position: fixed;
  user-select: none;
  pointer-events: none;
  border-radius: 1.667vw;
  top: 0;
  left: 0;
  /* border-radius: 50%; */
  width: 300px;
  height: 400px;
  background-color: red;
  /* mix-blend-mode: difference; */
`

const Wrapper = styled.div`
  position: relative;
  /* cursor: none; */
  width: 100%;
  height: 100vh;
  background-color: blue;
  overflow: hidden;
  z-index: 0;
`
export default Cursor