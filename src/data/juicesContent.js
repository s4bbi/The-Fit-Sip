// src/data/juicesContent.js

// Import juice images
import abcJuice from "../assets/Images/juicenshots/abc.webp";
import carrotSwings from "../assets/Images/juicenshots/carrot.webp";
import greenJuice from "../assets/Images/juicenshots/green.webp";
import ashgourdAmla from "../assets/Images/juicenshots/ash.webp";
import metabolismBooster from "../assets/Images/juicenshots/metabolism.webp";
import hydratingBooster from "../assets/Images/juicenshots/hydrating.webp";
import pineappleCucumb from "../assets/Images/juicenshots/pineapple.webp";
import baelMint from "../assets/Images/juicenshots/bael.webp";
import karelaSip from "../assets/Images/juicenshots/karela.webp";
import detoxH2o from "../assets/Images/juicenshots/detox.webp";
import cucumberAmla from "../assets/Images/juicenshots/cucumb-amla.webp";
import ashgKarelaAmla from "../assets/Images/juicenshots/ash-karela.webp";

// Replace with your WhatsApp number
const whatsappBase = "https://wa.me/919876543210?text=";

const juicesContent = [
  {
    id: 1,
    title: "ABC JUICE",
    ingredients: "Apple, Beetroot, Carrot, Mint, Amla",
    calories: "Calories (Approx.) 100",
    price: "₹89",
    image: abcJuice,
    link: `${whatsappBase}Hi, I would like to order ABC JUICE.`,
  },
  {
    id: 2,
    title: "CARROT SWINGS SIP",
    ingredients: "Carrot, Beetroot, Amla, Mint",
    calories: "Calories (Approx.) 85",
    price: "₹79",
    image: carrotSwings,
    link: `${whatsappBase}Hi, I would like to order CARROT SWINGS SIP.`,
  },
  {
    id: 3,
    title: "THE GREEN JUICE",
    ingredients: "Celery, Kale, Mint, Spinach, Amla...",
    calories: "Calories (Approx.) 80",
    price: "₹79",
    image: greenJuice,
    link: `${whatsappBase}Hi, I would like to order THE GREEN JUICE.`,
  },
  {
    id: 4,
    title: "ASH GOURD & AMLA SIP",
    ingredients: "Ash Gourd, Amla, Ginger, Mint",
    calories: "Calories (Approx.) 30",
    price: "₹79",
    image: ashgourdAmla,
    link: `${whatsappBase}Hi, I would like to order ASH GOURD & AMLA SIP.`,
  },
  {
    id: 5,
    title: "METABOLISM BOOSTER",
    ingredients: "Pomegranate, Beetroot, Mint",
    calories: "Calories (Approx.) 80",
    price: "₹99",
    image: metabolismBooster,
    link: `${whatsappBase}Hi, I would like to order METABOLISM BOOSTER.`,
  },
  {
    id: 6,
    title: "HYDRATING BOOSTER",
    ingredients: "Celery, Kale, Mint, Spinach, Amla...",
    calories: "Calories (Approx.) 80",
    price: "₹79",
    image: hydratingBooster,
    link: `${whatsappBase}Hi, I would like to order HYDRATING BOOSTER.`,
  },
  {
    id: 7,
    title: "PINEAPPLE CUCUMB SIP",
    ingredients: "Pineapple, Cucumber, Ginger, Mint",
    calories: "Calories (Approx.) 80",
    price: "₹79",
    image: pineappleCucumb,
    link: `${whatsappBase}Hi, I would like to order PINEAPPLE CUCUMB SIP.`,
  },
  {
    id: 8,
    title: "BAEL & MINT JUICE",
    ingredients: "Bael, Mint, Ginger, Apple",
    calories: "Calories (Approx.) 80",
    price: "₹79",
    image: baelMint,
    link: `${whatsappBase}Hi, I would like to order BAEL & MINT JUICE.`,
  },
  {
    id: 9,
    title: "KARELA SIP",
    ingredients: "Karela, Cucumber, Ginger, Mint",
    calories: "Calories (Approx.) 30",
    price: "₹79",
    image: karelaSip,
    link: `${whatsappBase}Hi, I would like to order KARELA SIP.`,
  },
  {
    id: 10,
    title: "DETOX H20",
    ingredients: "Beetroot, Cucumber, Pineapple...",
    calories: "Calories (Approx.) 10",
    price: "₹69",
    image: detoxH2o,
    link: `${whatsappBase}Hi, I would like to order DETOX H20.`,
  },
  {
    id: 11,
    title: "CUCUMBER AMLA MINT",
    ingredients: "Amla, Cucumber, Ginger, Mint",
    calories: "Calories (Approx.) 40",
    price: "₹79",
    image: cucumberAmla,
    link: `${whatsappBase}Hi, I would like to order CUCUMBER AMLA MINT.`,
  },
  {
    id: 12,
    title: "ASH G. KARELA & AMLA",
    ingredients: "Ash Gourd, Beetroot, Karela, Amla",
    calories: "Calories (Approx.) 30",
    price: "₹79",
    image: ashgKarelaAmla,
    link: `${whatsappBase}Hi, I would like to order ASH G. KARELA & AMLA.`,
  },
];

export default juicesContent;
