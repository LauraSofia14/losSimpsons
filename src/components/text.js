import {useState, useEffect} from 'react';
import React from 'react';
import '../components/fondo.css';

const Text =() =>{
    const [frase, setFrase] = useState("");
    const [dato, setDato] = useState("bart");

    useEffect(() => {
        fetch(`https://thesimpsonsquoteapi.glitch.me/quotes?character=${dato}`)
            .then(response => response.json())
            .then(data => {
                if (Array.isArray(data) && data.length > 0) {
                    console.log(data[0].quote);
                    setFrase(data[0].quote);
                } else {
                    throw new Error('La respuesta de la API no contenía datos válidos.');
                }
            })
            .catch(error => {
                console.error('Ocurrió un error al obtener los datos:', error);
            });
    }, [dato]);

    return(
        <>
        <div>
            <h1 className='fondo'> { frase }</h1> 
        </div>
        </>
        )

}
export default Text;  