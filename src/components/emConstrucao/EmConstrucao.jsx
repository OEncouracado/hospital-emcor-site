import React from 'react';

function EmConstrucao() {
    return (
        <><div className="row">
            <div className='col-sm-12 d-flex justify-content-center align-items-center mt-5'>
                <i className="fa fa-cog fa-spin fa-2xl" aria-hidden="true" style={{fontSize:'5rem'}} ></i>
            </div>
        </div>    
        <div className="row">
            <div className='h1 col-sm-12 d-flex justify-content-center align-items-center mb-5'>
                <p className='text'>Em Construção </p><i className="fas fa-screwdriver-wrench fa-2xl" />
            </div>
        </div></>
    
    );
}

export default EmConstrucao;