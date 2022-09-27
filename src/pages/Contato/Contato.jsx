import React from 'react';
import { Breadcrumb } from '../../components/breadcrumb/Breadcrumb';
import Footer2 from '../../components/footer2/Footer2';
// import EmConstrucao from '../../components/emConstrucao/EmConstrucao';
import ContactUs from '../../components/Form/Form';
import Topbar from '../../components/topbar/Topbar';

function Contato() {
    return (
    <>
        <Topbar/>
        <ContactUs/>
        <Breadcrumb crumb="Contato"/>
        <Footer2/>
    </>
    );
}

export default Contato;