import Header from "./sections/header";
import Hero from "./sections/hero";
import Cases from "./sections/cases";
import BestStudio from "./sections/best-studio";
import Trust from "./sections/trust";
import Review from "./sections/review";
import Programming from "./sections/programming";
import Waiting from "./sections/waiting";
import Contacts from "./sections/contacts";
import Footer from "./sections/footer";
import Form from "./sections/form";

export function HomePage() {
  return (
    <>
      <Header />
      <Hero />
      <Cases />
      {/* <BestStudio /> */}
      {/* <Trust /> */}
      <Review />
      <Programming />
      {/* <Waiting /> */}
      <Contacts />
      <Form />
      <Footer />
      <a 
        href="https://t.me/lev_budko" 
        className="fixed z-50 right-[3.125rem] bottom-[3.125rem] shadow-[0_4px_24px_rgba(0,0,0,0.08)] bg-white flex items-center gap-[1.5rem] p-[1rem] rounded-[1rem] hover:shadow-[0_8px_32px_rgba(0,0,0,0.12)] transition-all duration-300 cursor-pointer max-md:hidden"
      >
        <img 
          src="/lev.jpg" 
          alt="Менеджер проекта" 
          className="w-[3rem] h-[3rem] rounded-full object-cover"
        />
        <div className="flex flex-col">
          <span className="text-[1rem] font-semibold text-[#13151d]">Обсудить проект</span>
        </div>
        <svg className="w-[1.25rem] h-[1.25rem]" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M7.5 15L12.5 10L7.5 5" stroke="#13151d" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </a>
    </>
  );
}
