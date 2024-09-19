import React from 'react';
import NewPostButton from "../component/NewPostButton.js"

export const HomeSubscriptionHeader = () => {
    return (
        <section className='header-subscription'>
            <div className='container-fluid'>
                <div className='container'>
                    <div className="row">
                        <div className="col-lg-5 order-lg-1 col-md-10 order-md-2 col-sm-10 order-sm-2">
                            <h2>Match. Chatea. Conoce. Clipper.</h2>
                            <p>Expande tu círculo social y conéctate con gente cerca y lejos. Estás a punto de vivir la mejor experiencia de citas en línea. Solo necesitas unas buenas fotos y una buena biografía para destacar.</p>
                            <NewPostButton />
                        </div>
                        <div className="col-lg-5 order-lg-2 col-md-10 order-md-1 col-sm-10 order-sm-1">
                            <div className='container position-relative'>
                                <div className='position-absolute stack '>
                                    <img loading='lazy' src="https://tinder.com/static/build/build-ssg/static/liela-19413b3a6d7b271bf49db3834030f3af.webp" alt="" />
                                </div>
                                <div className='position-absolute stack'>
                                    <img loading='lazy' src="https://tinder.com/static/build/build-ssg/static/maya-c1edb8602c0e130ac6531157617efdcf.webp" alt="" />

                                </div>
                                <div className='position-absolute stack'>
                                    <img loading='lazy' src="https://tinder.com/static/build/build-ssg/static/niki-b9a7961a1e60971fe8beee0e4eb0b3c3.webp" alt="" />
                                </div>

                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}


