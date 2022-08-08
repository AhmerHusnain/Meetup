import c from "./card.module.css";
function Card(props) {
  return <div className={c.card}>{props.children}</div>;
}

export default Card;
