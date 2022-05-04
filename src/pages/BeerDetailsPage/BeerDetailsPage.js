import beer from "../../BeerData";
import BeerDetails from "../../components/BeerDetails/BeerDetails";
import BeerDetailsContainer from "../../components/BeerDetailsContainer/BeerDetailsContainer";
import Header from "../../components/Header/Header";

const BeerDetailsPage = () => {
  return (
    <div className="BeerDetailsPage">
      <Header pageTitle={"Beer Details"} />
      <BeerDetailsContainer>
        <BeerDetails beer={beer} />
      </BeerDetailsContainer>
    </div>
  );
};

export default BeerDetailsPage;
