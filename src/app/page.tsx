import { AboutUs, Services, Mode, FAQ, Contact } from "@/components/pages/home";
import Hero from "@/components/shared/Hero";
import { Footer, SocialMediaSideBar } from "@/components/shared";

export default function Home() {
  return (
    <>
        <Hero/>
        <AboutUs/>
        <Services/>
        <Mode />
        <FAQ/>
        <Contact/>
        <Footer/>
        <SocialMediaSideBar/>
    </>
  );
}
