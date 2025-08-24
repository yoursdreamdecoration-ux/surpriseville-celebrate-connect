import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Heart, 
  Cake, 
  Camera, 
  Utensils, 
  Music, 
  Flower2, 
  Baby, 
  Sparkles,
  Users,
  Gift,
  Crown,
  PartyPopper
} from "lucide-react";

const CategorySection = () => {
  const categories = [
    {
      id: 1,
      name: "Birthday Celebrations",
      icon: Cake,
      description: "Make birthdays magical",
      color: "from-pink-500 to-rose-400",
      count: "2,500+ vendors"
    },
    {
      id: 2,
      name: "Wedding Services",
      icon: Heart,
      description: "Your perfect wedding",
      color: "from-red-500 to-pink-500",
      count: "3,200+ vendors"
    },
    {
      id: 3,
      name: "Event Photography",
      icon: Camera,
      description: "Capture precious moments",
      color: "from-purple-500 to-indigo-500",
      count: "1,800+ vendors"
    },
    {
      id: 4,
      name: "Catering Services",
      icon: Utensils,
      description: "Delicious food experiences",
      color: "from-orange-500 to-red-500",
      count: "2,100+ vendors"
    },
    {
      id: 5,
      name: "Entertainment",
      icon: Music,
      description: "Music & performances",
      color: "from-blue-500 to-cyan-500",
      count: "900+ vendors"
    },
    {
      id: 6,
      name: "Decorations",
      icon: Flower2,
      description: "Beautiful setups",
      color: "from-green-500 to-emerald-500",
      count: "1,600+ vendors"
    },
    {
      id: 7,
      name: "Baby Celebrations",
      icon: Baby,
      description: "Welcome little ones",
      color: "from-yellow-500 to-orange-500",
      count: "800+ vendors"
    },
    {
      id: 8,
      name: "Corporate Events",
      icon: Users,
      description: "Professional gatherings",
      color: "from-slate-600 to-slate-500",
      count: "1,200+ vendors"
    },
    {
      id: 9,
      name: "Anniversary",
      icon: Sparkles,
      description: "Celebrate love milestones",
      color: "from-rose-500 to-pink-500",
      count: "1,100+ vendors"
    },
    {
      id: 10,
      name: "Personalized Gifts",
      icon: Gift,
      description: "Unique & thoughtful gifts",
      color: "from-teal-500 to-green-500",
      count: "1,500+ vendors"
    },
    {
      id: 11,
      name: "Festival Celebrations",
      icon: Crown,
      description: "Traditional & modern festivals",
      color: "from-amber-500 to-yellow-500",
      count: "700+ vendors"
    },
    {
      id: 12,
      name: "Party Supplies",
      icon: PartyPopper,
      description: "Everything for great parties",
      color: "from-violet-500 to-purple-500",
      count: "950+ vendors"
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Explore Our
            <span className="block text-gradient">Vendor Categories</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover verified vendors across 50+ cities with detailed profiles, reviews, and budget-friendly options
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-12">
          {categories.map((category) => {
            const IconComponent = category.icon;
            return (
              <Card 
                key={category.id} 
                className="card-hover cursor-pointer group border-0 shadow-soft hover:shadow-celebration"
              >
                <CardContent className="p-6 text-center">
                  <div className={`w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br ${category.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2 text-foreground group-hover:text-primary transition-colors">
                    {category.name}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-3">
                    {category.description}
                  </p>
                  <p className="text-xs text-primary font-medium">
                    {category.count}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <Button size="lg" className="btn-celebration px-8 py-3 text-lg">
            Browse All Categories
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CategorySection;