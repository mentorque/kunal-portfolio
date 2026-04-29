import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import placeholderImg from "@/assets/hero-background.jpg";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

type Project = {
  title: string;
  subtitle?: string;
  highlights: string[];
  stack: string[];
  image: string;
  images?: string[];
  imageFit?: "cover" | "contain";
  links?: { label: string; href: string }[];
};

const ProjectImageCarousel = ({ project }: { project: Project }) => {
  const imageList = project.images?.length ? project.images : [project.image];
  const [activeIndex, setActiveIndex] = useState(0);
  const [touchStartX, setTouchStartX] = useState<number | null>(null);

  const showPrev = () => {
    setActiveIndex((prev) => (prev === 0 ? imageList.length - 1 : prev - 1));
  };

  const showNext = () => {
    setActiveIndex((prev) => (prev === imageList.length - 1 ? 0 : prev + 1));
  };

  const handleTouchStart = (event: React.TouchEvent<HTMLDivElement>) => {
    setTouchStartX(event.changedTouches[0]?.clientX ?? null);
  };

  const handleTouchEnd = (event: React.TouchEvent<HTMLDivElement>) => {
    if (touchStartX === null) {
      return;
    }

    const touchEndX = event.changedTouches[0]?.clientX ?? touchStartX;
    const swipeDistance = touchStartX - touchEndX;
    const threshold = 40;

    if (swipeDistance > threshold) {
      showNext();
    } else if (swipeDistance < -threshold) {
      showPrev();
    }

    setTouchStartX(null);
  };

  const currentImage = imageList[activeIndex] ?? project.image;

  return (
    <div
      className="relative aspect-video overflow-hidden border-b border-border/50 bg-white rounded-lg m-3 mb-0"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <img
        src={encodeURI(currentImage)}
        alt={`${project.title} screenshot ${activeIndex + 1}`}
        className={
          project.imageFit === "contain"
            ? "w-full h-full object-contain object-center p-3 sm:p-4"
            : "w-full h-full object-cover"
        }
      />

      {imageList.length > 1 ? (
        <>
          <button
            type="button"
            aria-label="Previous image"
            onClick={showPrev}
            className="absolute left-2 top-1/2 -translate-y-1/2 inline-flex items-center justify-center h-8 w-8 rounded-full bg-black/50 text-white hover:bg-black/65 transition-colors"
          >
            <ChevronLeft className="h-4 w-4" />
          </button>
          <button
            type="button"
            aria-label="Next image"
            onClick={showNext}
            className="absolute right-2 top-1/2 -translate-y-1/2 inline-flex items-center justify-center h-8 w-8 rounded-full bg-black/50 text-white hover:bg-black/65 transition-colors"
          >
            <ChevronRight className="h-4 w-4" />
          </button>
        </>
      ) : null}
    </div>
  );
};

const ProjectsSection = () => {
  const projects: Project[] = [
    {
      title: "Business Intelligence & Customer Analytics Platform",
      subtitle: "Volt Metrics",
      highlights: [
        "Built Power BI dashboards with DAX measures and executed customer segmentation identifying four high-value segments, reducing manual reporting by 40%.",
        "Analyzed 80,000+ sales transactions and 7,000+ customer records using SQL and Python to uncover revenue drivers.",
        "Informed CRM and business strategy with data-driven customer purchasing behavior patterns.",
      ],
      stack: ["Power BI", "DAX", "SQL", "Python", "Tableau"],
      image: "/volt_metrics_project.png",
      imageFit: "contain",
    },
    {
      title: "Phishing Detection Using Explainable AI",
      highlights: [
        "Examined 11,000+ real-world URLs to identify behavioral and structural indicators of phishing activity.",
        "Improved early risk identification using data pre-processing, feature analysis, and EDA.",
        "Developed hybrid phishing detection pipeline using RoBERTa embeddings and ML models, achieving 97% accuracy.",
      ],
      stack: ["Python", "Machine Learning", "RoBERTa", "EDA", "Feature Engineering"],
      image: "/Phishing Detection.png",
      imageFit: "contain",
    },
    {
      title: "Healthcare Data Analytics",
      subtitle: "Drug Spending and Facility Analysis",
      highlights: [
        "Analyzed large-scale healthcare datasets to uncover drug spending patterns and facility-level trends.",
        "Segmented drugs into 4 cost-based clusters and identified high-cost outliers for cost-control analysis.",
        "Developed classification models to evaluate nursing facility characteristics using Logistic Regression and Random Forest.",
      ],
      stack: ["Python", "SQL", "Logistic Regression", "Random Forest", "Data Analysis"],
      image: "/healthcare_analytics.png",
      imageFit: "contain",
    },
  ];

  return (
    <section id="projects" className="py-20 bg-[hsl(var(--section-bg))]">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-3">
              Projects
            </h2>
            <div className="w-16 h-px bg-[hsl(var(--primary))] mx-auto mb-5" />
            <p className="text-base text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Data analytics, BI dashboards, and machine learning projects.
            </p>
          </div>

          <div className="grid md:grid-cols-2 xl:grid-cols-2 gap-6">
            {projects.map((project) => (
              <Card
                key={project.title}
                className="rounded-lg border border-border/70 bg-card shadow-sm overflow-hidden flex flex-col hover:shadow-lg hover:-translate-y-1 transition-all duration-200"
              >
                <ProjectImageCarousel project={project} />
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg font-semibold text-foreground leading-snug">
                    {project.title}
                  </CardTitle>
                  {project.subtitle ? (
                    <p className="text-sm font-medium text-[hsl(var(--primary))] mt-1">
                      {project.subtitle}
                    </p>
                  ) : null}
                </CardHeader>
                <CardContent className="flex flex-col gap-4 flex-1 pt-0">
                  <ul className="space-y-2 text-sm text-muted-foreground flex-1">
                    {project.highlights.map((line) => (
                      <li key={line.slice(0, 48)} className="flex gap-2.5 leading-relaxed">
                        <span className="text-[hsl(var(--primary))] shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-current" />
                        <span>{line}</span>
                      </li>
                    ))}
                  </ul>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wide text-foreground/80 mb-2">
                      Tech stack
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {project.stack.map((tech) => (
                        <Badge
                          key={tech}
                          variant="secondary"
                          className="font-normal text-xs rounded-md bg-[hsl(var(--skill-bg))] text-foreground border border-border/60"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  {project.links?.length ? (
                    <div className="flex flex-wrap gap-x-4 gap-y-1 text-sm">
                      {project.links.map((link) => (
                        <a
                          key={link.href}
                          href={link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[hsl(var(--primary))] font-medium hover:underline underline-offset-2"
                        >
                          {link.label}
                        </a>
                      ))}
                    </div>
                  ) : null}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
