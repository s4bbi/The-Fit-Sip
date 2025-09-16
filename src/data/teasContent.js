// src/data/juicesContent.js

// Import juice images
import tea1 from "../assets/Images/tea1.png";
import tea2 from "../assets/Images/tea2.png";

// Replace with your WhatsApp number
const whatsappBase = "https://wa.me/9036024955?text=";

const juicesContent = [
  {
    id: 1,
    title: "POMEGRANATE GREEN TEA",
    ingredients: "Green Tea, Pomegranate, Apple, Mint, Basil",
    calories: "",
    price: "₹79",
    image: tea1,
    link: `${whatsappBase}Hi, I would like to order POMEGRANATE GREEN TEA.`,
  },
  {
    id: 2,
    title: "ZESTY LEMON GREEN TEA",
    ingredients: "Green Tea, Lemon, Apple, Mint, Basil",
    calories: "",
    price: "₹79",
    image: tea2,
    link: `${whatsappBase}Hi, I would like to order ZESTY LEMON GREEN TEA.`,
  },

];

export default juicesContent;
