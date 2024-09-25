import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext.js";
import { HomeNotLogBody } from "../component/HomeNotLogBody.jsx";
import { HomeNotLogFooter } from "../component/HomeNotLogFooter.jsx";
import { HomeNotLogHeader } from "../component/HomeNotLogHeader.jsx";
import background from "../../../../docs/assets/bgHooker1.png";
import { Facebook, Instagram, X } from "lucide-react";

export const HomeNotLog = () => {
    const { store, actions } = useContext(Context);

    useEffect(() => {
        actions.getReviews();
        actions.getUsers();
    }, []);

    return (
        <section>
            <div className="container-fluid bg-img-home" style={{ backgroundImage: `url(${background})`, opacity: '0.7' }}>
                <header className="mb-5" style={{ position: 'sticky', top: 0, color: 'white', opacity: 'none' }}>
                    <HomeNotLogHeader isDisplayed={true} />
                </header>
                <div className="container-fluid d-flex my-auto" style={{ zIndex: '2' }}>
                    <HomeNotLogBody />
                </div>
            </div>
            <footer style={{ backgroundColor: '#111418', zIndex: '1' }}>
                <div className="container-fluid m-0 p-0">
                    <div className="container d-flex justify-content-between wrapper pt-4 text-light" style={{ maxWidth: '80vw', overflowX: 'auto', columnGap: '30px' }}>
                        {store.users?.length > 0 && store.reviews?.length > 0 && store.reviews.map((review, index) => {
                            const user = store.users.find(user => user.id === review.user_id);
                            return user ? <HomeNotLogFooter key={index} name={user.name} content={review.content} /> : null;
                        })}
                    </div>
                    <div className="container-fluid" style={{ zIndex: '2', padding: '3rem 0 1rem 0' }}>
                        <h2 style={{ color: "white" }}>REDES SOCIALES</h2>
                        <div className="container d-flex" style={{ color: 'white' }}>
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
    );
};