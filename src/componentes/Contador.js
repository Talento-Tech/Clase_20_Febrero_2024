import React, {useState} from "react";

export default function Contador(){
    conts[numero, setNumero] = useState(0);

    const aumentar = () => {
        setNumero(numero + 1)
    };

    const disminuir = () => {
        setNumero(numero - 1)
    };

    return(
        <div>
            <h1>Contador</h1>
            <p>Número actual: {numero}</p>
            <button onClick={aumentar}>Aumentar</button>
            <button onClick={disminuir}>Disminuir</button>
        </div>
    );
};

