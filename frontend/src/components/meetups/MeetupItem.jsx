import { useContext } from 'react';
import classes from './MeetupItem.module.css';
import Card from '../ui/Card';
import FavouritesContext from '../../store/favourites-context';

function MeetupItem(props) {
  const { id, title, description, image, address, reload } = props;
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

  function deleteMeetupHandler() {
    fetch('/api/v1/meetup', {
      method: 'DELETE',
      body: JSON.stringify({ id }),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(async (res) => {
        if (!res.ok) {
          return Promise.reject();
        }
        setTimeout(() => {
          reload();
        }, 1000);
        return Promise.resolve();
      })
      .catch(() => {
        // An error has occurred. Tell the user
      });
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
          <button type='button' onClick={toggleFavouriteStatusHandler}>
            {itemIsFavourite ? 'Remove from Favourites' : 'To Favourites'}
          </button>

          <button type='button' onClick={deleteMeetupHandler}>
            Delete
          </button>
        </div>
      </Card>
    </li>
  );
}

export default MeetupItem;
