import { useState } from "react";
import { motion } from "framer-motion";
import { MessageCircle, Phone, ShoppingBag, ChevronLeft, Star, Heart, Eye, Plus, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const Shop = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [activeSubcategory, setActiveSubcategory] = useState("");
  const [favorites, setFavorites] = useState<number[]>([]);
  const [showAllProducts, setShowAllProducts] = useState(false);

  const categories = [
    { id: "all", name: "All Products", icon: "🛍️" },
    { id: "cakes", name: "🎂 Cakes", icon: "🎂" },
    { id: "pastries", name: "🥐 Pastries", icon: "🥐" },
    { id: "snacks", name: "🥪 Snacks", icon: "🥪" },
    { id: "beverages", name: "☕ Beverages", icon: "☕" },
    { id: "cookies", name: "🍪 Cookies", icon: "🍪" },
    { id: "chocolates", name: "🍫 Chocolates", icon: "🍫" },
    { id: "hampers", name: "🎁 Gift Hampers", icon: "🎁" },
    { id: "flowers", name: "🌸 Flowers", icon: "🌸" },
  ];

  const subcategories = {
    cakes: [
      "Birthday Cakes", "Wedding Cakes", "Anniversary Cakes", "Custom Cakes", 
      "Chocolate Cakes", "Vanilla Cakes", "Red Velvet Cakes", "Black Forest Cakes",
      "Cheesecakes", "Cupcakes", "Layer Cakes", "Pound Cakes", "Sponge Cakes",
      "Carrot Cakes", "Fruit Cakes", "Sheet Cakes", "Tiramisu Cakes"
    ],
    pastries: [
      "Croissants", "Pain au Chocolat", "Danish Pastries", "Eclairs", "Profiteroles",
      "Puff Pastries", "Napoleons", "Cream Horns", "Cannoli", "Baklava",
      "Strudels", "Turnovers", "Tarts", "Mille-feuille", "Choux Pastry",
      "Brioche", "Palmiers", "Cinnamon Rolls", "Boston Cream"
    ],
    snacks: [
      "Sandwiches", "Club Sandwiches", "Wraps", "Paninis", "Bagels",
      "Savory Pies", "Quiches", "Pizza Slices", "Samosas", "Spring Rolls", 
      "Burgers", "Hot Dogs", "Sausage Rolls", "Meat Pies", "Chicken Puffs",
      "Veg Puffs", "Patties", "Calzones"
    ],
    beverages: [
      "Espresso", "Cappuccino", "Latte", "Americano", "Macchiato",
      "Black Coffee", "Cold Brew", "Iced Coffee", "Frappuccino", 
      "Hot Chocolate", "Tea Varieties", "Chai Latte", "Green Tea",
      "Herbal Tea", "Fresh Juices", "Smoothies", "Milkshakes", 
      "Cold Drinks", "Energy Drinks", "Mocktails"
    ],
    cookies: [
      "Chocolate Chip Cookies", "Oatmeal Cookies", "Sugar Cookies", "Macarons",
      "Shortbread Cookies", "Ginger Snaps", "Biscotti", "Fortune Cookies",
      "Butter Cookies", "Snickerdoodles", "Peanut Butter Cookies", "Oreo Style",
      "Jam Cookies", "Coconut Cookies", "Almond Cookies", "Digestive Biscuits"
    ],
    chocolates: [
      "Dark Chocolate", "Milk Chocolate", "White Chocolate", "Truffles",
      "Chocolate Bars", "Pralines", "Chocolate Boxes", "Bonbons",
      "Chocolate Brownies", "Chocolate Fudge", "Chocolate Mousse", "Hot Fudge",
      "Chocolate Covered Fruits", "Chocolate Nuts", "Artisan Chocolates"
    ],
    hampers: [
      "Birthday Hampers", "Wedding Hampers", "Anniversary Hampers", "Festival Hampers",
      "Corporate Gift Hampers", "Baby Shower Hampers", "Sympathy Hampers",
      "Thank You Hampers", "Custom Gift Hampers", "Chocolate Hampers",
      "Tea & Coffee Hampers", "Fruit & Nut Hampers", "Luxury Hampers"
    ],
    flowers: [
      "Birthday Bouquets", "Wedding Flowers", "Anniversary Arrangements", "Sympathy Flowers",
      "Seasonal Bouquets", "Rose Bouquets", "Mixed Flower Bouquets", "Orchid Arrangements",
      "Lily Arrangements", "Carnation Bouquets", "Potted Plants", "Flower Baskets",
      "Decorative Arrangements", "Corporate Flowers"
    ]
  };

  const products = [
    // CAKES
    {
      id: 1,
      name: "Signature Black Forest Cake",
      price: "$45",
      originalPrice: "$60",
      category: "cakes",
      subcategory: "Black Forest Cakes",
      image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=400&h=400&fit=crop",
      description: "Classic German black forest cake with layers of chocolate sponge, cherries and whipped cream",
      rating: 4.8,
      reviews: 127,
      badge: "Bestseller",
      isNew: false,
      discount: 25,
    },
    {
      id: 2,
      name: "Red Velvet Cupcakes (6 Pack)",
      price: "$24",
      originalPrice: "$32",
      category: "cakes",
      subcategory: "Cupcakes",
      image: "https://images.unsplash.com/photo-1587668178277-295251f900ce?w=400&h=400&fit=crop",
      description: "Classic red velvet cupcakes topped with signature cream cheese frosting and sprinkles",
      rating: 4.8,
      reviews: 94,
      badge: "Popular",
      isNew: false,
      discount: 25,
    },
    {
      id: 3,
      name: "Chocolate Birthday Cake",
      price: "$38",
      originalPrice: "$50",
      category: "cakes",
      subcategory: "Birthday Cakes",
      image: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=400&h=400&fit=crop",
      description: "Rich chocolate birthday cake with vanilla buttercream and colorful decorations",
      rating: 4.9,
      reviews: 156,
      badge: "Premium",
      isNew: false,
      discount: 24,
    },
    {
      id: 4,
      name: "Vanilla Wedding Cake (3-Tier)",
      price: "$125",
      originalPrice: "$165",
      category: "cakes",
      subcategory: "Wedding Cakes",
      image: "https://images.unsplash.com/photo-1535141192574-5d4897c12636?w=400&h=400&fit=crop",
      description: "Elegant 3-tier vanilla wedding cake with white fondant and floral decorations",
      rating: 4.9,
      reviews: 78,
      badge: "Exclusive",
      isNew: false,
      discount: 24,
    },
    {
      id: 5,
      name: "Tiramisu Slice",
      price: "$12",
      originalPrice: "$16",
      category: "cakes",
      subcategory: "Tiramisu Cakes",
      image: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=400&h=400&fit=crop",
      description: "Authentic Italian tiramisu with ladyfingers soaked in espresso and mascarpone cream",
      rating: 4.8,
      reviews: 99,
      badge: "Authentic",
      isNew: true,
      discount: 25,
    },
    // PASTRIES
    {
      id: 6,
      name: "Butter Croissants (6 Pack)",
      price: "$12",
      originalPrice: "$18",
      category: "pastries",
      subcategory: "Croissants",
      image: "https://images.unsplash.com/photo-1549903072-7e6e0bedb7fb?w=400&h=400&fit=crop",
      description: "Authentic French butter croissants with 64 layers of flaky pastry, baked fresh daily",
      rating: 4.9,
      reviews: 89,
      badge: "Premium",
      isNew: true,
      discount: 33,
    },
    {
      id: 7,
      name: "Pain au Chocolat (4 Pack)",
      price: "$16",
      originalPrice: "$22",
      category: "pastries",
      subcategory: "Pain au Chocolat",
      image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=400&h=400&fit=crop",
      description: "Traditional French pastries filled with premium Belgian dark chocolate batons",
      rating: 4.5,
      reviews: 73,
      badge: "Chef's Special",
      isNew: false,
      discount: 27,
    },
    {
      id: 8,
      name: "Chocolate Éclair",
      price: "$8",
      originalPrice: "$12",
      category: "pastries",
      subcategory: "Eclairs",
      image: "https://images.unsplash.com/photo-1486427944299-d1955d23e34d?w=400&h=400&fit=crop",
      description: "Classic French éclair filled with vanilla pastry cream and topped with chocolate glaze",
      rating: 4.6,
      reviews: 78,
      badge: "Traditional",
      isNew: false,
      discount: 33,
    },
    {
      id: 9,
      name: "Mixed Fruit Tart",
      price: "$10",
      originalPrice: "$14",
      category: "pastries",
      subcategory: "Tarts",
      image: "https://images.unsplash.com/photo-1488477181946-6428a0291777?w=400&h=400&fit=crop",
      description: "Fresh seasonal fruits on vanilla pastry cream in a crispy tart shell",
      rating: 4.4,
      reviews: 67,
      badge: "Seasonal",
      isNew: false,
      discount: 29,
    },
    {
      id: 10,
      name: "Danish Pastries (4 Pack)",
      price: "$14",
      originalPrice: "$20",
      category: "pastries",
      subcategory: "Danish Pastries",
      image: "https://images.unsplash.com/photo-1551024506-0bccd828d307?w=400&h=400&fit=crop",
      description: "Traditional Danish pastries with apple, cherry, and cheese fillings",
      rating: 4.7,
      reviews: 85,
      badge: "Classic",
      isNew: false,
      discount: 30,
    },
    // SNACKS
    {
      id: 11,
      name: "Gourmet Club Sandwich",
      price: "$14",
      originalPrice: "$18",
      category: "snacks",
      subcategory: "Club Sandwiches",
      image: "https://images.unsplash.com/photo-1553909489-cd47e0ef937f?w=400&h=400&fit=crop",
      description: "Triple-layered club sandwich with roasted turkey, bacon, lettuce, tomato on toasted bread",
      rating: 4.4,
      reviews: 91,
      badge: "Healthy",
      isNew: false,
      discount: 22,
    },
    {
      id: 12,
      name: "Chicken Puff Pastry",
      price: "$8",
      originalPrice: "$12",
      category: "snacks",
      subcategory: "Chicken Puffs",
      image: "https://images.unsplash.com/photo-1601314002957-655dee5a7be9?w=400&h=400&fit=crop",
      description: "Flaky puff pastry filled with spiced chicken and vegetables, baked golden brown",
      rating: 4.6,
      reviews: 103,
      badge: "Popular",
      isNew: false,
      discount: 33,
    },
    {
      id: 13,
      name: "Vegetarian Samosas (6 Pack)",
      price: "$10",
      originalPrice: "$15",
      category: "snacks",
      subcategory: "Samosas",
      image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=400&h=400&fit=crop",
      description: "Crispy triangular pastries filled with spiced potatoes, peas, and aromatic herbs",
      rating: 4.5,
      reviews: 124,
      badge: "Traditional",
      isNew: false,
      discount: 33,
    },
    {
      id: 14,
      name: "Spinach & Cheese Quiche",
      price: "$16",
      originalPrice: "$22",
      category: "snacks",
      subcategory: "Quiches",
      image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=400&h=400&fit=crop",
      description: "Rich quiche with spinach, feta cheese, and herbs in a buttery pastry crust",
      rating: 4.7,
      reviews: 76,
      badge: "Gourmet",
      isNew: true,
      discount: 27,
    },
    {
      id: 15,
      name: "Artisan Panini",
      price: "$12",
      originalPrice: "$16",
      category: "snacks",
      subcategory: "Paninis",
      image: "https://images.unsplash.com/photo-1509722747041-616f39b57569?w=400&h=400&fit=crop",
      description: "Grilled panini with mozzarella, tomatoes, basil, and balsamic glaze on ciabatta",
      rating: 4.5,
      reviews: 89,
      badge: "Fresh",
      isNew: false,
      discount: 25,
    },
    // BEVERAGES
    {
      id: 16,
      name: "Artisan Coffee Blend 250g",
      price: "$18",
      originalPrice: "$25",
      category: "beverages",
      subcategory: "Black Coffee",
      image: "https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=400&h=400&fit=crop",
      description: "Specially roasted premium coffee beans from Colombian highlands, perfect with pastries",
      rating: 4.6,
      reviews: 156,
      badge: "Organic",
      isNew: false,
      discount: 28,
    },
    {
      id: 17,
      name: "Cappuccino Premium",
      price: "$6",
      originalPrice: "$8",
      category: "beverages",
      subcategory: "Cappuccino",
      image: "https://images.unsplash.com/photo-1572442388796-11668a67e53d?w=400&h=400&fit=crop",
      description: "Perfect cappuccino made with espresso, steamed milk and rich foam, served hot",
      rating: 4.5,
      reviews: 134,
      badge: "Signature",
      isNew: false,
      discount: 25,
    },
    {
      id: 18,
      name: "Iced Caramel Latte",
      price: "$7",
      originalPrice: "$10",
      category: "beverages",
      subcategory: "Latte",
      image: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=400&h=400&fit=crop",
      description: "Smooth espresso with steamed milk, caramel syrup, and whipped cream over ice",
      rating: 4.7,
      reviews: 98,
      badge: "Popular",
      isNew: true,
      discount: 30,
    },
    {
      id: 19,
      name: "Fresh Mango Smoothie",
      price: "$9",
      originalPrice: "$12",
      category: "beverages",
      subcategory: "Smoothies",
      image: "https://images.unsplash.com/photo-1505252585461-04db1eb84625?w=400&h=400&fit=crop",
      description: "Refreshing smoothie made with fresh mangoes, yogurt, and a touch of honey",
      rating: 4.6,
      reviews: 87,
      badge: "Fresh",
      isNew: false,
      discount: 25,
    },
    {
      id: 20,
      name: "Masala Chai Latte",
      price: "$5",
      originalPrice: "$7",
      category: "beverages",
      subcategory: "Chai Latte",
      image: "https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=400&h=400&fit=crop",
      description: "Traditional Indian spiced tea with steamed milk, cardamom, cinnamon, and ginger",
      rating: 4.8,
      reviews: 145,
      badge: "Traditional",
      isNew: false,
      discount: 29,
    },
    // COOKIES
    {
      id: 21,
      name: "French Macarons Assorted Box",
      price: "$28",
      originalPrice: "$36",
      category: "cookies",
      subcategory: "Macarons",
      image: "https://images.unsplash.com/photo-1571506165871-dee9c884b8e4?w=400&h=400&fit=crop",
      description: "12-piece assorted French macarons in flavors: vanilla, chocolate, strawberry, pistachio",
      rating: 4.7,
      reviews: 203,
      badge: "Limited",
      isNew: false,
      discount: 22,
    },
    {
      id: 22,
      name: "Double Chocolate Chip Cookies",
      price: "$15",
      originalPrice: "$20",
      category: "cookies",
      subcategory: "Chocolate Chip Cookies",
      image: "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?w=400&h=400&fit=crop",
      description: "Soft-baked cookies loaded with dark and white chocolate chips, made with real butter",
      rating: 4.7,
      reviews: 145,
      badge: "Classic",
      isNew: false,
      discount: 25,
    },
    {
      id: 23,
      name: "Butter Shortbread Cookies",
      price: "$12",
      originalPrice: "$16",
      category: "cookies",
      subcategory: "Shortbread Cookies",
      image: "https://images.unsplash.com/photo-1548848670-0cc4c2be0095?w=400&h=400&fit=crop",
      description: "Traditional Scottish shortbread cookies made with premium butter and a hint of vanilla",
      rating: 4.5,
      reviews: 76,
      badge: "Traditional",
      isNew: false,
      discount: 25,
    },
    {
      id: 24,
      name: "Oatmeal Raisin Cookies",
      price: "$13",
      originalPrice: "$18",
      category: "cookies",
      subcategory: "Oatmeal Cookies",
      image: "https://images.unsplash.com/photo-1606913084603-3e7702b01627?w=400&h=400&fit=crop",
      description: "Chewy oatmeal cookies packed with plump raisins and warm cinnamon spice",
      rating: 4.4,
      reviews: 92,
      badge: "Healthy",
      isNew: false,
      discount: 28,
    },
    {
      id: 25,
      name: "Italian Biscotti",
      price: "$16",
      originalPrice: "$22",
      category: "cookies",
      subcategory: "Biscotti",
      image: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=400&h=400&fit=crop",
      description: "Twice-baked Italian cookies with almonds and anise, perfect with coffee or tea",
      rating: 4.6,
      reviews: 65,
      badge: "Artisan",
      isNew: true,
      discount: 27,
    },
    // CHOCOLATES
    {
      id: 26,
      name: "Handcrafted Dark Chocolate Truffles",
      price: "$32",
      originalPrice: "$42",
      category: "chocolates",
      subcategory: "Truffles",
      image: "https://images.unsplash.com/photo-1511381939415-e44015466834?w=400&h=400&fit=crop",
      description: "Artisan dark chocolate truffles with 70% cocoa, dusted with premium cocoa powder",
      rating: 4.9,
      reviews: 112,
      badge: "Artisan",
      isNew: false,
      discount: 24,
    },
    {
      id: 27,
      name: "Milk Chocolate Selection Box",
      price: "$25",
      originalPrice: "$35",
      category: "chocolates",
      subcategory: "Chocolate Boxes",
      image: "https://images.unsplash.com/photo-1481391319762-47dff72954d9?w=400&h=400&fit=crop",
      description: "Elegant box of assorted milk chocolates with various fillings and textures",
      rating: 4.6,
      reviews: 89,
      badge: "Premium",
      isNew: false,
      discount: 29,
    },
    {
      id: 28,
      name: "White Chocolate Pralines",
      price: "$28",
      originalPrice: "$38",
      category: "chocolates",
      subcategory: "Pralines",
      image: "https://images.unsplash.com/photo-1548365328-8c6db3220e4c?w=400&h=400&fit=crop",
      description: "Delicate white chocolate pralines filled with hazelnut cream and crunchy pieces",
      rating: 4.7,
      reviews: 73,
      badge: "Luxury",
      isNew: true,
      discount: 26,
    },
    {
      id: 29,
      name: "Chocolate Brownies (6 Pack)",
      price: "$18",
      originalPrice: "$24",
      category: "chocolates",
      subcategory: "Chocolate Brownies",
      image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=400&h=400&fit=crop",
      description: "Fudgy chocolate brownies with walnuts, rich and decadent texture",
      rating: 4.8,
      reviews: 134,
      badge: "Popular",
      isNew: false,
      discount: 25,
    },
    {
      id: 30,
      name: "Chocolate Covered Strawberries",
      price: "$22",
      originalPrice: "$30",
      category: "chocolates",
      subcategory: "Chocolate Covered Fruits",
      image: "https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?w=400&h=400&fit=crop",
      description: "Fresh strawberries dipped in premium dark and white chocolate",
      rating: 4.9,
      reviews: 96,
      badge: "Fresh",
      isNew: false,
      discount: 27,
    },
    // HAMPERS
    {
      id: 31,
      name: "Deluxe Wedding Hamper",
      price: "$85",
      originalPrice: "$110",
      category: "hampers",
      subcategory: "Wedding Hampers",
      image: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=400&h=400&fit=crop",
      description: "Elegant wedding gift hamper with assorted cakes, chocolates, and premium treats",
      rating: 4.9,
      reviews: 87,
      badge: "Exclusive",
      isNew: true,
      discount: 23,
    },
    {
      id: 32,
      name: "Birthday Celebration Hamper",
      price: "$65",
      originalPrice: "$85",
      category: "hampers",
      subcategory: "Birthday Hampers",
      image: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=400&h=400&fit=crop",
      description: "Special birthday hamper with cake, cookies, chocolates, and party decorations",
      rating: 4.7,
      reviews: 104,
      badge: "Popular",
      isNew: false,
      discount: 24,
    },
    {
      id: 33,
      name: "Corporate Gift Hamper",
      price: "$95",
      originalPrice: "$125",
      category: "hampers",
      subcategory: "Corporate Gift Hampers",
      image: "https://images.unsplash.com/photo-1543362906-acfc16c67564?w=400&h=400&fit=crop",
      description: "Professional gift hamper with premium treats, perfect for business occasions",
      rating: 4.8,
      reviews: 67,
      badge: "Professional",
      isNew: false,
      discount: 24,
    },
    {
      id: 34,
      name: "Festival Special Hamper",
      price: "$75",
      originalPrice: "$100",
      category: "hampers",
      subcategory: "Festival Hampers",
      image: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=400&h=400&fit=crop",
      description: "Festive hamper with traditional sweets, dry fruits, and seasonal specialties",
      rating: 4.6,
      reviews: 89,
      badge: "Seasonal",
      isNew: true,
      discount: 25,
    },
    {
      id: 35,
      name: "Tea & Coffee Lover's Hamper",
      price: "$55",
      originalPrice: "$75",
      category: "hampers",
      subcategory: "Tea & Coffee Hampers",
      image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=400&h=400&fit=crop",
      description: "Perfect hamper for beverage lovers with premium teas, coffees, and accompaniments",
      rating: 4.5,
      reviews: 78,
      badge: "Specialty",
      isNew: false,
      discount: 27,
    },
    // FLOWERS
    {
      id: 36,
      name: "Premium Rose Bouquet",
      price: "$35",
      originalPrice: "$45",
      category: "flowers",
      subcategory: "Rose Bouquets",
      image: "https://images.unsplash.com/photo-1563241527-3004b7be0ffd?w=400&h=400&fit=crop",
      description: "Beautiful arrangement of 12 fresh red roses with baby's breath and elegant wrapping",
      rating: 4.8,
      reviews: 68,
      badge: "Fresh",
      isNew: true,
      discount: 22,
    },
    {
      id: 37,
      name: "Mixed Flower Bouquet",
      price: "$28",
      originalPrice: "$38",
      category: "flowers",
      subcategory: "Mixed Flower Bouquets",
      image: "https://images.unsplash.com/photo-1490750967868-88aa4486c946?w=400&h=400&fit=crop",
      description: "Colorful mixed bouquet with roses, lilies, carnations, and seasonal flowers",
      rating: 4.6,
      reviews: 85,
      badge: "Popular",
      isNew: false,
      discount: 26,
    },
    {
      id: 38,
      name: "Wedding Flower Arrangement",
      price: "$120",
      originalPrice: "$160",
      category: "flowers",
      subcategory: "Wedding Flowers",
      image: "https://images.unsplash.com/photo-1487070183336-b863922373d4?w=400&h=400&fit=crop",
      description: "Elegant bridal bouquet with white roses, lilies, and eucalyptus leaves",
      rating: 4.9,
      reviews: 45,
      badge: "Bridal",
      isNew: false,
      discount: 25,
    },
    {
      id: 39,
      name: "Orchid Arrangement",
      price: "$45",
      originalPrice: "$60",
      category: "flowers",
      subcategory: "Orchid Arrangements",
      image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400&h=400&fit=crop",
      description: "Sophisticated orchid arrangement in a ceramic pot, perfect for home or office",
      rating: 4.7,
      reviews: 56,
      badge: "Elegant",
      isNew: true,
      discount: 25,
    },
    {
      id: 40,
      name: "Seasonal Flower Basket",
      price: "$32",
      originalPrice: "$42",
      category: "flowers",
      subcategory: "Flower Baskets",
      image: "https://images.unsplash.com/photo-1487070183336-b863922373d4?w=400&h=400&fit=crop",
      description: "Charming wicker basket filled with fresh seasonal flowers and greenery",
      rating: 4.5,
      reviews: 72,
      badge: "Seasonal",
      isNew: false,
      discount: 24,
    }
  ];

  const getFilteredProducts = () => {
    if (activeCategory === "all") return products;
    if (activeSubcategory) {
      return products.filter(product => 
        product.category === activeCategory && product.subcategory === activeSubcategory
      );
    }
    return products.filter(product => product.category === activeCategory);
  };

  const filteredProducts = getFilteredProducts();
  const displayedProducts = showAllProducts ? filteredProducts : filteredProducts.slice(0, 9);

  const toggleFavorite = (productId: number) => {
    setFavorites(prev => 
      prev.includes(productId) 
        ? prev.filter(id => id !== productId)
        : [...prev, productId]
    );
  };

  const handleWhatsAppOrder = (productName: string, price: string) => {
    const message = encodeURIComponent(`Hi! I'd like to order the ${productName} (${price}). Can you help me with the details?`);
    window.open(`https://wa.me/919138724870?text=${message}`, "_blank");
  };

  const handleCallOrder = () => {
    const phoneNumber = "+919138724870";
    window.location.href = `tel:${phoneNumber}`;
  };

  const getBadgeColor = (badge: string) => {
    const colors = {
      "Bestseller": "bg-gradient-to-r from-amber-500 to-orange-500",
      "Premium": "bg-gradient-to-r from-purple-500 to-indigo-500", 
      "Limited": "bg-gradient-to-r from-red-500 to-pink-500",
      "Organic": "bg-gradient-to-r from-green-500 to-emerald-500",
      "Exclusive": "bg-gradient-to-r from-amber-600 to-yellow-500",
      "Popular": "bg-gradient-to-r from-blue-500 to-cyan-500",
      "Chef's Special": "bg-gradient-to-r from-orange-500 to-red-500",
      "Classic": "bg-gradient-to-r from-gray-600 to-gray-700",
      "Fresh": "bg-gradient-to-r from-green-400 to-lime-500",
      "Artisan": "bg-gradient-to-r from-purple-600 to-pink-600",
      "Healthy": "bg-gradient-to-r from-green-600 to-teal-500",
      "Traditional": "bg-gradient-to-r from-amber-700 to-orange-600",
      "Signature": "bg-gradient-to-r from-indigo-500 to-purple-600",
      "Authentic": "bg-gradient-to-r from-yellow-600 to-amber-600",
      "Seasonal": "bg-gradient-to-r from-orange-400 to-red-400",
      "Gourmet": "bg-gradient-to-r from-purple-700 to-indigo-700",
      "Luxury": "bg-gradient-to-r from-yellow-500 to-amber-500",
      "Professional": "bg-gradient-to-r from-gray-700 to-slate-700",
      "Specialty": "bg-gradient-to-r from-teal-500 to-cyan-600",
      "Bridal": "bg-gradient-to-r from-pink-400 to-rose-400",
      "Elegant": "bg-gradient-to-r from-indigo-400 to-purple-500",
    };
    return colors[badge] || "bg-gradient-to-r from-gray-400 to-gray-500";
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-background/90 to-background/70" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <ShoppingBag className="h-16 w-16 text-primary mx-auto mb-6" />
            <h1 className="font-playfair text-5xl md:text-6xl font-bold text-foreground mb-6">
              Order Happiness, Freshly Baked
            </h1>
            <p className="font-inter text-lg text-muted-foreground max-w-2xl mx-auto">
              Discover our complete collection of premium cakes, artisanal pastries, 
              and gourmet treats. Each item is crafted with love and baked to perfection.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Category Tabs */}
      <section className="py-8 bg-background border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back Button */}
          {activeSubcategory && (
            <div className="mb-6">
              <Button
                onClick={() => setActiveSubcategory("")}
                variant="outline"
                className="flex items-center gap-2 font-inter"
              >
                <ChevronLeft className="h-4 w-4" />
                Back to {categories.find(c => c.id === activeCategory)?.name}
              </Button>
            </div>
          )}
          
          {/* Main Categories */}
          {!activeSubcategory && (
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category) => (
                <Button
                  key={category.id}
                  onClick={() => {
                    if (category.id === "all") {
                      setActiveCategory("all");
                    } else {
                      setActiveCategory(category.id);
                      setActiveSubcategory("");
                    }
                    setShowAllProducts(false);
                  }}
                  variant={activeCategory === category.id ? "default" : "outline"}
                  className={`px-6 py-3 rounded-full font-inter font-medium transition-all duration-300 ${
                    activeCategory === category.id
                      ? "bg-primary text-primary-foreground shadow-golden"
                      : "hover:bg-primary/10 hover:text-primary"
                  }`}
                >
                  {category.name}
                </Button>
              ))}
            </div>
          )}

          {/* Subcategories */}
          {activeCategory !== "all" && !activeSubcategory && subcategories[activeCategory] && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mt-8"
            >
              <h3 className="font-playfair text-2xl font-bold text-center mb-6">
                Choose from {categories.find(c => c.id === activeCategory)?.name}
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {subcategories[activeCategory].map((subcategory) => (
                  <Button
                    key={subcategory}
                    onClick={() => {
                      setActiveSubcategory(subcategory);
                      setShowAllProducts(false);
                    }}
                    variant="outline"
                    className="p-4 h-auto flex-col gap-2 hover:bg-primary/10 hover:text-primary transition-all duration-300"
                  >
                    <span className="font-inter font-medium text-sm text-center">{subcategory}</span>
                  </Button>
                ))}
              </div>
            </motion.div>
          )}

          {/* Selected Subcategory Header */}
          {activeSubcategory && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center"
            >
              <h3 className="font-playfair text-2xl font-bold">
                {activeSubcategory}
              </h3>
            </motion.div>
          )}
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Products Count Info */}
          <div className="text-center mb-8">
            <p className="font-inter text-muted-foreground">
              Showing {displayedProducts.length} of {filteredProducts.length} products
            </p>
          </div>

          <motion.div
            key={`${activeCategory}-${showAllProducts}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {displayedProducts.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 hover:border-gray-200 hover:-translate-y-2"
              >
                {/* Gradient Border Effect */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/20 via-transparent to-amber-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                
                {/* Product Image Container */}
                <div className="relative aspect-square overflow-hidden rounded-3xl rounded-b-none bg-gradient-to-br from-gray-50 to-gray-100">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    loading="lazy"
                  />
                  
                  {/* Image Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Top Left Badges Row */}
                  <div className="absolute top-4 left-4 flex items-center gap-2 flex-wrap max-w-[calc(100%-8rem)]">
                    {/* Discount Badge */}
                    {product.discount && (
                      <div className="bg-gradient-to-r from-red-500 to-pink-500 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg">
                        {product.discount}% OFF
                      </div>
                    )}
                    
                    {/* Category Badge */}
                    {product.badge && (
                      <div className={`${getBadgeColor(product.badge)} text-white text-xs font-semibold px-3 py-1.5 rounded-full shadow-lg backdrop-blur-sm`}>
                        {product.badge}
                      </div>
                    )}
                  </div>
                  
                  {/* Top Right - NEW Badge */}
                  {product.isNew && (
                    <div className="absolute top-4 right-4 bg-gradient-to-r from-green-500 to-emerald-500 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg">
                      NEW
                    </div>
                  )}
                  
                  {/* Center Quick Actions */}
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 flex gap-3">
                    <button className="bg-white/95 backdrop-blur-sm rounded-full p-3 shadow-xl hover:bg-white hover:scale-110 transition-all duration-200">
                      <Eye className="h-5 w-5 text-gray-700" />
                    </button>
                    <button className="bg-white/95 backdrop-blur-sm rounded-full p-3 shadow-xl hover:bg-white hover:scale-110 transition-all duration-200">
                      <Plus className="h-5 w-5 text-gray-700" />
                    </button>
                  </div>
                  
                  {/* Bottom Right - Favorite Button */}
                  <button
                    onClick={() => toggleFavorite(product.id)}
                    className="absolute bottom-4 right-4 w-12 h-12 bg-white/95 backdrop-blur-sm rounded-full flex items-center justify-center shadow-xl hover:bg-white hover:scale-110 transition-all duration-300"
                  >
                    <Heart 
                      className={`h-6 w-6 transition-all duration-300 ${
                        favorites.includes(product.id) 
                          ? 'text-red-500 fill-red-500 animate-pulse' 
                          : 'text-gray-400 hover:text-red-500'
                      }`} 
                    />
                  </button>
                </div>

                {/* Product Info */}
                <div className="p-6 space-y-4 relative z-10">
                  <div className="space-y-2">
                    <h3 className="font-playfair text-xl font-bold text-gray-800 group-hover:text-primary transition-colors duration-300 line-clamp-1">
                      {product.name}
                    </h3>
                    <p className="font-inter text-sm text-gray-600 line-clamp-2 leading-relaxed">
                      {product.description}
                    </p>
                  </div>

                  {/* Rating and Reviews */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1">
                      <div className="flex items-center">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <Star
                            key={star}
                            className={`h-4 w-4 ${
                              star <= Math.floor(product.rating)
                                ? 'fill-yellow-400 text-yellow-400'
                                : 'text-gray-300'
                            }`}
                          />
                        ))}
                      </div>
                      <span className="font-semibold text-sm text-gray-700 ml-1">{product.rating}</span>
                    </div>
                    <span className="text-xs text-gray-500">({product.reviews} reviews)</span>
                  </div>

                  {/* Price Section */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="font-playfair text-2xl font-bold bg-gradient-to-r from-primary to-amber-500 bg-clip-text text-transparent">
                        {product.price}
                      </span>
                      {product.originalPrice && (
                        <span className="text-sm text-gray-500 line-through">
                          {product.originalPrice}
                        </span>
                      )}
                    </div>
                    {product.discount && (
                      <div className="bg-green-100 text-green-700 text-xs font-semibold px-2 py-1 rounded-full">
                        Save ${(parseFloat(product.originalPrice.slice(1)) - parseFloat(product.price.slice(1))).toFixed(0)}
                      </div>
                    )}
                  </div>

                  {/* Order Buttons */}
                  <div className="flex gap-3 pt-2">
                    <Button
                      onClick={() => handleWhatsAppOrder(product.name, product.price)}
                      className="flex-1 bg-gradient-to-r from-primary to-amber-500 text-white py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2 hover:from-amber-500 hover:to-primary"
                    >
                      <MessageCircle className="h-4 w-4" />
                      WhatsApp
                    </Button>
                    <Button
                      onClick={handleCallOrder}
                      variant="outline"
                      className="flex-1 font-inter text-sm rounded-xl border-2 border-gray-200 hover:border-primary hover:bg-gradient-to-r hover:from-primary/10 hover:to-amber-50 hover:text-primary transition-all duration-300 hover:scale-105"
                    >
                      <Phone className="h-4 w-4" />
                      Call
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Show All Products Button */}
          {filteredProducts.length > 9 && !showAllProducts && (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-center mt-12"
            >
              <Button
                onClick={() => setShowAllProducts(true)}
                className="bg-gradient-to-r from-primary to-amber-500 text-white px-8 py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                Show All {filteredProducts.length} Products
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </motion.div>
          )}

          {/* Show Less Button */}
          {showAllProducts && filteredProducts.length > 9 && (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center mt-12"
            >
              <Button
                onClick={() => setShowAllProducts(false)}
                variant="outline"
                className="px-8 py-4 rounded-xl font-semibold border-2 hover:bg-primary hover:text-primary-foreground transition-all duration-300"
              >
                Show Less Products
                <ChevronLeft className="ml-2 h-5 w-5 rotate-90" />
              </Button>
            </motion.div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Shop;
