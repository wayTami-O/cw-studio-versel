function Hero() {
    return (
        <div className="pt-[6.25rem] h-[100dvh] max-md:h-fit container-no-margin flex flex-col justify-center gap-[2rem]">
            <h1 className="max-w-[78.75rem] text-[5rem] max-md:text-[2.5rem] font-gilroy font-[600] leading-[5.5rem] max-md:leading-[3rem] tracking-[-.03em]">Разработка цифровых решений с фокусом на User Experience для</h1>
            <div className="flex items-center gap-[1rem] max-md:flex-wrap">
                <div className="px-[3rem] max-md:px-[1rem] h-[4.75rem] max-md:h-[2.5rem] font-[600] text-[1.875rem] text-[#13151d] flex justify-center items-center rounded-[6.25rem] bg-[#f5f5f5]">банков</div>
                <div className="px-[3rem] max-md:px-[1rem] h-[4.75rem] max-md:h-[2.5rem] font-[600] text-[1.875rem] text-[#13151d] flex justify-center items-center rounded-[6.25rem] bg-[#f5f5f5]">ритейла</div>
                <div className="px-[3rem] max-md:px-[1rem] h-[4.75rem] max-md:h-[2.5rem] font-[600] text-[1.875rem] text-[#13151d] flex justify-center items-center rounded-[6.25rem] bg-[#f5f5f5]">телекома</div>
                <div className="px-[3rem] max-md:px-[1rem] h-[4.75rem] max-md:h-[2.5rem] font-[600] text-[1.875rem] text-[#13151d] flex justify-center items-center rounded-[6.25rem] bg-[#f5f5f5]">и других отраслей</div>
            </div>
        </div>
    );
}

export default Hero;