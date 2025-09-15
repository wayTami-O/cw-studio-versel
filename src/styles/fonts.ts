import localFont from 'next/font/local';
import { Inter } from "next/font/google";

export const inter = Inter({ subsets: ["latin"] });

export const gilroy = localFont({
    src: [
        {
            path: '../../public/Gilroy-Light.otf',
            weight: '300',
            style: 'normal',
        },
        {
            path: '../../public/Gilroy-ExtraBold.otf',
            weight: '800',
            style: 'normal',
        },
    ],
    variable: '--font-gilroy',
    display: 'swap',
});