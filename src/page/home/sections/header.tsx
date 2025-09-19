'use client'

import Burger from "./burger";
import { useState } from "react";

function Header() {

    const [open, setOpen] = useState<boolean>(true)

    return (
        <>
        
            <header className="fixed top-0 left-1/2 -translate-x-1/2 max-w-[110rem] h-[6.25rem] flex justify-between items-center bg-white z-[100] !w-full
                max-md:w-[21.4375rem] max-md:h-[4rem] max-md:px-[1rem]"> 
                <svg className="h-[5rem] max-md:h-[3.5rem] w-fit cursor-pointer" width="60" height="56" viewBox="0 0 60 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_369_4209)">
                    <path d="M30.0063 0C35.2641 0 40.0328 2.13557 43.5293 5.60241L40.1262 9.3385C37.5224 6.7184 33.9503 5.09942 30.0063 5.09941C22.0395 5.09941 15.5807 11.6963 15.5807 19.8333C15.5808 27.9704 22.0397 34.5661 30.0063 34.5661C33.8084 34.5661 37.2641 33.0609 39.841 30.6057L43.244 34.3407C39.7755 37.6439 35.1227 39.6667 30.0063 39.6667C19.2819 39.6667 10.5881 30.787 10.5881 19.8333C10.5881 8.87969 19.2819 0 30.0063 0Z" fill="#090707"/>
                    <mask id="mask0_369_4209" style={{ maskType: "luminance" }} maskUnits="userSpaceOnUse" x="0" y="16" width="60" height="40">
                    <path d="M60 16.334H0V56.0006H60V16.334Z" fill="white"/>
                    </mask>
                    <g mask="url(#mask0_369_4209)">
                    <path d="M16.1765 47.7702L27.0588 16.334H32.3529L45.8824 55.4173H40.5882L29.7059 23.98L18.8235 55.4173H13.5294L4.19922 28.4655L0 16.334H5.29412L16.1765 47.7702Z" fill="#090707"/>
                    <path d="M45.8823 55.4173H40.5881L54.1176 16.334H59.4117L45.8823 55.4173Z" fill="#45D55E"/>
                    </g>
                    </g>
                    <defs>
                    <clipPath id="clip0_369_4209">
                    <rect width="60" height="56" fill="white"/>
                    </clipPath>
                    </defs>
                </svg>

                {/* <svg className="w-[8.6875rem] h-[1.5625rem] max-md:w-[5.125rem] max-md:h-[1rem]" width="139" height="25" viewBox="0 0 139 25" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M46.1404 2.44531L37.1005 23.8846H31.6225L22.6562 2.44531H28.6992L34.6194 17.025L40.7361 2.44531H46.1404Z" fill="#13151D"/><path d="M82.3461 8.27341C82.469 8.27341 82.5672 8.27341 82.69 8.27341L82.7392 2.44646C81.1424 2.44646 80.037 2.59398 78.8088 3.11029C77.6051 3.6266 76.2049 4.51171 75.4925 5.49516L75.4679 2.42188H70.0391V23.8611H75.7627L75.861 17.0999C75.8855 15.2559 76.1803 13.3874 76.2294 13.2153C76.5979 10.3632 79.2264 8.27341 82.3461 8.27341Z" fill="#13151D"/><path d="M138.368 18.843C137.754 19.2118 137.017 19.4331 136.28 19.4331C134.782 19.4331 133.922 18.5479 133.922 16.9007V8.24629L136.354 8.27087L138.663 3.32903H133.922V0.132812H128.469V16.999C128.469 21.5721 130.974 23.8832 135.543 23.8832C136.526 23.8832 137.509 23.7357 138.368 23.4652V18.843Z" fill="#13151D"/><path d="M117.62 10.605C114.991 10.187 113.444 9.74446 113.444 8.61349C113.444 7.82673 114.451 7.01538 116.956 7.01538C118.676 7.01538 120.002 7.82673 120.297 8.36762H126.021C125.161 4.60592 121.624 2.17188 116.956 2.17188C110.84 2.17188 107.916 5.61396 107.916 8.95769C107.916 13.6783 113.001 14.6617 116.76 15.2518C120.445 15.8173 121.182 16.5303 121.157 17.5383C121.157 18.7676 119.511 19.4315 117.349 19.4315C116.072 19.4315 114.426 19.0135 113.444 17.9317H107.523C108.555 21.9147 112.338 24.3733 117.349 24.3733C122.754 24.3733 126.635 21.4229 126.635 17.2187C126.66 13.0636 122.877 11.4655 117.62 10.605Z" fill="#13151D"/><path d="M22.6489 13.2876C22.6489 7.16565 17.5885 2.19922 11.3245 2.19922C5.06039 2.19922 0 7.16565 0 13.2876C0 19.4096 5.06039 24.4006 11.3245 24.4006C15.9427 24.4006 20.3889 21.6962 22.1331 17.8115H15.9918C14.8864 18.8196 12.9212 19.4342 11.2999 19.4342C8.49949 19.4342 6.11668 17.6148 5.35517 15.107H22.477C22.5998 14.4924 22.6489 13.9023 22.6489 13.2876ZM5.84647 11.4928C6.21494 8.66542 8.52405 6.79686 11.3245 6.79686C14.1249 6.79686 16.4831 8.88669 17.0235 11.4928H5.84647Z" fill="#13151D"/><path d="M68.0239 13.2876C68.0239 7.16565 62.9635 2.19922 56.6995 2.19922C50.4354 2.19922 45.375 7.16565 45.375 13.2876C45.375 19.4096 50.4354 24.4006 56.6995 24.4006C61.3177 24.4006 65.764 21.6962 67.5081 17.8115H61.3668C60.2614 18.8196 58.2962 19.4342 56.6749 19.4342C53.8745 19.4342 51.4917 17.6148 50.7302 15.107H67.852C67.9748 14.4924 68.0239 13.9023 68.0239 13.2876ZM51.2215 11.4928C51.5899 8.66542 53.8991 6.79686 56.6995 6.79686C59.4999 6.79686 61.8581 8.88669 62.3985 11.4928H51.2215Z" fill="#13151D"/><path d="M106.071 13.2876C106.071 7.16565 101.01 2.19922 94.7463 2.19922C88.4823 2.19922 83.4219 7.16565 83.4219 13.2876C83.4219 19.4096 88.4823 24.4006 94.7463 24.4006C99.3646 24.4006 103.811 21.6962 105.555 17.8115H99.4137C98.3083 18.8196 96.3431 19.4342 94.7218 19.4342C91.9214 19.4342 89.5386 17.6148 88.777 15.107H105.923C106.022 14.4924 106.071 13.9023 106.071 13.2876ZM89.2683 11.4928C89.6368 8.66542 91.9459 6.79686 94.7463 6.79686C97.5468 6.79686 99.905 8.88669 100.445 11.4928H89.2683Z" fill="#13151D"/></svg> */}
                <div className="flex items-center gap-[5rem]">
                    <div className="flex items-center gap-[1.25rem] desktop">
                        <a href="#" className="px-[1rem] py-[0.625rem] hover:bg-[#f5f5f5] transition-all ease-out duration-300 cursor-pointer rounded-[0.75rem]">Кейсы</a>
                        <a href="#" className="px-[1rem] py-[0.625rem] hover:bg-[#f5f5f5] transition-all ease-out duration-300 cursor-pointer rounded-[0.75rem]">Услуги</a>
                        <a href="#" className="px-[1rem] py-[0.625rem] hover:bg-[#f5f5f5] transition-all ease-out duration-300 cursor-pointer rounded-[0.75rem]">Компания</a>
                        <a href="#" className="px-[1rem] py-[0.625rem] hover:bg-[#f5f5f5] transition-all ease-out duration-300 cursor-pointer rounded-[0.75rem]">Карьера</a>
                        <a href="#" className="px-[1rem] py-[0.625rem] hover:bg-[#f5f5f5] transition-all ease-out duration-300 cursor-pointer rounded-[0.75rem]">Контакты</a>
                    </div>
                    <div
                        onClick={() => setOpen(!open)}
                        className={`w-[4.25rem] h-[4.25rem] flex justify-center items-center rounded-full 
                            ${open ? "bg-black" : "border-[0.0625rem] border-[#13151d29]"} 
                            max-md:w-[3.25rem] max-md:h-[3.25rem] pointer-events-auto cursor-pointer`}
                    >
                        {open ? (
                            <div className="w-[2rem] h-[2rem] relative">
                                <span className="absolute top-1/2 left-0 w-full h-[0.125rem] bg-white rotate-45 transform origin-center"></span>
                                <span className="absolute top-1/2 left-0 w-full h-[0.125rem] bg-white -rotate-45 transform origin-center"></span>
                            </div>
                        ) : (
                            <div className="w-[2rem] h-[2rem] flex flex-col justify-between items-center p-[0.25rem] max-md:h-[1.5rem] max-md:w-[1.5rem]">
                                <div className="w-full h-[0.125rem] bg-black"></div>
                                <div className="w-full h-[0.125rem] bg-black"></div>
                                <div className="w-full h-[0.125rem] bg-black"></div>
                            </div>
                        )}
                    </div>

                </div>
            </header>
            <Burger open={open} onClose={() => setOpen(!open)} />
        </>

    );
}

export default Header;