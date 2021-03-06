import React from 'react';
import Card from "./Card";
import Sdata from "./Sdata";

const Services = () =>  {
  return (
    <>

<div calssName="my-5">
      <h1 calssName="text-center">Our Services</h1>
    </div>

    

    <div className="container-fluid mb-5">
            <div className="row">
                <div className="col-10 mx-auto">
                  <div className="row ">
                      
                      {

                       Sdata.map((val, index) => {
                         return <Card 
                         key = {index}
                         imgsrc = {val.imgsrc}
                         title = {val.title}
                         />
                       })
                      }
                     
                    </div>
                    </div>
                    </div>
                    </div>
                     
    </>
  );
}

export default Services;
