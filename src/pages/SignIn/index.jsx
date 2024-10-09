import { Container, Content, Form, BackgroundImg } from "./styles";
import { FiMail, FiLock } from "react-icons/fi"

import { Input } from "../../components/Input";
import { Button } from "../../components/Button";


import { Link } from "react-router-dom";
/* import { useAuth } from "../../hooks/auth"; */

export function SignIn() {
/*   const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  const { signIn } = useAuth();

  function handleSignIn() {
    signIn({ email, password });
  } */
  
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
            icon={FiLock}
            placeholder="Senha"
          />

          <Button 
            title="Entrar"
          />
          
          <a href="">Criar conta</a>
        </Form>
      </Content>
      <BackgroundImg />
    </Container>
  )
}