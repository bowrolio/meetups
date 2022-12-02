import { useContext } from 'react';
import classes from './MeetupItem.module.css';
import Card from '../ui/Card';
import FavouritesContext from '../../store/favourites-context';

function MeetupItem(props) {
  const { id, title, description, image, address } = props;
  const favouritesCtx = useContext(FavouritesContext);
  const itemIsFavourite = favouritesCtx.itemIsFavourite(id);

  function toggleFavouriteStatusHandler() {
    if (itemIsFavourite) {
      favouritesCtx.removeFavourite(id);
    } else {
      favouritesCtx.addFavourite({
        id,
        title,
        description,
        image,
        address,
      });
    }
  }

  return (
    <li className={classes.item}>
      <Card>
        <div className={classes.image}>
          <img src={image} alt={title} />
        </div>
        <div className={classes.content}>
          <h3>{title}</h3>
          <address>{title}</address>
          <p>{description}</p>
        </div>
        <div className={classes.actions}>
          <button type="button" onClick={toggleFavouriteStatusHandler}>
            {itemIsFavourite ? 'Remove from Favourites' : 'To Favourites'}
          </button>
        </div>
      </Card>
    </li>
  );
}

export default MeetupItem;
