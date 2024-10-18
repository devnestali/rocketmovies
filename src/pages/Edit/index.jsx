import { Container, Inputs, Textarea, Buttons } from './styles';

import { Header } from '../../components/Header';
import { Wrapper } from '../../components/Wrapper';
import { ButtonText } from '../../components/ButtonText';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';

import { FiArrowLeft } from 'react-icons/fi';

export function Edit() {
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
                        />
                        <Input 
                            type='number'
                            placeholder='Sua nota (de 0 a 5)'
                            min='0'
                            max='0'
                        />
                    </Inputs>
                    <Textarea 
                    placeholder='Descrição'
                    />
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