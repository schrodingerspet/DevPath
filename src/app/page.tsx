import Hero from '@/components/home/Hero';
import { SectionDivider } from '@/components/SectionDivider';
import { SectionEntrance } from '@/components/ui/SectionEntrance';
import { FloatingParticles } from '@/components/FloatingParticles';
import Features from '@/components/home/Features';
import Community from '@/components/home/Community';
import Projects from '@/components/home/Projects';
import LearningPaths from '@/components/home/LearningPaths';
import Events from '@/components/home/Events';
import Resources from '@/components/home/Resources';

export default function Home() {
  return (
    <main>
      <FloatingParticles />
      <Hero />

      <SectionEntrance delay={0.2}>
        <Features />
      </SectionEntrance>

      <SectionEntrance>
        <SectionDivider />
      </SectionEntrance>

      <SectionEntrance delay={0.2}>
        <Community />
      </SectionEntrance>

      <SectionEntrance>
        <SectionDivider />
      </SectionEntrance>

      <SectionEntrance delay={0.2}>
        <Projects />
      </SectionEntrance>

      <SectionEntrance>
        <SectionDivider />
      </SectionEntrance>

      <SectionEntrance delay={0.2}>
        <LearningPaths />
      </SectionEntrance>

      <SectionEntrance>
        <SectionDivider />
      </SectionEntrance>

      <SectionEntrance delay={0.2}>
        <Events />
      </SectionEntrance>

      <SectionEntrance>
        <SectionDivider />
      </SectionEntrance>

      <SectionEntrance delay={0.2}>
        <Resources />
      </SectionEntrance>
    </main>
  );
}
