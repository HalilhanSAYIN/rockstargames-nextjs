import Image from "next/image";
import '@/components/Hero/HeroComponent'
import Hero from "@/components/Hero/HeroComponent";
import GeneralInfoComponent from "@/components/GeneralInfo/GeneralInfoComponent";


export default function Home() {
  return (
   <div>
    <Hero/>
    <GeneralInfoComponent/>
   </div>
  );
}
