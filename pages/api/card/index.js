import { card_api } from "../../../API_MAIN/HERO_PAGE_PROJECT_CARD/home_page_api";

export default function handler(req, res) {
  res.status(200).json(card_api);
}
