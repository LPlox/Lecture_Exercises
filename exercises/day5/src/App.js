import "./App.css";
import CardWrapper from "./components/CardWrapper";

const items = [
  {
    info: "Holiday",
    price: "$550",
    date: "12/20/20",
    icon: "mountain",
  },
  {
    info: "Renovation",
    price: "$200",
    date: "12/20/20",
    icon: "brush",
  },
  {
    info: "Xbox",
    price: "$820",
    date: "12/20/20",
    icon: "xbox",
  },
  {
    info: "Dounts",
    price: "$100",
    date: "12/25/20",
    icon: "",
  },
];

function App() {
  return (
    <div className="app">
      <CardWrapper items={items} />
    </div>
  );
}

export default App;
