import { useState } from "react";
import { ButtonText } from "../../components/ButtonText";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";

import { api } from "../../services/api";
import { useAuth } from "../../hooks/auth";

import { Container, Form, Avatar } from "./styles";

import { FiUser, FiMail, FiLock, FiCamera } from "react-icons/fi";

export function Profile() {
  const { user } = useAuth();
  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const [currentPassword, setCurrentPassword] = useState();
  const [newPassword, setNewPassword] = useState();

  async function handleUpdate() {
    console.log(name, email, currentPassword, newPassword)
  }
  
  return (
    <Container>
      <header>
        <ButtonText title="Voltar" to="/" buttonIcon/>
      </header>

      <Form>
        <Avatar>
          <img 
            src="https://github.com/devnestali.png" 
            alt="Foto do usuário" 
          />

          <label htmlFor="avatar">
            <FiCamera />
            <input 
              id="avatar"
              type="file"
            />
          </label>
        </Avatar>

        <Input 
          placeholder="Usuário"
          type="text"
          icon={FiUser}
          value={name}
          onChange={e => setName(e.target.value)}
        />

        <Input 
          placeholder="E-mail"
          type="text"
          icon={FiMail}
          value={email}
          onChange={e => setEmail(e.target.value)}
        />

        <Input 
          placeholder="Senha atual"
          type="password"
          icon={FiLock}
          onChange={e => setCurrentPassword(e.target.value)}
        />

        <Input 
          placeholder="Nova senha"
          type="password"
          icon={FiLock}
          onChange={e => setNewPassword(e.target.value)}
        />

        <Button title="Salvar" onClick={handleUpdate} />
      </Form>
    </Container>
  )
}