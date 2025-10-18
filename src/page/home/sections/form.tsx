'use client'

import { useRef, useState } from "react";
import { Formik, Form, Field } from "formik";
import { motion } from "framer-motion";
import { z } from "zod";
import { toFormikValidationSchema } from "zod-formik-adapter";

// Zod схема валидации
const FormSchema = z.object({
    name: z.string().min(1, "Введите имя"),
    email: z.string().email("Некорректный email"),
    telegram: z.string().min(1, "Введите Telegram ID"),
    message: z.string().optional(),
});

// Типы для отправки данных
interface FormData {
    name: string;
    email: string;
    telegram: string;
    message?: string;
}

function ContactForm() {
    const isActive = (val: string) => val.length > 0;

    const [checked, setChecked] = useState(false);
    const [attachedFile, setAttachedFile] = useState<File | null>(null);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
    const fileInputRef = useRef<HTMLInputElement | null>(null);

    const toggle = () => {
        const newValue = !checked;
        setChecked(newValue);
    };

    const handleFileSelect = () => {
        fileInputRef.current?.click();
    };

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const files = event.target.files;
        if (!files || files.length === 0) return;

        const file = files[0];
        const maxSize = 5 * 1024 * 1024; // 5MB
        const allowedTypes = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document', 'image/jpeg', 'image/jpg', 'image/png'];

        if (file.size > maxSize) {
            alert(`Файл "${file.name}" слишком большой. Максимальный размер: 5MB`);
            return;
        }

        if (!allowedTypes.includes(file.type)) {
            alert(`Файл "${file.name}" имеет неподдерживаемый формат. Разрешены: pdf, doc, docx, jpg, png`);
            return;
        }

        setAttachedFile(file);
    };

    const removeFile = () => {
        setAttachedFile(null);
        if (fileInputRef.current) {
            fileInputRef.current.value = '';
        }
    };

    // Функция отправки формы
    const handleSubmit = async (values: FormData) => {
        console.log('🚀 Начало отправки формы:', values);
        console.log('✅ Согласие на обработку данных:', checked);
        
        if (!checked) {
            alert('Необходимо согласие на обработку персональных данных');
            return;
        }

        setIsSubmitting(true);
        setSubmitStatus('idle');

        try {
            console.log('📤 Отправка запроса на сервер...');
            const response = await fetch(`/api/form`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(values),
            });

            console.log('📥 Ответ сервера:', response.status, response.statusText);

            if (response.ok) {
                setSubmitStatus('success');
                console.log('✅ Форма успешно отправлена');
            } else {
                setSubmitStatus('error');
                console.error('❌ Ошибка при отправке формы:', response.status);
            }
        } catch (error) {
            setSubmitStatus('error');
            console.error('❌ Ошибка при отправке формы:', error);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div id="contact-form" className="container flex flex-col gap-[2rem] scroll-mt-[6.25rem] max-md:scroll-mt-[4rem]">
            <h2 className="text-[3.125rem] text-[#13151d] font-semibold max-md:text-[1.625rem] leading-[2rem]">
                Получите расчёт под вашу нишу
            </h2>
            <div className="grid grid-cols-2 gap-[4.5rem] max-md:flex max-md:flex-col">
                <div className="flex flex-col">
                    <p className="text-[1.125rem] text-[#13151db3] max-md:text-[1rem]">
                        <strong>Бесплатно подготовим расчёт</strong> под вашу нишу и бюджет.
                    </p>
                    
                    <div className="mt-[3.5rem] flex flex-col gap-[1.5rem]">
                        <h3 className="text-[1.5rem] text-[#13151d] font-semibold">Преимущества:</h3>
                        <ul className="flex flex-col gap-[0.75rem]">
                            <li className="flex items-center gap-[0.75rem]">
                                <div className="w-[0.5rem] h-[0.5rem] bg-[#8b73ff] rounded-full"></div>
                                <span className="text-[1.125rem] text-[#13151db3]">Быстрый ответ</span>
                            </li>
                            <li className="flex items-center gap-[0.75rem]">
                                <div className="w-[0.5rem] h-[0.5rem] bg-[#8b73ff] rounded-full"></div>
                                <span className="text-[1.125rem] text-[#13151db3]">Персональный подход</span>
                            </li>
                            <li className="flex items-center gap-[0.75rem]">
                                <div className="w-[0.5rem] h-[0.5rem] bg-[#8b73ff] rounded-full"></div>
                                <span className="text-[1.125rem] text-[#13151db3]">Конфиденциальность</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="flex flex-col">
                    <Formik
                        initialValues={{ name: "", email: "", telegram: "", message: "" }}
                        validationSchema={toFormikValidationSchema(FormSchema)}
                        onSubmit={handleSubmit}
                    >
                        {({ values, handleChange, errors, touched }) => (
                            <Form className="grid grid-cols-2 gap-[1.5rem]">
                                {/* Name */}
                                <label className="h-[4.25rem] relative flex items-center w-full max-md:col-span-2">
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
                                <label className="h-[4.25rem] relative flex items-center w-full max-md:col-span-2">
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

                                {/* Telegram */}
                                <label className="h-[4.25rem] relative flex items-center w-full col-span-2 max-md:col-span-2">
                                    <Field
                                        type="text"
                                        name="telegram"
                                        value={values.telegram}
                                        onChange={handleChange}
                                        className={`w-full border-[0.063rem] rounded-[0.75rem]
                                            bg-white flex text-[1.25rem] leading-[2rem] pt-[1.5rem]
                                            px-[1.5rem] pb-[0.625rem] outline-none
                                            ${errors.telegram && touched.telegram ? 'border-red-500' : 'border-[#13151d29]'}`}
                                    />
                                    <motion.span
                                        initial={false}
                                        animate={
                                            isActive(values.telegram)
                                                ? { top: "0.4rem", fontSize: "0.875rem", opacity: 0.8 }
                                                : { top: "1.55rem", fontSize: "1.25rem", opacity: 0.3 }
                                        }
                                        transition={{ type: "tween", duration: 0.25 }}
                                        className="absolute left-[1.5rem] pointer-events-none"
                                    >
                                        Telegram ID
                                    </motion.span>
                                </label>

                                {/* Message */}
                                <label className="col-span-2 row-span-2 h-full relative flex items-center w-full max-md:col-span-2">
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

                                {/* Кнопка отправки и чекбокс */}
                                <div className="mt-[3.5rem] flex gap-[2.5rem] max-md:flex-col max-md:mt-[1.5rem] col-span-2">
                                    <button 
                                        type="submit"
                                        disabled={isSubmitting}
                                        className={`min-w-fit px-[2rem] rounded-[0.75rem] flex items-center h-[4.25rem] text-white text-[1.125rem] w-fit max-md:w-full max-md:justify-center transition-all ease-out duration-300 cursor-pointer outline-none focus:outline-none focus:ring-0 border-none focus:border-none ${
                                            isSubmitting 
                                                ? 'bg-gray-400 cursor-not-allowed' 
                                                : submitStatus === 'success' 
                                                    ? 'bg-green-500' 
                                                    : submitStatus === 'error' 
                                                        ? 'bg-red-500' 
                                                        : 'bg-[#8b73ff] hover:bg-[#7d63ff]'
                                        }`}
                                    >
                                        {isSubmitting ? 'Отправка...' : 
                                         submitStatus === 'success' ? 'Отправлено!' : 
                                         submitStatus === 'error' ? 'Ошибка' : 
                                         'Получить расчёт'}
                                    </button>
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
                            </Form>
                        )}
                    </Formik>
                    
                    {/* Альтернатива с Telegram */}
                    <div className="mt-[2rem] pt-[2rem] border-t border-[#13151d29]">
                        <p className="text-[1.125rem] text-[#13151db3] mb-[1rem]">Или</p>
                        <a
                            href="https://t.me/lev_budko"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-[0.75rem] text-[1.25rem] text-[#13151d] font-semibold hover:text-[#8b73ff] transition-colors"
                        >
                            <svg className="w-[1.5rem] h-[1.5rem]" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
                            </svg>
                            Написать в Telegram
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ContactForm;
