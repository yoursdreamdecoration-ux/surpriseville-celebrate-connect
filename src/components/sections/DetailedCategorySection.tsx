import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { 
  Search, 
  Filter, 
  TrendingUp, 
  MapPin,
  Star,
  Users,
  ChevronRight,
  ChevronDown,
  Heart
} from "lucide-react";
import { categoriesData, type Category, type SubCategory } from "@/data/categories";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const DetailedCategorySection = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCity, setSelectedCity] = useState("");
  const [priceRange, setPriceRange] = useState("");

  const cities = ["Delhi NCR", "Mumbai", "Bangalore", "Chennai", "Hyderabad", "Pune", "Kolkata", "Ahmedabad"];

  const filteredCategories = categoriesData.filter(category =>
    category.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    category.subcategories.some(sub => 
      sub.name.toLowerCase().includes(searchQuery.toLowerCase())
    )
  );

  const toggleCategory = (categoryId: string) => {
    setSelectedCategory(selectedCategory === categoryId ? null : categoryId);
  };

  const getPopularityColor = (popularity: number) => {
    if (popularity >= 90) return "text-green-600";
    if (popularity >= 80) return "text-yellow-600";
    return "text-gray-600";
  };

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Explore All
            <span className="block text-gradient">Service Categories</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Browse through our comprehensive collection of verified vendors across multiple categories and subcategories
          </p>
        </div>

        {/* Search and Filters */}
        <div className="bg-card rounded-3xl p-8 shadow-soft mb-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
            <div className="md:col-span-2">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search categories or services..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 h-12 rounded-xl"
                />
              </div>
            </div>
            
            <Select value={selectedCity} onValueChange={setSelectedCity}>
              <SelectTrigger className="h-12 rounded-xl">
                <div className="flex items-center">
                  <MapPin className="h-4 w-4 mr-2 text-muted-foreground" />
                  <SelectValue placeholder="Select city" />
                </div>
              </SelectTrigger>
              <SelectContent>
                {cities.map((city) => (
                  <SelectItem key={city} value={city.toLowerCase().replace(' ', '-')}>
                    {city}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Select value={priceRange} onValueChange={setPriceRange}>
              <SelectTrigger className="h-12 rounded-xl">
                <div className="flex items-center">
                  <Filter className="h-4 w-4 mr-2 text-muted-foreground" />
                  <SelectValue placeholder="Price range" />
                </div>
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="budget">Budget (Under ₹10K)</SelectItem>
                <SelectItem value="mid">Mid-range (₹10K - ₹50K)</SelectItem>
                <SelectItem value="premium">Premium (₹50K+)</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="flex flex-wrap gap-4 items-center justify-between">
            <div className="flex items-center space-x-4 text-sm text-muted-foreground">
              <div className="flex items-center">
                <Users className="h-4 w-4 mr-1" />
                <span>{categoriesData.reduce((total, cat) => total + cat.totalVendors, 0).toLocaleString()}+ vendors</span>
              </div>
              <div className="flex items-center">
                <MapPin className="h-4 w-4 mr-1" />
                <span>50+ cities</span>
              </div>
              <div className="flex items-center">
                <TrendingUp className="h-4 w-4 mr-1" />
                <span>Most popular this month</span>
              </div>
            </div>
          </div>
        </div>

        {/* Categories Grid */}
        <div className="space-y-6">
          {filteredCategories.map((category: Category) => {
            const IconComponent = category.icon;
            const isExpanded = selectedCategory === category.id;

            return (
              <Card key={category.id} className="overflow-hidden shadow-soft hover:shadow-celebration transition-all duration-300">
                <CardHeader 
                  className="cursor-pointer hover:bg-muted/30 transition-colors"
                  onClick={() => toggleCategory(category.id)}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${category.color} flex items-center justify-center`}>
                        <IconComponent className="h-8 w-8 text-white" />
                      </div>
                      <div>
                        <CardTitle className="text-2xl mb-2">{category.name}</CardTitle>
                        <p className="text-muted-foreground mb-2">{category.description}</p>
                        <div className="flex items-center space-x-4 text-sm">
                          <Badge variant="secondary">
                            {category.totalVendors.toLocaleString()} vendors
                          </Badge>
                          <Badge variant="outline">
                            {category.subcategories.length} subcategories
                          </Badge>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Button variant="ghost" size="sm">
                        View All
                        <ChevronRight className="h-4 w-4 ml-1" />
                      </Button>
                      {isExpanded ? (
                        <ChevronDown className="h-5 w-5 text-muted-foreground" />
                      ) : (
                        <ChevronRight className="h-5 w-5 text-muted-foreground" />
                      )}
                    </div>
                  </div>
                </CardHeader>

                {isExpanded && (
                  <CardContent className="pt-0 animate-fade-in">
                    <div className="border-t border-border pt-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {category.subcategories.map((subcategory: SubCategory) => (
                          <Card key={subcategory.id} className="card-hover border-0 bg-muted/30">
                            <CardContent className="p-6">
                              <div className="flex items-start justify-between mb-3">
                                <h4 className="font-semibold text-lg text-foreground">
                                  {subcategory.name}
                                </h4>
                                <Button variant="ghost" size="sm" className="p-1 h-auto">
                                  <Heart className="h-4 w-4" />
                                </Button>
                              </div>
                              
                              <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                                {subcategory.description}
                              </p>
                              
                              <div className="space-y-3">
                                <div className="flex items-center justify-between text-sm">
                                  <span className="text-muted-foreground">Vendors:</span>
                                  <Badge variant="outline">{subcategory.vendorCount}</Badge>
                                </div>
                                
                                <div className="flex items-center justify-between text-sm">
                                  <span className="text-muted-foreground">Price Range:</span>
                                  <span className="font-medium">{subcategory.priceRange}</span>
                                </div>
                                
                                <div className="flex items-center justify-between text-sm">
                                  <span className="text-muted-foreground">Popularity:</span>
                                  <div className="flex items-center">
                                    <Star className={`h-3 w-3 mr-1 ${getPopularityColor(subcategory.popularity)}`} />
                                    <span className={getPopularityColor(subcategory.popularity)}>
                                      {subcategory.popularity}%
                                    </span>
                                  </div>
                                </div>
                              </div>
                              
                              <Button size="sm" className="w-full mt-4 btn-celebration">
                                Browse Vendors
                              </Button>
                            </CardContent>
                          </Card>
                        ))}
                      </div>
                      
                      <div className="mt-6 pt-6 border-t border-border text-center">
                        <Button variant="outline" size="lg" className="px-8">
                          View All {category.name} Services
                          <ChevronRight className="h-4 w-4 ml-2" />
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                )}
              </Card>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-3xl p-12 max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold mb-4">
              Can't Find What You're Looking For?
            </h3>
            <p className="text-muted-foreground mb-8 text-lg">
              Let us help you find the perfect vendors for your unique celebration needs
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="btn-celebration px-8">
                Post Your Requirement
              </Button>
              <Button size="lg" variant="outline" className="px-8">
                Talk to Expert
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DetailedCategorySection;