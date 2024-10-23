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
    const [data, setData] = useState({});
    
    const params = useParams();
    const navigate = useNavigate();

    function handleDiscardChanges() {
        const userConfirmation = confirm("Todas as alterações serão perdidas, deseja continuar?");

        if(userConfirmation) {
            navigate("/");
        }
    }


    useEffect(() => {
        async function fetchData() {
            try {
                const response = await api.get(`/notes/${params.id}`);
                setData(response.data)
            } catch (error) {
                if(error.response) {
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
                            value={data.title}
                        />
                        <Input 
                            type='number'
                            placeholder='Sua nota (de 0 a 5)'
                            min='0'
                            max='0'
                            value={data.rating}
                        />
                    </Inputs>
                    <Textarea 
                        placeholder='Descrição'
                        value={data.description}
                    />
                    <h2>Marcadores</h2>
                    {
                        data.tags && (
                            <section className="itemsOfNote">
                                {
                                    data.tags.map(tag => (
                                        <NoteItem 
                                            key={tag.id}
                                            value={tag.name}
                                        />
                                    ))
                                }
                                <NoteItem isnew />      
                            </section>

                        )
                    }
                    
                    <Buttons>
                        <Button 
                            title="Descartar alterações"
                            highlight={false}
                            onClick={handleDiscardChanges}
                        />
                        <Button 
                            title="Salvar alterações"
                        />
                    </Buttons>
                </Wrapper>
            </main>
        </Container>
    )
}