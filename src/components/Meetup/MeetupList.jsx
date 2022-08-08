import c from "./MeetupList.module.css";
import MeetupItem from "./MeetupItem";
function MeetupList(props) {
  return (
    <ul className={c.list}>
      {props.meetups.map((obj) => (
        <MeetupItem
          key={obj.id}
          id={obj.id}
          img={obj.image}
          title={obj.title}
          address={obj.address}
          description={obj.Description}
        />
      ))}
    </ul>
  );
}

export default MeetupList;
