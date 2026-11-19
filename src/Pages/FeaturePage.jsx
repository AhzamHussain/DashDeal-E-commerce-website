import React from 'react'
import Breadcrum from '../Components/Breadcrum'
import Feature from '../Components/Feature'
import Newsletter from '../Components/Newsletter'
import Serviice from '../Components/Serviice'

export default function FeaturePage() {
    return (
        <>
            <Breadcrum title="Features" />
            <Feature />
            <Serviice/>
            <Newsletter />
        </>
    )
}
