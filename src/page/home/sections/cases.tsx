import Image from "next/image";

function Cases() {
    return (
        <div id="cases" className="container flex flex-col gap-[4.5rem]">
            <div className="flex items-center gap-[0.75rem] overflow-x-scroll overflow-y-hidden scrollbar-hide">
                <div className="px-[1.1875rem] max-md:px-[1.1875rem] max-md:text-[1.125rem] max-md:h-[2.5rem] flex items-center text-white bg-black rounded-[6.25rem] text-[1.375rem] font-500 h-[3.375rem]">Все</div>
                <div className="px-[1.1875rem] max-md:px-[1.1875rem] max-md:text-[1.125rem] max-md:h-[2.5rem] flex items-center bg-white text-black rounded-[6.25rem] text-[1.375rem] font-500 h-[3.375rem] border-[0.0625rem] border-[#13151d29]">Веб</div>
                <div className="px-[1.1875rem] max-md:px-[1.1875rem] max-md:text-[1.125rem] max-md:h-[2.5rem] flex items-center bg-white text-black rounded-[6.25rem] text-[1.375rem] font-500 h-[3.375rem] border-[0.0625rem] border-[#13151d29]">Сервисы</div>
                <div className="px-[1.1875rem] max-md:px-[1.1875rem] max-md:text-[1.125rem] max-md:h-[2.5rem] flex items-center bg-white text-black rounded-[6.25rem] text-[1.375rem] font-500 h-[3.375rem] border-[0.0625rem] border-[#13151d29] min-w-fit">UX-исследования</div>
                <div className="px-[1.1875rem] max-md:px-[1.1875rem] max-md:text-[1.125rem] max-md:h-[2.5rem] flex items-center bg-white text-black rounded-[6.25rem] text-[1.375rem] font-500 h-[3.375rem] border-[0.0625rem] border-[#13151d29]">ПО</div>
                <div className="px-[1.1875rem] max-md:px-[1.1875rem] max-md:text-[1.125rem] max-md:h-[2.5rem] flex items-center bg-white text-black rounded-[6.25rem] text-[1.375rem] font-500 h-[3.375rem] border-[0.0625rem] border-[#13151d29]">Мобайл</div>
                <div className="px-[1.1875rem] max-md:px-[1.1875rem] max-md:text-[1.125rem] max-md:h-[2.5rem] flex items-center bg-white text-black rounded-[6.25rem] text-[1.375rem] font-500 h-[3.375rem] border-[0.0625rem] border-[#13151d29]">Брендинг</div>
            </div>
            <div className="flex gap-[2.5rem] max-md:flex-col">
                <div className="min-w-[55rem] h-[41.875rem] rounded-[2.5rem] overflow-hidden relative max-md:!w-[21.4375rem] max-md:!h-[20.5rem]">
                    <Image 
                        src={'/image.png'}
                        alt=""
                        width={880}
                        height={670}
                        className="object-cover w-full h-full max-md:!w-[21.4375rem] max-md:!h-[20.5rem]"
                    />
                    <div className="absolute right-[2rem] top-[2rem] bg-[#13151d66] rounded-[6.25rem] px-[1rem] flex gap-[0.5rem] items-center">
                        <svg className="w-[1.5rem] h-[1.5rem]" version="1.0" xmlns="http://www.w3.org/2000/svg"
                            width="1280.000000pt" height="1186.000000pt" viewBox="0 0 1280.000000 1186.000000"
                            preserveAspectRatio="xMidYMid meet">
                            <metadata>
                            Created by potrace 1.15, written by Peter Selinger 2001-2017
                            </metadata>
                            <g transform="translate(0.000000,1186.000000) scale(0.100000,-0.100000)" fill="#f5f5f5" stroke="none">
                            <path d="M3752 10733 c-6 -10 -13 -89 -17 -175 -5 -103 -11 -161 -19 -167 -8
                            -7 -230 -11 -617 -13 l-604 -3 -50 -25 c-67 -32 -165 -132 -199 -201 -48 -99
                            -58 -152 -63 -342 -10 -321 33 -625 152 -1093 91 -355 206 -701 318 -954 328
                            -739 737 -1152 1291 -1301 177 -48 185 -51 232 -92 84 -74 95 -130 39 -199
                            -19 -24 -48 -65 -65 -93 -29 -46 -31 -56 -27 -120 7 -122 61 -191 171 -215 87
                            -19 212 18 303 91 57 46 119 129 154 207 34 75 38 75 119 -20 152 -177 364
                            -371 520 -475 41 -28 129 -80 195 -116 66 -36 133 -74 150 -84 77 -48 149
                            -215 185 -430 65 -392 52 -1129 -34 -2013 -14 -140 -28 -294 -32 -342 -4 -49
                            -12 -94 -18 -103 -8 -10 -51 -17 -161 -25 -349 -25 -607 -97 -709 -196 -61
                            -59 -94 -149 -114 -309 l-7 -60 -111 -56 c-146 -74 -217 -123 -291 -202 -88
                            -94 -94 -117 -91 -322 l3 -170 2085 0 2085 0 3 179 c2 167 1 182 -19 224 -47
                            96 -186 207 -374 299 -69 33 -97 52 -99 67 -3 12 -11 64 -19 116 -9 60 -24
                            116 -42 153 -85 174 -307 246 -858 280 -33 2 -64 10 -72 18 -8 9 -17 59 -24
                            134 -58 658 -65 740 -86 1070 -20 309 -20 836 0 1036 33 324 98 543 187 626
                            12 12 77 52 143 88 300 167 510 335 707 564 92 106 106 121 120 121 4 0 23
                            -33 43 -74 66 -139 184 -240 319 -272 180 -42 306 50 306 224 0 57 -20 103
                            -74 166 -74 86 -78 126 -20 201 40 53 96 81 226 114 652 164 1102 661 1451
                            1601 164 441 285 937 344 1410 22 177 21 447 -1 549 -34 155 -127 285 -243
                            339 -56 26 -67 27 -278 34 -121 3 -391 4 -600 1 -338 -5 -382 -4 -396 10 -13
                            12 -18 50 -23 172 -4 86 -10 163 -13 171 -4 12 -397 14 -2689 14 -2545 0
                            -2684 -1 -2692 -17z m-38 -806 c16 -11 19 -38 27 -198 16 -359 54 -767 95
                            -1049 89 -608 254 -1231 443 -1677 28 -67 51 -128 51 -137 0 -41 -267 2 -437
                            70 -335 134 -593 404 -811 846 -131 264 -249 578 -322 853 -174 651 -252 1213
                            -179 1286 18 18 45 19 567 19 436 0 552 -3 566 -13z m6581 -12 c24 -23 25 -30
                            25 -149 0 -361 -147 -1034 -340 -1556 -94 -256 -236 -546 -357 -728 -88 -133
                            -239 -295 -362 -388 -89 -66 -243 -148 -349 -184 -142 -49 -354 -76 -364 -47
                            -3 6 22 75 54 152 304 720 481 1616 537 2725 8 149 12 176 27 187 14 10 132
                            13 561 13 l544 0 24 -25z"/>
                            </g>
                        </svg>
                        <p className="text-white text-[1.125rem] font-[500]">1 награда</p>
                    </div>
                </div>
                <div className="flex flex-col gap-[1.5rem]">
                    <h2 className="text-black text-[2.5rem] font-semibold tracking-[-.03em] leading-[3rem] max-md:text-[1.375rem] max-md:leading-[1.75rem]">Корпоративный сайт лизинговой компании</h2>
                    <p className="text-[#13151db3] text-[1.125rem] max-md:text-[1rem] max-md:leading-[1.6875rem]">Разработали с нуля удобный и функциональный сайт, который позволит продвигать лизинговые услуги, привлекать новых клиентов и партнёров, усиливать конкурентные позиции компании на рынке.</p>
                    <div className="w-[4.25rem] h-[4.25rem] border-[0.0625rem] border-[#13151d29] rounded-full flex items-center justify-center max-md:w-[3.25rem] max-md:h-[3.25rem]">
                        <svg className="w-[2rem] h-[2rem] rotate-180 max-md:w-[1.125rem] max-md:h-[1.125rem]" viewBox="0 0 15.699 8.707" fill="currentColor">
                            <polygon points="15.699,3.854 1.914,3.854 5.061,0.707 4.354,0 0,4.354 4.354,8.707 5.061,8 1.914,4.854 15.699,4.854"/>
                        </svg>
                    </div>
                </div>
            </div>
            <button className="mt-[3.5rem] mx-auto h-[4.25rem] px-[2rem] border-[0.0625rem] border-[#13151d29] rounded-[0.75rem] text-[1.125rem] max-md:w-full hover:bg-[#13151d] hover:text-white transition-all ease-out duration-300">Показать ещё</button>
        </div>
    );
}

export default Cases;