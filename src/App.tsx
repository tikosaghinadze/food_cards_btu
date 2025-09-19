import FoodCard from "./components/FoodCard";
import PizzaImg from "../src/images/Pizza.svg";
import PastaImg from "../src/images/pasta.svg";
import CakeImg from "../src/images/cake.svg";
import fireIcon from "../src/images/fireIcon.svg";
import leafIcon from "../src/images/leafIcon.svg";
import wheatIcon from "./images/wheatIcon.svg";
import { menu } from "./data/menuData";

// აიქონები თითოეული ქარდისთვის
const pizzaIcons = [
  { img: fireIcon, background: "red" },
  { img: wheatIcon, background: "orange" },
];

const pastaIcons = [
  { img: leafIcon, background: "green" },
  { img: fireIcon, background: "red" },
  { img: wheatIcon, background: "orange" },
];

const cakeIcons = [{ img: wheatIcon, background: "orange" }];

function App() {
  return (
    <div className="w-full min-h-screen flex justify-center items-center bg-[#D8D8D8] gap-10">
      <FoodCard {...menu.pizza} img={PizzaImg} icons={pizzaIcons} />
      <FoodCard {...menu.pasta} img={PastaImg} icons={pastaIcons} />
      <FoodCard {...menu.cake} img={CakeImg} icons={cakeIcons} />
    </div>
  );
}

export default App;
