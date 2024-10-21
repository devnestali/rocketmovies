import { Container, Content, Form, BackgroundImg } from "./styles";
import { FiUser, FiMail, FiLock, FiArrowLeft } from "react-icons/fi"

import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { ButtonText } from "../../components/ButtonText";

import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { api } from "../../services/api";


export function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  async function handleSignUp() {
    const someFieldIsEmpty = !name || !email || !password

    if(someFieldIsEmpty) {
      return alert("Complete todos os campos para efetuar o cadastro!")
    }

    try {
      await api.post("/users", { name, email, password });
      alert("Usuário cadastrado com sucesso!");
      navigate("/");
    } catch (error) {
      if(error.message) {
        alert(error.response.data.message);
      } else {
        alert("Não foi possível realizar o login. Por favor, tente mais tarde.");
      }
    }
  }

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
            value={name}
            onChange={e => setName(e.target.value)}
          />
          
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
            onClick={handleSignUp}
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