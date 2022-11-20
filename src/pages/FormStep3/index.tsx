import * as C from "./styles";
import {useForm, FormActions} from '../../contexts/FormContext'
import { Theme } from "../../components/Theme";
import { useNavigate, Link } from "react-router-dom";
import { ChangeEvent, useEffect } from "react";

export const Step3 = () =>{
    const navigate = useNavigate();
    const {state, dispatch} = useForm();

    useEffect(()=>{
        if(state.name === ''){
            return navigate('/');
        } else{
            dispatch({
            type: FormActions.setCurrentStep,
            payload: 3
        }); 
        }
    },[]);

    const handleNextStep =()=>{
        if(state.email !== '' && state.gitHub !== ''){
          return navigate('/step4'); 
        } else{
            alert("Preencha os dados!");
        }
        
    }

    const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) =>{
        dispatch({
            type: FormActions.setEmail,
            payload: e.target.value
        })
    }
    const handleGitHubChange = (e: ChangeEvent<HTMLInputElement>) =>{
        dispatch({
            type: FormActions.setGitHub,
            payload: e.target.value
        })
    }
    return(
        <Theme>
            <C.Container>
                <p>Passo {state.currentStep}/3</p>
                <h1>Ok {state.name}, onde te achamos?</h1>
                <p>Preencha com seus contatos!</p>
                <hr />
                <label htmlFor="">
                    Qual o seu e-mail?
                    <input 
                        type="email" 
                        value={state.email}
                        onChange={handleEmailChange}
                    />
                </label>
                <label htmlFor="">
                    Qual o seu GitHub?
                    <input 
                        type="url" 
                        value={state.gitHub}
                        onChange={handleGitHubChange}
                    />
                </label>
                <Link className="previousButton" to={"/step2"}>Voltar</Link>
                <button onClick={handleNextStep}>Finalizar Cadastro</button>
            </C.Container>  
        </Theme>
    );
}