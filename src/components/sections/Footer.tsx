import { Heart, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Youtube } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: "Popular Categories",
      links: [
        "Birthday Decorations",
        "Wedding Planning",
        "Corporate Events",
        "Baby Shower",
        "Anniversary Celebrations",
        "Festival Decorations"
      ]
    },
    {
      title: "Top Cities",
      links: [
        "Delhi NCR",
        "Mumbai",
        "Bangalore", 
        "Chennai",
        "Hyderabad",
        "Pune"
      ]
    },
    {
      title: "Services",
      links: [
        "Vendor Marketplace",
        "Budget Planning",
        "Event Photography",
        "Catering Services",
        "Entertainment",
        "Gift Services"
      ]
    },
    {
      title: "Support",
      links: [
        "Help Center",
        "Customer Support",
        "Vendor Registration",
        "Track Orders",
        "Refund Policy",
        "Terms of Service"
      ]
    }
  ];

  return (
    <footer className="bg-muted/50 border-t border-border">
      {/* Newsletter Section */}
      <div className="py-16 bg-gradient-to-r from-primary/5 to-secondary/5">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-3xl font-bold mb-4">
            Stay Updated with
            <span className="text-gradient"> Celebration Ideas</span>
          </h3>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Get the latest trends, vendor recommendations, and exclusive offers delivered to your inbox
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <Input
              placeholder="Enter your email"
              className="flex-1 h-12 rounded-full"
            />
            <Button size="lg" className="btn-celebration px-8 rounded-full">
              Subscribe
            </Button>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
            {/* Brand Column */}
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <Heart className="h-8 w-8 text-primary" />
                <h3 className="text-2xl font-bold text-gradient">SurpriseVille</h3>
              </div>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                India's most trusted celebration planning platform. Making every occasion 
                extraordinary with verified vendors, smart budgeting, and seamless booking.
              </p>
              
              {/* Contact Info */}
              <div className="space-y-3 mb-6">
                <div className="flex items-center space-x-3">
                  <Phone className="h-4 w-4 text-primary" />
                  <span className="text-sm">+91 98765 43210</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="h-4 w-4 text-primary" />
                  <span className="text-sm">hello@surpriseville.co.in</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="h-4 w-4 text-primary" />
                  <span className="text-sm">Available in 50+ cities across India</span>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex space-x-4">
                <Button size="sm" variant="outline" className="rounded-full p-2 hover:bg-primary hover:text-white">
                  <Facebook className="h-4 w-4" />
                </Button>
                <Button size="sm" variant="outline" className="rounded-full p-2 hover:bg-primary hover:text-white">
                  <Twitter className="h-4 w-4" />
                </Button>
                <Button size="sm" variant="outline" className="rounded-full p-2 hover:bg-primary hover:text-white">
                  <Instagram className="h-4 w-4" />
                </Button>
                <Button size="sm" variant="outline" className="rounded-full p-2 hover:bg-primary hover:text-white">
                  <Youtube className="h-4 w-4" />
                </Button>
              </div>
            </div>

            {/* Footer Links */}
            {footerSections.map((section, index) => (
              <div key={index}>
                <h4 className="font-semibold text-foreground mb-4">{section.title}</h4>
                <ul className="space-y-2">
                  {section.links.map((link) => (
                    <li key={link}>
                      <a 
                        href="#" 
                        className="text-muted-foreground hover:text-primary transition-colors text-sm"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-border py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <p className="text-muted-foreground text-sm mb-4 md:mb-0">
              © {currentYear} SurpriseVille. All rights reserved. Made with ❤️ for celebrations.
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;