import { FiPlus } from 'react-icons/fi';

import { FiSearch } from 'react-icons/fi'

import { Container, Brand, Menu, Search, Content, NewNote } from './styles';

import { Note } from '../../components/Note'
import { Input } from '../../components/Input'; 
import { Header } from '../../components/Header';
import { Section } from '../../components/Section';
import { ButtonText } from '../../components/ButtonText';

export function Home() {
    return (
        <Container>
            <Brand>
                <h1>RocketNotes</h1>
            </Brand>

            <Header />

            <Menu>
                <li>
                    <ButtonText title="Todos" />
                </li>
                <li>
                    <ButtonText title="React" isactive />
                </li>
                <li>
                    <ButtonText title="NodeJS" />
                </li>
            </Menu>

            <Search>
                <Input icon={FiSearch} placeholder="Pesquisar pelo título" />
            </Search>

            <Content>
                <Section title="Minhas notas">
                    <Note data={{
                            title: 'React',
                            tags: [
                                    { id: '1', name: 'React'},
                                    { id: '2', name: 'ReactJS'}
                                ]
                        }} />

                </Section>
            </Content>

            <NewNote to="/new">
                <FiPlus />
                Criar nota
            </NewNote>

        </Container>
    );
}