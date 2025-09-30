'use client'

import { ReactNode, useEffect, useState } from "react";
import { fa } from "zod/v4/locales";

interface IHeroAnim {
    category: number,
    svg: ReactNode,
    color: string,
    active: boolean
}

const arrayColorsData: IHeroAnim[] = [
    {
        category: 1,
        svg: (
            <svg className="w-[3.25rem] h-[3.25rem] absolute left-[1rem] max-md:w-[2rem] max-md:h-[2rem] max-md:left-[.5rem]" width="52" height="52" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M9.83824 18.4467C10.0103 18.7692 10.1826 19.0598 10.3473 19.3173C8.59745 18.9238 7.07906 17.9187 6.02838 16.5383C6.72181 16.1478 7.60995 15.743 8.67766 15.4468C8.98112 16.637 9.40924 17.6423 9.83824 18.4467ZM11.1618 17.7408C10.7891 17.0421 10.4156 16.1695 10.1465 15.1356C10.7258 15.0496 11.3442 15 12.0001 15C12.6559 15 13.2743 15.0496 13.8535 15.1355C13.5844 16.1695 13.2109 17.0421 12.8382 17.7408C12.5394 18.3011 12.2417 18.7484 12 19.0757C11.7583 18.7484 11.4606 18.3011 11.1618 17.7408ZM9.75 12C9.75 12.5841 9.7893 13.1385 9.8586 13.6619C10.5269 13.5594 11.2414 13.5 12.0001 13.5C12.7587 13.5 13.4732 13.5593 14.1414 13.6619C14.2107 13.1384 14.25 12.5841 14.25 12C14.25 11.4159 14.2107 10.8616 14.1414 10.3381C13.4732 10.4406 12.7587 10.5 12.0001 10.5C11.2414 10.5 10.5269 10.4406 9.8586 10.3381C9.7893 10.8615 9.75 11.4159 9.75 12ZM8.38688 10.0288C8.29977 10.6478 8.25 11.3054 8.25 12C8.25 12.6946 8.29977 13.3522 8.38688 13.9712C7.11338 14.3131 6.05882 14.7952 5.24324 15.2591C4.76698 14.2736 4.5 13.168 4.5 12C4.5 10.832 4.76698 9.72644 5.24323 8.74088C6.05872 9.20472 7.1133 9.68686 8.38688 10.0288ZM10.1465 8.86445C10.7258 8.95042 11.3442 9 12.0001 9C12.6559 9 13.2743 8.95043 13.8535 8.86447C13.5844 7.83055 13.2109 6.95793 12.8382 6.2592C12.5394 5.69894 12.2417 5.25156 12 4.92432C11.7583 5.25156 11.4606 5.69894 11.1618 6.25918C10.7891 6.95791 10.4156 7.83053 10.1465 8.86445ZM15.6131 10.0289C15.7002 10.6479 15.75 11.3055 15.75 12C15.75 12.6946 15.7002 13.3521 15.6131 13.9711C16.8866 14.3131 17.9412 14.7952 18.7568 15.2591C19.233 14.2735 19.5 13.1679 19.5 12C19.5 10.8321 19.233 9.72647 18.7568 8.74093C17.9413 9.20477 16.8867 9.6869 15.6131 10.0289ZM17.9716 7.46178C17.2781 7.85231 16.39 8.25705 15.3224 8.55328C15.0189 7.36304 14.5908 6.35769 14.1618 5.55332C13.9897 5.23077 13.8174 4.94025 13.6527 4.6827C15.4026 5.07623 16.921 6.08136 17.9716 7.46178ZM8.67765 8.55325C7.61001 8.25701 6.7219 7.85227 6.02839 7.46173C7.07906 6.08134 8.59745 5.07623 10.3472 4.6827C10.1826 4.94025 10.0103 5.23076 9.83823 5.5533C9.40924 6.35767 8.98112 7.36301 8.67765 8.55325ZM15.3224 15.4467C15.0189 16.637 14.5908 17.6423 14.1618 18.4467C13.9897 18.7692 13.8174 19.0598 13.6527 19.3173C15.4026 18.9238 16.921 17.9186 17.9717 16.5382C17.2782 16.1477 16.3901 15.743 15.3224 15.4467ZM12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z" fill="#fff"/>
            </svg>
        ),
        color: '#FFDD2D',
        active: false
    },
    {
        category: 2,
        svg: (
            // <svg className="w-[3.25rem] h-[3.25rem] absolute left-[1rem] max-md:w-[2rem] max-md:h-[2rem] max-md:left-[.5rem]" width="52" height="52" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg">
            //     <g clipPath="url(#clip0_2536_977)">
            //     <circle cx="26" cy="26" r="26" fill="#F12E16"/>
            //     <path d="M51.5 26C51.5 11.9167 40.0833 0.5 26 0.5C11.9167 0.5 0.5 11.9167 0.5 26C0.5 40.0833 11.9167 51.5 26 51.5C40.0833 51.5 51.5 40.0833 51.5 26Z" stroke="black" strokeOpacity="0.21"/>
            //     <g clipPath="url(#clip1_2536_977)">
            //     <path d="M35.593 35.8164H16.0391V39.8795H35.593V35.8164Z" fill="white"/>
            //     <path d="M29.3956 13.0976C28.8384 11.4345 28.1956 10.1211 25.9933 10.1211C23.791 10.1211 23.108 11.4289 22.5205 13.0976L16.4707 30.2971H20.4827L21.879 26.2077H29.5988L30.8942 30.2971H35.1606L29.3942 13.0976H29.3956ZM23.0486 22.7543L25.7914 14.6031H25.8924L28.4831 22.7543H23.0486Z" fill="white"/>
            //     </g>
            //     </g>
            //     <defs>
            //     <clipPath id="clip0_2536_977">
            //     <rect width="52" height="52" fill="white"/>
            //     </clipPath>
            //     <clipPath id="clip1_2536_977">
            //     <rect width="19.6313" height="30" fill="white" transform="translate(16 10)"/>
            //     </clipPath>
            //     </defs>
            // </svg>
            <svg className="w-[3.25rem] h-[3.25rem] absolute left-[1rem] max-md:w-[2rem] max-md:h-[2rem] max-md:left-[.5rem]" width="52" height="52" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" 
                viewBox="0 0 256 241">
                <path d="M254,188V2H2v186h111v29H75v22h106v-22h-38v-29H254z M19,19h217v151H19L19,19z M127.923,146.85c28.615,0,52-23.231,52-52
                s-23.231-52-52-52S76.077,66.235,76.077,95.004C76.077,123.619,99.308,146.85,127.923,146.85z M125.051,99.26
                c-9.538-3.333-15.487-8.154-15.487-16.718c0-7.897,5.231-14.103,14.821-16.051v-8.564h7.179v8.154
                c5.949,0,10.256,1.231,13.436,2.923l-2.923,10.256c-2.359-0.974-6.205-2.615-11.487-2.615c-5.282,0-8.154,2.615-8.154,5.231
                c0,3.59,3.333,4.974,10.513,7.897c9.795,3.59,14.359,8.564,14.359,16.718s-4.974,14.359-15.487,16.718v8.154h-7.179v-7.897
                c-6.205,0-12.462-1.641-15.487-3.333l2.615-10.513c3.333,1.641,8.564,3.59,14.103,3.59c5.949,0,8.872-2.615,8.872-6.205
                C134.744,103.414,131.923,101.927,125.051,99.26z" fill="#fff"/>
            </svg>
        ),
        color: '#F12E16',
        active: false
    },
    {
        category: 3,
        svg: (
            <svg className="w-[3.25rem] h-[3.25rem] absolute left-[1rem] max-md:w-[2rem] max-md:h-[2rem] max-md:left-[.5rem]" width="52" height="52" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 18H12.01M9.2 21H14.8C15.9201 21 16.4802 21 16.908 20.782C17.2843 20.5903 17.5903 20.2843 17.782 19.908C18 19.4802 18 18.9201 18 17.8V6.2C18 5.0799 18 4.51984 17.782 4.09202C17.5903 3.71569 17.2843 3.40973 16.908 3.21799C16.4802 3 15.9201 3 14.8 3H9.2C8.0799 3 7.51984 3 7.09202 3.21799C6.71569 3.40973 6.40973 3.71569 6.21799 4.09202C6 4.51984 6 5.07989 6 6.2V17.8C6 18.9201 6 19.4802 6.21799 19.908C6.40973 20.2843 6.71569 20.5903 7.09202 20.782C7.51984 21 8.07989 21 9.2 21Z" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
        ),
        color: '#174F2C',
        active: false
    },
    {
        category: 4,
        svg: (
            <svg  className="w-[3.25rem] h-[3.25rem] absolute left-[1rem] max-md:w-[2rem] max-md:h-[2rem] max-md:left-[.5rem]" fill="#fff" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" 
                    width="52" height="52" viewBox="0 0 71.68 71.68"
                    >
                <g>
                    <g>
                        <path d="M42.336,42.336c-1.792,1.793-2.24,3.809,0.446,6.496c2.688,2.688,7.394,1.119,7.616,4.928
                            c2.688-4.256,1.119-8.512-1.566-11.199C46.145,39.871,43.904,40.545,42.336,42.336z"/>
                        <path d="M42.111,41.664c0.896-0.896,1.121-2.24,0.226-3.359c-1.345-2.017-20.16-18.369-20.16-18.369
                            c-0.896-0.896-2.24-1.119-2.688-0.447c-0.447,0.447-0.224,1.791,0.448,2.688c0,0,12.768,15.681,18.368,20.161
                            c1.12,0.672,2.465,0.672,3.36-0.227L42.111,41.664z"/>
                        <path d="M64.96,0H6.72C2.911,0,0,2.912,0,6.72v58.239c0,3.809,2.911,6.721,6.72,6.721h58.24c3.808,0,6.72-2.912,6.72-6.721V6.72
                            C71.68,2.912,68.768,0,64.96,0z M25.088,4.704c1.344,0,2.688,1.12,2.688,2.688c0,1.567-1.12,2.688-2.688,2.688
                            c-1.345,0-2.688-1.12-2.688-2.688S23.52,4.704,25.088,4.704z M17.472,4.704c1.344,0,2.688,1.12,2.688,2.688
                            c0,1.567-1.119,2.688-2.688,2.688c-1.569,0-2.688-1.12-2.688-2.688C14.783,5.824,16.128,4.704,17.472,4.704z M10.08,4.704
                            c1.344,0,2.688,1.12,2.688,2.688c0,1.567-1.12,2.688-2.688,2.688S7.392,8.96,7.392,7.392S8.736,4.704,10.08,4.704z M63.84,59.359
                            c0,2.466-2.017,4.48-4.48,4.48H12.32c-2.464,0-4.479-2.016-4.479-4.48V19.04c0-2.464,2.016-4.479,4.479-4.479h19.04
                            c4.256,0,4.48,0,4.48-2.24c0-2.912,2.016-4.479,4.479-4.479h19.041c2.465,0,4.479,2.016,4.479,4.479L63.84,59.359L63.84,59.359z"
                            />
                    </g>
                </g>
            </svg>
        ),
        color: '#174F2C',
        active: false
    },
    {
        category: 5,
        svg: (
            <svg className="w-[3.25rem] h-[3.25rem] absolute left-[1rem] max-md:w-[2rem] max-md:h-[2rem] max-md:left-[.5rem]" width="52" height="52" viewBox="0 0 24 24" fill="#fff" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M12 3.20798L6.97874 10.1605L12 12.8643L17.0213 10.1605L12 3.20798ZM11.0272 1.13901C11.5062 0.4758 12.4938 0.475796 12.9728 1.13901L19.1771 9.72952C19.6017 10.3175 19.4118 11.1448 18.7732 11.4887L12.5689 14.8294C12.2138 15.0207 11.7863 15.0207 11.4311 14.8294L5.22683 11.4887C4.58826 11.1448 4.3983 10.3175 4.82294 9.72952L11.0272 1.13901Z" fill="#fff"/>
                <path fillRule="evenodd" clipRule="evenodd" d="M17.7098 13.5271C18.8691 12.9474 19.9967 14.3627 19.1728 15.3632L12.9263 22.9482C12.4463 23.5311 11.5537 23.5311 11.0737 22.9482L4.82719 15.3632C4.00325 14.3627 5.13091 12.9474 6.29016 13.5271L12 16.382L17.7098 13.5271ZM16 16.5L12.5367 18.3497C12.1988 18.5186 11.8012 18.5186 11.4633 18.3497L8 16.5L12 20.927L16 16.5Z" fill="#fff"/>
            </svg>
        ),
        color: '#49147E',
        active: false
    },
]

