import beer from "./BeerData";
import BeerDetails from "./components/BeerDetails/BeerDetails";
import Beers from "./components/Beers/Beers";

function App() {
  return (
    <div className="App">
      <Beers />
      <BeerDetails beer={beer} />
    </div>
  );
}

export default App;
