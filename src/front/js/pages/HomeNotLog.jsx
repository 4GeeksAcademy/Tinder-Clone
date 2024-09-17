import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext.js";
import { HomeNotLogBody } from "../component/HomeNotLogBody.jsx"
import { HomeNotLogFooter } from "../component/HomeNotLogFooter.jsx"
import { HomeNotLogHeader } from "../component/HomeNotLogHeader.jsx"
import { SocialMedia } from "../component/SocialMedia.jsx"
import background from "../../../../docs/assets/bgHooker1.png"

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
                    <SocialMedia/>
                </div>
            </footer>
        </section>
    )
}