import * as C from "./styles";
import {useForm, FormActions} from '../../contexts/FormContext'
import { Theme } from "../../components/Theme";
import { useNavigate, Link } from "react-router-dom";
import { ChangeEvent, useEffect } from "react";
import { SelectOption } from "../../components/SelectOption";

export const Step2 = () =>{
    const navigate = useNavigate();
    const {state, dispatch} = useForm();

    useEffect(()=>{
        if(state.name === ''){
            return navigate("/");
        } else{
          dispatch({
            type: FormActions.setCurrentStep,
            payload: 2
        });  
        }
    },[]);

    const handleNextStep =()=>{
        if(state.name !== ""){
          return navigate("/step3"); 
        } else{
            alert("Preencha os dados!");
        }
    }
    const setLevel =(level: number) =>{
        dispatch({
            type: FormActions.setLevel,
            payload: level
        })
    }
    const handlePreviousStep =()=>{
          return navigate("/");     
    }
    return(
        <Theme>
            <C.Container>
                <p>Passo {state.currentStep}/3</p>
                <h1>Olá {state.name}, qual o seu nivel na programação? </h1>
                <p>Escolha a opção que seja condizente com seu nivel!</p>
                <hr />

                <SelectOption
                    title="Sou Iniciante!"
                    description="Comecei a programar a menos de 2 anos!"
                    icon="🤓"
                    selected={state.level === 0}
                    onClick={()=>setLevel(0)}
                />

                <SelectOption
                    title="Sou Pleno!"
                    description="Comecei a programar a mais de 2 anos!"
                    icon="😎"
                    selected={state.level === 1}
                    onClick={()=>setLevel(1)}
                />

                <SelectOption
                    title="Sou Senior!"
                    description="Comecei a programar a mais de 6 anos!"
                    icon="👨‍🎓"
                    selected={state.level === 2}
                    onClick={()=>setLevel(2)}
                />
                <Link className="previousButton" to={"/"}>Voltar</Link>
                <button onClick={handleNextStep}>Próximo</button>
            </C.Container>  
        </Theme>
    );
}