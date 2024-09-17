import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext.js";
import { HomeNotLogBody } from "../component/HomeNotLogBody.jsx"
import { HomeNotLogFooter } from "../component/HomeNotLogFooter.jsx"
import { HomeNotLogHeader } from "../component/HomeNotLogHeader.jsx"
import background from "../../../../docs/assets/bgHooker1.png"
import { Facebook, Instagram, X } from "lucide-react";

export const HomeNotLog = () => {
    const { store, actions } = useContext(Context);
    useEffect(() => {
        actions.getReviews(),
        actions.getUsers()
    }, [])
    return (
        <section>
            <div className="container-fluid bg-img-home" style={{ backgroundImage: `url(${background})`, opacity: '0.7'}}>
                <header className="mb-5" style={{ position: 'sticky', top: 0, color: 'white', opacity: 'none' }}>
                    <HomeNotLogHeader />
                </header>
                <div className="container-fluid d-flex my-auto" style={{zIndex: '2'}}>
                    <HomeNotLogBody />
                </div>
            </div>
            <footer style={{ backgroundColor: '#111418', zIndex: '1' }} >
                <div className="container-fluid m-0 p-0" >
                    <div className="container d-flex justify-content-between wrapper pt-4 text-light" style={{ maxWidth: '80vw', overflowX: 'auto', columnGap: '30px' }}>
                        {store.reviews?.map((review,index) => <HomeNotLogFooter key={index} name={store.users.find(user=>user.id===review.user_id).name} content={review.content}/>)}
                    </div>
                    <div className="container" style={{zIndex: '2'}}>
                        <h2 style={{ color: "white" }}> REDES SOCIALES</h2>
                        <div className="container d-flex me-5" style={{ color: 'white' }}>
                            <div className="social-media">
                                <Instagram size={48} />
                            </div>
                            <div className="social-media">
                                <Facebook size={48} />
                            </div>
                            <div className="social-media">
                                <X size={48} />
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </section>
    )
}