import { testimonial_api } from "../../../API_MAIN/TESTIMONIAL_API/testimonial_api";

export default function handler(req, res) {
  res.status(200).json(testimonial_api);
}
