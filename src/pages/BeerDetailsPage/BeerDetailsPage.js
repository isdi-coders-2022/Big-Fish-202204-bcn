import beer from "../../BeerData";
import BeerDetails from "../../components/BeerDetails/BeerDetails";
import BeerDetailsContainer from "../../components/BeerDetailsContainer/BeerDetailsContainer";

const BeerDetailsPage = () => {
  return (
    <div className="BeerDetailsPage">
      <BeerDetailsContainer>
        <BeerDetails beer={beer} />
      </BeerDetailsContainer>
    </div>
  );
};

export default BeerDetailsPage;
