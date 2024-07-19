import { Container, Profile } from "./styles";

export function Header() {
  return (
    <Container>
       <Profile>
          <div>
            <strong>Victor Nestali</strong>
            <button type="button">Sair</button>
          </div>

          <img 
            src="https://github.com/devnestali.png" 
            alt="Foto do usuário" 
          />
       </Profile>
    </Container>
  )
}