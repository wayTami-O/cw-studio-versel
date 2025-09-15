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

export function HomePage() {
  return (
    <>
      <Header />
      <Hero />
      <Cases />
      <BestStudio />
      <Trust />
      <Review />
      <Programming />
      <Waiting />
      <Contacts />
      <Footer />
    </>
  );
}
