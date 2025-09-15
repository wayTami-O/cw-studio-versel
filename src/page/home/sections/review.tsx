import Image from "next/image";

function Review() {
    return (
        <div className="container flex flex-col gap-[2rem]">
            <div className="flex items-center gap-[2.5rem]">
                <div className="w-[51.25rem] h-[22.25rem] max-md:h-[29.125rem] rounded-[2rem] bg-[#f5f5f5] p-[2.5rem] max-md:p-[1.5rem] flex flex-col gap-[1.5rem] max-md:gap-[0.75rem]">
                    <div className="flex gap-[1rem]">
                        <Image 
                            src={'/svg3.svg'}
                            width={60}
                            height={60}
                            alt=""
                            className="w-[3.75rem] h-[3.75rem] max-md:w-[3rem] max-md:h-[3rem]"
                        />
                        <div className="flex flex-col gap-[0.25rem]">
                            <p className="text-[1.5rem] text-[#13151d] font-semibold max-md:text-[1.25rem] max-md:leading-[1.5rem]">Сучилина Екатерина</p>
                            <p className="text-[1.125rem] text-[#13151db3]  max-md:text-[1rem] max-md:leading-[1.6875rem]">Руководительн проектов</p>
                        </div>
                    </div>
                    <p className="text-[1.125rem] text-[#13151d] font-semibold max-md:text-[1rem] max-md:leading-[1.6875rem] font-[300]">
                        Компания СПАО «Ингосстрах» выражает благодарность студии Everest за продуктивную работу над созданием дизайна личного кабинета HR- партнёра. Профессионализм команды и применение лучших практик позволили разработать удобный интерфейс и получить позитивную обратную связь от пользователей. Отдельная благодарность выражается Владимиру Белоусову за индивидуальный подход.                                
                    </p>
                </div>
            </div>
            <div className="mx-auto flex gap-[0.25rem]">
                <div className="w-[3.75rem] h-[0.375rem] bg-[#13151d] rounded-[0.25rem]">
                </div>
                <div className="w-[3.75rem] h-[0.375rem] bg-[#13151d] rounded-[0.25rem] opacity-10">
                </div>
                <div className="w-[3.75rem] h-[0.375rem] bg-[#13151d] rounded-[0.25rem] opacity-10">
                </div>
                <div className="w-[3.75rem] h-[0.375rem] bg-[#13151d] rounded-[0.25rem] opacity-10">
                </div>
                <div className="w-[3.75rem] h-[0.375rem] bg-[#13151d] rounded-[0.25rem] opacity-10">
                </div>
            </div>
        </div>
    );
}

export default Review;