const plants = [
  // Premium Strains
  {
    id: 1,
    name: "Blue Dream",
    price: 29.99,
    category: "Premium Strains",
    image: "https://images.unsplash.com/photo-1603909223429-69bb7101f420?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    description: "A balanced hybrid with a sweet berry aroma and gentle cerebral invigoration.",
    inStock: true,
    featured: true,
    rating: 4.8
  },
  {
    id: 2,
    name: "Northern Lights",
    price: 39.99,
    category: "Premium Strains",
    image: "https://images.unsplash.com/photo-1603909223429-69bb7101f420?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    description: "A classic indica with resinous buds, offering relaxation and stress relief.",
    inStock: true,
    featured: true,
    rating: 4.5
  },
  {
    id: 3,
    name: "Sour Diesel",
    price: 45.99,
    category: "Premium Strains",
    image: "https://images.unsplash.com/photo-1603909223429-69bb7101f420?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    description: "Energizing sativa with a pungent diesel aroma and uplifting effects.",
    inStock: true,
    featured: false,
    rating: 4.7
  },
  {
    id: 4,
    name: "Girl Scout Cookies",
    price: 32.99,
    category: "Premium Strains",
    image: "https://images.unsplash.com/photo-1603909223361-89bbbf40e017?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    description: "Award-winning hybrid with sweet and earthy flavors and full-body effects.",
    inStock: true,
    featured: false,
    rating: 4.3
  },

  // CBD Hemp
  {
    id: 5,
    name: "Charlotte's Web",
    price: 19.99,
    category: "CBD Hemp",
    image: "https://images.unsplash.com/photo-1503262028195-93c528f03218?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    description: "High-CBD hemp strain with minimal THC, perfect for therapeutic benefits without intoxication.",
    inStock: true,
    featured: true,
    rating: 4.9
  },
  {
    id: 6,
    name: "ACDC",
    price: 24.99,
    category: "CBD Hemp",
    image: "https://images.unsplash.com/photo-1503262028195-93c528f03218?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    description: "CBD-dominant strain with a CBD:THC ratio of 20:1, offering relief without psychoactive effects.",
    inStock: true,
    featured: false,
    rating: 4.6
  },
  {
    id: 7,
    name: "Harlequin",
    price: 15.99,
    category: "CBD Hemp",
    image: "https://images.unsplash.com/photo-1536819114556-1e10f967fb61?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    description: "Balanced CBD:THC ratio with sativa properties, providing clear-headed relief.",
    inStock: true,
    featured: true,
    rating: 4.7
  },
  {
    id: 8,
    name: "Sour Space Candy",
    price: 18.99,
    category: "CBD Hemp",
    image: "https://images.unsplash.com/photo-1536819114556-1e10f967fb61?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    description: "Popular hemp flower with a sweet and sour aroma, rich in beneficial cannabinoids.",
    inStock: true,
    featured: false,
    rating: 4.4
  },

  // Cultivation Supplies
  {
    id: 9,
    name: "LED Grow Light",
    price: 115.99,
    category: "Cultivation Supplies",
    image: "https://images.unsplash.com/photo-1536819114556-1e10f967fb61?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    description: "Full-spectrum LED light optimized for cannabis growth from seedling to harvest.",
    inStock: true,
    featured: false,
    rating: 4.2
  },
  {
    id: 10,
    name: "Organic Soil Mix",
    price: 18.99,
    category: "Cultivation Supplies",
    image: "https://images.unsplash.com/photo-1536819114556-1e10f967fb61?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    description: "Premium organic soil blend specifically formulated for cannabis cultivation.",
    inStock: true,
    featured: true,
    rating: 4.8
  },
  {
    id: 11,
    name: "Fabric Pots (5-Pack)",
    price: 16.99,
    category: "Cultivation Supplies",
    image: "https://images.unsplash.com/photo-1603909223429-69bb7101f420?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    description: "Breathable fabric pots that prevent root circling and promote healthier plants.",
    inStock: true,
    featured: false,
    rating: 4.5
  },
  {
    id: 12,
    name: "Nutrient Kit",
    price: 34.99,
    category: "Cultivation Supplies",
    image: "https://images.unsplash.com/photo-1503262028195-93c528f03218?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    description: "Complete nutrient set for all growth stages, from vegetative to flowering.",
    inStock: true,
    featured: false,
    rating: 4.3
  },

  // Seeds
  {
    id: 13,
    name: "Autoflower Seed Pack",
    price: 42.99,
    category: "Seeds",
    image: "https://images.unsplash.com/photo-1503262028195-93c528f03218?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    description: "Feminized autoflowering seeds that transition to flowering regardless of light cycle.",
    inStock: true,
    featured: true,
    rating: 4.6
  },
  {
    id: 14,
    name: "CBD Seed Collection",
    price: 38.99,
    category: "Seeds",
    image: "https://images.unsplash.com/photo-1536819114556-1e10f967fb61?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    description: "Variety pack of high-CBD, low-THC seeds for therapeutic cultivation.",
    inStock: true,
    featured: false,
    rating: 4.4
  },
  {
    id: 15,
    name: "Beginner's Seed Kit",
    price: 34.99,
    category: "Seeds",
    image: "https://images.unsplash.com/photo-1603909223361-89bbbf40e017?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    description: "Easy-to-grow strains perfect for first-time cultivators, with detailed instructions.",
    inStock: true,
    featured: true,
    rating: 4.7
  },
  {
    id: 16,
    name: "Heirloom Landrace Seeds",
    price: 52.99,
    category: "Seeds",
    image: "https://images.unsplash.com/photo-1603909223361-89bbbf40e017?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    description: "Rare landrace cannabis seeds from traditional growing regions with unique characteristics.",
    inStock: true,
    featured: false,
    rating: 4.2
  }
];

export default plants;