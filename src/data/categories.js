import { categoryHeroImages } from "./images";

const categories = [
  {
    id: "entertainment",
    name: "Entertainment",
    description: "OLED TVs, projectors, sound systems, and streaming devices for the ultimate home theater experience.",
    image: categoryHeroImages.entertainment,
    productCount: 8,
    subcategories: ["OLED TVs", "QLED TVs", "Projectors", "Streaming Devices", "Home Theater Systems", "Soundbars"],
  },
  {
    id: "smart-home",
    name: "Smart Home",
    description: "Intelligent lighting, security cameras, thermostats, and smart hubs to automate your living space.",
    image: categoryHeroImages["smart-home"],
    productCount: 8,
    subcategories: ["Smart Speakers", "Security Cameras", "Smart Lighting", "Smart Doorbells", "Smart Thermostats", "Smart Plugs"],
  },
  {
    id: "kitchen-appliances",
    name: "Kitchen Appliances",
    description: "Premium refrigerators, ovens, cooktops, and specialty appliances for the modern kitchen.",
    image: categoryHeroImages["kitchen-appliances"],
    productCount: 8,
    subcategories: ["Refrigerators", "Microwaves", "Blenders", "Coffee Machines", "Air Fryers", "Electric Kettles"],
  },
  {
    id: "home-comfort",
    name: "Home Comfort",
    description: "Air purifiers, humidifiers, heating solutions, and climate control for year-round comfort.",
    image: categoryHeroImages["home-comfort"],
    productCount: 8,
    subcategories: ["Air Conditioners", "Fans", "Heaters", "Vacuum Cleaners", "Air Purifiers", "Humidifiers"],
  },
  {
    id: "computers-components",
    name: "Computers & Components",
    description: "High-performance laptops, desktops, monitors, and PC components for work and play.",
    image: categoryHeroImages["computers-components"],
    productCount: 12,
    subcategories: ["Laptops", "Desktop PCs", "Motherboards", "RAM", "Graphics Cards", "Power Supplies", "SSDs", "HDDs", "Cooling Systems", "Gaming Peripherals"],
  },
  {
    id: "phone-accessories",
    name: "Phone Accessories",
    description: "Premium charging solutions, cases, audio accessories, and mobile productivity tools.",
    image: categoryHeroImages["phone-accessories"],
    productCount: 8,
    subcategories: ["Phone Cases", "Chargers", "Charging Cables", "Power Banks", "Earphones", "Bluetooth Earbuds", "Phone Holders", "Wireless Chargers"],
  },
];

export default categories;
