import styled from "styled-components";

export default function App(){
    return(
        <Container>
            <Title>Calculadora de Rateio</Title>
            <form>
                <div>
                    <label htmlFor="campoAtual">CUSTO ATUAL:</label>
                    <input id="campoAtual" type="number"></input>
                </div>
                <div>
                    <label htmlFor="campoStone">CUSTO STONE:</label>
                    <input id="campoStone" type="number"></input>
                </div>
                <div>
                    <label htmlFor="campoTpv">TPV:</label>
                    <input id="campoTpv" type="number"></input>    
                </div>
                <div>
                    <label htmlFor="campoSku">SKU:</label>
                    <input id="campoSku" type="number"></input>
                </div>
            </form>
            <ContainerButton>
                <button>Calcular</button>
                <button>Limpar</button>
            </ContainerButton>
        </Container>
    );
};

const Title = styled.h1`
    font: 700 32px 'Raleway', sans-serif;
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
    };

    div{
        display: flex;
        justify-content: space-between;
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