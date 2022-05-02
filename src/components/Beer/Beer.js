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
    <li className="beer">
      <div className="beer-info">
        <div>
          <h2 className="beer-info_name">{name}</h2>
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
    </li>
  );
};
export default Beer;
