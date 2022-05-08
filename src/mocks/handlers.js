import { rest } from "msw";
import beers from "../data/beers";
import beer from "../data/beer";

export const handlers = [
  rest.get(
    "https://api.punkapi.com/v2/beers?page=1&per_page=12",
    (_req, res, ctx) => res(ctx.status(200), ctx.json([...beers]))
  ),

  rest.get(`https://mybeers-api.onrender.com/myBeers`, (_req, res, ctx) =>
    res(ctx.status(200), ctx.json([...beers]))
  ),

  rest.post(`https://mybeers-api.onrender.com/myBeers`, (_req, res, ctx) =>
    res(ctx.status(200), ctx.json({ ...beer }))
  ),

  rest.delete(
    `https://mybeers-api.onrender.com/myBeers/${beer.id}`,
    (_req, res, ctx) => res(ctx.status(200), ctx.json(beer.id))
  ),
];
