import CardWrapper from "./components/CardWrapper";
import "./App.css";

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
];

function App() {
  return (
    <div className="app">
      <CardWrapper items={items} />
    </div>
  );
}

export default App;
