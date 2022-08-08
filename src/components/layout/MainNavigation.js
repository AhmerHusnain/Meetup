import { Link } from "react-router-dom";
import classes from "./MainNavigation.module.css";
import { useContext } from "react";
import FavouriteContext from "../../pages/store/favourite_context";
function MainNavigation() {
  const favCtx = useContext(FavouriteContext);
  return (
    <header className={classes.header}>
      <div className={classes.logo}> React Meetups </div>
      <nav>
        <ul>
          <li>
            <Link to="/"> All meetup</Link>
          </li>
          <li>
            <Link to="/new-meet-up"> New Meetup</Link>
          </li>
          <li>
            <Link to="/favourite">
              {" "}
              Favourites
              <span className={classes.badge}>{favCtx.totalFav}</span>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
