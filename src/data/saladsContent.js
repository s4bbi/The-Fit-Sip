// src/data/shotsContent.js

// Import shot images (replace with actual filenames in your assets folder)
// import saladbowl1 from "../assets/Images/saladbowl1.png";
// import saladbowl2 from "../assets/Images/saladbowl2.png";
// import saladbowl3 from "../assets/Images/saladbowl3.png";

// Replace with your WhatsApp number
const whatsappBase = "https://wa.me/9036024955?text=";

const shotsContent = [
  {
    id: 1,
    title: "GREEN FALAFEL CRUNCH",
    ingredients: "Falafel, cucumber, bell peppers...",
    calories: "Calories (Approx.) 480",
    price: "₹159",
    image: "https://res.cloudinary.com/dsxgs3tct/image/upload/v1758474799/saladbowl1_nkza1c.png",
    link: `${whatsappBase}Hi, I would like to order GREEN FALAFEL CRUNCH shot.`,
  },
  {
    id: 2,
    title: "THE SPROUT HARVEST",
    ingredients: "Sprouts, tomatoes, capsicum...",
    calories: "Calories (Approx.) 170",
    price: "₹149",
    image: "https://res.cloudinary.com/dsxgs3tct/image/upload/v1758474806/saladbowl2_dqb9oh.png",
    link: `${whatsappBase}Hi, I would like to order THE SPROUT HARVEST shot.`,
  },
  {
    id: 3,
    title: "PROTIEN MEX BOWL",
    ingredients: "Hearty mix of rajma, chickpeas, corn...",
    calories: "Calories (Approx.) 170",
    price: "₹169",
    image: "https://res.cloudinary.com/dsxgs3tct/image/upload/v1758474799/saladbowl3_rzbk7b.png",
    link: `${whatsappBase}Hi, I would like to order PROTIEN MEX BOWL shot.`,
  },
];

export default shotsContent;
