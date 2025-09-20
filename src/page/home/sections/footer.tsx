import Image from "next/image";

function Footer() {
    // footer
    return (
        <footer className="bg-[#13151d] mt-[7.5rem] flex flex-col gap-[4.5rem] pt-[4.5rem] pb-[2.125rem] px-[2.5rem] max-md:px-[1rem]">
            <div className="flex gap-[5.125rem] max-md:flex-col max-md:gap-[2rem]">
                <div className="w-[19.125rem] flex flex-col gap-[1.5rem]">
                    <a href="#cases" className="text-[1.5rem] text-white leading-[2rem] font-semibold hover:opacity-70 transition-opacity">Кейсы</a>
                    <a href="#services" className="text-[1.5rem] text-white leading-[2rem] font-semibold hover:opacity-70 transition-opacity">Услуги</a>
                    <a href="#company" className="text-[1.5rem] text-white leading-[2rem] font-semibold hover:opacity-70 transition-opacity">О компании</a>
                    <a href="#contact-form" className="text-[1.5rem] text-white leading-[2rem] font-semibold hover:opacity-70 transition-opacity">Блог</a>
                </div>
                <hr className="w-full border-none h-[0.0625rem] bg-[#ffffff66] mobile" />
                {/* <div className="w-full flex justify-between  max-md:flex-col max-md:gap-[2rem]">
                    <div className="grid grid-cols-2 gap-y-[20%] max-w-[46.875rem] gap-x-[1.5rem] h-[15rem] max-md:flex max-md:flex-col max-md:h-fit max-md:gap-[1rem]">
                        <div className="flex flex-col gap-[0.5rem]">
                            <p className="text-[1.5rem] text-white leading-[2rem] font-semibold">Контакты</p>
                            <div className="flex flex-col gap-[0.25rem]">
                                <p className="text-[1.5rem] text-white leading-[2rem] tracking-[-.03em]">sales@everest.cx</p>
                                <p className="text-[1.5rem] text-white leading-[2rem] tracking-[-.03em]">+7 495 414 14 44</p>
                            </div>
                        </div>
                        <div className="flex flex-col gap-[0.5rem]">
                            <p className="text-[1.5rem] text-white leading-[2rem] font-semibold">Москва</p>
                            <p className="text-[1.125rem] text-white leading-[2rem] tracking-[-.03em]">Пресненская набережная, 8с1, башня «Москва», 58 этаж, офис 581</p>
                        </div>
                        <a href="#contact-form" className="bg-white px-[2rem] rounded-[0.75rem] flex items-center h-[4.25rem] text-[#13151d] text-[1.125rem] w-fit font-semibold max-md:order-4 max-md:w-full max-md:justify-center hover:bg-[#e4e4e4] transition-all ease-out duration-300 cursor-pointer">Связаться с нами</a>
                        <div className="flex flex-col gap-[0.5rem] max-md:order-3">
                            <p className="text-[1.5rem] text-white leading-[2rem] font-semibold">Тамбов</p>
                            <p className="text-[1.125rem] text-white leading-[2rem] tracking-[-.03em]">Максима Горького, 17 БЦ Галерея</p>
                        </div>
                    </div>
                    <div className="flex flex-col gap-[4.875rem]">
                        <div className="flex items-center gap-[0.5rem]">
                            <div className="w-[4.25rem] h-[4.35rem] rounded-full border-[0.0625rem] border-[#FFFFFF4D] flex justify-center items-center max-md:w-[3.25rem] max-md:h-[3.25rem]">
                                <svg className="w-[2rem] h-[2rem]" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 30 30">
                                    <path fill="#ffffff" d="M 25.154297 3.984375 C 24.829241 3.998716 24.526384 4.0933979 24.259766 4.2011719 C 24.010014 4.3016357 23.055766 4.7109106 21.552734 5.3554688 C 20.048394 6.0005882 18.056479 6.855779 15.931641 7.7695312 C 11.681964 9.5970359 6.9042108 11.654169 4.4570312 12.707031 C 4.3650097 12.746607 4.0439208 12.849183 3.703125 13.115234 C 3.3623292 13.381286 3 13.932585 3 14.546875 C 3 15.042215 3.2360676 15.534319 3.5332031 15.828125 C 3.8303386 16.121931 4.144747 16.267067 4.4140625 16.376953 C 5.3912284 16.775666 8.4218473 18.015862 8.9941406 18.25 C 9.195546 18.866983 10.29249 22.222526 10.546875 23.044922 C 10.714568 23.587626 10.874198 23.927519 11.082031 24.197266 C 11.185948 24.332139 11.306743 24.45034 11.453125 24.542969 C 11.511635 24.579989 11.575789 24.608506 11.640625 24.634766 L 11.644531 24.636719 C 11.659471 24.642719 11.67235 24.652903 11.6875 24.658203 C 11.716082 24.668202 11.735202 24.669403 11.773438 24.677734 C 11.925762 24.726927 12.079549 24.757812 12.216797 24.757812 C 12.80196 24.757814 13.160156 24.435547 13.160156 24.435547 L 13.181641 24.419922 L 16.191406 21.816406 L 19.841797 25.269531 C 19.893193 25.342209 20.372542 26 21.429688 26 C 22.057386 26 22.555319 25.685026 22.875 25.349609 C 23.194681 25.014192 23.393848 24.661807 23.478516 24.21875 L 23.478516 24.216797 C 23.557706 23.798129 26.921875 6.5273437 26.921875 6.5273438 L 26.916016 6.5507812 C 27.014496 6.1012683 27.040303 5.6826405 26.931641 5.2695312 C 26.822973 4.8564222 26.536648 4.4608905 26.181641 4.2480469 C 25.826669 4.0352506 25.479353 3.9700339 25.154297 3.984375 z M 24.966797 6.0742188 C 24.961997 6.1034038 24.970391 6.0887279 24.962891 6.1230469 L 24.960938 6.1347656 L 24.958984 6.1464844 C 24.958984 6.1464844 21.636486 23.196371 21.513672 23.845703 C 21.522658 23.796665 21.481573 23.894167 21.439453 23.953125 C 21.379901 23.91208 21.257812 23.859375 21.257812 23.859375 L 21.238281 23.837891 L 16.251953 19.121094 L 12.726562 22.167969 L 13.775391 17.96875 C 13.775391 17.96875 20.331562 11.182109 20.726562 10.787109 C 21.044563 10.471109 21.111328 10.360953 21.111328 10.251953 C 21.111328 10.105953 21.035234 10 20.865234 10 C 20.712234 10 20.506484 10.14875 20.396484 10.21875 C 18.963383 11.132295 12.671823 14.799141 9.8515625 16.439453 C 9.4033769 16.256034 6.2896636 14.981472 5.234375 14.550781 C 5.242365 14.547281 5.2397349 14.548522 5.2480469 14.544922 C 7.6958673 13.491784 12.47163 11.434667 16.720703 9.6074219 C 18.84524 8.6937992 20.838669 7.8379587 22.341797 7.1933594 C 23.821781 6.5586849 24.850125 6.1218894 24.966797 6.0742188 z"></path>
                                </svg>
                            </div>
                        </div>
                        <Image 
                            src={'/svg4.svg'}
                            width={174}
                            height={54}
                            alt=""
                            className="w-[10.875rem] h-[3.375rem]"
                        />
                    </div>
                </div> */}
            </div>
            {/* <div className="flex flex-col gap-[1rem]">
                <hr className="w-full h-[0.0625rem] border-none bg-[#fff6]" />
                <div className="flex items-center gap-[1.25rem] max-md:flex-col max-md:gap-[.25rem] max-md:justify-center">
                    <p className=" text-[#fff6] text-[1rem] max-md:text-center">© ООО «Эверест»  2025. Все права защищены.</p>
                    <p className=" text-[#fff6] text-[1rem] max-md:text-center">Политика обработки персональных данных</p>
                </div>
            </div> */}
        </footer>
    );
}

export default Footer;