import React from 'react';
import ReactDOM from 'react-dom';
import {useState} from "react";
import * as serviceWorker from './serviceWorker';

// A ideia é criar um counter.
// Tópicos: Componentes, Hooks e Props

// Primeiro vamos incrementar o valor utilizando o hook useState com um valor inicial de 0
// Depois vamos guardar diferentes valores que são passados via PROPs para a função que incrementar o valor

// 2) Separar o código em componentes, no futuro fica cada um no seu ficheiro
function Button(props) {
    const handleClick = () => props.onClickFunction(props.increment);
    return (
        <button onClick={handleClick}>
            +{props.increment}
        </button>
    );
}

// 3) É importante separar as funcionalidades em componentes.
function Display(props) {
    return (
        <div>{props.message}</div>
    );
}

function App() {

    // Utilizar hooks para atualizar o estado
    const [counter, setCounter] = useState(0);

    const incrementCounter = (incrementValue) => setCounter(counter+incrementValue);

    // Os componentes têm que ter uma letra maiuscula, se for minuscula o ReactJS não vai interpretar o mesmo como um componente
    return (
        <div>
            <Button onClickFunction={incrementCounter} increment={1} />
            <Button onClickFunction={incrementCounter} increment={5} />
            <Button onClickFunction={incrementCounter} increment={10} />
            <Button onClickFunction={incrementCounter} increment={100} />
            <Display message={counter}/>
        </div>
    );

    // 1) Se apenas queremos atualizar com um valor fixo (1)
    //const [counter, setCounter] = useState(0);
    //return <button onClick={() => setCounter(counter+1)}>{counter}</button>;
}


ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

