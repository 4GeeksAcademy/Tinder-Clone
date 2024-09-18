import React from 'react';
import { HomeNotLogHeader } from '../component/HomeNotLogHeader.jsx';

export const HomeSecurity = () => {    
    return (
        <div className="container-fluid px-0">
            <HomeNotLogHeader isDisplayed={false} />
            <div className='container-fluid border border-secondary border-1 px-0 mx-0'></div>
            <div className='container p-3 text-start'>
                <h1 className='text-start'> Consejos de seguridad para las citas</h1>
                <p className="text-start mb-3">Conocer gente nueva es emocionante, pero siempre debes tener cuidado al relacionarte con alguien que no conoces. Usa tu buen criterio y antepón tu seguridad, ya sea que estén intercambiando mensajes iniciales o reuniéndose en persona. Si bien no puedes controlar las acciones de los demás, hay cosas que puedes hacer para preservar tu seguridad durante tu experiencia con Tinder.</p>
                <h2 className="fs-2"> Seguridad en línea</h2>
                <ul>
                    <li>
                        <p className='fs-4 fw-semibold'>Nunca envíes dinero ni compartas información financiera</p>
                        <p>Nunca envíes dinero, especialmente por transferencia bancaria, incluso si la otra persona afirma estar en una emergencia. Transferir dinero es como enviar efectivo. Es casi imposible revertir la transacción o rastrear a dónde fue el dinero. Nunca compartas información que pueda ser utilizada para acceder a tus cuentas financieras. Si otrx usuarix te pide dinero, envíanos un reporte de inmediato.</p>
                        <p className='mb-0'>Para obtener consejos sobre cómo evitar estafas románticas, consulta algunas recomendaciones del <a target='_blank' href='https://www.gob.pe/institucion/mininter/campa%C3%B1as/52058-no-caigas-en-estafas-romanticas'>Ministerio del Interior del Perú.</a></p> 
                    </li>
                    <li>
                        <p className='fs-4 fw-semibold'>Protege tu información personal</p>
                        <p className='mb-0'>Nunca compartas información personal, como tu número de seguro social, dirección de casa o trabajo, o detalles sobre tu rutina diaria (por ejemplo, que vas a un determinado gimnasio todos los lunes) con personas que no conozcas. Si eres padre/madre de familia, limita la información que compartes sobre tus hijxs en tu perfil y en comunicaciones iniciales. Evita compartir detalles como los nombres de tus hijxs, dónde van a la escuela, o sus edades o géneros.</p> 
                    </li>     
                    <li>
                        <p className='fs-4 fw-semibold'>Quédate en la plataforma</p>
                        <p className='mb-0'>Mantén conversaciones en la plataforma de Tinder mientras conoces a alguien. Debido a que los intercambios en Tinder están sujetos a nuestros Filtros de mensajes seguros, lxs usuarixs con malas intenciones a menudo intentan mover de inmediato la conversación a mensajes de texto, apps de mensajería, correo electrónico o teléfono.</p> 
                    </li>               
                    <li>
                        <p className='fs-4 fw-semibold'>Desconfía de las relaciones a larga distancia y en el extranjero</p>
                        <p className='mb-0'>Cuidado con los estafadores que dicen ser de tu país pero se quedaron atrapados en otro lugar, especialmente si piden ayuda financiera para regresar a casa. Desconfía de cualquiera que no quiera verte en persona o hable por teléfono/videollamada, ya que puede que no sea quien dice ser. Si alguien está evitando tus preguntas o presionando por una relación seria sin verte o conocerte primero, eso es una señal de alerta.</p> 
                    </li>               
                    <li>
                        <p className='fs-4 fw-semibold'>Denuncia todos los comportamientos sospechosos y ofensivos</p>
                        <p className='mb-0'>Sabes cuando alguien ha cruzado la línea y cuando lo hace, queremos saberlo. Bloquea y denuncia a cualquier persona que viole nuestros términos. Estos son algunos ejemplos de infracciones:</p> 
                        <ul>
                            <li>Solicitar dinero o donaciones.</li>
                            <li>Usuarios menores de edad.</li>
                            <li>Acoso, amenazas y mensajes ofensivos.</li>
                            <li>Comportamiento inapropiado o dañino durante o después de verse en persona.</li>
                            <li>Perfiles fraudulentos.</li>
                            <li>Spam o captación de datos, incluidos enlaces a sitios web comerciales o intentos de vender productos o servicios.</li>
                        </ul>
                    </li>               
                </ul>
            </div>
        </div>
    )
}