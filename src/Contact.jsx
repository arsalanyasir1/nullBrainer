import React from 'react';

const Contact = () =>  {
  return (
    <>
    <div className="my-5">
    
    <h1 className="text-center">Contact</h1>

    </div>

    <div className="container " style={{width: "100%", height: "75vh"}}>
      <div className="row">
        <div className="col-md-6 col-10 mx-auto">
          <form>
          
  <div class=" mb-3">
    <label for="exampleFormControlInput1">Full Name</label>
    <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Enter Your Name"/>
  </div>
  <div class="form-group">
    <label for="exampleFormControlInput1">Email address</label>
    <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
  </div>
  
  
  <div class="form-group">
    <label for="exampleFormControlTextarea1">Comments</label>
    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
  </div>

  <div className="col-12">


  <button class="btn btn-primary" type="submit">Submit form</button>

  </div>



          </form>
        </div>
      </div>
    </div>
    </>
  );
}

export default Contact;
