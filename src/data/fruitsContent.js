// src/data/shotsContent.js

// Import shot images (replace with actual filenames in your assets folder)
import fruitbowl from "../assets/Images/fruitbowl.jpg";

// Replace with your WhatsApp number
const whatsappBase = "https://wa.me/919876543210?text=";

const shotsContent = [
  {
    id: 1,
    title: "NATURAL JUICY BOWL",
    ingredients: "Apples, papaya, grapes & more!",
    calories: "Calories (Approx.) 180",
    price: "₹139",
    image: fruitbowl,
    link: `${whatsappBase}Hi, I would like to order NATURAL JUICY BOWL shot.`,
  },
];

export default shotsContent;
