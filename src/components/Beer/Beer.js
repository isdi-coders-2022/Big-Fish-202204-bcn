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

const Beer = ({
  beer,
  beer: { name, id, userBeer, tagline, image_url, favourite },
}) => {
  const { dispatch } = useContext(BeerContext);
  const { deleteBeer, addBeer } = useApiMyBeers();

  return (
    <>
      <div className="beer-info">
        <div className="beer-info__top">
          <div className="name-container">
            <h2 className="beer-info__top__name">{name}</h2>
          </div>
          {userBeer ? (
            <Button>
              <FontAwesomeIcon icon={faPenToSquare} />
            </Button>
          ) : (
            ""
          )}
        </div>
        <p className="tagline">{tagline}</p>
      </div>
      <img
        src={image_url}
        alt={name}
        className="beer-img"
        width={38.31}
        height={135}
      />
      <div className="right-buttons-container">
        <Button
          onClick={() => {
            if (!favourite) {
              addBeer(beer);
            }
            dispatch(toggleFavouriteActionCreator(id));
          }}
        >
          <FontAwesomeIcon icon={favourite ? faHeartS : faHeartR} />
        </Button>
        <Button
          onClick={() => {
            deleteBeer(id);
            dispatch(deleteBeerActionCreator(id));
          }}
        >
          <FontAwesomeIcon icon={faCircleXmark} />
        </Button>
      </div>
    </>
  );
};
export default Beer;
