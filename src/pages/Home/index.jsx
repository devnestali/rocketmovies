import { Container, NewFilm } from "./styles";

import { Header } from "../../components/Header";
import { Tag } from "../../components/Tag";
import { FilmContent } from "../../components/FilmContent";

import { FiPlus } from "react-icons/fi"
import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { useAuth } from "../../hooks/auth";

export function Home() {
  const { search } = useAuth();
  const [movieTags, setMovieTags] = useState([]);
  const [movieNotes, setMovieNotes] = useState([]);


  useEffect(() => {
    async function fetchMovieTags() {
      const response = await api.get("/movieTags");
      setMovieTags(response.data);
    }

    fetchMovieTags();

  }, [])

  useEffect(() => {
    async function fetchMovieNotes() {
      const response = await api.get(`/movieNotes?title=${search}`)
      setMovieNotes(response.data);
    }

    fetchMovieNotes();

  }, [search])
  return (
    <Container>
      <Header />
      
      <main>
        <div className="mainTitle">
          <h3>Meus Filmes</h3>
          <NewFilm to="/createmovie">
            <FiPlus /> Adicionar filme
          </NewFilm>
        </div>
          
        {
          movieNotes.map(movieNote => (
          <FilmContent
            key={movieNote.id}
            title={movieNote.title}
            text={movieNote.description}
            isATag
            tags={
              movieTags && movieTags.map(movieTag => {
                if(movieTag.movie_id !== movieNote.id){
                  return <Tag
                            key={String(movieTag.id)}  
                            tagName={movieTag.name}
                         />
                }
              })
            }
          />            
          ))
        }
        
      </main>
      
    </Container>
  )
}