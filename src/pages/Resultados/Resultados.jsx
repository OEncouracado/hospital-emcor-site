import React from 'react'
import { Breadcrumb } from '../../components/breadcrumb/Breadcrumb';
import useFetch from 'react-fetch-hook'
import GridLoader from 'react-spinners/GridLoader'


export default function Resultados() {
  const Iframe = document.getElementById('frame');
  // const site = Iframe.getAttribute('id');
  const  { isLoading }  = useFetch(Iframe);

  console.log(Iframe);

  return (<>
    { isLoading ? 
    <div className="container d-flex align-items-center justify-content-center" style={{height:'600px'}}> 
      <GridLoader color={'grey'} loading={'true'} size={10} />
    </div> 
    : 
    <iframe 
    id="frame" 
    className='w-100' 
    style={{height:'600px'}} 
    title='medcloud' 
    src="https://www.medcloud.co/?page=emcor" 
    frameborder="0" 
    loading='lazy'/>}

    <Breadcrumb crumb="Resultados"/> 
  </>);
}
