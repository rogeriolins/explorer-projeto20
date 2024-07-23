import { Container } from './styles';
import { Profile } from './styles';

export function Header(){
    return (
        <Container>   
            <Profile>
                <img 
                    src="https://github.com/rogeriolins.png"
                    alt="Foto do Usuário" 
                />
                <div>
                    <span>Bem vindo,</span>
                    <strong>Rogério Lins</strong>
                </div>
            </Profile>

        </Container>
    );
}