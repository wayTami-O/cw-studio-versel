import Image from "next/image";

function Programming() {
    return (
        <div id="services" className="container flex flex-col gap-[7.5rem]">
            <div className="flex justify-between items-center max-md:flex-col max-md:gap-[1rem]">
                <div className="max-w-[50.5rem] w-full flex flex-col">
                    <h2 className="text-[3.125rem] leading-[3.625rem] text-[#13151d] tracking-[-.03em] font-semibold max-md:text-[1.625rem] max-md:leading-[2rem]">Дизайн, ориентированный на пользователей</h2>
                    <p className="mt-[2rem] text-[#13151d] text-[1.125rem] max-md:text-[1rem] max-md:leading-[1.6875rem]">Мы предлагаем полный цикл UX/UI-дизайна, начиная от анализа потребностей пользователей до создания готовых интерфейсов, готовых к разработке.</p>
                    <div className="flex flex-col gap-[.5rem]">
                        <p className="mt-[1.5rem] text-[1.75rem]">UX-аналитика</p>
                        <ul className="flex flex-col gap-[.25rem]">
                            <li className="list-disc ml-[1rem]">Разрабатываем концепции дизайна, соответствующие вашим требованиям и современным трендам.</li>
                            <li className="list-disc ml-[1rem]">Создаем привлекательные и удобные пользовательские интерфейсы (UI).</li>
                            <li className="list-disc ml-[1rem]">Проектируем пользовательский опыт (UX) для максимальной эффективности.</li>
                            <li className="list-disc ml-[1rem]">Разрабатываем дизайн-системы и гайдлайны для обеспечения согласованности.</li>
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
                    <h2 className="text-[3.125rem] leading-[3.625rem] text-[#13151d] tracking-[-.03em] font-semibold max-md:text-[1.625rem] max-md:leading-[2rem]">Качественная разработка сайта</h2>
                    <p className="mt-[2rem] text-[#13151d] text-[1.125rem] max-md:text-[1rem] max-md:leading-[1.6875rem]">На условиях субподряда мы предлагаем комплексные услуги по фронтенд-разработке, интегрированные с UX-аналитикой и дизайном, для создания современных и эффективных цифровых продуктов.</p>
                    <div className="flex flex-col gap-[.5rem]">
                        <p className="mt-[1.5rem] text-[1.75rem]">Фронтенд-разработка</p>
                        <ul className="flex flex-col gap-[.25rem]">
                            <li className="list-disc ml-[1rem]">Качественная и быстрая разработка интерфейсов на основе современных технологий (HTML, CSS, JavaScript, React, Vue.js и др.).</li>
                            <li className="list-disc ml-[1rem]">Оптимизация производительности и обеспечение кроссбраузерной совместимости.</li>
                            <li className="list-disc ml-[1rem]">Интеграция с backend-системами.</li>
                            <li className="list-disc ml-[1rem]">Адаптивная верстка для корректного отображения на всех устройствах.</li>
                            <li className="list-disc ml-[1rem]">Мы строим масштабируемые, безопасные и производительные серверные решения, обеспечивая надежную работу ваших приложений.</li>
                        </ul>
                    </div>
                    <div className="flex flex-col gap-[.5rem]">
                        <p className="mt-[1.5rem] text-[1.75rem]">Бэкенд-разработка</p>
                        <ul className="flex flex-col gap-[.25rem]">
                            <li className="list-disc ml-[1rem]">Языки и фреймворки: Golang (Go), Express.js (Node.js)</li>
                            <li className="list-disc ml-[1rem]">Оптимизация производительности и обеспечение кроссбраузерной совместимости.</li>
                            <li className="list-disc ml-[1rem]">Базы данных: PostgreSQL (для реляционных данных), MinIO (для объектного хранения)</li>
                            <li className="list-disc ml-[1rem]">ORM/Query Builder: Prisma</li>
                        </ul>
                    </div>
                    <a href="#contact-form" className="mt-[3.5rem] text-[1.125rem] w-fit flex items-center px-[2rem] h-[4.25rem] bg-[#13151d] text-white rounded-[0.75rem] max-md:w-full max-md:justify-center hover:bg-[#363636] transition-all ease-out duration-300 cursor-pointer">Связаться с нами</a>
                </div>
            </div>
        </div>
    );
}

export default Programming;