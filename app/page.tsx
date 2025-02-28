import Image from "next/image";
import { Container } from "@/components/container";
import { Hero } from "@/components/hero";

export default function Home() {
  return (
      <Container>
        <div className="relative ov">
          
          <Image src="./grid.svg" alt="grid" className="absolute -top-[90px] h-full left-0 -z-10 opacity-30" />
          <div className="absolute w-full -top-[70px] h-full left-0 bg-grid-gradient"/>
          
          <Hero />
        
        </div>
      </Container>
  );
}
