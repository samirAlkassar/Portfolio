
import { Container } from "@/components/container";
import { GridBackground } from "@/components/gridBackground";
import { Hero } from "@/components/sections/hero";

export default function Home() {
  return (
    <section className="flex justify-center items-center flex-col">
      <GridBackground className="-mt-[60px]" />
      <Container>
        <Hero />
      </Container>
    </section>
  );
}
