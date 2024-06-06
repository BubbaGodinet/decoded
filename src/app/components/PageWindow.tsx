'use client';

import React, { ReactNode } from 'react';
import tw from 'twin.macro';

interface pageWindowProps {
  children: ReactNode;
}

export default function PageWindow({children}: pageWindowProps) {
return (
<Wrapper>
  <InnerWindow className='pageInnerWindow'>
    {children}
  </InnerWindow>
</Wrapper>
)
}

const InnerWindow = tw.div`
  bg-white
  rounded-3xl
  w-95
  h-95
  shadow-inner
  shadow-metal-700
  overflow-hidden
  -z-50
`
const Wrapper = tw.div`
  relative
  z-10
  w-screen
  h-screen
  bg-white
  flex
  justify-center
  items-center
`