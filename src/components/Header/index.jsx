import { Link, useNavigate } from "react-router-dom";
import { Wrapper } from "../Wrapper";
import { Container, Logout, Profile } from "./styles";
import avatarPlaceholder from "../../assets/avatar_placeholder.svg";

import { useAuth } from "../../hooks/auth";

import { api } from "../../services/api";

export function Header({ children }) {
  const { signOut, userData } = useAuth();
  
  const navigate = useNavigate();
  
  const avatar = userData.avatar
    ? `${api.defaults.baseURL}/files/${userData.avatar}`
    : avatarPlaceholder;

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
              <p>{userData.name}</p>
              <Logout type="button" onClick={handleSignOut}>
                Sair
              </Logout>
            </div>
            <Link to="/profile">
              <img src={avatar} alt={userData.name} />
            </Link>
          </Profile>
        </Wrapper>
    </Container>
  )
}