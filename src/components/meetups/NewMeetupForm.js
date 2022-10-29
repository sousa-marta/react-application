import { useRef } from 'react';

import Card from '../ui/Card';
import classes from './NewMeetupForm.module.css';

const NewMeetupForm = ({ onSaveMeetup }) => {
  const titleRef = useRef();
  const imageRef = useRef();
  const addressRef = useRef();
  const descriptionRef = useRef();

  const submit = (event) => {
    event.preventDefault();

    const meetupData = {
      title: titleRef.current.value,
      image: imageRef.current.value,
      address: addressRef.current.value,
      description: descriptionRef.current.value,
    };

    console.log(meetupData);
    onSaveMeetup(meetupData);
  };

  return (
    <Card>
      <form className={classes.form} onSubmit={submit}>
        <div className={classes.control}>
          <label htmlFor="title">Meetup Title</label>
          <input id="title" type="text" required ref={titleRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="image">Meetup Image</label>
          <input id="image" type="url" required ref={imageRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="address">Meetup Address</label>
          <input id="address" type="text" required ref={addressRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="description">Meetup Description</label>
          <textarea
            id="description"
            type="text"
            rows={5}
            required
            ref={descriptionRef}
          />
        </div>
        <div className={classes.actions}>
          <button>Submit</button>
        </div>
      </form>
    </Card>
  );
};

export default NewMeetupForm;
