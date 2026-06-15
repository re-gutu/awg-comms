import AboutUsBanner from "./AboutUsBanner";
import PhilosophySection from "./PhilosophySection";
import EdgeSection from "./EdgeSection";
import TeamSection from "./TeamSection";

const AboutView = () => {
  return (
    <div className="bg-background select-none">
      <AboutUsBanner />
      <PhilosophySection />
      <EdgeSection />
      <TeamSection />
    </div>
  );
};

export default AboutView;
