const getBeers = async (page) => {
  const response = await fetch(
    `https://api.punkapi.com/v2/beers?page=${page}&per_page=12`
  );
  const beersPage = await response.json();
  return beersPage;
};
export default getBeers;
