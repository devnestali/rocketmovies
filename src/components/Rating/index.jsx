import { Container } from "./styles"
import { FiStar} from "react-icons/fi"

export function Rating() {
  return (
    <Container>
      <input type="radio" id="5-stars" name="rating" value="5" />
      <label htmlFor="5-stars"><FiStar size={20} fill="#FF859B"/></label>
      <input type="radio" id="4-stars" name="rating" value="4" />
      <label htmlFor="4-stars"><FiStar size={20} fill="#FF859B"/></label>
      <input type="radio" id="3-stars" name="rating" value="3" />
      <label htmlFor="3-stars"><FiStar size={20} fill="#FF859B"/></label>
      <input type="radio" id="2-stars" name="rating" value="2" />
      <label htmlFor="2-stars"><FiStar size={20} fill="#FF859B"/></label>
      <input type="radio" id="1-stars" name="rating" value="1" />
      <label htmlFor="1-stars"><FiStar size={20} fill=""/></label>
    </Container>
  )
}