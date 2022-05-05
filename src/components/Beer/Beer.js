import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faPenToSquare,
  faHeart as faHeartR,
  faCircleXmark,
} from "@fortawesome/free-regular-svg-icons";
import { faHeart as faHeartS } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button from "../Button/Button";
import { deleteBeerActionCreator } from "../../store/actions/ActionCreators/actionCreators";
import { useContext } from "react";
import BeerContext from "../../store/context/BeerContext";
library.add(faHeartS, faHeartR);

const Beer = ({
  id,
  name,
  tagline,
  image_url: imgUrl,
  favourite,
  userBeer,
}) => {
  const { dispatch } = useContext(BeerContext);

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
      <img src={imgUrl} alt={name} className="beer-img" />
      <div className="right-buttons-container">
        <Button>
          <FontAwesomeIcon icon={favourite ? faHeartS : faHeartR} />
        </Button>
        <Button
          onClick={() => {
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
