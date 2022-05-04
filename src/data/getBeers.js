const getBeers = async (page) => {
  const response = await fetch(
    `https://api.punkapi.com/v2/beers?page=${page}&per_page=12`
  );
  return await response.json();
};
export default getBeers;
