import React from 'react';
import { Breadcrumb } from '../../components/breadcrumb/Breadcrumb';
// import EmConstrucao from '../../components/emConstrucao/EmConstrucao';
import ContactUs from '../../components/Form/Form';

function Contato() {
    return (
    <>
        <ContactUs/>
        <Breadcrumb crumb="Contato"/>
    </>
    );
}

export default Contato;