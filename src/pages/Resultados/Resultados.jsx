import React from 'react'
import { Breadcrumb } from '../../components/breadcrumb/Breadcrumb';

export default function Resultados() {
  return (<>
    <iframe className='w-100' style={{height:'600px'}} title='medcloud' src="https://www.medcloud.co/?page=emcor" frameborder="1"></iframe>

    <Breadcrumb crumb="Resultados"/>
  </>);
}
