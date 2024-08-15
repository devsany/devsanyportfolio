// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { card_api } from "../HERO_PAGE_PROJECT_CARD";

export default function handler(req, res) {
  res.status(200).json(card_api);
}
