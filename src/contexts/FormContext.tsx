import { createContext, ReactNode, useContext, useReducer } from "react";

type State = {
    currentStep: number;
    name: string;
    level: 0 | 1 | 2;
    email: string;
    gitHub: string;
}

type Action = {
    type: FormActions;
    payload: any;
};

type ContextType={
    state: State;
    dispatch: (action: Action) => void;
}

type FormProviderProps = {
    children: ReactNode
}

const initialData:State = {
    currentStep: 0,
    name:'',
    level: 0,
    email:'',
    gitHub:''
}

const formContext = createContext<ContextType | undefined>(undefined);

export enum FormActions{
    setCurrentStep,
    setName,
    setLevel,
    setEmail,
    setGitHub
}

const formReducer = (state: State, action:Action) =>{
    switch(action.type) {
        case FormActions.setCurrentStep:
            return{...state, currentStep: action.payload};
        case FormActions.setName:
            return{...state, name: action.payload};
        case FormActions.setLevel:
            return{...state, level: action.payload};
        case FormActions.setEmail:
            return{...state, email: action.payload};
        case FormActions.setGitHub:
            return{...state, gitHub: action.payload};
        default:
            return state;
    }
}

export const FormProvider = ({children}: FormProviderProps) =>{
    const [state, dispatch] = useReducer(formReducer, initialData);
    const value = {state,dispatch};
    return(
        <formContext.Provider value={value}>
            {children}
        </formContext.Provider>
    );
}

export const useForm = () =>{
    const context = useContext(formContext);
    if(context === undefined){
        throw new Error('useForm precisa ser usado dentro do FormProvider');
    }
    return context;
}