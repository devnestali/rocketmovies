import { Container, Content, Form, BackgroundImg } from "./styles";
import { FiMail, FiLock } from "react-icons/fi"

import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { ButtonText } from "../../components/ButtonText";


export function SignIn() {
  
  return (
    <Container>
      <Content>
        <Form>
          <h1>RocketMovies</h1>
          <p>Aplicação para acompanhar tudo aquilo que deseja assistir.</p>
          <h2>Faça seu login</h2>

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
            highlight={true}
          />
          
          <ButtonText 
            to="/register"
            title="Criar conta"
          />
        </Form>
      </Content>
      <BackgroundImg />
    </Container>
  )
}