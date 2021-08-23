import React from "react";
import Product from './Product/Product';
import Btn from '../Button/Button'
import {products} from './data'

const Products = () => {
    
    const prods = products.map((product, ind) => {
        let periodInd = product.text.indexOf(".")
        return(
                <Product 
                key={ind}
                header={product.header}
                text={product.text.slice(0, periodInd)}
                image={product.image}
                 />
            )})

    return(
    <section className="p-5 products bg-light">
        <div className="container-fluid" id="products">
            {/* <!-- title --> */}
            <div className="row text-dark text-center">
                <div className="col m-4">

                    <h2 className="h2 lead-anim">At Cetrine Technologies Limited we deliver on every aspect of a complete Hybrid
                    IT solution through any
                    combination
                    of the following products.</h2>
                </div>
            </div>
            {/* <!-- end of title --> */}
            <div className="row justify-content-center my-5">
{prods}
               </div>

            <div className={"row p-3 text-light bg-dark "}>
                <div className="col m-4">
                    <h4 className="h4 ">We are a team that exudes a blend of creativity, responsibility,
                    and natural love for solving puzzles through custom-designed solutions for clients from broad spectrums of the industry.
                    We support clients from virtually every industry out there,
                    be it healthcare, manufacturing, financial services, retail, education, and governments, you name them!
           </h4>
                </div>
                <div className={"col m-4 py-4 text-center "}>
                    <Btn btnHref={"#products"} title={"See Our products"} />
                </div>

            </div>

        </div>
    </section>)};

export default Products;




//   <div className="col-md-5 col-lg-3 text-center">
//                     <div className="card contact_card m-1">
//                      
//                  <Image className=" card-img-top  img-fluid mb-3" alt="A printer with a caption saying print management solutions" src={PrinterService} />
//                  <div className="card-body">
//                      <p className="text-muted card-text">Our clients choose our print management solutions for a number
//                      of reasons, but one thing that has been realized from every of our relationships is reduced
//              cost.</p>
//                  </div>
//              </div>
//          </div>

//          <div className="col-md-5 col-lg-3  text-center">
//              <div className="card contact_card m-1">
//                  {/* <i className="fa fa-hospital-o fa-5x text-warning mb-4"></i> */

//                  <Image className=" card-img-top  img-fluid mb-3" height="4240"
//                      alt="A medical practitioner looking at through a microscope with a caption saying Hospital management system" src={HospitalService} />
//                  {/* <h3 className="h2 mb-3 card-title">Hospital Management System
//          </h3> */}
//                  <div className="card-body">
//                      <p className="text-muted card-text">Access to accurate and meaningful information remains high on the demand list of all
//                      stakeholders within the healthcare ecosystem. </p>
//                  </div>
//              </div>
//          </div>
//          <div className="col-md-5 col-lg-3  text-center">
//              <div className="card contact_card m-1">

//                  <Image className=" card-img-top  img-fluid mb-3" height="4240"
//                      alt="A medical practitioner looking at through a microscope with a caption saying Hospital management system"
//                      src={ErpService} />
//                  <div className="card-body">
//                      <p className="text-muted card-text"> We partner with the best locally and internationally to
//                      deliver tailored ERP systems to meet your business needs. </p>
//                  </div>
//              </div>
//          </div>
//          <div className="col-md-5 col-lg-3 text-center">
//              <div className="card contact_card m-1">

//                  <Image className=" card-img-top  img-fluid mb-3"
//                      alt="A medical practitioner looking at through a microscope with a caption saying Hospital management system"
//                      src={DocumentService} />
//                  <div className="card-body">
//                      <p className="text-muted card-text"> With conventional document
//                      management approaches, a file room or storage is needed; with staff to manage the
//                      organization’s
//              data.</p>
//                  </div>
//              </div>
//          </div>
    
