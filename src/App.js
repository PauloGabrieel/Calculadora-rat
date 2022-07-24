import { useState } from "react";
import styled from "styled-components";


export default function App(){
    const [form, setForm] = useState({
        custoAtual: "",
        custoStone: "",
        tpv: "",
        sku:""
    });
    const [rateio, setRateio] = useState(0);
    const [showResult, setShowResult] = useState(false);

    function handleForm(e){
        setForm({
            ...form, 
            [e.target.name]: e.target.value,
        })
        
    };
    function calcRat(e){
        e.preventDefault();
        const emptyField = (form.custoAtual === ""|| form.custoStone === "" || form.sku === "" || form.tpv === ""); 
        if(emptyField){
            alert("Todos os campos devem ser preenchidos");
            return;
        }
        const res = ((((form.custoStone/100)-(form.custoAtual/100))* form.tpv)/form.sku).toFixed(2); 
        setRateio(res);
        setShowResult(true);
        
    };
    function clearTheForm(e){
        e.preventDefault();
        setForm({
            custoAtual: "",
            custoStone: "",
            tpv: "",
            sku:""
        });
        setRateio(0);
        setShowResult(false);
    };
    console.log(form)
    return(
        <Container >
            <Title>Calculadora de Rateio</Title>
            <form onSubmit={calcRat}>
                <div>
                    <label htmlFor="campoAtual">CUSTO ATUAL:</label>
                    <input id="campoAtual" type="number" name="custoAtual" 
                    value={form.custoAtual} onChange={handleForm} required/>
                </div>
                <div>
                    <label htmlFor="campoStone">CUSTO STONE:</label>
                    <input id="campoStone" type="number" name="custoStone"
                    value={form.custoStone} onChange={handleForm} required/>
                </div>
                <div>
                    <label htmlFor="campoTpv">TPV:</label>
                    <input id="campoTpv" type="number" name="tpv"
                    value={form.tpv} onChange={handleForm} required/>    
                </div>
                <div>
                    <label htmlFor="campoSku">SKU:</label>
                    <input id="campoSku" type="number" name="sku"
                    value={form.sku} onChange={handleForm} required/>
                </div>
                <ContainerButton>
                    <button type="submit" onClick={calcRat}>Calcular</button>
                    <button onClick={clearTheForm}>Limpar</button>
                </ContainerButton>
            </form>
            
            {showResult?<Result><span>Rateio:</span><span>R$  {rateio}</span></Result>:<></>}
        </Container>
    );
};

const Title = styled.h1`
    font: 700 26px 'Raleway', sans-serif;
    color: #FFFFFF;
    margin-bottom: 30px;
`
const Container = styled.div`
    padding:35px;
    height: 100vh;
    background-color: #00A868;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
    color: #FFFFFF;

    form{
        max-width: 395px;
        display: flex;
        flex-direction: column;
        gap: 10px;
        input{
            border: none;
            border-radius: 5px;
            padding: 5px 0;
            text-align: center;
        }
    };

    div{
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 314px;
    }
`;
const ContainerButton = styled.div`
    margin-top: 35px;
    button{
        background-color: #2eba12;
        height: 46px;
        color: #FFFFFF;
        border: none;
        border-radius: 5px;
        font: 700 20px 'Raleway', sans-serif; 
        cursor: pointer;
        &:last-child{
            background-color: red;
        }
    }
`;
const Result = styled.div`
    border-radius: 5px;
    width: 100%;
    height: 40px;
    background-color: #FFFFFF;
    color:black;
    display:flex;
    align-items: center;
    justify-content: center;
    span{
        margin: 0 30px;
        font: 400 18px 'Roboto', sans-serif;
    }
`;