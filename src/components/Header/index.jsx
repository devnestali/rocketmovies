import { Link } from "react-router-dom";
import { Wrapper } from "../Wrapper";
import { Container, Logout, Profile } from "./styles";

export function Header({ children }) {
  return (
    <Container>
        <Wrapper>
          <Link to="/" className="toDesktop">
            <h2>RocketMovies</h2>
          </Link>
          {children}
          <Profile>
            <div>
              <p>Victor Henrique de Camargo Nestali</p>
              <Logout type="button">
                Sair
              </Logout>
            </div>
            <Link to="/profile">
              <img src="https://github.com/devnestali.png" alt="Foto do usuário" />
            </Link>
          </Profile>
        </Wrapper>
    </Container>
  )
}