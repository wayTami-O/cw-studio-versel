function Contacts() {
    return (
        <div className="container flex flex-col gap-[2rem]">
            <h2 className="text-[3.125rem] text-[#13151d] font-semibold">Контакты</h2>
            <div className="grid grid-cols-4 gap-[2.5rem] max-md:grid-cols-1">
                <div className="w-full flex flex-col gap-[0.5rem]">
                    <p className="text-[#13151db3] text-[1.125rem]">Пишите</p>
                    <a href="#" className="text-[1.5rem] text-[#13151d] tracking-[-.03em] leading-[2rem] font-semibold">sales@everest.cx</a>
                </div>
                <div className="w-full flex flex-col gap-[0.5rem]">
                    <p className="text-[#13151db3] text-[1.125rem]">Звоните</p>
                    <a href="#" className="text-[1.5rem] text-[#13151d] tracking-[-.03em] leading-[2rem] font-semibold">+7 495 414 14 44</a>
                </div>
                <div className="w-full flex flex-col gap-[0.5rem] col-span-2 max-md:col-span-1">
                    <p className="text-[#13151db3] text-[1.125rem]">Москва</p>
                    <a href="#" className="text-[1.5rem] text-[#13151d] tracking-[-.03em] leading-[2rem] font-semibold">Пресненская набережная, 8с1, башня «Москва», 58 этаж, офис 581</a>
                </div>
                <div className="w-full flex flex-col gap-[0.5rem] col-span-2 max-md:col-span-1 max-md:order-5">
                    <button className="bg-[#8b73ff] px-[2rem] rounded-[0.75rem] flex items-center h-[4.25rem] text-white text-[1.125rem] w-fit font-semibold max-md:w-full max-md:justify-center">Обсудить проект</button>
                </div>
                <div className="w-full flex flex-col gap-[0.5rem] col-span-2 max-md:col-span-1 max-md:order-4">
                    <p className="text-[#13151db3] text-[1.125rem]">Тамбов</p>
                    <a href="#" className="text-[1.5rem] text-[#13151d] tracking-[-.03em] leading-[2rem] font-semibold">Максима Горького, 17 БЦ Галерея</a>
                </div>
            </div>
        </div>
    );
}

export default Contacts;