import { useContext } from "react";
import MeetupList from "../components/Meetup/MeetupList";
import FavouriteContext from "./store/favourite_context";

function FavouritesPage() {
    const favCtx = useContext(FavouriteContext);
    let content;
    if(favCtx.totalFav === 0){
        content = <p>You have no Favourite</p>
    } else {
        content = <MeetupList meetups = {favCtx.fav}/>
    }
    return ( <section>
        <h1> My Favourite</h1>
        {content}
    </section> );
}

export default FavouritesPage;