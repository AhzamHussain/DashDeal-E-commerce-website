import React from 'react'
import Breadcrum from '../Components/Breadcrum'
import Newsletter from '../Components/Newsletter'
import Serviice from '../Components/Serviice'
import Faq from '../Components/Faq'

export default function FaqPage() {
    return (
        <>
            <Breadcrum title="Features" />
            <Faq />
            <Serviice/>
            <Newsletter />
        </>
    )
}
