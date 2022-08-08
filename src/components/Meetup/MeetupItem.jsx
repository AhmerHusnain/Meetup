import classes from "./MeetupItem.module.css";
import Card from "../ui/card";
import { useContext } from "react";
import FavouriteContext from "../../pages/store/favourite_context";
function MeetupItem(props) {
  const favCxt = useContext(FavouriteContext);
  const isFav = favCxt.isFav(props.id);
  function toggleFav() {
    if (isFav) {
      favCxt.removeFav(props.id);
    } else {
      favCxt.addFav({
        id: props.id,
        title: props.title,
        description: props.description,
        image: props.image,
        address: props.address,
      });
    }
  }

  return (
    <li className={classes.item}>
      <Card>
        <div className={classes.image}>
          <img src={props.img} alt={props.img} />
        </div>
        <div className={classes.content}>
          <h3>{props.title}</h3>
          <address>{props.address}</address>
          <p>{props.Description}</p>
        </div>
        <div className={classes.actions}>
          <button onClick={toggleFav}>
            {isFav ? "Remove from Favourite" : "Add to Favourite"}
          </button>
        </div>
      </Card>
    </li>
  );
}

export default MeetupItem;
