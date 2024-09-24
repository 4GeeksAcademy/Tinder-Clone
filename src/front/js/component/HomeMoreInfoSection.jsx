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
                        <em>¿POR QUÉ ELEGIRNOS?</em>
                    </h1>
                    <p className="text-start mt-4" style={{color:'#B9BFBB'}}>... Es la web indicada si lo que es buscar es encontrar gente con gustos similares y que sean reales, hoy en dia surge la necesidad de filtrar posibles bots
                        y proteger la integridad de nuestros usuarios mientras hacen match es nuestra prioridad.
                    </p>
                    <p className="text-start mt-3" style={{color:'#B9BFBB'}}>
                        A diferencia de otras páginas web, nosotros solicitamos el documento de nacional de identidad con el fin mantener la tranquilidad de nuestros usuarios de que las personas
                        con las que contactan son realmente quien dice ser y lo mejor <em> NINGUNO DE TUS DATOS PERSONALES</em> seran visibles para otros usuarios.
                    </p>
                </header>
                <footer>
                    <button className="create-home-btn home-btn" onClick={onClickHandler}>Crear una cuenta</button>
                </footer>
            </article>
        </section>
    )
}