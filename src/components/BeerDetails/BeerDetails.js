import BeerColor from "../BeerColor/BeerColor";
import Stars from "../Stars/Stars";
import Tags from "../Tags/Tags";

const BeerDetails = ({ beer }) => {
  return (
    <>
      <section className="beer-details__info">
        <h2>{beer.name}</h2>
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
      </section>
      <section className="beer-details__description">
        <ul>
          <li>
            <h3 className="title-description">Description</h3>
            <p>{beer.description}</p>
          </li>
          <li>
            <h3 className="title-description">Food pairing</h3>
            <p>{beer.food_pairing}</p>
          </li>
          <li>
            <h3 className="title-description">Brewer's Tips</h3>
            <p>{beer.brewers_tips}</p>
          </li>
        </ul>
      </section>
    </>
  );
};

export default BeerDetails;
