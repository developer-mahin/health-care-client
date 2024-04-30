import HeroSection from "@/components/UI/HomePage/HeroSection";
import Specialist from "@/components/UI/HomePage/Specialist";
import TopRatedDoctors from "@/components/UI/HomePage/TopRatedDoctors";
import WhyUs from "@/components/UI/HomePage/WhyUs";

export default function Home() {
  return (
    <>
      <HeroSection />
      <Specialist />
      <TopRatedDoctors />
      <WhyUs />
    </>
  );
}
