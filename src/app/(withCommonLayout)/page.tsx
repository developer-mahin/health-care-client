import GetSolution from "@/components/UI/HomePage/GetSolution";
import HeroSection from "@/components/UI/HomePage/HeroSection";
import Specialist from "@/components/UI/HomePage/Specialist";
import Statics from "@/components/UI/HomePage/Statics";
import TopRatedDoctors from "@/components/UI/HomePage/TopRatedDoctors";
import WhyUs from "@/components/UI/HomePage/WhyUs";

export default function Home() {
  return (
    <>
      <HeroSection />
      <Specialist />
      <TopRatedDoctors />
      <WhyUs />
      <GetSolution />
      <Statics />
    </>
  );
}
