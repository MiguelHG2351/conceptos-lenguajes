import React, { useState } from 'react'

export default function Example() {
    if (a > 1) {
        const [state, setState] = useState(0);
    } // Esto no se puede hacer

    const [state, setState] = useState(0) // Si es correcto

    console.log(state, setState)
    return (
        <h2>Hola Mundo</h2>
    )
}