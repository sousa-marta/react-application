import classes from './MeetupsItem.module.css';
import Card from '../ui/Card';

const MeetupsItem = ({ meetup }) => {
  return (
    <li className={classes.item}>
      <Card>
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
      </Card>
    </li>
  );
};

export default MeetupsItem;
