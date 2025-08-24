import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  MapPin, 
  Calculator, 
  Star, 
  ShieldCheck, 
  Clock, 
  Headphones,
  TrendingUp,
  Users
} from "lucide-react";

const FeaturesSection = () => {
  const features = [
    {
      icon: MapPin,
      title: "City-Based Search",
      description: "Find vendors in your specific city with location-based filtering and local recommendations.",
      highlight: "50+ Cities",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Calculator,
      title: "Smart Budget Planner",
      description: "Plan your celebration budget with our intelligent cost calculator and payment tracking.",
      highlight: "Save 30%",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: Star,
      title: "Detailed Reviews",
      description: "Real customer reviews with photos, ratings, and detailed feedback to help you choose.",
      highlight: "100K+ Reviews",
      color: "from-yellow-500 to-orange-500"
    },
    {
      icon: ShieldCheck,
      title: "Verified Vendors",
      description: "Every vendor is background-verified with quality assurance and service guarantees.",
      highlight: "100% Verified",
      color: "from-purple-500 to-indigo-500"
    },
    {
      icon: Clock,
      title: "Real-Time Availability",
      description: "Check vendor availability in real-time and book instantly with confirmed dates.",
      highlight: "Instant Booking",
      color: "from-pink-500 to-rose-500"
    },
    {
      icon: Headphones,
      title: "24/7 Support",
      description: "Round-the-clock customer support to help you with planning and vendor coordination.",
      highlight: "Always Available",
      color: "from-teal-500 to-green-500"
    },
    {
      icon: TrendingUp,
      title: "Trending Celebrations",
      description: "Discover trending celebration ideas and popular vendor combinations in your area.",
      highlight: "Trending Now",
      color: "from-red-500 to-pink-500"
    },
    {
      icon: Users,
      title: "Vendor Marketplace",
      description: "Connect directly with vendors, compare packages, and negotiate prices transparently.",
      highlight: "Direct Connect",
      color: "from-slate-600 to-slate-500"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4 px-4 py-2">
            Why Choose SurpriseVille
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Everything You Need for
            <span className="block text-gradient">Perfect Celebrations</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Experience the most comprehensive celebration planning platform with advanced features 
            designed to make your special occasions truly memorable
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <Card 
                key={index}
                className="relative overflow-hidden card-hover border-0 shadow-soft hover:shadow-celebration group"
              >
                {/* Background Gradient */}
                <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${feature.color} opacity-5 rounded-full transform translate-x-8 -translate-y-8 group-hover:opacity-10 transition-opacity`}></div>
                
                <CardHeader className="pb-4 relative z-10">
                  <div className="flex items-start justify-between">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <IconComponent className="h-6 w-6 text-white" />
                    </div>
                    <Badge variant="outline" className="text-xs font-medium">
                      {feature.highlight}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                
                <CardContent className="relative z-10">
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Bottom Stats */}
        <div className="mt-20 text-center">
          <div className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-3xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-8 text-foreground">
              Trusted by Thousands Across India
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div>
                <div className="text-3xl font-bold text-primary mb-2">10,000+</div>
                <div className="text-muted-foreground">Active Vendors</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-secondary mb-2">1M+</div>
                <div className="text-muted-foreground">Events Planned</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-accent mb-2">50+</div>
                <div className="text-muted-foreground">Cities Covered</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-success mb-2">4.8★</div>
                <div className="text-muted-foreground">Customer Rating</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;