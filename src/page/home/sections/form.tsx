'use client'

import { useEffect, useRef, useState } from "react";
import { Formik, Form, Field } from "formik";
import { motion } from "framer-motion";
import { z } from "zod";
import { toFormikValidationSchema } from "zod-formik-adapter";
import IMask from "imask";

// Zod схема валидации
const FormSchema = z.object({
    name: z.string().min(1, "Введите имя"),
    email: z.string().email("Некорректный email"),
    phone: z
        .string()
        .min(10, "Введите телефон")
        .regex(/^[+0-9 ()-]+$/, "Неверный формат"),
    from: z.string().optional(),
    message: z.string().min(1, "Введите сообщение"),
});

function ContactForm() {
    const phoneRef = useRef<HTMLInputElement | null>(null);

    useEffect(() => {
        if (phoneRef.current) {
            const maskOptions = {
                mask: "+{7} (000) 000-00-00",
            };
            const mask = IMask(phoneRef.current, maskOptions);
            return () => mask.destroy();
        }
    }, []);

    const isActive = (val: string) => val.length > 0;


    const [checked, setChecked] = useState(false);

    const toggle = () => {
        const newValue = !checked;
        setChecked(newValue);
    };

    return (
        <div className="container flex flex-col gap-[2rem]">
            <h2 className="text-[3.125rem] text-[#13151d] font-semibold max-md:text-[1.625rem] leading-[2rem]">
                Обсудим ваш проект
            </h2>
            <div className="grid grid-cols-2 gap-[4.5rem] max-md:flex max-md:flex-col">
                <div className="flex flex-col">
                    <p className="text-[1.125rem] text-[#13151db3] max-md:text-[1rem]">
                        Расскажите подробнее о проекте, и мы свяжемся с вами в ближайшее время.
                    </p>
                    <p className="text-[1.125rem] text-[#13151db3] mt-[3.5rem] mb-[1.5rem] max-md:text-[1rem]">
                        Не знаете с чего начать — позвоните нам, <br /> мы поможем разобраться.
                    </p>
                    <a
                        href="#"
                        className="text-[1.5rem] text-[#13151d] tracking-[-.03em] leading-[2rem] font-semibold"
                    >
                        +7 495 414 14 44
                    </a>
                </div>

                <div className="flex flex-col">

                    
                    <Formik
                        initialValues={{ name: "", email: "", phone: "", from: "", message: "" }}
                        validationSchema={toFormikValidationSchema(FormSchema)}
                        onSubmit={(values) => {
                            console.log("Submitted:", values);
                        }}
                    >
                        {({ values, handleChange, errors, touched }) => (
                            <Form className="grid grid-cols-2 gap-[1.5rem] max-md:grid-cols-1">
                                {/* Name */}
                                <label className="h-[4.25rem] relative flex items-center w-full">
                                    <Field
                                        type="text"
                                        name="name"
                                        value={values.name}
                                        onChange={handleChange}
                                        className={`w-full border-[0.063rem] rounded-[0.75rem]
                                            bg-white flex text-[1.25rem] leading-[2rem] pt-[1.5rem]
                                            px-[1.5rem] pb-[0.625rem] outline-none
                                            ${errors.name && touched.name ? 'border-red-500' : 'border-[#13151d29]'}`}
                                    />
                                    <motion.span
                                        initial={false}
                                        animate={
                                            isActive(values.name)
                                                ? { top: "0.4rem", fontSize: "0.875rem", opacity: 0.8 }
                                                : { top: "1.55rem", fontSize: "1.25rem", opacity: 0.3 }
                                        }
                                        transition={{ type: "tween", duration: 0.25 }}
                                        className="absolute left-[1.5rem] pointer-events-none"
                                    >
                                        Имя
                                    </motion.span>
                                </label>

                                {/* Email */}
                                <label className="h-[4.25rem] relative flex items-center w-full">
                                    <Field
                                        type="text"
                                        name="email"
                                        value={values.email}
                                        onChange={handleChange}
                                        className={`w-full border-[0.063rem] rounded-[0.75rem]
                                            bg-white flex text-[1.25rem] leading-[2rem] pt-[1.5rem]
                                            px-[1.5rem] pb-[0.625rem] outline-none
                                            ${errors.email && touched.email ? 'border-red-500' : 'border-[#13151d29]'}`}
                                    />
                                    <motion.span
                                        initial={false}
                                        animate={
                                            isActive(values.email)
                                                ? { top: "0.4rem", fontSize: "0.875rem", opacity: 0.8 }
                                                : { top: "1.55rem", fontSize: "1.25rem", opacity: 0.3 }
                                        }
                                        transition={{ type: "tween", duration: 0.25 }}
                                        className="absolute left-[1.5rem] pointer-events-none"
                                    >
                                        Email
                                    </motion.span>
                                </label>

                                {/* Phone */}
                                <label className="h-[4.25rem] relative flex items-center w-full">
                                    <Field
                                        innerRef={phoneRef}
                                        type="text"
                                        name="phone"
                                        value={values.phone}
                                        onChange={handleChange}
                                        className={`w-full border-[0.063rem] rounded-[0.75rem]
                                            bg-white flex text-[1.25rem] leading-[2rem] pt-[1.5rem]
                                            px-[1.5rem] pb-[0.625rem] outline-none
                                            ${errors.phone && touched.phone ? 'border-red-500' : 'border-[#13151d29]'}`}
                                    />
                                    <motion.span
                                        initial={false}
                                        animate={
                                            isActive(values.phone)
                                                ? { top: "0.4rem", fontSize: "0.875rem", opacity: 0.8 }
                                                : { top: "1.55rem", fontSize: "1.25rem", opacity: 0.3 }
                                        }
                                        transition={{ type: "tween", duration: 0.25 }}
                                        className="absolute left-[1.5rem] pointer-events-none"
                                    >
                                        Телефон
                                    </motion.span>
                                </label>

                                {/* From */}
                                <label className="h-[4.25rem] relative flex items-center w-full">
                                    <Field
                                        type="text"
                                        name="from"
                                        value={values.from}
                                        onChange={handleChange}
                                        className={`w-full border-[0.063rem] rounded-[0.75rem]
                                            bg-white flex text-[1.25rem] leading-[2rem] pt-[1.5rem]
                                            px-[1.5rem] pb-[0.625rem] outline-none
                                            ${errors.from && touched.from ? 'border-red-500' : 'border-[#13151d29]'}`}
                                    />
                                    <motion.span
                                        initial={false}
                                        animate={
                                            isActive(values.from)
                                                ? { top: "0.4rem", fontSize: "0.875rem", opacity: 0.8 }
                                                : { top: "1.55rem", fontSize: "1.25rem", opacity: 0.3 }
                                        }
                                        transition={{ type: "tween", duration: 0.25 }}
                                        className="absolute left-[1.5rem] pointer-events-none"
                                    >
                                        Откуда о нас узнали
                                    </motion.span>
                                </label>

                                {/* Message */}
                                <label className="col-span-2 row-span-2 h-full relative flex items-center w-full max-md:col-span-1">
                                    <Field
                                        as="textarea"
                                        name="message"
                                        value={values.message}
                                        onChange={handleChange}
                                        className={`w-full border-[0.063rem] rounded-[0.75rem]
                                            bg-white flex text-[1.25rem] leading-[2rem] pt-[1.5rem]
                                            px-[1.5rem] pb-[0.625rem] outline-none
                                            ${errors.message && touched.message ? 'border-red-500' : 'border-[#13151d29]'}`}
                                    />
                                    <motion.span
                                        initial={false}
                                        animate={
                                            isActive(values.message)
                                                ? { top: "0.4rem", fontSize: "0.875rem", opacity: 0.8 }
                                                : { top: "1.55rem", fontSize: "1.25rem", opacity: 0.3 }
                                        }
                                        transition={{ type: "tween", duration: 0.25 }}
                                        className="absolute left-[1.5rem] pointer-events-none"
                                    >
                                        Сообщение
                                    </motion.span>
                                </label>
                            </Form>
                        )}
                    </Formik>
                    <div className="flex items-center gap-[.5rem] mt-[1.5rem] ">
                        <svg className="w-[2rem] h-[2rem]" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M23.3334 11.6665H2.66669V9.6665H23.3334C27.1993 9.6665 30.3334 12.8005 30.3334 16.6665C30.3334 20.5325 27.1993 23.6665 23.3334 23.6665H10.6667C7.90526 23.6665 5.66669 21.4279 5.66669 18.6665C5.66669 15.9051 7.90526 13.6665 10.6667 13.6665H23.3334C24.9902 13.6665 26.3334 15.0096 26.3334 16.6665C26.3334 18.3234 24.9902 19.6665 23.3334 19.6665H12V17.6665H23.3334C23.8856 17.6665 24.3334 17.2188 24.3334 16.6665C24.3334 16.1142 23.8856 15.6665 23.3334 15.6665H10.6667C9.00983 15.6665 7.66669 17.0096 7.66669 18.6665C7.66669 20.3234 9.00983 21.6665 10.6667 21.6665H23.3334C26.0948 21.6665 28.3334 19.4279 28.3334 16.6665C28.3334 13.9051 26.0948 11.6665 23.3334 11.6665Z" fill="#13151D" fillOpacity="0.7"></path>
                        </svg>
                        <div className="flex flex-col">
                            <span className="text-[1.125rem] text-[#13151db3] font-semibold max-md:text-[0.875rem] max-md:leading-[1.125rem]">Прикрепить файл</span>
                            <span className="text-[1.125rem] text-[#13151db3] max-md:text-[0.875rem] max-md:leading-[1.125rem]">pdf, doc, jpg, png (макс. 5 шт. до 5 Mb)</span>
                        </div>
                    </div>
                    <div className="mt-[3.5rem] flex gap-[2.5rem] max-md:flex-col max-md:mt-[1.5rem]">
                        <button className="bg-[#8b73ff] min-w-fit px-[2rem] rounded-[0.75rem] flex items-center h-[4.25rem] text-white text-[1.125rem] w-fit max-md:w-full max-md:justify-center hover:bg-[#7d63ff] transition-all ease-out duration-300 cursor-pointer">Отправить заявку</button>
                        <div className="flex gap-[1.5rem]">
                            <label className="flex gap-2 cursor-pointer select-none">
                                <div
                                    className={`w-6 h-6 flex items-center justify-center rounded-md border transition-colors duration-200
                                        ${checked ? 'bg-[#8b73ff] border-[#8b73ff]' : 'bg-white border-gray-400'}`}
                                    onClick={toggle}
                                >
                                    {checked && (
                                        <svg
                                            width="16"
                                            height="16"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            aria-hidden="true"
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="text-white"
                                        >
                                            <path
                                                d="M20 6L9 17l-5-5"
                                                stroke="currentColor"
                                                strokeWidth="2"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                        </svg>
                                    )}
                                </div>
                            </label>
                            <span className="text-[1.125rem] text-[#13151db3]">Даю согласие на <span className="text-[#8b73ff]">обработку персональных данных</span> и получение редких (но полезных) рассылок</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ContactForm;
