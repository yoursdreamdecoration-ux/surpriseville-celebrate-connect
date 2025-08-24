import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, MapPin, Calendar, DollarSign } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import heroImage from "@/assets/hero-celebration.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-[70vh] flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Celebration decorations with festive lights and flowers"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 hero-gradient opacity-90"></div>
      </div>

      {/* Floating Decorative Elements */}
      <div className="absolute top-10 left-10 animate-float">
        <div className="w-16 h-16 bg-accent/20 rounded-full blur-lg"></div>
      </div>
      <div className="absolute top-32 right-20 animate-float" style={{ animationDelay: '1s' }}>
        <div className="w-12 h-12 bg-secondary/20 rounded-full blur-lg"></div>
      </div>
      <div className="absolute bottom-20 left-32 animate-float" style={{ animationDelay: '2s' }}>
        <div className="w-20 h-20 bg-primary/20 rounded-full blur-lg"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            MAKE EVERY
            <span className="block text-gradient animate-pulse-soft">
              CELEBRATION
            </span>
            <span className="block">EXTRAORDINARY</span>
          </h1>

          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto">
            Discover amazing vendors, plan your budget, and create unforgettable memories 
            for every special occasion in your city
          </p>

          {/* Search Section */}
          <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 glass max-w-4xl mx-auto mb-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              {/* What */}
              <div className="space-y-2">
                <label className="text-white/80 text-sm font-medium">What are you celebrating?</label>
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input
                    placeholder="Birthday, Wedding..."
                    className="pl-10 bg-white h-12 rounded-xl border-0"
                  />
                </div>
              </div>

              {/* Where */}
              <div className="space-y-2">
                <label className="text-white/80 text-sm font-medium">Where?</label>
                <Select>
                  <SelectTrigger className="bg-white h-12 rounded-xl border-0">
                    <div className="flex items-center">
                      <MapPin className="h-4 w-4 mr-2 text-muted-foreground" />
                      <SelectValue placeholder="Select city" />
                    </div>
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="delhi">Delhi NCR</SelectItem>
                    <SelectItem value="mumbai">Mumbai</SelectItem>
                    <SelectItem value="bangalore">Bangalore</SelectItem>
                    <SelectItem value="chennai">Chennai</SelectItem>
                    <SelectItem value="hyderabad">Hyderabad</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* When */}
              <div className="space-y-2">
                <label className="text-white/80 text-sm font-medium">When?</label>
                <div className="relative">
                  <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input
                    type="date"
                    className="pl-10 bg-white h-12 rounded-xl border-0"
                  />
                </div>
              </div>

              {/* Budget */}
              <div className="space-y-2">
                <label className="text-white/80 text-sm font-medium">Budget Range</label>
                <Select>
                  <SelectTrigger className="bg-white h-12 rounded-xl border-0">
                    <div className="flex items-center">
                      <DollarSign className="h-4 w-4 mr-2 text-muted-foreground" />
                      <SelectValue placeholder="Select budget" />
                    </div>
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="5k-15k">₹5,000 - ₹15,000</SelectItem>
                    <SelectItem value="15k-30k">₹15,000 - ₹30,000</SelectItem>
                    <SelectItem value="30k-50k">₹30,000 - ₹50,000</SelectItem>
                    <SelectItem value="50k+">₹50,000+</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <Button size="lg" className="w-full md:w-auto mt-6 btn-celebration text-lg px-8 py-3">
              Find Perfect Vendors
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
            <div>
              <div className="text-3xl font-bold mb-2">10,000+</div>
              <div className="text-white/80">Verified Vendors</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">50+</div>
              <div className="text-white/80">Cities Covered</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">1M+</div>
              <div className="text-white/80">Happy Customers</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">4.8★</div>
              <div className="text-white/80">Average Rating</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;