// import React from 'react'
// import {useState, useEffect} from 'react';
// import {Link, useNavigate } from 'react-router-dom'
// import "./Addplant.css"
// import axios from 'axios';
// import swal from "sweetalert";
// export default 
// function Plant(){

//     const navigate = useNavigate();

//     const [plant,setPlant] = useState({
//       id:"",
//       name:"",
//       description:"",
//       amount:"",
//       quantity:"",
//       category:""
//   });

//   async function plantsubmit(e) {
//     e.preventDefault();
//     if (
//         plant.id === "" ||
//         plant.name === "" || 
//         plant.description === "" || 
//         plant.amount === "" || 
//         plant.quantity === "" || 
//         plant.category === "" 
//       ){
//         swal("Error", "Please fill all the fields", "error");
//       }
//         else {
//             await axios
//               .post("/add/plant", {
//                 id: plant.id,
//                 name: plant.name,
//                 description: plant.description,
//                 amount: plant.amount,
//                 quantity: plant.quantity,
//                 category: plant.category
//               })
//               .then((res) => {
//                 swal("Success!", "Plant Added successfully!", "success").then(
//                   (value) => {
//                     navigate("/get/allplant");
//                   }
//                 );
//               })
//               .catch((err) => {
//                 console.log(err);
//                 swal("Error!", err.message, "warning");
//               });
//           }
//         }

//   return (
//     <div className='gradient'>
//     <div className='container'>
//         <div className='row'>
//           <div className='col-md-3'></div>
//             <div className='col-md-6'>
//             <div className='mt-2'>
//                         <h2 className='card-title text-center'>Add Plant</h2>
//                         <form onSubmit={plantsubmit} >
//                         <div className='form-group'>
//                                 <label className='mt-2'><b>Id:</b></label>
//                                 <input type='text' className='form-control' placeholder='Enter Plant Id'
//                                 value={plant.id} onChange={(e)=>setPlant({...plant,id:e.target.value})}
//                                 required
//                                 />
//                                 </div>
//                                 <div className='form-group'>
//                                 <label className='mt-2'><b>Name :</b></label>
//                                 <input type='text' className='form-control' placeholder='Enter Plant Name'
//                                 value={plant.name} onChange={(e)=>setPlant({...plant,name:e.target.value})}
//                                 required
//                                 />
//                                 </div>
//                                 <div className='form-group'>
//                                 <label className='mt-2'><b>Description :</b></label>
//                                 <input type='text' className='form-control' placeholder='Enter Description'
//                                 value={plant.description} onChange={(e)=>setPlant({...plant,description:e.target.value})}
//                                 required
//                                  />
//                                 </div>
//                                 <div className='form-group'>
//                                 <label className='mt-2'><b>Amount :</b></label>
//                                 <input type='text' className='form-control' placeholder='Enter Amount'
//                                 value={plant.amount} onChange={(e)=>setPlant({...plant,amount:e.target.value})}
//                                 required
//                                 />
//                                 </div>
//                                 <div className='form-group'>
//                                 <label className='mt-2'><b>Plant Quantity :</b></label>
//                                 <input type='text' className='form-control' placeholder='Enter Plant Quantity'
//                                 value={plant.quantity} onChange={(e)=>setPlant({...plant,quantity:e.target.value})}
//                                 required
//                                 />
//                                 </div>
//                                 <div className='form-group'>
//                                 <label className='mt-2'><b>Plant Category :</b></label>
//                                 <input type='text' className='form-control' placeholder='Enter Plant Category'
//                                 value={plant.category} onChange={(e)=>setPlant({...plant,category:e.target.value})}
//                                 required
//                                 />
//                                 </div>
//                                 <button type='submit' className='btn btn-success w-100 mt-4'><b>Add Plant</b></button>
                               
//                         </form>
//                         </div>
//             </div>
//        </div>
//     </div>
//     </div>
//   )
// }

// export default Plant;

