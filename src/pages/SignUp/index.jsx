import { Container, Content, Form, BackgroundImg } from "./styles";
import { FiUser, FiMail, FiLock, FiArrowLeft } from "react-icons/fi"

import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { ButtonText } from "../../components/ButtonText";


export function SignUp() {
  
  return (
    <Container>
      <Content>
        <Form>
          <h1>RocketMovies</h1>
          <p>Aplicação para acompanhar tudo aquilo que deseja assistir.</p>
          <h2>Crie sua conta</h2>

          <Input 
            icon={FiUser}
            placeholder="Usuário"
          />
          
          <Input 
            icon={FiMail}
            placeholder="E-mail"
          />
          
          <Input 
            type="password"
            icon={FiLock}
            placeholder="Senha"
          />

          <Button 
            title="Entrar"
          />
          
          <ButtonText
            to="/" 
            icon={FiArrowLeft}
            title="Voltar"
          />
        </Form>
      </Content>
      <BackgroundImg />
    </Container>
  )
}