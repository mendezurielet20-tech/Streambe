import React, { useState } from 'react';

function MiComponente() {
    const [contador, setContador] = useState(0);

    function incrementar() {
        setContador(contador + 1); // Actualiza la UI
    }

    return (
        <>
            <div>
                Contador: {contador}
                <button onClick={incrementar}>Incrementar</button>
            </div>
        </>
    );
}

export default MiComponente;