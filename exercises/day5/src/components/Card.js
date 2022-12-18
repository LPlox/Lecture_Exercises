import mountain from "../assets/images/mountain.png";
import brush from "../assets/images/brush.png";
import xbox from "../assets/images/xbox.png";
import '../styles/card.css'

const icons = {
  mountain: mountain,
  brush: brush,
  xbox: xbox,
};

export default function Card({ info, price, date, icon }) {
  return (
    <div className="card">
      <div>
        <p className="price">{price}</p>
        <p className="date">{date}</p>
      </div>
      <div>
        {icons[icon] ? (
          <img src={icons[icon]} className="icon" alt="logo" />
        ) : (
          <div className="icon"></div>
        )}
        <h3 className="title">{info}</h3>
      </div>
    </div>
  );
}
