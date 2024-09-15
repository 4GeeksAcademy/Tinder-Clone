import React from "react";
import date1 from "../../../../docs/assets/date-img1.png"
import date2 from "../../../../docs/assets/moreInfoimg2.png"
import date3 from "../../../../docs/assets/moreinfoimg3.png"

export const HomeMoreInfoSectionColumn = () => {

    return (
        <div className="row text-light">
            <div className="col-md-2 col-sm-0"></div>
            <div className="col-md-4 col-sm-12">
                <div className="mt-4 mb-4">
                    <div>
                        <section className="mt-2 mb-3">
                            <h2>Explora tu ciudad</h2>
                            <p>Desde la comodida de casa! conoce personas cerca de tu localidad. Contacta y descubre personas con gustos similares a los tuyos y has un <b>Match</b>.</p>
                        </section>
                    </div>
                    <div>
                        <img className="img-fluid" src={date1} alt="" style={{ width: '100%' }} />
                    </div>
                </div>
                <div className="mt-4 mb-4">
                    <div>
                        <section className="mt-2 mb-3">
                            <h2>Sube una foto para empezar</h2>
                            <p>Tómate una selfie para darte a conocer por tu ciudad, este es el momento.</p>
                        </section>
                    </div>
                </div>
                <div className="mt-4 mb-4">
                    <div>
                        <section className="mt-2 mb-3">
                            <h2>Descubre quién te dió like</h2>
                            <p>Con el nivel <a>Vip</a> podrás saber quién o quienes dieron like a tu perfil.</p>
                        </section>
                    </div>
                </div>
                <div className="mt-4 mb-4">
                    <div>
                        <section className="mt-2 mb-3">
                            <h2>Haz que tus likes impresionen</h2>
                            <p>Los likes prioritarios del nivel <a>Premium</a> sorprenderá a otros usuarios, esta exclusiva funcion muestra tu perfil a la gente que te gusta más rápido!</p>
                        </section>
                    </div>
                    <div>
                        <img className="img-fluid" src={date2} alt="" style={{ width: '100%' }} />
                    </div>
                </div>
            </div>
            <div className="col-md-4 col-sm-12">
                <div className="mt-4 mb-4">
                    <div>
                        <section className="mt-2 mb-3">
                            <h2>Tinder te acompaña donde sea!</h2>
                            <p>Con la versión actual podrás interactuar con personas que vivan en Perú! pero no te desanimes, pronto abriremos nuestras puertas para otros países!</p>
                        </section>
                        <section className="mt-2 mb-3">
                            <h2>Video llamadas seguras</h2>
                            <p>Contextos como el COVID-19 mostraron la necesidad de la digitalización de medios y como tal modificó la interacción de individuos, con el fin de cuidarte y evitar contagios tenemos la opción de realizar una videollamada y sin la preocupación de que vulneren tu privacidad debido a la encriptación end-to-end</p>
                            <div>
                                <img className="img-fluid" src={date3} alt="" style={{ width: '100%' }} />
                            </div>
                        </section>
                    </div>
                </div>
            </div>
            <div className="col-md-2 col-sm-0"></div>
        </div>
    )
}