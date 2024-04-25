'use client';

import React from 'react';
import tw from 'twin.macro';

export default function PageWindow({children}) {
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