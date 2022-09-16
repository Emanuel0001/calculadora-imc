import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';

function App() {

  const [metros, setMetros] = useState('');
  const [peso, setPeso] = useState('');
  const [resultado4, setResultado] = useState('');
  const [imc, setImc] = useState('');
  
  const [isMetrosValid, setIsMetrosValid] = useState(false);
  const [MetrosErroMessage, setMetrosErroMessage] = useState('');

  const [isPesoValid, setIsPesoValid] = useState(false);
  const [PesoErroMessage, setPesoErroMessage] = useState('');

  
  const submitForm = (event) => {
    event.preventDefault();
console.log("clicou")
    var div = window.document.getElementById('result');
    var altura = metros / 100;
    var resultado = peso / (altura * altura) ;
    var imc = resultado.toFixed(1);

    if (imc < 18.5) {
      setResultado('Você esta abaixo do peso!')
      setImc('IMC = '+imc)
      console.log(resultado4)
    }
    else if (imc > 18.5 && imc <= 25.9) {
      setResultado("Normal");
      setImc('IMC = '+imc)
      console.log(resultado4)
    }
    else if (imc > 25 && imc <= 29.9) {
      setResultado("Sobrepeso");
      setImc('IMC = '+imc)
      console.log(resultado4)
    }
    else if (imc > 30 && imc <= 39.9) {
      setResultado("Obesidade");
      setImc('IMC = '+imc)
      console.log(resultado4)
    }
    else if (imc >= 40) {
      setResultado("Obesidade grave");
      setImc('IMC = '+imc)
      console.log(resultado4)
    }
    else if (imc > 40 ) {
      setResultado("Obesidade Morbida");
      setImc('IMC = '+imc)
      console.log(resultado4)
    }
   
  }

  const validaAltura = (event) => {
    const metros = event.target.value;
    setMetros(event.target.value);

    if (metros.length > 1 && metros.length <=3 ){
      setIsMetrosValid(true);
      setMetrosErroMessage('---');
    } else {
      setIsMetrosValid(false);
      setMetrosErroMessage('x');
    }
    
  }

  const validaPeso = (event) => {
    const peso = event.target.value;
    setPeso(event.target.value);

    if(peso.length > 0 && peso.length <= 3 ) {
      setIsPesoValid(true);
      setPesoErroMessage('---')
    } else {
      setIsPesoValid(false);
      setPesoErroMessage('x')
    }
  }
  const disabledButton =( ) => {
  if(isMetrosValid && isPesoValid){
    return false;
  }
  else {
    return true;
  }
  }
  return (
    <div className="App">
  
      <div className='tabela'>
        <table border='1'>
            <tr>
              <th>IMC</th>
              <th>Entre 18,5 e 25,9</th>
              <th>Entre 25,0 e 29,9</th>
              <th>Acima de 30,0</th>
              <th>Maior que 40,0</th>
            </tr>
            <tr>
              <td>Classificação</td>
            <td>Normal</td>
            <td>Sobrepeso</td>
            <td>Obesidade</td>
            <td>Obesidade grave</td>
            </tr>
        </table>
        
      </div>
    
           <div className='todos'>
        <div className='calculadora'>
          <p>Para calcular o IMC (Índice de Massa Corporal), basta preencher os campos abaixo.</p>
          <h1>Calculadora</h1>
           <form onSubmit={submitForm}>
            <input
              class='botao'
              type='number'
              placeholder="Altura (Cm)"
              value={metros}
              size="3"
              onChange={validaAltura}
              step="0.01"></input>
               <div className={`message ${isMetrosValid ? 'success' : 'error'}`}>
                {MetrosErroMessage}
               </div>
            <input class='botao'
              type='number'
              placeholder="Peso (Kg)"
              value={peso}
              onChange={validaPeso}
            ></input>
             <div className={`message ${isPesoValid ? 'success' : 'error'}`}>
                {PesoErroMessage}
               </div>
               <div className='imc-calculadora'>{imc}  /  {resultado4}</div>
            <button 
            type='submit'
            disabled={disabledButton()}
            >Calcular</button>
          </form>
        </div>
          <div className='resultado'>
          <p className='paragrafo'>
            Ainda não sabe qual o seu Índice de Massa Corporal (IMC)? </p>
          <h4>Faça o cálculo aqui mesmo e conheça mais sobre o seu corpo.</h4>
          <div id="result" >{resultado4}</div>
          <div className='imc-resultado'>{imc}</div>
        </div></div>
          <footer><p>copyright © 2022</p> </footer>
        </div>
  );
}

export default App;
