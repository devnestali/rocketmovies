import { Link, useNavigate } from "react-router-dom";
import { Wrapper } from "../Wrapper";
import { Container, Logout, Profile } from "./styles";

import { useAuth } from "../../hooks/auth";

export function Header({ children }) {
  const { signOut } = useAuth();

  const navigate = useNavigate();

  function handleSignOut() {
    signOut();
    navigate("/");
  }
    
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
              <Logout type="button" onClick={handleSignOut}>
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