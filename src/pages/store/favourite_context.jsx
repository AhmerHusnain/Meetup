import { useState, createContext } from "react";

const FavouriteContext = createContext({
  fav: [],
  totalFav: 0,
  addFav: (favMeetup) => {},
  removeFav: (meetupId) => {},
  isFav: (meetupId) => {},
});

export function FavouriteContentProvider(props) {
  const [userFav, setUserFav] = useState([]);
  function addFavHandler(favMeetup) {
    setUserFav((prevUserFav) => {
      return prevUserFav.concat(favMeetup);
    });
  }
  function removeFavHandler(meetupId) {
    setUserFav((prevUserFav) => {
      return prevUserFav.filter((meetup) => meetup.id !== meetupId);
    });
  }
  function itemIsFavHandler(meetupId) {
    return userFav.some((meetup) => meetup.id === meetupId);
  }

  const context = {
    fav: userFav,
    totalFav: userFav.length,
    addFav: addFavHandler,
    removeFav: removeFavHandler,
    isFav: itemIsFavHandler,
  };

  return (
    <FavouriteContext.Provider value={context}>
      {props.children}
    </FavouriteContext.Provider>
  );
}

export default FavouriteContext;