import React from 'react'
import './Addplant.css'
import { useState } from "react";
// import plantimg from './jaconda-52.png';
import axios from 'axios';
import swal from "sweetalert";
import { useNavigate } from "react-router-dom";
export default function AddPlant() {

    const navigate = useNavigate();

    const [addplant,setAddPlant] = useState({
        id:"",
        title:"",
        description:"",
        plant_url:"",
        prize:"",
        quantity:"",
        category:""
    });


    async function plantsubmit(e) {
        e.preventDefault();
        if (
            addplant.id === "" ||
            addplant.title === "" ||
            addplant.description === "" ||
            addplant.plant_url === "" ||
            addplant.prize === "" ||
            addplant.quantity === "" ||
            addplant.category === ""
          ){
            swal("Error", "Please fill all the fields", "error");
          }
            else {
                await axios
                  .post("/add/plant", {
                    id: addplant.id,
                    title: addplant.title,
                    description: addplant.description,
                    plant_url: addplant.plant_url,
                    prize: addplant.prize,
                    quantity: addplant.quantity,
                    category: addplant.category
                  })
                  .then((res) => {
                    swal("Success!", "Plant Added successfully!", "success").then(
                      (value) => {
                        navigate("/get/allplant");
                      }
                    );
                  })
                  .catch((err) => {
                    console.log(err);
                    swal("Error!", err.message, "warning");
                  });
              }
            }
        //  await axios.post("/add/plant",addplant)
        //  .then(res => {
        //    console.log(res.data);
        //    alert("Plant added successfully");
        //  })
        //  .catch(err => {
        //    console.log(err);
        //    alert("plant added failed");
        //  })
    //     }
    //    }

  return (
      <div className='gradient'>
    <div className='container'>
        <div className='row'>
            {/* <div className='col-md-6 mt-3'>
               <img src={plantimg} className='img' alt='plantimg'/>
            </div> */}
            <div className='col-md-6'>
            <div className='mt-2'>
                        <h2 className='card-title text-center'>Add Plant</h2>
                        <form onSubmit={plantsubmit} >
                            <div className='form-group'>
                                <label className='label_plant'><b>Plant ID :</b></label>
                                <input type='number' className='form-control' placeholder='Enter Plant ID'
                                 value={addplant.id} onChange={(e)=>setAddPlant({...addplant,id:e.target.value})}
                                 required
                                 />
                                </div>
                                <div className='form-group'>
                                <label className='mt-2 label_plant'><b>Plant Title :</b></label>
                                <input type='text' className='form-control' placeholder='Enter Plant Title'
                                value={addplant.title} onChange={(e)=>setAddPlant({...addplant,title:e.target.value})}
                                required
                                />
                                </div>
                                <div className='form-group'>
                                <label className='mt-2 label_plant'><b>Plant Description :</b></label>
                                <input type='text' className='form-control' placeholder='Enter Plant Description'
                                value={addplant.description} onChange={(e)=>setAddPlant({...addplant,description:e.target.value})}
                                required
                                 />
                                </div>
                                <div className='form-group'>
                                <label className='mt-2 label_plant'><b>Plant URL :</b></label>
                                <input type='text' className='form-control' placeholder='Enter Plant URL'
                                value={addplant.plant_url} onChange={(e)=>setAddPlant({...addplant,plant_url:e.target.value})}
                                required
                                />
                                </div>
                                <div className='form-group'>
                                <label className='mt-2 label_plant'><b>Plant Prize :</b></label>
                                <input type='text' className='form-control' placeholder='Enter Plant Prize'
                                value={addplant.prize} onChange={(e)=>setAddPlant({...addplant,prize:e.target.value})}
                                required
                                />
                                </div>
                                <div className='form-group'>
                                <label className='mt-2 label_plant'><b>Plant Quantity :</b></label>
                                <input type='text' className='form-control' placeholder='Enter Plant Quantity'
                                value={addplant.quantity} onChange={(e)=>setAddPlant({...addplant,quantity:e.target.value})}
                                required
                                />
                                </div>
                                <div className='form-group'>
                                <label className='mt-2 label_plant'><b>Plant Category :</b></label>
                                <input type='text' className='form-control' placeholder='Enter Plant Category'
                                value={addplant.category} onChange={(e)=>setAddPlant({...addplant,category:e.target.value})}
                                required
                                />
                                </div>
                                <button type='submit' className='button_plant w-100 mt-4'><b>Add Plant</b></button>
                        </form>
                        </div>
            </div>
       </div>
    </div>
    </div>
  )
}