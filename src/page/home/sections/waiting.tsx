function Waiting() {
    return (
        <div className="container flex flex-col gap-[3.5rem]">
            <div className="flex flex-col gap-[2rem] max-md:gap-[1rem]">
                <h2 className="text-[3.125rem] font-semibold tracking-[-.03em] leading-[3.625rem] max-md:text-[1.625rem] max-md:leading-[2rem]">Ждём всем сердцем 💜</h2>
                <p className="text-[1.125rem] text-[#13151db3]">Мы всегда рады умным, инициативным и амбициозным специалистам, независимо от должности.</p>
            </div>
            <div className="flex flex-col">
                <div className="flex items-center gap-[2.5rem] py-[1.5rem] max-md:flex-col max-md:gap-[1rem] relative">
                    <div className="w-[53.8125rem] flex items-center gap-[1rem] max-md:w-full max-md:flex-col max-md:items-start max-md:gap-[1rem]">
                        <div className="border-[0.0625rem] border-[#13151d29] rounded-[6.25rem] px-[1rem] h-[2.5rem] text-[#13151d] text-[1.125rem] font-semibold flex items-center">Middle</div>
                        <p className="text-[1.5rem] text-[#13151d] tracking-[-.03em] leading-[2rem]">UX/UI-дизайнер</p>
                    </div>
                    <p className="text-[#13151db3] text-[1.125rem] max-md:mr-auto">Удалённо</p>
                    
                    <div className="mobile absolute right-0 bottom-[1rem] w-[4.25rem] h-[4.25rem] border-[0.0625rem] border-[#13151d29] rounded-full flex items-center justify-center max-md:w-[3.25rem] max-md:h-[3.25rem]">
                        <svg className="w-[2rem] h-[2rem] rotate-180 max-md:w-[1.125rem] max-md:h-[1.125rem]" viewBox="0 0 15.699 8.707" fill="currentColor">
                            <polygon points="15.699,3.854 1.914,3.854 5.061,0.707 4.354,0 0,4.354 4.354,8.707 5.061,8 1.914,4.854 15.699,4.854"/>
                        </svg>
                    </div>
                </div>
                <hr className="w-full h-[0.0625rem] border-none bg-[#13151d29]" />
                <div className="flex items-center gap-[2.5rem] py-[1.5rem] max-md:flex-col max-md:gap-[1rem] relative">
                    <div className="w-[53.8125rem] flex items-center gap-[1rem] max-md:w-full max-md:flex-col max-md:items-start max-md:gap-[1rem]">
                        <div className="border-[0.0625rem] border-[#13151d29] rounded-[6.25rem] px-[1rem] h-[2.5rem] text-[#13151d] text-[1.125rem] font-semibold flex items-center">Middle</div>
                        <p className="text-[1.5rem] text-[#13151d] tracking-[-.03em] leading-[2rem]">UX/UI-дизайнер</p>
                    </div>
                    <p className="text-[#13151db3] text-[1.125rem] max-md:mr-auto">Удалённо</p>
                    
                    <div className="mobile absolute right-0 bottom-[1rem] w-[4.25rem] h-[4.25rem] border-[0.0625rem] border-[#13151d29] rounded-full flex items-center justify-center max-md:w-[3.25rem] max-md:h-[3.25rem]">
                        <svg className="w-[2rem] h-[2rem] rotate-180 max-md:w-[1.125rem] max-md:h-[1.125rem]" viewBox="0 0 15.699 8.707" fill="currentColor">
                            <polygon points="15.699,3.854 1.914,3.854 5.061,0.707 4.354,0 0,4.354 4.354,8.707 5.061,8 1.914,4.854 15.699,4.854"/>
                        </svg>
                    </div>
                </div>

            </div>
            <a href="#" className="px-[2rem] h-[4.25rem] bg-[#13151d] rounded-[0.75rem] text-[1.125rem] text-white flex items-center w-fit max-md:w-full max-md:justify-center hover:bg-[#363636] transition-all ease-out duration-300 cursor-pointer">Хочу в команду</a>
        </div>
    );
}

export default Waiting;