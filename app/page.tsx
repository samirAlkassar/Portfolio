
import { Container } from "@/components/container";
import { GridBackground } from "@/components/gridBackground";
import { Hero } from "@/components/hero";

export default function Home() {
  return (
    <section className="flex justify-center items-center overflow-x-hidden flex-col">
      <GridBackground />
      <Container>
          <Hero />
      </Container>
    </section>
  );
}
