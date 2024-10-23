import { Container, MainTop, Info, Buttons } from "./styles";

import dayjs from "dayjs";

import { Header } from "../../components/Header";
import { Wrapper } from "../../components/Wrapper";
import { ButtonText } from "../../components/ButtonText";
import { Rating } from "../../components/Rating";
import { Tag } from "../../components/Tag";
import { Button } from "../../components/Button";

import { FiArrowLeft, FiClock } from "react-icons/fi";

import avatarPlaceholder from "../../assets/avatar_placeholder.svg"

import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { api } from "../../services/api"
import { useAuth } from "../../hooks/auth";


export function Details() {
    const [data, setData] = useState({});
    const [dateFormat, setDateFormat] = useState(null);    
    
    const params = useParams();
    const navigate = useNavigate();
    
    const { userData } = useAuth();

    const avatar = userData.avatar 
    ? `${api.defaults.baseURL}/files/${userData.avatar}`
    : avatarPlaceholder;

    async function handleDelete() {
        const userConfirmation = confirm("Tem certeza que deseja excluir este filme?");

        if(userConfirmation) {
            try {
                await api.delete(`/notes/${params.id}`);
                alert("Filme excluído com sucesso!");
                navigate("/");
            } catch (error) {
                if(error.response) {
                    alert(error.response.data.message);
                } else {
                    alert("Não foi possível excluir o filme. Por favor, tente mais tarde.");
                }
            }
        }
    }

    function handleEdit() {
        navigate(`/edit/${params.id}`);
    }

    useEffect(() => {
        if(data.updated_at) {
            const time = dayjs(data.updated_at).format('h:mm A');
            const date = dayjs(data.updated_at).format('DD/MM/YYYY');

            const [hours, minutes] = time.split(':');
            
            setDateFormat({
                time: `${hours}:${minutes}`,
                date,
            });
        }
        
    }, [data]);

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await api.get(`/notes/${params.id}`);
                setData(response.data);
            } catch (error) {
                if(error.response) {
                    alert(error.response.data.message);
                } else {
                    alert("Não foi possível carregar os dados desse filme. Por favor, tente mais tarde.");
                    navigate(-1);
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
                    <MainTop>
                        <ButtonText 
                            to="/"
                            icon={FiArrowLeft}
                            title="Voltar"
                        />
                        <div className="evaluation">
                            <h1>{data.title}</h1>
                            <Rating 
                                grade={data.rating}
                                isbigsize="true"
                            />
                        </div>
                        <Info>
                            <div className="userInfo">
                                <img src={avatar} alt={userData.name} />
                                <p>Por {userData.name}</p>
                            </div>

                            <div className="timeInfo">
                                <FiClock />
                                {
                                    dateFormat && (
                                        <p>
                                             {dateFormat.date} às {dateFormat.time}
                                        </p>
                                    )
                                }
                            </div>
                        </Info>
                    </MainTop>

                    {
                        data.tags && (
                            <div className="tags">
                                {
                                    data.tags.map((tag) => (
                                        <Tag 
                                            key={String(tag.id)}
                                            name={tag.name} 
                                        /> 
                                    ))
                                }
                            </div>
                        )
                    }
                    
                    
                    <p className="description">
                        {data.description}
                    </p>

                    <Buttons>
                        <Button 
                            title="Excluir Filme"
                            highlight={false}
                            onClick={handleDelete}
                        />
                        <Button 
                            title="Editar Filme"
                            onClick={handleEdit}
                        />
                    </Buttons>
                </Wrapper>
            </main>
        </Container>
    )
}