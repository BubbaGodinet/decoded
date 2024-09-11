'use client'

import type { Metadata } from "next";
import "./globals.css";
import Static from "@images/Static.png"
import tw from "twin.macro";
import styled from "styled-components"

// export const metadata: Metadata = {
//   title: "Decoded Website",
//   description: "Portfolio for Developer Bubba Godinet",
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        
      <StaticOverlay/>
        {children}

      </body>
    </html>
  );
}

const StaticOverlay = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  background-repeat: repeat;
  background-size: 64px;
  opacity: 0.02;
  border-radius: 0;
  top: 0;
  left: 0;
  z-index: 10;
  pointer-events: none;
  background-image: url(${Static.src});
`
