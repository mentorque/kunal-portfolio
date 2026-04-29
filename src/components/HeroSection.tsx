import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import profileImage from "/profile.png";
import heroBackground from "@/assets/hero-background-modern.jpg";
import { RESUME_PATH } from "@/config/site";

const HeroSection = () => {
  const scrollToProjects = () => {
    document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Base photo */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-[1.02]"
        style={{ backgroundImage: `url(${heroBackground})` }}
        aria-hidden
      />
      {/* Soft depth: top lighter, bottom richer */}
      <div
        className="absolute inset-0 bg-gradient-to-b from-slate-950/55 via-slate-950/40 to-slate-950/82 pointer-events-none"
        aria-hidden
      />
      {/* Subtle brand wash (matches primary blue) */}
      <div
        className="absolute inset-0 bg-gradient-to-br from-[hsl(202_85%_38%_/_0.14)] via-transparent to-[hsl(220_45%_12%_/_0.35)] pointer-events-none"
        aria-hidden
      />
      {/* Vignette: keep focus on center content */}
      <div
        className="absolute inset-0 bg-[radial-gradient(ellipse_85%_65%_at_50%_38%,hsl(220_25%_8%_/_0.08)_0%,hsl(220_28%_6%_/_0.58)_100%)] pointer-events-none"
        aria-hidden
      />
      {/* Gentle bottom fade */}
      <div
        className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-slate-950/65 to-transparent pointer-events-none"
        aria-hidden
      />

      <div className="container mx-auto px-4 text-center relative z-10 pt-20 pb-16">
        <div className="mb-8 flex justify-center animate-fade-in">
          <img
            src={profileImage}
            alt="Kunal Sonawane"
            className="w-52 h-52 md:w-56 md:h-56 rounded-full border-2 border-white/40 shadow-lg object-cover object-center"
          />
        </div>

        <h1 className="text-4xl md:text-6xl font-semibold text-white mb-3 tracking-tight animate-fade-in font-space-grotesk">
          Kunal Sonawane
        </h1>

        <p className="text-lg md:text-xl text-white/95 mb-6 max-w-2xl mx-auto font-medium animate-slide-up">
          Data Analyst | SQL | Python | Power BI
        </p>

        <p className="text-base md:text-lg text-white/80 mb-10 max-w-2xl mx-auto leading-relaxed animate-slide-up px-2">
          Delivering operational insights and building scalable KPI-driven reporting solutions across healthcare and sales domains.
        </p>

        <div
          className="flex flex-col sm:flex-row gap-3 justify-center mb-12 animate-slide-up"
          style={{ animationDelay: "0.15s" }}
        >
          <Button
            type="button"
            onClick={scrollToProjects}
            size="lg"
            className="bg-[hsl(var(--primary))] hover:bg-[hsl(var(--primary))]/90 text-primary-foreground font-medium px-8 py-6 text-base rounded-lg shadow-md transition-all duration-200 hover:scale-[1.02] border-0"
          >
            View Projects
          </Button>
          <Button
            type="button"
            size="lg"
            variant="outline"
            className="border border-white/50 bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 font-medium px-8 py-6 text-base rounded-lg transition-all duration-200 hover:scale-[1.02]"
            asChild
          >
            <a href={RESUME_PATH} download="Kunal_Sonawane_Resume.pdf">
              Resume
            </a>
          </Button>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/50" aria-hidden>
        <ChevronDown className="w-7 h-7" />
      </div>
    </section>
  );
};

export default HeroSection;
