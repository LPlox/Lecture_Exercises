import plus from "../assets/images/plus.png";
import "../styles/section-title.css";

const icons = {
  plus: plus,
};

export default function SectionTitle({ title, icon }) {
  return (
    <div className="section-title">
      <h2 className="title">{title}</h2>
      {icons[icon] && (
        <div>
          <img className="icon" src={icons[icon]} alt="logo" />
        </div>
      )}
    </div>
  );
}
