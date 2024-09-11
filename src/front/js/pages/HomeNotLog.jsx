import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext.js";
import { HomeNotLogBody } from "../component/HomeNotLogBody.jsx"
import { HomeNotLogFooter } from "../component/HomeNotLogFooter.jsx"
import { HomeNotLogHeader } from "../component/HomeNotLogHeader.jsx"
import background from "../../../../docs/assets/bgHooker1.png"

export const HomeNotLog = () => {
    const { store, actions } = useContext(Context);
    useEffect(() => {
        actions.getReview()
    }, [])
    return (
        <section >
            <div className="container-fluid" style={{ backgroundImage: `url(${background})` }}>
                <header className="mb-5" style={{ position: 'sticky', top: 0 }}>
                    <HomeNotLogHeader />
                </header>
                <div className="container-fluid d-flex my-auto">
                    <HomeNotLogBody />
                </div>

            </div>
            <footer>
                <div className="container-fluid m-0 p-0" style={{ backgroundColor: 'black' }}>

                    <div className="container d-flex justify-content-between wrapper pt-4 text-light" style={{ maxWidth: '70vw', overflowX: 'auto' }}>
                        <HomeNotLogFooter />
                        <HomeNotLogFooter />
                        <HomeNotLogFooter />
                        <HomeNotLogFooter />
                        <HomeNotLogFooter />
                        <HomeNotLogFooter />
                        <HomeNotLogFooter />
                        <HomeNotLogFooter />
                        <HomeNotLogFooter />
                        <HomeNotLogFooter />
                        <HomeNotLogFooter />
                        <HomeNotLogFooter />
                    </div>

                    <div className="container">
                        <h2> REDES SOCIALES</h2>
                        <div className="container d-flex justify-content-between">

                        </div>
                    </div>
                </div>
            </footer>
        </section>
    )
}