import { Link } from "react-router-dom";
import { Wrapper } from "../Wrapper";
import { Container } from "./styles";

export function Header({ children }) {
  return (
    <Container>
        <Wrapper>
          <Link to="/" className="toDesktop">
            <h2>RocketMovies</h2>
          </Link>
          {children}
        </Wrapper>
    </Container>
  )
}