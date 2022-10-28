import React from "react";

import classes from "./MeetupsItem.module.css";

const MeetupsItem = ({ meetup }) => {
  return (
    <li className={classes.item}>
      <div className={classes.image}>
        <img src={meetup.image} alt={meetup.title} />
      </div>
      <div className={classes.content}>
        <h3>{meetup.title}</h3>
        <address>{meetup.address}</address>
        <p>{meetup.description}</p>
      </div>
      <div className={classes.actions}>
        <button>TO FAVORITES</button>
      </div>
    </li>
  );
};

export default MeetupsItem;
