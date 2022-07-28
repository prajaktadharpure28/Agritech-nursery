import React from 'react';
import axios from 'axios';
// import {useState, useEffect} from 'react';
import swal from 'sweetalert'
// import './Showtransaction.css';
export default function Showplant(props) {

    async function deletePlant(){
    
        const result = await axios.post('/delete/plant', {
          id: props.id
        })
        if(result.data.status === 'success'){
          swal("Success!", "Plant Deleted successfully!", "success").then((value) => {
            props.history.push('/get/allplant')
          })
        }
        else{
          swal("Error!", result.data.message, "warning");
        }
      }
  return (
    <div>
          <div className='transaction-card mt-3'>
            {/* <div class="col-xxl-3 col-md-6"> */}
              <div class="card info-card">
                <div class="card-body">
                  <h5 class="card-title">{props.id} <span></span></h5>
                  <h5 class="card-title1">$ {props.amount}</h5>
                  {/* <div class="d-flex align-items-center"> */}
                    {/* <div class="card8"> */}
                    <span class="text-muted small pt-2 ps-1">{props.category}</span><br></br>
                      <span class="text-success small pt-1 fw-bold">{props.name} </span> <br></br>
                      </div>
                </div>
                <div class="card info-card">
                <div class="card-body">
                  <div>
                    <img src="./icons8-green-circle-48.png" alt=''></img>
                    <img src="./icons8-red-circle-48.png" alt=''></img>
                    </div>
                <div class="d-grid gap-2 d-md-flex justify-content-md-end">
                  <button class="btn btn-success" type="button">UPDATE</button>
                  <button className="btn btn-danger" onClick={deletePlant} type="button">DELETE</button>
                  </div>
                  </div>
                </div>
              </div>
            </div>
  )
}

  