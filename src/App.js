import { Navigate, Route, Routes } from "react-router-dom";
import BeerDetails from "./components/BeerDetails/BeerDetails";
import Header from "./components/Header/Header";
import Navigation from "./components/Navigation/Navigation";
import AddBeerPage from "./pages/AddBeerPage/AddBeerPage";
import BeerDetailsPage from "./pages/BeerDetailsPage/BeerDetailsPage";
import BeerListPage from "./pages/BeerListPage/BeerListPage";
import MyBeersPage from "./pages/MyBeersPage/MyBeersPage";
import NotFoundPage from "./pages/NotFounPage/NotFoundPage";

function App() {
  return (
    <>
      <BeerDetailsPage />
      <Header pageTitle={"Add New Beer"} />
      <Navigation />
      <Routes>
        <Route path="/" element={<Navigate to="/beers" />}></Route>
        <Route path="/beers" element={<BeerListPage />}></Route>
        <Route path="/my-beers" element={<MyBeersPage />}></Route>
        <Route path="/add-beer" element={<AddBeerPage />}></Route>
        <Route path="*" element={<NotFoundPage />}></Route>
      </Routes>
    </>
  );
}

export default App;
