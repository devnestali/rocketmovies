import { Container, Header, Form, AvatarProfile } from "./styles"

import { ButtonText } from "../../components/ButtonText";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";

import { FiArrowLeft, FiUser, FiMail, FiLock, FiCamera } from "react-icons/fi";

export function Profile() {
  
  return (
    <Container>
      <Header>
        <ButtonText to="/" icon={FiArrowLeft} title="Voltar" />
      </Header>
      <Form>
        <AvatarProfile>
          <img src="https://github.com/devnestali.png" alt="" />
          <label htmlFor="userPhoto">
            <FiCamera />
            <input 
              type="file"
              id="userPhoto"
              accept="image/png, image/jpg"
            />
          </label>
        </AvatarProfile>
        <Input 
          icon={FiUser}
          placeholder="Nome"
        />
        <Input 
          icon={FiMail}
          placeholder="E-mail"
        />
        <Input 
          icon={FiLock}
          placeholder="Senha atual"
        />
        <Input 
          icon={FiLock}
          placeholder="Nova senha"
        />
        <Button 
          title="Salvar"
        />
      </Form>
    </Container>
  )
} 