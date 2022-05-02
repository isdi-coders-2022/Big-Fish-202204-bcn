import { library } from "@fortawesome/fontawesome-svg-core";
import { faPenToSquare } from "@fortawesome/free-regular-svg-icons";
import { faCircleXmark } from "@fortawesome/free-regular-svg-icons";
import { faHeart as faHeartS } from "@fortawesome/free-solid-svg-icons";
import { faHeart as faHeartR } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button from "../Button/Button";
library.add(faHeartS, faHeartR);

const Beer = ({ name, tagline, image_url: imgUrl, favourite, userBeer }) => {
  return (
    <>
      <div className="beer-info">
        <div className="beer-info__top">
          <h2 className="beer-info__top__name">{name}</h2>
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
        {userBeer ? (
          <Button>
            <FontAwesomeIcon icon={faCircleXmark} />
          </Button>
        ) : (
          ""
        )}
      </div>
    </>
  );
};
export default Beer;
