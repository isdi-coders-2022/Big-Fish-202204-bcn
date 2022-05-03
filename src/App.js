import beer from "./BeerData";
import Beer from "./components/Beer/Beer";
import BeerContainer from "./components/BeerContainer/BeerContainer";
import BeerDetails from "./components/BeerDetails/BeerDetails";
import BeerDetailsContainer from "./components/BeerDetailsContainer/BeerDetailsContainer";
import Header from "./components/Header/Header";
import Search from "./components/Search/Search";


function App() {
  return (
    <div className="App">
      <Header pageTitle={"Beer Directory"} />
      <Search />
      <BeerContainer className="beer">
        <Beer
          favourite={true}
          userBeer={true}
          name={"Cerveza to"}
          tagline={
            "esta cerve es cojonudisima, pero de verdad que esta rica, buena como ninguna otra..."
          }
        />
      </BeerContainer>
      <BeerDetailsContainer>
        <BeerDetails beer={beer} />
      </BeerDetailsContainer>
    </div>
  );
}

export default App;
