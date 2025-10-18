import type { Metadata, ResolvingMetadata, Viewport } from 'next'
import "../styles/globals.css";
import { gilroy } from "@/styles/fonts";
import { cn } from "@/common/utils";
import Script from "next/script";


type Props = {
  params: Promise<{ id: string }>
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}


export async function generateMetadata(
  { params, searchParams }: any,
  parent: any
): Promise<Metadata> {

  return {
    title: "CW STUDIO",
    description: "CW STUDIO - студия разработки сайтов и приложений",
    creator: "CW STUDIO",
  }
}


export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  themeColor: "#000",
}


function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <Script  strategy="afterInteractive" id="tg-web" src="https://telegram.org/js/telegram-web-app.js"/>
      </head>
      <body
        className={cn(gilroy.variable, gilroy.className, `antialiased`) + ` overflow-x-hidden `}
      >
        {children}
      </body>
    </html>
  );
}







export default RootLayout;
