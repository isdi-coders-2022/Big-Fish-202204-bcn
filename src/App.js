import Beer from "./components/Beer/Beer";
import BeerContainer from "./components/BeerContainer/BeerContainer";

function App() {
  return (
    <div className="App">
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
    </div>
  );
}

export default App;
