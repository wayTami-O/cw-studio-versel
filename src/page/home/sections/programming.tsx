import Image from "next/image";

function Programming() {
    return (
        <div id="services" className="container flex flex-col gap-[7.5rem] scroll-mt-[6.25rem] max-md:scroll-mt-[4rem]">
            <div className="flex justify-between gap-[2rem] items-center max-md:flex-col max-md:gap-[1rem]">
                <div className="max-w-[50.5rem] w-full flex flex-col">
                    <h2 className="text-[3.125rem] leading-[3.625rem] text-[#13151d] tracking-[-.03em] font-semibold max-md:text-[1.625rem] max-md:leading-[2rem]">Сайт + реклама + аналитика = заявки и продажи</h2>
                    <p className="mt-[2rem] text-[#13151d] text-[1.125rem] max-md:text-[1rem] max-md:leading-[1.6875rem]">Берём на себя весь цикл — сайт под вашу нишу и город, трафик, аналитика, мессенджеры и формы. Отвечаем не за пиксели, а за поток лидов.</p>
                    <div className="flex flex-col gap-[.5rem]">
                        <p className="mt-[1.5rem] text-[1.75rem]">Как работаем</p>
                        <ul className="flex flex-col gap-[.25rem]">
                            <li className="list-disc ml-[1rem]"><strong>Бриф</strong> — делаем расчёт, сколько клиентов реально получить</li>
                            <li className="list-disc ml-[1rem]"><strong>Создаём сайт</strong> и запускаем рекламу</li>
                            <li className="list-disc ml-[1rem]"><strong>Каждую неделю</strong> показываем, сколько заявок пришло</li>
                            <li className="list-disc ml-[1rem]"><strong>По договору, в белую</strong> — не со всеми нишами, уточняйте в ЛС</li>
                        </ul>
                    </div>
                    <a href="#contact-form" className="mt-[3.5rem] text-[1.125rem] w-fit flex items-center px-[2rem] h-[4.25rem] bg-[#13151d] text-white rounded-[0.75rem] max-md:w-full max-md:justify-center hover:bg-[#363636] transition-all ease-out duration-300 cursor-pointer">Связаться с нами</a>
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
            <div className="flex justify-between gap-[2rem] items-center max-md:flex-col max-md:gap-[1rem]">
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
                    <h2 className="text-[3.125rem] leading-[3.625rem] text-[#13151d] tracking-[-.03em] font-semibold max-md:text-[1.625rem] max-md:leading-[2rem]">Сайт ради галочки = трата денег</h2>
                    <p className="mt-[2rem] text-[#13151d] text-[1.125rem] max-md:text-[1rem] max-md:leading-[1.6875rem]">Вы вкладываете деньги в рекламу, клики идут, показы крутятся. Но звонков и заявок — ноль. Проблема чаще всего не в рекламе, а в самом сайте.</p>
                    <div className="flex flex-col gap-[.5rem]">
                        <p className="mt-[1.5rem] text-[1.75rem]">ТОП-5 ошибок, которые убивают конверсию</p>
                        <ul className="flex flex-col gap-[.25rem]">
                            <li className="list-disc ml-[1rem]"><strong>Долгая загрузка.</strong> Пользователь не ждёт — он уходит к конкуренту</li>
                            <li className="list-disc ml-[1rem]"><strong>Недоверительный дизайн.</strong> Устаревший или хаотичный вид = нет ощущения, что бизнес серьёзный</li>
                            <li className="list-disc ml-[1rem]"><strong>Слабый оффер.</strong> Нет чёткого ответа «почему купить у вас прямо сейчас»</li>
                            <li className="list-disc ml-[1rem]"><strong>Отсутствие лидмагнита.</strong> Калькулятор, чек-лист, бесплатная консультация — без «крючка» посетитель не превращается в заявку</li>
                            <li className="list-disc ml-[1rem]"><strong>Размытое позиционирование.</strong> Сайт «для всех» = сайт «ни для кого»</li>
                        </ul>
                    </div>
                    <div className="flex flex-col gap-[.5rem]">
                        <p className="mt-[1.5rem] text-[1.75rem]">Что такое лидмагнит?</p>
                        <p className="text-[#13151d] text-[1.125rem] max-md:text-[1rem] max-md:leading-[1.6875rem]">Лидмагнит — это бесплатная «приманка», которая мотивирует человека оставить свои контакты. Это не подарок «ради подарка», а что-то реально полезное и связанное с вашей услугой.</p>
                        <ul className="flex flex-col gap-[.25rem]">
                            <li className="list-disc ml-[1rem]">Калькулятор стоимости (ремонт, стройка, дизайн)</li>
                            <li className="list-disc ml-[1rem]">Бесплатная консультация или аудит</li>
                            <li className="list-disc ml-[1rem]">Чек-лист «5 ошибок при выборе подрядчика»</li>
                            <li className="list-disc ml-[1rem]">Мини-гид или PDF-инструкция</li>
                        </ul>
                    </div>
                    <a href="#contact-form" className="mt-[3.5rem] text-[1.125rem] w-fit flex items-center px-[2rem] h-[4.25rem] bg-[#13151d] text-white rounded-[0.75rem] max-md:w-full max-md:justify-center hover:bg-[#363636] transition-all ease-out duration-300 cursor-pointer">Связаться с нами</a>
                </div>
            </div>
        </div>
    );
}

export default Programming;