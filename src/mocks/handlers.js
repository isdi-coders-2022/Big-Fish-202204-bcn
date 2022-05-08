import { rest } from "msw";
import beers from "../data/beers";
import { endpoint } from "../paths/endpoint";
const urlApi = process.env.REACT_APP_API_URL;
const urlApiLocal = process.env.REACT_APP_API_LOCAL_URL;

export const handlers = [
  rest.get(
    "https://api.punkapi.com/v2/beers?page=1&per_page=12",
    (_req, res, ctx) => res(ctx.status(200), ctx.json([...beers]))
  ),
  rest.get(`https://mybeers-api.onrender.com/myBeers`, (_req, res, ctx) =>
    res(ctx.status(200), ctx.json([...beers]))
  ),
];
