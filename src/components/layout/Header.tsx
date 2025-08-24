import { useState } from "react";
import { Search, MapPin, User, ShoppingCart, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const categories = [
    "Anniversary",
    "Birthdays", 
    "Weddings",
    "Corporate Events",
    "Baby Celebrations",
    "Festivals",
    "Catering",
    "Photography",
    "Entertainment",
    "Personalized Gifts"
  ];

  const cities = [
    "Delhi NCR",
    "Mumbai", 
    "Bangalore",
    "Chennai",
    "Hyderabad",
    "Pune",
    "Kolkata",
    "Ahmedabad"
  ];

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
      {/* Top Bar */}
      <div className="border-b border-border/50">
        <div className="container mx-auto px-4 py-2">
          <div className="flex items-center justify-between text-sm text-muted-foreground">
            <div className="hidden md:flex items-center space-x-6">
              <span>Hi, Guest</span>
              <a href="#" className="hover:text-primary transition-colors">My Account</a>
              <a href="#" className="hover:text-primary transition-colors">Track Order</a>
              <a href="#" className="hover:text-primary transition-colors">Help Center</a>
            </div>
            <div className="flex items-center space-x-2">
              <MapPin className="h-4 w-4" />
              <Select defaultValue="delhi">
                <SelectTrigger className="w-32 h-8 text-xs">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {cities.map((city) => (
                    <SelectItem key={city} value={city.toLowerCase().replace(' ', '-')}>
                      {city}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-4">
            <h1 className="text-2xl font-bold text-gradient">
              ❤️ SurpriseVille
            </h1>
          </div>

          {/* Search Bar - Desktop */}
          <div className="hidden md:flex flex-1 max-w-2xl mx-8">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="What are you celebrating?"
                className="pl-10 pr-4 h-12 rounded-full border-2 border-primary/20 focus:border-primary"
              />
              <Button size="sm" className="absolute right-2 top-1/2 transform -translate-y-1/2 rounded-full btn-celebration">
                Search
              </Button>
            </div>
          </div>

          {/* Right Actions */}
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="sm" className="hidden md:flex items-center space-x-2">
              <User className="h-4 w-4" />
              <span>Login</span>
            </Button>
            
            <Button variant="ghost" size="sm" className="relative">
              <ShoppingCart className="h-5 w-5" />
              <span className="absolute -top-2 -right-2 bg-primary text-primary-foreground text-xs rounded-full h-5 w-5 flex items-center justify-center">
                0
              </span>
            </Button>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="sm"
              className="md:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Navigation Categories */}
      <div className="border-t border-border/50">
        <div className="container mx-auto px-4">
          <nav className="hidden md:flex space-x-8 py-3">
            {categories.map((category) => (
              <DropdownMenu key={category}>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="text-sm font-medium hover:text-primary transition-colors"
                  >
                    {category}
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem>View All {category}</DropdownMenuItem>
                  <DropdownMenuItem>Premium {category}</DropdownMenuItem>
                  <DropdownMenuItem>Budget {category}</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ))}
          </nav>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden border-t border-border">
          <div className="container mx-auto px-4 py-4 space-y-4">
            {/* Mobile Search */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="What are you celebrating?"
                className="pl-10 rounded-full"
              />
            </div>
            
            {/* Mobile Navigation */}
            <div className="space-y-2">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant="ghost"
                  className="w-full justify-start text-left"
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;