import './App.css';
import styled from 'styled-components'

const Styles = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
`

const MainCalculator = styled.div`
  border:  1px red solid;
  width: 800px;
  height: 400px;
  display: flex;
  border-radius: 25px;
  `

const CalculatorLeftSide = styled.div`
  width: 46%;
  height: 90%;
  border: 1px solid blue;
  border-radius: 25px;
  margin-right: 25px;
  
  p {
    margin-top: 15px;
    margin-left: 5%;
  }

  .parent {
display: grid;
grid-template-columns: repeat(3, 1fr);
grid-template-rows: repeat(2, 1fr);
grid-column-gap: 15px;
grid-row-gap: 15px;
margin-bottom: 25px;
height: 120px;
}

.div1 { 
  grid-area: 1 / 1 / 2 / 2; 
  width: 20%
  height: 75px;
  border: 1px solid red;
  text-align: center;
}
.div2 { 
  grid-area: 1 / 2 / 2 / 3; 
width: 20%
  height: 75px;
  border: 1px solid red;
  text-align: center;
}
.div3 { 
  grid-area: 1 / 3 / 2 / 4;
width: 20%
  height: 50px;
  border: 1px solid red;
  text-align: center;
}
.div4 { 
  grid-area: 2 / 1 / 3 / 2; 
width: 20%
  height: 50px;
  border: 1px solid red;
  text-align: center;
}
.div5 { 
  grid-area: 2 / 2 / 3 / 3; 
  width: 20%
  height: 50px;
  border: 1px solid red;
  text-align: center;
}
.div6 { 
  grid-area: 2 / 3 / 3 / 4; 
  width: 20%
  height: 50px;
  border: 1px solid red;
  text-align: center;
}

  `

const CalculatorRightSide = styled.div`
  width: 46%;
  height: 85%;
  border: 1px solid blue;
  border-radius: 25px;
  margin-top: 40px;
      `

const TipAmountContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  border: 1px solid purple;
  width: 90%;
  margin-left: 5%;
  margin-top: 25px;
  height: 75px;
`
const LeftText = styled.p`

`

const Number = styled.div`

`

const Button = styled.button`
  width: 90%;
  margin-left: 5%;
  margin-top: 50px;
  height: 50px;
  border-radius: 5px;
`
const InputBox = styled.div`
  border: 1px solid blue;
  height: 35px;
  border-radius: 5px;
  width: 90%;
  margin-left: 5%;
  margin-bottom: 25px;
`

function App() {
  // total bill amount
  //amount of people
  //tip percentage


  return (
    <Styles>
      <MainCalculator> 
        <CalculatorLeftSide>
           <p>Bill</p>
           <InputBox></InputBox>
           <p>Select tip %</p>
          <div className="parent">
            <div onClick={() => console.log("Clicked!")} className="grid-item" className="div1">5% </div>
            <div  onClick={() => console.log("Clicked!")}className="grid-item" className="div2">10% </div>
            <div onClick={() => console.log("Clicked!")} className="grid-item" className="div3">15% </div>
            <div className="grid-item" className="div4">25% </div>
            <div className="grid-item" className="div5">30% </div>
            <div className="grid-item" className="div6"> CUSTOM </div>
          </div>
           <p>Number of people</p>
            <InputBox></InputBox>
        </CalculatorLeftSide>

        <CalculatorRightSide>
          <TipAmountContainer>
            <LeftText>Random text</LeftText>
            <Number> $4.79</Number>
          </TipAmountContainer>
          <TipAmountContainer>
            <LeftText>Random text</LeftText>
            <Number> $4.79</Number>
          </TipAmountContainer>
          <Button onClick={() => console.log("Clicked!")}> Calculate </Button>
        </CalculatorRightSide>
      </MainCalculator>

    </Styles>
  );
}

export default App;
