import { Route, BrowserRouter, Routes } from "react-router-dom";
import { Step1 } from "./pages/FormStep1/Index";
import { Step2 } from "./pages/FormStep2";
import { Step3 } from "./pages/FormStep3";
import { Step4 } from "./pages/FormStep4";

export const Router = () =>{
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Step1/>} />
                <Route path="/step2" element={<Step2/>} />
                <Route path="/step3" element={<Step3/>} />
                <Route path="/step4" element={<Step4/>} />
            </Routes>
        </BrowserRouter>
    );
}