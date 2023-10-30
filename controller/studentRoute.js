

const express = require("express");
const studentSchema = require("../model/studentSchema");
const studentRoute = express.Router();
const mongoose = require("mongoose");

// http://localhost:4000/studentRoute/create-student --> this will not work .because by default the type will be get.So it will not work.  
studentRoute.post("/create-student",(req,res)=>{

    studentSchema.create(req.body,(err,data)=>{

        if(err)
         return err;
        else
         res.json(data);
    })
})


studentRoute.get("/",(req,res)=>{

    studentSchema.find((err,data)=>{

        if(err)
           return err;
        else
           res.json(data);
    })
})

studentRoute.route("/update-student/:id")
.get((req,res)=>{

    studentSchema.findById(mongoose.Types.ObjectId(req.params.id),(err,data)=>{
        if(err)
           return err;
        else 
           res.json(data);
    })

})
.put((req,res)=>{

    studentSchema.findByIdAndUpdate(mongoose.Types.ObjectId(req.params.id),
    
    {$set: req.body},
    (err,data)=>{
        if(err)
         return err;
        else
         res.json(data);
    }

    )

})


studentRoute.delete("/delete-student/:id",(req,res)=>{

    studentSchema.findByIdAndRemove(mongoose.Types.ObjectId(req.params.id),
    (err,data)=>{

        if(err)
         return err;
        else 
         res.json(data);
    }
    )
})


module.exports = studentRoute;


// CRUD OPERATIONS:

// studentRoute.post();
// studentRoute.get();
// studentRoute.route().get().put();
// studentRoute.delete();
// _id ->653a45c026d052024a61549f -Object id of Raj
//http://localhost:4000/studentRoute/update-student/653a45c026d052024a61549f