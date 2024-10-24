import { Container, Inputs, Textarea, Buttons } from './styles';

import { Header } from '../../components/Header';
import { Wrapper } from '../../components/Wrapper';
import { ButtonText } from '../../components/ButtonText';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';
import { NoteItem } from '../../components/NoteItem';

import { FiArrowLeft } from 'react-icons/fi';

import { useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

import { api } from '../../services/api';

export function Edit() {
    const [title, setTitle] = useState("");
    const [rating, setRating] = useState("");
    const [description, setDescription] = useState("");
    const [newTag, setNewTag] = useState("");
    const [tags, setTags] = useState([]);

    const params = useParams();
    const navigate = useNavigate();

    function inputValidation() {
        if (!title) {
            alert("É preciso adicionar um título para cadastrar um filme.")
            return false;
        };

        const validRating = rating >= 0 && rating <= 5 && rating !== "";

        if (!validRating) {
            alert("É preciso informar uma nota entre 0 e 5 para cadastrar um filme.");
            return false;
        }

        if (newTag) {
            alert("Um marcador foi preenchido, porem não foi adicionado. Adicione-o ou deixe o campo vazio.")
            return false;
        }
        return true;
    }

    function handleAddNewTag() {
        const tagAlreadyExists = tags.includes(newTag);

        if (tagAlreadyExists) {
            return alert("Esta tag já foi adicionada!");
        }

        if (newTag != "") {
            setTags(previousTags => [...previousTags, newTag]);
            setNewTag("");
        }
    }

    function handleDeleteTag(deleted) {
        const tagsWithoutDeletedTag = tags.filter(tag => tag !== deleted);
        setTags(tagsWithoutDeletedTag);
    }

    async function handleSaveChanges() {
        const passedInAllValidations = inputValidation();

        if(passedInAllValidations) {
            try {
                await api.put(`/notes/${params.id}`, { title, rating, description, tags});
                alert("Filme editado com sucesso!");
                navigate("/");
            } catch (error) {
                if(error.response) {
                    alert(error.response.data.message);
                } else {
                    alert("Não foi possível realizar o cadastro do filme. Por favor, tente mais tarde.");
                }
            }
        }
    }

    function handleDiscardChanges() {
        const userConfirmation = confirm("Todas as alterações serão perdidas, deseja continuar?");

        if (userConfirmation) {
            navigate("/");
        }
    }

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await api.get(`/notes/${params.id}`);
                const { data } = response;

                setTitle(data.title);
                setRating(data.rating);
                setDescription(data.description);
                
                const tagNameOnly = data.tags.map(tag => tag.name);
                
                setTags(tagNameOnly);
            } catch (error) {
                if (error.response) {
                    alert(error.response.data.message);
                } else {
                    alert("Não foi possível carregar os dados desse filme. Por favor, tente mais tarde.");
                }
            }
        }

        fetchData();
    }, [])
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
                    <h1>Editar Filme</h1>
                    <Inputs>
                        <Input
                            placeholder="Título"
                            value={title}
                            onChange={e => setTitle(e.target.value)}
                        />
                        <Input
                            type='number'
                            placeholder='Sua nota (de 0 a 5)'
                            min='0'
                            max='0'
                            value={rating}
                            onChange={e => setRating(e.target.value)}
                        />
                    </Inputs>
                    <Textarea
                        placeholder='Descrição'
                        value={description}
                        onChange={e => setDescription(e.target.value)}
                    />
                    <h2>Marcadores</h2>
                    <section className="itemsOfNote">
                        {
                            tags.map((tag, index) => (
                                <NoteItem
                                    key={`${tag}-${index}`}
                                    value={tag}
                                    onClick={() => handleDeleteTag(tag)}
                                />
                            ))
                        }
                        <NoteItem
                            isnew
                            placeholder="Nova tag"
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