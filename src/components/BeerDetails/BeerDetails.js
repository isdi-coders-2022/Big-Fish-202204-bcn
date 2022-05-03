import BeerColor from "../BeerColor/BeerColor";
import Stars from "../Stars/Stars";
import Tags from "../Tags/Tags";

const BeerDetails = ({ beer }) => {
  return (
    <>
      <section className="beer-details__info">
        <div className="beer-details__info-title">
          <h2>{beer.name}</h2>
        </div>
        <div className="beer-details__info-text">
          <div className="info-list">
            <ul>
              <li>
                <h3>First brewed</h3>
                <p>{beer.first_brewed}</p>
              </li>
              <li>
                <h3>Alc. %Vol</h3>
                <p>{beer.abv}</p>
              </li>
              <li>
                <h3>Bitterness (IBU)</h3>
                <p>{beer.ibu}</p>
              </li>
              <li>
                <BeerColor color={beer.srm} />
              </li>
              <li>
                <Tags beertags={beer.tagline} />
              </li>
              <li>
                <Stars rating={beer.rating} />
              </li>
            </ul>
          </div>
          <div className="info-image">
            <img src={beer.image_url} alt={beer.name} />
          </div>
        </div>
      </section>
      <section className="beer-details__description">
        <ul>
          <li>
            <h3>Description</h3>
            <p>{beer.description}</p>
          </li>
          <li>
            <h3>Food pairing</h3>
            <p>{beer.food_pairing}</p>
          </li>
          <li>
            <h3>Brewer's Tips</h3>
            <p>{beer.brewers_tips}</p>
            <p>{`~${beer.contributed_by}`}</p>
          </li>
        </ul>
      </section>
    </>
  );
};

export default BeerDetails;
