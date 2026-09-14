import Banner from "../components/Banner";
import Stats from "../components/Stats";
import Featured from "../components/Featured";
import Categories from "../components/Categories";
import ProductsSection from "../components/ProductsSection";
import Steps from "../components/Steps";
import TopExperts from "../components/TopExperts";
import WhyTrustUs from "../components/WhyTrustUs";
import ImpactNumbers from "../components/ImpactNumbers";
import Testimonials from "../components/Testimonials";
import Pricing from "../components/Pricing";
import BlogSection from "../components/BlogSection";
import MeetAdmin from "../components/MeetAdmin";
import FAQ from "../components/FAQ";
import CTA from "../components/CTA";
import ContactSection from "../components/ContactSection";

export default function Home() {
  return (
    <>
      <Banner />
      <Stats />
      <Featured />
      <Categories />
      <ProductsSection />
      <Steps />
      <TopExperts />
      <WhyTrustUs />
      <ImpactNumbers />
      <Testimonials />
      <Pricing />
      <BlogSection />
      <MeetAdmin />
      <FAQ />
      <CTA />
      <ContactSection />
    </>
  );
}