export function useHeroAnim(array: IHeroAnim[], delay: number) {
    const [arrayColors, setArrayColors] = useState<IHeroAnim[]>(
        array.map((item, index) => ({ ...item, active: index === 0 }))
    );

    const [activeItem, setActiveItem] = useState<IHeroAnim>(array[0]);

    useEffect(() => {
        let currentIndex = 0;

        const interval = setInterval(() => {
            currentIndex = (currentIndex + 1) % array.length;

            const updatedArray = array.map((item, index) => ({
                ...item,
                active: index === currentIndex,
            }));
    
            setArrayColors(updatedArray);
            setActiveItem(updatedArray[currentIndex]);
    
            console.log("Active index:", currentIndex);
        }, delay);

        return () => clearInterval(interval);
    }, [array, delay]);

    return { arrayColors, activeItem };
}

function Hero() {

    const { arrayColors, activeItem } = useHeroAnim(arrayColorsData, 2500);



    return (
        <div className="pt-[6.25rem] h-[100dvh] max-md:h-fit container-no-margin flex flex-col justify-center gap-[2rem]">
            <h1 className="max-w-[78.75rem] text-[5rem] max-md:text-[2.5rem] font-gilroy font-[600] leading-[5.5rem] max-md:leading-[3rem] tracking-[-.03em]">Создаем эффективные цифровые продукты, которые работают</h1>
            <div className="flex items-center gap-[1rem] max-md:flex-wrap">
                {
                    activeItem.category === 1 ? (
                        <div className="pr-[3rem] pl-[5rem] max-md:pr-[1rem] max-md:pl-[2.75rem] h-[4.75rem] max-md:h-[2.5rem] font-[600] text-[1.875rem] text-[#13151d] flex justify-center items-center rounded-[6.25rem] relative" style={{ backgroundColor: activeItem.color }}>
                            
                            {activeItem.svg}

                            <span className="text-[1.875rem] text-white">WEB</span>
                        </div>
                    ) : (
                        <div className="px-[3rem] max-md:px-[1rem] h-[4.75rem] max-md:h-[2.5rem] font-[600] text-[1.875rem] text-[#13151d] flex justify-center items-center rounded-[6.25rem] bg-[#f5f5f5]">WEB</div>
                    )
                }
                
                {
                    activeItem.category === 2 ? (
                        <div className="pr-[3rem] pl-[5rem] max-md:pr-[1rem] max-md:pl-[2.75rem]  h-[4.75rem] max-md:h-[2.5rem] font-[600] text-[1.875rem] text-[#13151d] flex justify-center items-center rounded-[6.25rem] relative" style={{ backgroundColor: activeItem.color }}>
                            
                            {activeItem.svg}

                            <span className="text-[1.875rem] text-white">E-commerce</span>
                        </div>
                    ) : (
                        <div className="px-[3rem] max-md:px-[1rem] h-[4.75rem] max-md:h-[2.5rem] font-[600] text-[1.875rem] text-[#13151d] flex justify-center items-center rounded-[6.25rem] bg-[#f5f5f5]">E-commerce</div>
                    )
                }
                
                {
                    activeItem.category === 3 ? (
                        <div className="pr-[3rem] pl-[5rem] max-md:px-[1rem] h-[4.75rem] max-md:h-[2.5rem] font-[600] text-[1.875rem] text-[#13151d] flex justify-center items-center rounded-[6.25rem] relative" style={{ backgroundColor: activeItem.color }}>
                            
                            {activeItem.svg}

                            <span className="text-[1.875rem] text-white">Mobile</span>
                        </div>
                    ) : (
                        <div className="px-[3rem] max-md:px-[1rem] h-[4.75rem] max-md:h-[2.5rem] font-[600] text-[1.875rem] text-[#13151d] flex justify-center items-center rounded-[6.25rem] bg-[#f5f5f5]">Mobile</div>
                    )
                }

                {
                    activeItem.category === 4 ? (
                        <div className="pr-[3rem] pl-[5rem] max-md:px-[1rem] h-[4.75rem] max-md:h-[2.5rem] font-[600] text-[1.875rem] text-[#13151d] flex justify-center items-center rounded-[6.25rem] relative" style={{ backgroundColor: activeItem.color }}>
                            
                            {activeItem.svg}

                            <span className="text-[1.875rem] text-white">UI/UX</span>
                        </div>
                    ) : (
                        <div className="px-[3rem] max-md:px-[1rem] h-[4.75rem] max-md:h-[2.5rem] font-[600] text-[1.875rem] text-[#13151d] flex justify-center items-center rounded-[6.25rem] bg-[#f5f5f5]">UI/UX</div>
                    )
                }

                {
                    activeItem.category === 5 ? (
                        <div className="pr-[3rem] pl-[5rem] max-md:px-[1rem] h-[4.75rem] max-md:h-[2.5rem] font-[600] text-[1.875rem] text-[#13151d] flex justify-center items-center rounded-[6.25rem] relative" style={{ backgroundColor: activeItem.color }}>
                            
                            {activeItem.svg}

                            <span className="text-[1.875rem] text-white">Blockchain</span>
                        </div>
                    ) : (
                        <div className="px-[3rem] max-md:px-[1rem] h-[4.75rem] max-md:h-[2.5rem] font-[600] text-[1.875rem] text-[#13151d] flex justify-center items-center rounded-[6.25rem] bg-[#f5f5f5]">Blockchain</div>
                    )
                }
                
                <div className="px-[3rem] max-md:px-[1rem] h-[4.75rem] max-md:h-[2.5rem] font-[600] text-[1.875rem] text-[#13151d] flex justify-center items-center rounded-[6.25rem] bg-[#f5f5f5]">и другие отрасли</div>
            </div>
        </div>
    );
}

export default Hero;