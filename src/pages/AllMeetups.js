import React from "react";
import MeetupList from "../components/Meetup/MeetupList";
import { useState ,useEffect} from "react";


function AllMeetupPage() {
  const [isLoading,setIsLoading] = useState(true);
  const [LoadMeetups, setLoadMeetups] = useState({});
  
  useEffect(() => {

    setIsLoading(true);
    fetch('https://test-b9ef0-default-rtdb.firebaseio.com/meetups.json').then((response) => {
      return response.json();
    })
    .then((data) => {
      const meetups = [];
      for(const key in data){
        const meetup = {id: key,
        ...data[key]}
      
      meetups.push(meetup)};
      setIsLoading(false);
      setLoadMeetups(meetups)
    })
  }, [])

  if(isLoading){
    return(<p>is loading...</p>)
  }
  return (
    <div>
      <h1> All Meetup Page</h1>
      <MeetupList meetups={LoadMeetups} />
    </div>
  );
}

export default AllMeetupPage;
