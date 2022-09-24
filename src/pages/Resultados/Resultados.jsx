import React from 'react'
import { Breadcrumb } from '../../components/breadcrumb/Breadcrumb';
import useFetch from 'react-fetch-hook'
import GridLoader from 'react-spinners/GridLoader'
import Iframe from '../../components/Iframe';



export default function Resultados() {
  
  const  { isLoading }  = useFetch(Iframe);

  return (<>
    { isLoading ? 
    <div className="container d-flex align-items-center justify-content-center" style={{height:'600px'}}> 
      <GridLoader color={'grey'} loading={'true'} size={10} />
    </div> 
    : 
    <Iframe/> }

    <Breadcrumb crumb="Resultados"/> 
  </>);
}
