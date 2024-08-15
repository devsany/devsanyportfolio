import { testimonial_api } from "../../TESTIMONIAL_API";

export default function handler(req, res) {
  res.status(200).json(testimonial_api);
}
