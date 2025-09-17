import Image from "next/image";

function BestStudio() {
    return (
        <div className="container flex gap-[4.5rem] items-center max-md:flex-col">
            <div className="flex flex-col">
                <h2 className="mb-[3.5rem] text-[3.125rem] leading-[3.625rem] font-semibold tracking-[-.03em] max-md:text-[1.625rem] max-md:leading-[2rem]">Входим в десятку лучших дизайн-студий России</h2>
                <div className="mb-[1.5rem] flex items-center gap-[3.5rem] max-md:justify-between max-md:gap-0">
                    <div className="flex items-center gap-[1rem]">
                        <Image 
                            src={'/svg1.svg'}
                            alt=""
                            width={60}
                            height={60}
                            className="w-[3.75rem] h-[3.75rem] max-md:w-[3rem] max-md:h-[3rem]"
                        />
                        <div className="flex flex-col gap-[0.25rem]">
                            <p className="text-[1.25rem] leading-[1.625rem] font-[600] tracking-[-.03em] max-md:text-[1.125rem] max-md:leading-[1.375rem]">Рейтинг Рунета</p>
                            <p className="text-[1.125rem] text-[#13151db3] max-md:text-[0.875rem] max-md:leading-[1.125rem]">6 место</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-[1rem]">
                        <Image 
                            src={'/svg2.svg'}
                            alt=""
                            width={60}
                            height={60}
                            className="w-[3.75rem] h-[3.75rem] max-md:w-[3rem] max-md:h-[3rem]"
                        />
                        <div className="flex flex-col gap-[0.25rem]">
                            <p className="text-[1.25rem] leading-[1.625rem] font-[600] tracking-[-.03em] max-md:text-[1.125rem] max-md:leading-[1.375rem]">Tagline</p>
                            <p className="text-[1.125rem] text-[#13151db3] max-md:text-[0.875rem] max-md:leading-[1.125rem]">16 место</p>
                        </div>
                    </div>
                </div>
                <p className="mb-[3.5rem] text-[#13151db3] text-[1.25rem]">Наши проекты постоянно отмечают международные и российские эксперты. Мы обучаем специалистов и растем в среднем на 45% каждый год.</p>
                <button className="h-[4.25rem] rounded-[0.75rem] border-[0.0625rem] border-[#13151d29] px-[2rem] w-fit max-md:w-full hover:bg-[#13151d] hover:text-white transition-all ease-out duration-300">Подробнее о нас</button>
            </div>
            <div className="relative rounded-[2rem] overflow-hidden min-w-[55rem] after:absolute after:w-full after:h-full after:bg-[rgba(19,21,29,0.4)] after:top-0 after:left-0 max-md:!min-w-[21.4375rem] max-md:!w-[21.4375rem] max-md:h-[25rem]">
                <Image 
                    src={'/img2.png'}
                    alt=""
                    width={880}
                    height={480}
                    className="w-[55rem] h-[30rem] max-md:!w-[21.4375rem] max-md:h-[25rem]"
                />
                <div className="absolute cursor-pointer z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[4.25rem] h-[4.25rem] bg-white rounded-full flex items-center justify-center">
                    <div className="w-0 h-0 rotate-90 border-l-[0.75rem] border-l-transparent border-r-[0.75rem] border-r-transparent border-b-[1.25rem] border-b-black"></div>
                </div>
            </div>
        </div>
    );
}

export default BestStudio;