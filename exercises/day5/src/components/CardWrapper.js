import Card from "./Card";
import SectionTitle from "./SectionTitle";

import "../styles/card-wrapper.css";

export default function CardWrapper({ items }) {
  return (
    <div className="wrapper">
      <SectionTitle title="Goals" icon="plus" />
      <div className="card-wrapper">
        {items.map((item, index) => (
          <Card
            key={index}
            info={item.info}
            price={item.price}
            date={item.date}
            icon={item.icon}
          />
        ))}
      </div>
    </div>
  );
}
