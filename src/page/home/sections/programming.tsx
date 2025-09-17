import Image from "next/image";

function Programming() {
    return (
        <div className="container flex flex-col gap-[7.5rem]">
            <div className="flex justify-between items-center max-md:flex-col max-md:gap-[1rem]">
                <div className="max-w-[50.5rem] w-full flex flex-col">
                    <h2 className="text-[3.125rem] leading-[3.625rem] text-[#13151d] tracking-[-.03em] font-semibold max-md:text-[1.625rem] max-md:leading-[2rem]">Аутсорсинг UX-экспертизы и команд для системных интеграторов и крупных разработчиков</h2>
                    <p className="mt-[2rem] text-[#13151d] text-[1.125rem] max-md:text-[1rem] max-md:leading-[1.6875rem]">Аналитика, UX/UI-дизайн и фронтенд на условиях субподряда для системных интеграторов и крупных digital-продакшнов</p>
                    <a href="#" className="mt-[3.5rem] text-[1.125rem] w-fit flex items-center px-[2rem] h-[4.25rem] bg-[#13151d] text-white rounded-[0.75rem] max-md:w-full max-md:justify-center hover:bg-[#363636] transition-all ease-out duration-300 cursor-pointer">Связаться с нами</a>
                </div>
                <div className="w-[55rem] h-[30rem] rounded-[2rem] overflow-hidden max-md:!w-[21.4375rem] max-md:h-[25rem]">
                    <Image 
                        src={'/img3.png'}
                        width={880}
                        height={480}
                        alt=""
                        className="w-[55rem] h-[30rem] object-cover max-md:!w-[21.4375rem] max-md:h-[25rem]"
                    />
                </div>
            </div>
            <div className="flex justify-between items-center max-md:flex-col max-md:gap-[1rem]">
                <div className="w-[55rem] h-[30rem] rounded-[2rem] overflow-hidden max-md:!w-[21.4375rem] max-md:h-[25rem] order-1 max-md:order-2">
                    <Image 
                        src={'/img3.png'}
                        width={880}
                        height={480}
                        alt=""
                        className="w-[55rem] h-[30rem] object-cover max-md:!w-[21.4375rem] max-md:h-[25rem]"
                    />
                </div>
                <div className="max-w-[50.5rem] w-full flex flex-col order-2 max-md:order-1">
                    <h2 className="text-[3.125rem] leading-[3.625rem] text-[#13151d] tracking-[-.03em] font-semibold max-md:text-[1.625rem] max-md:leading-[2rem]">Аутсорсинг UX-экспертизы и команд для системных интеграторов и крупных разработчиков</h2>
                    <p className="mt-[2rem] text-[#13151d] text-[1.125rem] max-md:text-[1rem] max-md:leading-[1.6875rem]">Аналитика, UX/UI-дизайн и фронтенд на условиях субподряда для системных интеграторов и крупных digital-продакшнов</p>
                    <a href="#" className="mt-[3.5rem] text-[1.125rem] w-fit flex items-center px-[2rem] h-[4.25rem] bg-[#13151d] text-white rounded-[0.75rem] max-md:w-full max-md:justify-center hover:bg-[#363636] transition-all ease-out duration-300 cursor-pointer">Связаться с нами</a>
                </div>
            </div>
        </div>
    );
}

export default Programming;