const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
// const axios = require('axios');
const Plant = require('./models/Plant')
const app = express();
const path = require('path');
require('dotenv').config()
app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGODB_URI,{
    useNewUrlParser: true,
    useUnifiedTopology: true
},()=>{
    console.log('MongoDB Connected...!');
});

app.post('/add/plant', async (req, res) => {
  const plant = new Plant({
      id: req.body.id,
      name: req.body.name,
      description: req.body.description,
      amount: req.body.quantity,
      quantity: req.body.quantity,
      category: req.body.category
  });
  await plant.save();
  res.send({
      message:"Plant Added Successfully"
  })
});

//Get All Tasks

app.get('/get/allplant', async (req, res) => {
    const plant = await Plant.find();
    res.send(plant);
});

//Get Specific Task
app.post('/get/plant', async (req, res) => {
    const plant = await Plant.findOne({id : req.body.id});
    res.send(plant);
});
//Delete Task
app.post('/delete/plant', async (req, res) => {
    await Plant.deleteOne({id : req.body.id});
    res.send({
        message:"Task Deleted Successfully"
    })
});

//Update Task
app.post('/update/plant', async (req, res) => {
    const plant = await Plant.updateOne({id : req.body.id},
        {$set : {name: req.body.name, description: req.body.description}
    });
    res.send({
        message:"Task Updated Successfully"
    })
});








// mongoose.connect(process.env.MONGO_DB_URL, { useNewUrlParser: true, useUnifiedTopology: true }, () => {
//     console.log('Connected to DB 📦');
// });
if(process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '..', 'client', 'build')));
  
    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, '..', 'client', 'build', 'index.html'))
    });
}

// if(process.env.NODE_ENV === 'production') {
//     app.use(express.static(path.join(__dirname, '..', 'client', 'build')));
  
//     app.get('*', (req, res) => {
//         res.sendFile(path.join(__dirname, '..', 'client', 'build', 'index.html'))
//     });
// }
const PORT = 5000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });