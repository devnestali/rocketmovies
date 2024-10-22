import { Container, Content, Form, BackgroundImg } from "./styles";
import { FiMail, FiLock } from "react-icons/fi"

import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { ButtonText } from "../../components/ButtonText";

import { useState } from "react";
import { useAuth } from "../../hooks/auth"


export function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { signIn } = useAuth();

  function handleSignIn() {
    const someFieldIsEmpty = !email || !password

    if(someFieldIsEmpty) {
      return alert("Preencha todos os campos!");
    }

    signIn(email, password);
  }


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
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
          
          <Input 
            type="password"
            icon={FiLock}
            placeholder="Senha"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />

          <Button 
            title="Entrar"
            onClick={handleSignIn}
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