

import "./App.css";
import Beer from "./components/Beer/Beer";
import BeerContainer from "./components/BeerContainer/BeerContainer";

function App() {
  return (

    <div className="App">
      <BeerContainer className="beer">
        <Beer
          favourite={true}
          userBeer={true}
          name={"cerveza top"}
          tagline={"esta cerve es cojonudisima"}
        />
      </BeerContainer>

    </div>
  );
}

export default App;
