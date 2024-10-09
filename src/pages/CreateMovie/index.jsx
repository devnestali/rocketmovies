/* import { Header } from "../../components/Header";
import { ButtonText } from "../../components/ButtonText";
import { Input } from "../../components/Input";
import { Textarea } from "../../components/Textarea";
import { NoteItem } from "../../components/NoteItem";
import { Button } from "../../components/Button";

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../../services/api";

import { Container, Form } from "./styles";

export function CreateMovie() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  
  const [rating, setRating] = useState(0);
  
  const [tags, setTags] = useState([]);
  const [newTag, setNewTag] = useState("");

  const navigate = useNavigate();

  async function handleNewMovieNote() {
    const ratingTypeNumber = Number(rating);

    if(!ratingTypeNumber) {
      return alert("Número inválido! Selecione números de 0 a 5");
    }

    if(ratingTypeNumber < 0 || ratingTypeNumber > 5) {
      return alert("Número inválido! Selecione números de 0 a 5");
    }
    
    if(!title) {
      return alert("Digite o título da nota");
    }

    if(newTag) {
      return alert("Existe um marcador no campo para adicionar que não foi adicionado. Clique em adicionar ou deixe o campo vazio.")
    }
    
    await api.post('/movieNotes', {
      title,
      description,
      tags,
      rating: ratingTypeNumber,
    });

    alert("Nota de Filme cadastrada com sucesso!");
    navigate("/");
  }
  
  function handleTag() {
    setTags(prevState => [...prevState, newTag]);
    setNewTag("");
  }

  function handleRemoveTag(deleted) {
    setTags(prevState => prevState.filter(tag => tag !== deleted));
  }
  
  return (
    <Container>
      <Header />

      <main>
        <Form>
          <header>
            <ButtonText title="Voltar" to="/" buttonIcon/>
            <h1>Novo filme</h1>
          </header>

          <div>
            <Input 
              placeholder="Título"
              onChange={e => setTitle(e.target.value)} 
            />
            <Input 
              type="number"
              placeholder="Sua nota (de 0 a 5)" 
              onChange={e => setRating(e.target.value)}
            />
          </div>

          <Textarea 
            placeholder="Observações"
            onChange={e => setDescription(e.target.value)}
          />

          <section>
            <h3>Marcadores</h3>
            <div className="tags">
              {
                tags.map((tag, index) => (
                    <NoteItem 
                    key={String(index)}  
                    value={tag}
                    onClick={() => handleRemoveTag(tag)}
                    />
                ))
              }
                      
              <NoteItem 
                placeholder="Novo marcador" 
                isNew 
                onChange={e => setNewTag(e.target.value)}
                value={newTag}
                onClick={handleTag}
              />
            </div>
          </section>

          <div className="buttons">
            <Button title="Excluir filme" deleteButton/>
            <Button 
              title="Salvar alterações"
              onClick={handleNewMovieNote} 
            />
          </div>
        </Form>
      </main>
    </Container>
  )
} */