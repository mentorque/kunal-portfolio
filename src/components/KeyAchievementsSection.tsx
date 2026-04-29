import { Card, CardContent } from "@/components/ui/card";
import { TrendingUp } from "lucide-react";

const KeyAchievementsSection = () => {
  const items = [
    "Improved application performance by 35%",
    "Reduced UI bugs by 25%",
    "Built 20+ reusable components",
    "Integrated 8+ REST APIs",
  ];

  return (
    <section id="achievements" className="py-16 md:py-20 bg-white border-y border-border/60">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-3">
              Key achievements
            </h2>
            <div className="w-16 h-px bg-[hsl(var(--primary))] mx-auto mb-4" />
            <p className="text-base text-muted-foreground max-w-xl mx-auto">
              Measurable outcomes from enterprise delivery.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {items.map((text) => (
              <Card
                key={text}
                className="rounded-lg border border-border/70 bg-card shadow-sm hover:shadow-lg hover:-translate-y-1 hover:border-[hsl(var(--primary))]/25 transition-all duration-200"
              >
                <CardContent className="p-6 flex flex-col items-center text-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[hsl(var(--primary))]/15 flex items-center justify-center">
                    <TrendingUp className="w-5 h-5 text-[hsl(var(--primary))]" />
                  </div>
                  <p className="text-sm sm:text-base font-semibold text-foreground leading-snug">
                    {text}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default KeyAchievementsSection;
