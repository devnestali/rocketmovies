import { Container, Inputs, TextArea, Buttons } from "./styles";

import { Header } from "../../components/Header";
import { Wrapper } from "../../components/Wrapper";
import { ButtonText } from "../../components/ButtonText";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { NoteItem } from "../../components/NoteItem";

import { FiArrowLeft } from "react-icons/fi";

import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { api } from "../../services/api";

export function New() {
    const [title, setTitle] = useState("");
    const [rating, setRating] = useState("");
    const [description, setDescription] = useState("");
    const [tags, setTags] = useState([]);
    const [newTag, setNewTag] = useState("");

    const navigate = useNavigate();

    function validationsToInput() {
        if (!title) {
            alert("É preciso adicionar um título para cadastrar um filme.");
            return false;
        }

        const ValidRating = rating >= 0 && rating <= 5 && rating !== "";

        if(!ValidRating) {
            alert("É preciso informar uma nota entre 0 e 5 para cadastrar um filme.");
            return false;
        }

        if(newTag) {
            alert("Um marcador foi preenchido, porem não foi adicionado. Adicione-o ou deixe o campo vazio.");
            return false;
        }
        return true;
    }

    function handleAddNewTag() {
        const tagAlreadyExists = tags.includes(newTag);

        if(tagAlreadyExists) {
            return alert("Esta tag já foi adicionada!");
        }

        if(newTag !== "") {
            setTags(previousTags => [...previousTags, newTag]);
            setNewTag('');
        }
    }

    function handleDeletedTag(deleted) {
        const tagsWithoutDeletedTag = tags.filter(tag => tag !== deleted);
        setTags(tagsWithoutDeletedTag);
    }

    function handleDiscardChanges() {
        const userConfirmation = confirm("Todas as alterações serão perdidas, deseja continuar?");

        if(userConfirmation) {
            navigate("/");
        }
    }

    async function handleSaveChanges() {
        const passedInAllValidations = validationsToInput();

        if(passedInAllValidations) {
            try {
                api.post('/notes', { title, rating, description, tags })
                alert("Filme cadastrado com sucesso!");
                navigate("/");
            } catch (error) {
                if(error.response) {
                    alert(error.response.data.message)
                } else {
                    alert("Não foi possível realizar o cadastro do filme. Por favor, tente mais tarde.");
                }
            }
        }
    }

    return (
        <Container>
            <Header />
            <main>
                <Wrapper>
                    <ButtonText 
                        to="/"
                        icon={FiArrowLeft}
                        title="Voltar"
                    />
                    <h1>Novo Filme</h1>
                    <Inputs>
                        <Input 
                            placeholder="Título"
                            onChange={e => setTitle(e.target.value)}
                        />
                        <Input 
                            placeholder="Sua nota (de 0 a 5)"
                            type="number"
                            min="0"
                            max="5"
                            onChange={e => setRating(e.target.value)}
                        />
                    </Inputs>
                    <TextArea 
                        placeholder="Descrição"
                        onChange={e => setDescription(e.target.value)}
                    />

                    <h2>Marcadores</h2>
                    <section className="itemsOfNote">
                        {tags.map((tag, index) => (
                            <NoteItem 
                                key={`${tag}-${index}`} 
                                value={tag}
                                onClick={() => handleDeletedTag(tag)}
                            />
                        ))}
                        <NoteItem 
                            isnew
                            placeholder="Nova Tag"
                            value={newTag}
                            onChange={e => setNewTag(e.target.value)}
                            onClick={handleAddNewTag}
                        />
                    </section>

                    <Buttons>
                        <Button 
                            title="Descartar alterações"
                            highlight={false}
                            onClick={handleDiscardChanges}
                        />
                        <Button 
                            title="Salvar alterações"
                            onClick={handleSaveChanges}
                        />
                    </Buttons>
                </Wrapper>
            </main>
        </Container>
    )
}