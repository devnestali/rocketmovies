import { useAuth } from "../../hooks/auth";
import { useNavigate } from "react-router-dom";
import { Input } from "../Input";
import { Container, Profile } from "./styles";

export function Header() {
  const { signOut } = useAuth();
  const navigate = useNavigate();


  function handleNavigation() {
    navigate('/profile');
  }
  
  return (
    <Container>
        <a to="/">RocketMovies</a>

        <Input placeholder="Pesquisar pelo título" />
          
        <Profile onClick={handleNavigation()}>
          <div>
            <strong>Victor Nestali</strong>
            <button type="button" onClick={signOut}>Sair</button>
          </div>

          <img 
            src="https://github.com/devnestali.png" 
            alt="Foto do usuário" 
          />
       </Profile>
    </Container>
  )
}