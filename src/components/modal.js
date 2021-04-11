import React, { useState, useEffect } from "react";
import { Modal } from "react-bootstrap";
import search from "../search.png";

function ModalCard() {
   const [show, setShow] = useState(false);
   
   const handleShow = () => setShow(true);
 
   return (
     <div>
         <div className="add">
         <div className="d-flex justify-content-center">
           <button className="addbtn" onClick={handleShow}>
             +
           </button>
         </div>
       </div>
       <Modal
         scrollable={true}
         show={show}
         onHide={() => setShow(false)}
         size="lg"
         dialogClassName="modal-1"
         aria-labelledby="example-custom-modal-styling-title"
         centered
         className="modal"
       >
         <Modal.Body>
           <div className="header">
             <div className="search">
               <input type="text" placeholder="Find pokemon" id="searchinput" />
               <img src={search} className="searchimg" />
             </div>
           </div>
 
           <div className="cardlists">
             <div className="card">
               <div className="card-body">
                 <div className="row">
                   <div className="col-2">
                     <img />
                   </div>
 
                   <div className="col-8">
                     <h5 className="card-title">NAME</h5>
                     <p className="card-text">HP</p>
                     <p className="card-text">STR</p>
                     <p className="card-text">WEAK</p>
                     <p className="card-text">HAPPINESS</p>
                   </div>
 
                   <div className="col-2">
                     <div className="float-right">
                       <p className="addtoPokedex" style={{ cursor: "pointer" }}>
                         Add
                       </p>
                     </div>
                   </div>
                 </div>
               </div>
             </div>
           </div>
         </Modal.Body>
       </Modal>
     </div>
   );
 }
 
export default ModalCard;