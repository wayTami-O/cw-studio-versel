'use client'

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import Image from "next/image";

import "swiper/css";
import "swiper/css/pagination";

function Review() {

    const reviews = [
        {
            name: "Анна Смирнова",
            position: "Основатель стартапа",
            text: "Обратились в студию для создания MVP нашего продукта. Команда быстро вникла в специфику бизнеса и предложила отличное решение. Сайт получился современным и функциональным. Особенно понравился подход к UX — всё продумано до мелочей. Рекомендую!",
            img: "/otzivi/girl1.jpg",
        },
        {
            name: "Дмитрий Козлов",
            position: "Директор по маркетингу",
            text: "Работали над ребрендингом и новым сайтом. Результат превзошёл ожидания — конверсия выросла на 40% уже в первый месяц. Команда профессионалов, которые понимают бизнес и умеют решать задачи клиента. Сроки соблюдены, качество на высоте.",
            img: "/otzivi/man1.jpg",
        },
        {
            name: "Елена Волкова",
            position: "Владелец интернет-магазина",
            text: "Нужен был новый дизайн и интеграция с CRM. Студия не только выполнила техническое задание, но и предложила улучшения, которые мы не рассматривали. Теперь у нас современный магазин с удобной админкой. Клиенты довольны, продажи растут.",
            img: "/otzivi/girl2.jpg",
        },
    ];

    return (

        <div className="flex flex-col gap-[2rem]">
      <Swiper
        modules={[Pagination]}
        slidesPerView={1}
        spaceBetween={8}
        pagination={{
          el: ".custom-pagination",
          clickable: true,
          renderBullet: (_, className) => {
            return `<span class="${className} block !w-[3.75rem] !h-[0.375rem] !rounded-[0.25rem] !bg-[#13151d] opacity-10"></span>`;
          },
        }}
        className="w-full mt-[7.5rem] !px-[12.5rem] max-md:!px-[1rem]"
        breakpoints={{
          768: {
            slidesPerView: 2.1,
            spaceBetween: 30
          }
        }}
      >
        {reviews.map((review, idx) => (
          <SwiperSlide key={idx}>
            <div className="flex items-center gap-[2.5rem]">
              <div className="w-[51.25rem] h-[22.25rem] max-md:h-[29.125rem] rounded-[2rem] bg-[#f5f5f5] p-[2.5rem] max-md:p-[1.5rem] flex flex-col gap-[1.5rem] max-md:gap-[0.75rem]">
                <div className="flex gap-[1rem]">
                  <Image
                    src={review.img}
                    width={60}
                    height={60}
                    alt=""
                    className="w-[3.75rem] h-[3.75rem] max-md:w-[3rem] max-md:h-[3rem] rounded-full object-cover"
                  />
                  <div className="flex flex-col gap-[0.25rem]">
                    <p className="text-[1.5rem] text-[#13151d] font-semibold max-md:text-[1.25rem] max-md:leading-[1.5rem]">
                      {review.name}
                    </p>
                    <p className="text-[1.125rem] text-[#13151db3] max-md:text-[1rem] max-md:leading-[1.6875rem]">
                      {review.position}
                    </p>
                  </div>
                </div>
                <p className="text-[1.125rem] text-[#13151d] max-md:text-[1rem] max-md:leading-[1.6875rem] font-[300]">
                  {review.text}
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Кастомная пагинация */}
      <div className="!w-fit custom-pagination mx-auto flex gap-[0.25rem] [&_.swiper-pagination-bullet-active]:opacity-100"></div>
    </div>

        // <div className="container flex flex-col gap-[2rem]">
            
            
        //     <div className="flex items-center gap-[2.5rem]">
        //         <div className="w-[51.25rem] h-[22.25rem] max-md:h-[29.125rem] rounded-[2rem] bg-[#f5f5f5] p-[2.5rem] max-md:p-[1.5rem] flex flex-col gap-[1.5rem] max-md:gap-[0.75rem]">
        //             <div className="flex gap-[1rem]">
        //                 <Image 
        //                     src={'/svg3.svg'}
        //                     width={60}
        //                     height={60}
        //                     alt=""
        //                     className="w-[3.75rem] h-[3.75rem] max-md:w-[3rem] max-md:h-[3rem]"
        //                 />
        //                 <div className="flex flex-col gap-[0.25rem]">
        //                     <p className="text-[1.5rem] text-[#13151d] font-semibold max-md:text-[1.25rem] max-md:leading-[1.5rem]">Сучилина Екатерина</p>
        //                     <p className="text-[1.125rem] text-[#13151db3]  max-md:text-[1rem] max-md:leading-[1.6875rem]">Руководительн проектов</p>
        //                 </div>
        //             </div>
        //             <p className="text-[1.125rem] text-[#13151d] font-semibold max-md:text-[1rem] max-md:leading-[1.6875rem]">
        //                 Компания СПАО «Ингосстрах» выражает благодарность студии Everest за продуктивную работу над созданием дизайна личного кабинета HR- партнёра. Профессионализм команды и применение лучших практик позволили разработать удобный интерфейс и получить позитивную обратную связь от пользователей. Отдельная благодарность выражается Владимиру Белоусову за индивидуальный подход.                                
        //             </p>
        //         </div>
        //     </div>
        //     <div className="mx-auto flex gap-[0.25rem]">
        //         <div className="w-[3.75rem] h-[0.375rem] bg-[#13151d] rounded-[0.25rem]">
        //         </div>
        //         <div className="w-[3.75rem] h-[0.375rem] bg-[#13151d] rounded-[0.25rem] opacity-10">
        //         </div>
        //         <div className="w-[3.75rem] h-[0.375rem] bg-[#13151d] rounded-[0.25rem] opacity-10">
        //         </div>
        //         <div className="w-[3.75rem] h-[0.375rem] bg-[#13151d] rounded-[0.25rem] opacity-10">
        //         </div>
        //         <div className="w-[3.75rem] h-[0.375rem] bg-[#13151d] rounded-[0.25rem] opacity-10">
        //         </div>
        //     </div>
        // </div>
    );
}

export default Review;