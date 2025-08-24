import { 
  Cake, 
  Heart, 
  Baby, 
  Crown, 
  Utensils, 
  Camera, 
  Music, 
  Flower2,
  Gift,
  Sparkles,
  Users,
  PartyPopper,
  Palette,
  ChefHat,
  Star,
  Zap,
  TreePine,
  Headphones,
  Gamepad2,
  Car
} from "lucide-react";

export interface SubCategory {
  id: string;
  name: string;
  description: string;
  vendorCount: number;
  priceRange: string;
  popularity: number;
}

export interface Category {
  id: string;
  name: string;
  description: string;
  icon: any;
  color: string;
  totalVendors: number;
  subcategories: SubCategory[];
}

export const categoriesData: Category[] = [
  {
    id: "kids-celebrations",
    name: "Kid's Celebrations",
    description: "Make childhood memories magical",
    icon: Baby,
    color: "from-pink-500 to-rose-400",
    totalVendors: 2850,
    subcategories: [
      {
        id: "kids-birthday-decoration",
        name: "Kids Birthday Decoration",
        description: "Themed decorations for kids' birthdays",
        vendorCount: 680,
        priceRange: "₹3,000 - ₹25,000",
        popularity: 95
      },
      {
        id: "welcome-baby-decorations",
        name: "Welcome Baby Decorations",
        description: "Beautiful setups for welcoming newborns",
        vendorCount: 420,
        priceRange: "₹2,500 - ₹15,000",
        popularity: 88
      },
      {
        id: "baby-shower-decorations",
        name: "Baby Shower Decorations",
        description: "Elegant baby shower themes and setups",
        vendorCount: 520,
        priceRange: "₹4,000 - ₹20,000",
        popularity: 92
      },
      {
        id: "birthday-activities",
        name: "Birthday Activities",
        description: "Fun activities and games for kids",
        vendorCount: 340,
        priceRange: "₹1,500 - ₹8,000",
        popularity: 85
      },
      {
        id: "naming-ceremony-decorations",
        name: "Naming Ceremony Decorations",
        description: "Traditional and modern naming ceremony setups",
        vendorCount: 280,
        priceRange: "₹3,500 - ₹18,000",
        popularity: 78
      },
      {
        id: "themed-birthday-cakes",
        name: "Themed Birthday Cakes",
        description: "Custom designer fondant cakes",
        vendorCount: 380,
        priceRange: "₹800 - ₹5,000",
        popularity: 90
      },
      {
        id: "first-birthday-decorations",
        name: "1st Birthday Decorations",
        description: "Special decorations for first birthday milestone",
        vendorCount: 220,
        priceRange: "₹4,000 - ₹22,000",
        popularity: 82
      },
      {
        id: "balloon-bouquets",
        name: "Balloon Bouquets",
        description: "Creative balloon arrangements and bouquets",
        vendorCount: 450,
        priceRange: "₹500 - ₹3,500",
        popularity: 87
      },
      {
        id: "annaprashan-decorations",
        name: "Annaprashan Decorations",
        description: "Traditional rice feeding ceremony decorations",
        vendorCount: 180,
        priceRange: "₹2,000 - ₹12,000",
        popularity: 75
      }
    ]
  },
  {
    id: "birthday-celebrations",
    name: "Birthday Celebrations",
    description: "Make birthdays unforgettable",
    icon: Cake,
    color: "from-purple-500 to-pink-500",
    totalVendors: 3200,
    subcategories: [
      {
        id: "adult-birthday-decorations",
        name: "Adult Birthday Decorations",
        description: "Elegant and fun decorations for adults",
        vendorCount: 850,
        priceRange: "₹5,000 - ₹35,000",
        popularity: 93
      },
      {
        id: "surprise-birthday-planning",
        name: "Surprise Birthday Planning",
        description: "Complete surprise party planning services",
        vendorCount: 620,
        priceRange: "₹8,000 - ₹50,000",
        popularity: 96
      },
      {
        id: "milestone-birthdays",
        name: "Milestone Birthdays",
        description: "Special celebrations for 18th, 21st, 50th birthdays",
        vendorCount: 480,
        priceRange: "₹10,000 - ₹75,000",
        popularity: 89
      },
      {
        id: "birthday-cakes",
        name: "Birthday Cakes",
        description: "Custom cakes for all ages",
        vendorCount: 720,
        priceRange: "₹600 - ₹8,000",
        popularity: 94
      },
      {
        id: "birthday-photography",
        name: "Birthday Photography",
        description: "Professional birthday photoshoots",
        vendorCount: 380,
        priceRange: "₹3,000 - ₹15,000",
        popularity: 86
      },
      {
        id: "same-day-decorations",
        name: "Same Day Decorations",
        description: "Last-minute birthday decoration services",
        vendorCount: 340,
        priceRange: "₹2,500 - ₹18,000",
        popularity: 78
      }
    ]
  },
  {
    id: "wedding-services",
    name: "Wedding Services",
    description: "Your dream wedding awaits",
    icon: Heart,
    color: "from-red-500 to-pink-500",
    totalVendors: 4500,
    subcategories: [
      {
        id: "wedding-decorations",
        name: "Wedding Decorations",
        description: "Complete wedding decoration services",
        vendorCount: 980,
        priceRange: "₹25,000 - ₹2,50,000",
        popularity: 97
      },
      {
        id: "bridal-makeup",
        name: "Bridal Makeup",
        description: "Professional bridal makeup artists",
        vendorCount: 720,
        priceRange: "₹8,000 - ₹40,000",
        popularity: 95
      },
      {
        id: "wedding-photography",
        name: "Wedding Photography",
        description: "Capture your special moments",
        vendorCount: 650,
        priceRange: "₹25,000 - ₹1,50,000",
        popularity: 96
      },
      {
        id: "wedding-catering",
        name: "Wedding Catering",
        description: "Delicious wedding feast services",
        vendorCount: 580,
        priceRange: "₹300 - ₹1,500 per plate",
        popularity: 94
      },
      {
        id: "wedding-planning",
        name: "Wedding Planning",
        description: "Complete wedding planning services",
        vendorCount: 420,
        priceRange: "₹50,000 - ₹5,00,000",
        popularity: 91
      },
      {
        id: "mehendi-artists",
        name: "Mehendi Artists",
        description: "Beautiful henna designs for brides",
        vendorCount: 380,
        priceRange: "₹2,000 - ₹15,000",
        popularity: 88
      },
      {
        id: "wedding-cards",
        name: "Wedding Cards",
        description: "Custom wedding invitation cards",
        vendorCount: 320,
        priceRange: "₹50 - ₹500 per card",
        popularity: 85
      },
      {
        id: "honeymoon-packages",
        name: "Honeymoon Packages",
        description: "Romantic honeymoon planning",
        vendorCount: 280,
        priceRange: "₹30,000 - ₹2,00,000",
        popularity: 82
      },
      {
        id: "engagement-ceremonies",
        name: "Engagement Ceremonies",
        description: "Beautiful engagement celebration setups",
        vendorCount: 460,
        priceRange: "₹15,000 - ₹80,000",
        popularity: 87
      }
    ]
  },
  {
    id: "anniversary-celebrations",
    name: "Anniversary Celebrations",
    description: "Celebrate love milestones",
    icon: Sparkles,
    color: "from-rose-500 to-pink-500",
    totalVendors: 1800,
    subcategories: [
      {
        id: "candlelight-dinners",
        name: "Candlelight Dinners",
        description: "Romantic candlelight dinner setups",
        vendorCount: 520,
        priceRange: "₹2,500 - ₹12,000",
        popularity: 94
      },
      {
        id: "anniversary-decorations",
        name: "Anniversary Decorations",
        description: "Romantic home and venue decorations",
        vendorCount: 420,
        priceRange: "₹3,000 - ₹25,000",
        popularity: 89
      },
      {
        id: "romantic-photoshoots",
        name: "Romantic Photoshoots",
        description: "Couples photography sessions",
        vendorCount: 280,
        priceRange: "₹5,000 - ₹20,000",
        popularity: 86
      },
      {
        id: "anniversary-cakes",
        name: "Anniversary Cakes",
        description: "Custom anniversary celebration cakes",
        vendorCount: 350,
        priceRange: "₹800 - ₹5,000",
        popularity: 88
      },
      {
        id: "romantic-getaways",
        name: "Romantic Getaways",
        description: "Weekend anniversary trips",
        vendorCount: 180,
        priceRange: "₹8,000 - ₹50,000",
        popularity: 83
      },
      {
        id: "silver-golden-jubilee",
        name: "Silver & Golden Jubilee",
        description: "Special milestone anniversary celebrations",
        vendorCount: 120,
        priceRange: "₹15,000 - ₹1,00,000",
        popularity: 79
      }
    ]
  },
  {
    id: "corporate-events",
    name: "Corporate Events",
    description: "Professional event solutions",
    icon: Users,
    color: "from-blue-500 to-indigo-500",
    totalVendors: 2200,
    subcategories: [
      {
        id: "conference-management",
        name: "Conference Management",
        description: "Complete conference planning and execution",
        vendorCount: 380,
        priceRange: "₹50,000 - ₹5,00,000",
        popularity: 91
      },
      {
        id: "team-building-activities",
        name: "Team Building Activities",
        description: "Corporate team building events",
        vendorCount: 320,
        priceRange: "₹5,000 - ₹30,000",
        popularity: 88
      },
      {
        id: "product-launch-events",
        name: "Product Launch Events",
        description: "Professional product launch ceremonies",
        vendorCount: 280,
        priceRange: "₹1,00,000 - ₹10,00,000",
        popularity: 85
      },
      {
        id: "annual-parties",
        name: "Annual Parties",
        description: "Corporate annual celebration events",
        vendorCount: 420,
        priceRange: "₹25,000 - ₹2,00,000",
        popularity: 89
      },
      {
        id: "award-ceremonies",
        name: "Award Ceremonies",
        description: "Corporate recognition and award events",
        vendorCount: 220,
        priceRange: "₹30,000 - ₹1,50,000",
        popularity: 82
      },
      {
        id: "office-decorations",
        name: "Office Decorations",
        description: "Festive office decoration services",
        vendorCount: 350,
        priceRange: "₹3,000 - ₹25,000",
        popularity: 86
      },
      {
        id: "corporate-gifts",
        name: "Corporate Gifts",
        description: "Branded corporate gift solutions",
        vendorCount: 450,
        priceRange: "₹100 - ₹5,000 per piece",
        popularity: 87
      }
    ]
  },
  {
    id: "festival-celebrations",
    name: "Festival Celebrations",
    description: "Traditional and modern festivals",
    icon: Crown,
    color: "from-orange-500 to-yellow-500",
    totalVendors: 1950,
    subcategories: [
      {
        id: "diwali-decorations",
        name: "Diwali Decorations",
        description: "Traditional Diwali celebration setups",
        vendorCount: 420,
        priceRange: "₹2,000 - ₹20,000",
        popularity: 96
      },
      {
        id: "ganpati-decorations",
        name: "Ganpati Decorations",
        description: "Eco-friendly Ganesh festival decorations",
        vendorCount: 380,
        priceRange: "₹3,000 - ₹50,000",
        popularity: 94
      },
      {
        id: "holi-celebrations",
        name: "Holi Celebrations",
        description: "Colorful Holi festival arrangements",
        vendorCount: 250,
        priceRange: "₹1,500 - ₹15,000",
        popularity: 88
      },
      {
        id: "christmas-decorations",
        name: "Christmas Decorations",
        description: "Festive Christmas decoration services",
        vendorCount: 320,
        priceRange: "₹2,500 - ₹25,000",
        popularity: 89
      },
      {
        id: "new-year-parties",
        name: "New Year Parties",
        description: "New Year celebration planning",
        vendorCount: 280,
        priceRange: "₹5,000 - ₹75,000",
        popularity: 91
      },
      {
        id: "navratri-garba",
        name: "Navratri & Garba",
        description: "Traditional Navratri celebration services",
        vendorCount: 180,
        priceRange: "₹3,000 - ₹40,000",
        popularity: 85
      },
      {
        id: "eid-celebrations",
        name: "Eid Celebrations",
        description: "Eid festival decoration and planning",
        vendorCount: 160,
        priceRange: "₹2,000 - ₹18,000",
        popularity: 83
      }
    ]
  },
  {
    id: "catering-services",
    name: "Catering Services",
    description: "Delicious food experiences",
    icon: Utensils,
    color: "from-green-500 to-emerald-500",
    totalVendors: 2800,
    subcategories: [
      {
        id: "wedding-catering",
        name: "Wedding Catering",
        description: "Multi-cuisine wedding catering services",
        vendorCount: 680,
        priceRange: "₹300 - ₹1,500 per plate",
        popularity: 95
      },
      {
        id: "birthday-catering",
        name: "Birthday Catering",
        description: "Birthday party catering services",
        vendorCount: 520,
        priceRange: "₹200 - ₹800 per plate",
        popularity: 91
      },
      {
        id: "corporate-catering",
        name: "Corporate Catering",
        description: "Office events and meeting catering",
        vendorCount: 450,
        priceRange: "₹150 - ₹600 per plate",
        popularity: 88
      },
      {
        id: "live-counters",
        name: "Live Counters",
        description: "Interactive live cooking stations",
        vendorCount: 380,
        priceRange: "₹400 - ₹1,200 per plate",
        popularity: 89
      },
      {
        id: "regional-cuisine",
        name: "Regional Cuisine",
        description: "Authentic regional and traditional foods",
        vendorCount: 420,
        priceRange: "₹250 - ₹900 per plate",
        popularity: 86
      },
      {
        id: "dessert-catering",
        name: "Dessert Catering",
        description: "Specialized dessert and sweet services",
        vendorCount: 320,
        priceRange: "₹100 - ₹500 per piece",
        popularity: 87
      },
      {
        id: "cocktail-services",
        name: "Cocktail Services",
        description: "Professional bartending and cocktail services",
        vendorCount: 280,
        priceRange: "₹500 - ₹2,000 per person",
        popularity: 84
      }
    ]
  },
  {
    id: "photography-videography",
    name: "Photography & Videography",
    description: "Capture precious moments",
    icon: Camera,
    color: "from-purple-500 to-indigo-500",
    totalVendors: 2400,
    subcategories: [
      {
        id: "wedding-photography",
        name: "Wedding Photography",
        description: "Complete wedding photography packages",
        vendorCount: 620,
        priceRange: "₹25,000 - ₹1,50,000",
        popularity: 96
      },
      {
        id: "pre-wedding-shoots",
        name: "Pre-Wedding Shoots",
        description: "Romantic pre-wedding photography sessions",
        vendorCount: 480,
        priceRange: "₹15,000 - ₹75,000",
        popularity: 93
      },
      {
        id: "birthday-photography",
        name: "Birthday Photography",
        description: "Birthday celebration photography",
        vendorCount: 420,
        priceRange: "₹3,000 - ₹20,000",
        popularity: 88
      },
      {
        id: "baby-photoshoots",
        name: "Baby Photoshoots",
        description: "Newborn and baby photography",
        vendorCount: 350,
        priceRange: "₹5,000 - ₹25,000",
        popularity: 90
      },
      {
        id: "corporate-photography",
        name: "Corporate Photography",
        description: "Professional corporate event coverage",
        vendorCount: 280,
        priceRange: "₹10,000 - ₹50,000",
        popularity: 85
      },
      {
        id: "maternity-shoots",
        name: "Maternity Shoots",
        description: "Beautiful maternity photography sessions",
        vendorCount: 220,
        priceRange: "₹8,000 - ₹30,000",
        popularity: 87
      },
      {
        id: "drone-photography",
        name: "Drone Photography",
        description: "Aerial photography and videography",
        vendorCount: 180,
        priceRange: "₹8,000 - ₹40,000",
        popularity: 82
      }
    ]
  },
  {
    id: "entertainment-services",
    name: "Entertainment Services",
    description: "Music, dance & performances",
    icon: Music,
    color: "from-cyan-500 to-blue-500",
    totalVendors: 1600,
    subcategories: [
      {
        id: "dj-services",
        name: "DJ Services",
        description: "Professional DJ and music services",
        vendorCount: 480,
        priceRange: "₹8,000 - ₹50,000",
        popularity: 94
      },
      {
        id: "live-bands",
        name: "Live Bands",
        description: "Musical bands for events",
        vendorCount: 320,
        priceRange: "₹15,000 - ₹1,00,000",
        popularity: 89
      },
      {
        id: "dance-performers",
        name: "Dance Performers",
        description: "Professional dance troupes and performers",
        vendorCount: 280,
        priceRange: "₹5,000 - ₹40,000",
        popularity: 87
      },
      {
        id: "anchors-hosts",
        name: "Anchors & Hosts",
        description: "Event anchors and show hosts",
        vendorCount: 220,
        priceRange: "₹3,000 - ₹25,000",
        popularity: 86
      },
      {
        id: "magic-shows",
        name: "Magic Shows",
        description: "Magicians and illusionists for events",
        vendorCount: 150,
        priceRange: "₹2,000 - ₹15,000",
        popularity: 83
      },
      {
        id: "celebrity-artists",
        name: "Celebrity Artists",
        description: "Celebrity performers and artists",
        vendorCount: 80,
        priceRange: "₹50,000 - ₹10,00,000",
        popularity: 91
      },
      {
        id: "stand-up-comedy",
        name: "Stand-up Comedy",
        description: "Professional comedians for entertainment",
        vendorCount: 120,
        priceRange: "₹8,000 - ₹75,000",
        popularity: 84
      }
    ]
  },
  {
    id: "personalized-gifts",
    name: "Personalized Gifts",
    description: "Unique & thoughtful gifts",
    icon: Gift,
    color: "from-teal-500 to-green-500",
    totalVendors: 1750,
    subcategories: [
      {
        id: "custom-photo-gifts",
        name: "Custom Photo Gifts",
        description: "Personalized photo frames, albums, and prints",
        vendorCount: 420,
        priceRange: "₹300 - ₹3,000",
        popularity: 92
      },
      {
        id: "engraved-gifts",
        name: "Engraved Gifts",
        description: "Laser engraved personalized items",
        vendorCount: 350,
        priceRange: "₹500 - ₹5,000",
        popularity: 89
      },
      {
        id: "custom-jewelry",
        name: "Custom Jewelry",
        description: "Personalized jewelry and accessories",
        vendorCount: 280,
        priceRange: "₹1,000 - ₹25,000",
        popularity: 87
      },
      {
        id: "name-based-gifts",
        name: "Name-based Gifts",
        description: "Gifts with personalized names and messages",
        vendorCount: 380,
        priceRange: "₹200 - ₹2,500",
        popularity: 90
      },
      {
        id: "anniversary-gifts",
        name: "Anniversary Gifts",
        description: "Romantic personalized anniversary gifts",
        vendorCount: 320,
        priceRange: "₹800 - ₹8,000",
        popularity: 88
      },
      {
        id: "corporate-gifts",
        name: "Corporate Gifts",
        description: "Branded corporate promotional items",
        vendorCount: 450,
        priceRange: "₹100 - ₹5,000",
        popularity: 85
      },
      {
        id: "baby-gifts",
        name: "Baby Gifts",
        description: "Customized gifts for newborns and babies",
        vendorCount: 220,
        priceRange: "₹400 - ₹4,000",
        popularity: 86
      }
    ]
  }
];

// Helper functions
export const getCategoryById = (id: string): Category | undefined => {
  return categoriesData.find(category => category.id === id);
};

export const getSubcategoryById = (categoryId: string, subcategoryId: string): SubCategory | undefined => {
  const category = getCategoryById(categoryId);
  return category?.subcategories.find(sub => sub.id === subcategoryId);
};

export const getAllSubcategories = (): SubCategory[] => {
  return categoriesData.flatMap(category => category.subcategories);
};

export const getTotalVendorCount = (): number => {
  return categoriesData.reduce((total, category) => total + category.totalVendors, 0);
};