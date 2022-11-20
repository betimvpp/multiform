import { Theme } from "../../components/Theme";
import * as C from './styles';
import {useForm, FormActions} from '../../contexts/FormContext';
import { useEffect } from "react";

export const Step4 = () =>{
    const {state, dispatch} = useForm();

    return(
        <Theme>
            <C.Container>
                <C.Congrats>
                    <h1>🏆</h1>
                </C.Congrats>
                <C.Head>
                   Parabéns {state.name}, você acaba de concluir o seu cadastro!
                </C.Head>
                <C.Contact>
                    Vamos ver se você atende nossas especativas para o nivel 
                    {state.level === 0 ? " Junior" : 
                    (state.level === 1 ? " Pleno":" Senior")}!
                    <br />
                    Entraremos em contato no seu email: {state.email}!
                    <br />
                    E iremos analisar seus projetos no github {state.gitHub}!
                </C.Contact>
                
            </C.Container>
        </Theme>
    )
}