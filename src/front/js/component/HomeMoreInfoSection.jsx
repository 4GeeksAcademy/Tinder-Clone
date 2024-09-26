import React from "react";
import { useNavigate } from "react-router-dom";

export const HomeMoreInfoSection = () => {
    const navigate = useNavigate();
    const onClickHandler = ()=>{
        navigate('/')
    }
    return (
        <section style={{width:'50dvw'}}>
            <article >
                <header style={{width:'100%'}}>
                    <h1 style={{color:'white'}}>
                        <em>¿POR QUÉ USAR CLIPED?</em>
                    </h1>
                    <p className="text-start mt-4" style={{color:'#B9BFBB'}}>Cliped nació ante la necesidad de muchos usuarios de buscar relaciones de dependencia consensuada, esto mismo para evitar lo que en muchas ocasiones terminan recayendo en decepciones, infidelidades o situaciones incómodas. En Cliped, los usuarios entienden su rol y conocen a las beneficios que estos conllevan, evitando así malentendidos futuros, y llevando así relaciones sinceras y amenas.
                    </p>
                    <p className="text-start mt-3" style={{color:'#B9BFBB'}}>
                    En orden de mantener la seguridad de los usuarios y permitirles enfocarse en la búsqueda de su relación ideal, Cliped verifica la identidad de cada uno de sus usuarios para evitar estafas o peligros futuros. 
Cliped es más que una aplicación de citas, Cliped es una puerta a la sinceridad y rompimiento de tabúes. Sé diferente, haz Clip.
                    </p>
                </header>
                <footer>
                    <button className="create-home-btn home-btn" onClick={onClickHandler}>Crear una cuenta</button>
                </footer>
            </article>
        </section>
    )
}