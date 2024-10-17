import { Container, MainTop, Info, Buttons } from "./styles";

import { Header } from "../../components/Header";
import { Wrapper } from "../../components/Wrapper";
import { ButtonText } from "../../components/ButtonText";
import { Rating } from "../../components/Rating";
import { Tag } from "../../components/Tag";
import { Button } from "../../components/Button";

import { FiArrowLeft, FiClock } from "react-icons/fi";

export function Details() {
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
                            <h1>Teste 1</h1>
                            <Rating 
                                grade="3"
                                isbigsize="true"
                            />
                        </div>
                        <Info>
                            <div className="userInfo">
                                <img src="https://github.com/devnestali.png" alt="Foto do usuário" />
                                <p>Por Victor Nestali</p>
                            </div>

                            <div className="timeInfo">
                                <FiClock />
                                <p>19:30</p>
                            </div>
                        </Info>
                    </MainTop>

                    <div className="tags">
                        <Tag name="Aventura" />
                        <Tag name="Drama" />
                        <Tag name="2023" />
                    </div>
                    
                    <p className="description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium recusandae optio dignissimos dicta quis consequuntur reiciendis iure corrupti, molestias facilis, placeat blanditiis repellendus laboriosam! Adipisci veritatis aut aspernatur odio ducimus in facilis cupiditate tempore labore tenetur, suscipit, voluptates laborum explicabo voluptatibus maxime repellat ad aliquid modi cumque tempora voluptatem? Qui, placeat enim? Maiores possimus ullam expedita voluptatibus obcaecati libero atque at necessitatibus, perferendis eos aliquid veritatis vero impedit unde velit fugit odio rerum dolorum quae exercitationem fugiat a neque ipsam! Mollitia tenetur omnis voluptatibus facere minus facilis dolorum corporis exercitationem laudantium fuga commodi nobis voluptatem distinctio iusto aliquam fugiat, nam provident quis delectus dicta rem illum velit. Totam in, est assumenda accusamus porro suscipit pariatur harum esse quidem libero, rem itaque eaque! Magni ipsum vel illo sed cumque maiores at consequatur recusandae nisi, vero provident sit perspiciatis corrupti dolores eius delectus ipsam repellendus iure laudantium tempore ipsa aut. Magnam, quas?</p>

                    <Buttons>
                        <Button 
                            title="Excluir Filme"
                            highlight={false}
                        />
                        <Button 
                            title="Editar Filme"
                        />
                    </Buttons>
                </Wrapper>
            </main>
        </Container>
    )
}