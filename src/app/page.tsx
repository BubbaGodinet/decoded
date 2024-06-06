
"use client";

import React from 'react';
import tw from 'twin.macro'

export default function MaskCursor() {
return (
<>
  hello
</>
)
}

const Wrapper = tw.div`
// default/desktop //
bg-purple 
w-max
p-10
rounded-2xl
overflow-hidden

// fullwidth //
fw:bg-tahiti

// tablet //
tab:bg-tahiti

// mobile //
mob:bg-bubblegum
`

