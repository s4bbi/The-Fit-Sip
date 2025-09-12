// src/data/oatsContent.js

// Import oat jar images (replace filenames with your actual assets)
import mangoDream from "../assets/Images/oatsjar1.jpg";
import exoticFruits from "../assets/Images/oatsjar1.jpg";
import cocoaPeanut from "../assets/Images/oatsjar1.jpg";
import powerCarrot from "../assets/Images/oatsjar1.jpg";

// Replace with your WhatsApp number
const whatsappBase = "https://wa.me/919876543210?text=";

const oatsContent = [
  {
    id: 1,
    title: "MANGO DREAM JAR",
    ingredients: "Oats, Mango, Raisins, Cinnamon...",
    calories: "Calories (Approx.) 340",
    price: "₹149",
    image: mangoDream,
    link: `${whatsappBase}Hi, I would like to order the MANGO DREAM JAR.`,
  },
  {
    id: 2,
    title: "EXOTIC FRUITS JAR",
    ingredients: "Oats, Seasonal Exotic Fruits, Figs...",
    calories: "Calories (Approx.) 340",
    price: "₹159",
    image: exoticFruits,
    link: `${whatsappBase}Hi, I would like to order the EXOTIC FRUITS JAR.`,
  },
  {
    id: 3,
    title: "COCOA PEANUT JAR",
    ingredients: "Oats, Cocoa, Peanut, Dates...",
    calories: "Calories (Approx.) 420",
    price: "₹159",
    image: cocoaPeanut,
    link: `${whatsappBase}Hi, I would like to order the COCOA PEANUT JAR.`,
  },
  {
    id: 4,
    title: "POWER CARROT JAR",
    ingredients: "Oats, Carrot, Nuts, Seeds, Cinnamon...",
    calories: "Calories (Approx.) 370",
    price: "₹149",
    image: powerCarrot,
    link: `${whatsappBase}Hi, I would like to order the POWER CARROT JAR.`,
  },
];

export default oatsContent;
