
"use client";

import React from 'react';
import tw from 'twin.macro'

export default function MaskCursor() {
return (
<Wrapper >
 herro world
</Wrapper>
)
}

const Wrapper = tw.div`
// default/desktop //
bg-purple 
w-max
p-10
rounded-2xl

// fullwidth //
fw:bg-tahiti

// tablet //
tab:bg-tahiti

// mobile //
mob:bg-bubblegum
`

