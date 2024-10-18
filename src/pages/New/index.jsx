import { Container, Inputs, TextArea, Buttons } from "./styles";

import { Header } from "../../components/Header";
import { Wrapper } from "../../components/Wrapper";
import { ButtonText } from "../../components/ButtonText";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { NoteItem } from "../../components/NoteItem";

import { FiArrowLeft } from "react-icons/fi";

export function New() {
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
                        />
                        <Input 
                            placeholder="Sua nota (de 0 a 5)"
                            type="number"
                            min="0"
                            max="5"
                        />
                    </Inputs>
                    <TextArea 
                        placeholder="Descrição"
                    />

                    <h2>Marcadores</h2>
                    <section className="itemsOfNote">
                        <NoteItem value="Teste" />
                        <NoteItem isnew />
                    </section>

                    <Buttons>
                        <Button 
                            title="Descartar alterações"
                            highlight={false}
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