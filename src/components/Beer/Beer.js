import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faPenToSquare,
  faHeart as faHeartR,
  faCircleXmark,
} from "@fortawesome/free-regular-svg-icons";
import { faHeart as faHeartS } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button from "../Button/Button";
import {
  deleteBeerActionCreator,
  toggleFavouriteActionCreator,
} from "../../store/actions/ActionCreators/actionCreators";
import { useContext } from "react";
import BeerContext from "../../store/context/BeerContext";
import useApiMyBeers from "../../hooks/useApiMyBeers";
library.add(faHeartS, faHeartR);

const Beer = (beer) => {
  const { dispatch } = useContext(BeerContext);
  const { deleteBeer, addBeer } = useApiMyBeers();

  return (
    <>
      <div className="beer-info">
        <div className="beer-info__top">
          <div className="name-container">
            <h2 className="beer-info__top__name">{beer.name}</h2>
          </div>
          {beer.userBeer ? (
            <Button>
              <FontAwesomeIcon icon={faPenToSquare} />
            </Button>
          ) : (
            ""
          )}
        </div>
        <p className="tagline">{beer.tagline}</p>
      </div>
      <img src={beer.image_url} alt={beer.name} className="beer-img" />
      <div className="right-buttons-container">
        <Button
          onClick={() => {
            if (!beer.favourite) {
              addBeer(beer);
            }
            dispatch(toggleFavouriteActionCreator(beer.id));
          }}
        >
          <FontAwesomeIcon icon={beer.favourite ? faHeartS : faHeartR} />
        </Button>
        <Button
          onClick={() => {
            deleteBeer(beer.id);
            dispatch(deleteBeerActionCreator(beer.id));
          }}
        >
          <FontAwesomeIcon icon={faCircleXmark} />
        </Button>
      </div>
    </>
  );
};
export default Beer;
