import { useRef } from "react";
import Card from "../ui/card";
import c from "./NewmeetupForms.module.css";

export default function NewMeetupForms(props) {
  const titleInputRef = useRef();
  const imageInputRef = useRef();
  const addressInputRef = useRef();
  const descriptionInputRef = useRef();

  function submitHandler(event) {
    event.preventDefault();
    const enteredTitle = titleInputRef.current.value;
    const enteredimage = imageInputRef.current.value;
    const enteredaddress = addressInputRef.current.value;
    const entereddescription = descriptionInputRef.current.value;

    const meetupData = {
      title: enteredTitle,
      image: enteredimage,
      address: enteredaddress,
      description: entereddescription,
    };
    props.onAddMeetup(meetupData);
  }

  return (
    <Card>
      <form className={c.form} onSubmit={submitHandler}>
        <div className={c.control}>
          <label htmlFor="title">Meetup Title</label>
          <input type="text" required id="title" ref={titleInputRef} />
        </div>
        <div className={c.control}>
          <label htmlFor="image">Image</label>
          <input type="url" required id="image" ref={imageInputRef} />
        </div>
        <div className={c.control}>
          <label htmlFor="address">Address</label>
          <input type="text" required id="address" ref={addressInputRef} />
        </div>
        <div className={c.control}>
          <label htmlFor="description">Description</label>
          <textarea
            required
            id="description"
            rows="5"
            ref={descriptionInputRef}
          />
        </div>
        <div className={c.action}>
          <button>Add Meetup</button>
        </div>
      </form>
    </Card>
  );
}
