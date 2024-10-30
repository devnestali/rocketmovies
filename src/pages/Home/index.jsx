import { ButtonAdd, Container, MainTop, Notes } from "./styles";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { FiSearch, FiPlus } from "react-icons/fi";
import { Wrapper } from "../../components/Wrapper";
import { Note } from "../../components/Note";

import { api } from "../../services/api";

import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export function Home() {
  const [search, setSearch] = useState("");
  const [notes, setNotes] = useState([]);

  const navigate = useNavigate();

  function handleShowDetails(id) {
    navigate(`/details/${id}`);
  }

  function handleMobileSearch() {
    const filmSearch = window.prompt("Digite sua busca");

    setSearch(filmSearch);
  }
  
  
  
  useEffect(() => {
    async function fetchNotes() {
      try {
        const response = await api.get(`/notes?title=${search}`);
        setNotes(response.data);

      } catch (error) {
        if(error.response) {
          alert(error.response.data.message);
        } else {
          alert("Não foi possível carregar as notas. Por favor, tente mais tarde.");
        }
      }
    }
    fetchNotes();
  }, [search])
  return (
    <Container>
      <Header>
        <Input 
          className="search toDesktop"
          placeholder="Pesquisar pelo título"
          onChange={e => setSearch(e.target.value)}
        />
        <button 
          type="button"
          className="mobileSearch"
          onClick={handleMobileSearch}
        >
          <FiSearch />
        </button>
      </Header>
      <main>
        <Wrapper>
          <MainTop>
            <h1>Meus Filmes</h1>
            <ButtonAdd to="/new">
              <FiPlus /> Adicionar filme
            </ButtonAdd>
          </MainTop>
          <Notes>
            {
              notes.map((note) => (
                <Note 
                  key={String(note.id)}
                  data={note}
                  onClick={() => handleShowDetails(note.id)}
                />
              ))
            }
          </Notes>
        </Wrapper>
      </main>
    </Container>
  );
};