import React from "react";

import MeetupsItem from "./MeetupsItem";
import classes from "./MeetupsList.module.css";

const MeetupsList = ({ meetups }) => {

  return (
    <ul className={classes.list}>
      {meetups.map((each) => (
        <MeetupsItem key={each.id} meetup={each} />
      ))}
    </ul>
  );
};

export default MeetupsList;
