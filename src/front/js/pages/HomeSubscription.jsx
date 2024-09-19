import React from 'react'
import { HomeSubscriptionHeader } from '../component/HomeSubscriptionHeader.jsx'
import { HomeNotLogHeader } from '../component/HomeNotLogHeader.jsx'

export const HomeSubscription =()=> { 
    return (
        <div>
            <HomeNotLogHeader isDisplayed={true}/>
            <HomeSubscriptionHeader/>
        </div>
    )
}