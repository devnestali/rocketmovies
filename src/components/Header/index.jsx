import { useAuth } from "../../hooks/auth";
import { api } from "../../services/api";

import avatarPlaceholder from "../../assets/avatar_placeholder.svg";

import { useNavigate } from "react-router-dom";
import { Input } from "../Input";
import { Container, Profile } from "./styles";

export function Header() {
  const { signOut, user } = useAuth();
  const navigate = useNavigate();

  const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder;


  function handleNavigation() {
    navigate('/profile');
  }

  return (
    <Container>
        <a to="/">RocketMovies</a>

        <Input placeholder="Pesquisar pelo título" />
          
        <Profile onClick={() => handleNavigation()}>
          <div>
            <strong>Victor Nestali</strong>
            <button type="button" onClick={e => signOut(e)}>Sair</button>
          </div>

          <img 
            src={avatarUrl}
            alt={user.name}
          />
       </Profile>
    </Container>
  )
}