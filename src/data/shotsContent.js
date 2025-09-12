// src/data/shotsContent.js

// Import shot images (replace with actual filenames in your assets folder)
import gingerTurmeric from "../assets/Images/juicenshots/ging-turm.jpg";
import amlaTulsi from "../assets/Images/juicenshots/amla.jpg";
import beetrootAshwag from "../assets/Images/juicenshots/beetroot.jpg";
import greenShot from "../assets/Images/juicenshots/green-shot.jpg";

// Replace with your WhatsApp number
const whatsappBase = "https://wa.me/919876543210?text=";

const shotsContent = [
  {
    id: 1,
    title: "GINGER TURMERIC",
    ingredients: "Turmeric, Ginger, Mint, Amla",
    calories: "Calories (Approx.) 10-15",
    price: "₹69",
    image: gingerTurmeric,
    link: `${whatsappBase}Hi, I would like to order GINGER TURMERIC shot.`,
  },
  {
    id: 2,
    title: "AMLA TULSI",
    ingredients: "Amla, Tulsi, Mint",
    calories: "Calories (Approx.) 10-15",
    price: "₹69",
    image: amlaTulsi,
    link: `${whatsappBase}Hi, I would like to order AMLA TULSI shot.`,
  },
  {
    id: 3,
    title: "BEETROOT ASHWAG.",
    ingredients: "Beetroot, Ashwagandha, Mint, Amla",
    calories: "Calories (Approx.) 10-15",
    price: "₹69",
    image: beetrootAshwag,
    link: `${whatsappBase}Hi, I would like to order BEETROOT ASHWAGANDHA shot.`,
  },
  {
    id: 4,
    title: "THE GREEN SHOT",
    ingredients: "Celery, Spinach, Cucumber, Amla...",
    calories: "Calories (Approx.) 30",
    price: "₹69",
    image: greenShot,
    link: `${whatsappBase}Hi, I would like to order THE GREEN SHOT.`,
  },
];

export default shotsContent;
