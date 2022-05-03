import beer from "./BeerData";
import BeerDetails from "./components/BeerDetails/BeerDetails";
import Beers from "./components/Beers/Beers";
import Header from "./components/Header/Header";
import Search from "./components/Search/Search";

function App() {
  return (
    <div className="App">
      <Header pageTitle={"Beer Directory"} />
      <Search />
      <Beers />
      <BeerDetails beer={beer} />
      {/* <BeerDetailsContainer>
        <BeerDetails beer={beer} />
      </BeerDetailsContainer> */}
    </div>
  );
}

export default App;
