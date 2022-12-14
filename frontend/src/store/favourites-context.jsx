import { createContext, useState } from 'react';

const FavouritesContext = createContext({
  favourites: [],
  totalFavourites: 0
});

export function FavouritesContextProvider(props) {
  const [userFavourites, setUserFavourites] = useState([]);
  const {children} = props;

  function addFavouriteHandler(favouriteMeetup) {
    setUserFavourites((prevUserFavourites) => prevUserFavourites.concat(favouriteMeetup));
  }

  function removeFavouriteHandler(meetupId) {
    setUserFavourites((prevUserFavourites) => prevUserFavourites.filter((meetup) => meetup.id !== meetupId));
  }

  function itemIsFavouriteHandler(meetupId) {
    return userFavourites.some((meetup) => meetup.id === meetupId);
  }

  const context = {
    favourites: userFavourites,
    totalFavourites: userFavourites.length,
    addFavourite: addFavouriteHandler,
    removeFavourite: removeFavouriteHandler,
    itemIsFavourite: itemIsFavouriteHandler,
  };

  return <FavouritesContext.Provider value={context}>{children}</FavouritesContext.Provider>;
}

export default FavouritesContext;
