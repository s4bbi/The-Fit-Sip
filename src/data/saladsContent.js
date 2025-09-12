// src/data/shotsContent.js

// Import shot images (replace with actual filenames in your assets folder)
import saladbowl1 from "../assets/Images/saladbowl1.jpg";
import saladbowl2 from "../assets/Images/saladbowl2.jpg";

// Replace with your WhatsApp number
const whatsappBase = "https://wa.me/919876543210?text=";

const shotsContent = [
  {
    id: 1,
    title: "GREEN FALAFEL CRUNCH",
    ingredients: "Falafel, cucumber, bell peppers...",
    calories: "Calories (Approx.) 480",
    price: "₹149",
    image: saladbowl1,
    link: `${whatsappBase}Hi, I would like to order GREEN FALAFEL CRUNCH shot.`,
  },
  {
    id: 1,
    title: "THE SPROUT HARVEST",
    ingredients: "Sprouts, tomatoes, capsicum...",
    calories: "Calories (Approx.) 170",
    price: "₹129",
    image: saladbowl2,
    link: `${whatsappBase}Hi, I would like to order THE SPROUT HARVEST shot.`,
  },
];

export default shotsContent;
