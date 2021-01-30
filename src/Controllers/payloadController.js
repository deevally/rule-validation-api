
import asyncHandler from "../Middlewares/async"



exports.Payload = asyncHandler(async(req, res)=>{
try {

  //check if data field is an object
  if(typeof(req.body.data) !== 'object'){
    return res.status(400).json({
      message: "data should be an object.",
      status: "error",
      data: null
  })
  }
  //data field exist
if(!req.body.data) {
  return res.status(400).json({
    message: "data is required.",
    status: "error",
    data: null
})
}



//Check if rule is an Object
if(typeof(req.body.rule) !== 'object'){
  return res.status(400).json({
    message: "rule should be an object.",
    status: "error",
    data: null
})
}
 //body field exist
 if(!req.body.rule) {
  return res.status(400).json({
    message: "rule is required.",
    status: "error",
    data: null
  
})
}




if(!req.body.rule.field || !req.body.rule.condition || !req.body.rule.condition_value) {
  return res.status(400).json({
    message: "rule field is required.",
    status: "error",
    data: null
  
})
}

//EQ condition



if(Object.keys(req.body.data).includes(req.body.rule.field.toString())){
if(req.body.rule.condition === 'eq' && (req.body.data[req.body.rule.field.toString()] == req.body.rule.condition_value) ){
  
  return res.status(200).json({
    message: `field ${req.body.rule.field} successfully validated.`,
    status:"success",
    data:{
      validation: {
        error: false,
         field:`${req.body.rule.field.toString()}` ,
        field_value: String(`${req.body.data[req.body.rule.field.toString()]}`),
        condition:`${req.body.rule.condition}` ,
        condition_value: String(`${req.body.rule.condition_value}`)
      }
    }
  })
}
}
else{
  return res.status(400).json({
    message: `field ${req.body.rule.field} is missing from data.`,
    status: "error",
    data: null
})
}
//NEQ Condition
if(Object.keys(req.body.data).includes(req.body.rule.field.toString())){

 if(req.body.rule.condition === 'neq' && (req.body.data[req.body.rule.field] !== req.body.rule.condition_value)){
  return res.status(200).json({
    message: `field ${req.body.rule.field} successfully validated.`,
    status:"success",
    data:{
      validation: {
        error: false,
         field:`${req.body.rule.field.toString()}` ,
        field_value: String(`${req.body.data[req.body.rule.field.toString()]}`),
        condition:`${req.body.rule.condition}` ,
        condition_value: String(`${req.body.rule.condition_value}`)
      }
    }
  })
}
}else{
  return res.status(400).json({
    message: `field ${req.body.rule.field} is missing from data.`,
    status: "error",
    data: null
})
}
//GT Condition

if(Object.keys(req.body.data).includes(req.body.rule.field.toString())){
  if(req.body.rule.condition === 'gt' && (req.body.data[req.body.rule.field] > req.body.rule.condition_value)){
    return res.status(200).json({
      message: `field ${req.body.rule.field} successfully validated.`,
      status:"success",
      data:{
        validation: {
          error: false,
           field:`${req.body.rule.field.toString()}` ,
          field_value: String(`${req.body.data[req.body.rule.field.toString()]}`),
          condition:`${req.body.rule.condition}` ,
          condition_value: String(`${req.body.rule.condition_value}`)
        }
      }
    })
}
}else{
  return res.status(400).json({
    message: `field ${req.body.rule.field} is missing from data.`,
    status: "error",
    data: null
})
}


//GTE Condition
if(Object.keys(req.body.data).includes(req.body.rule.field.toString())){
 if(req.body.rule.condition === 'gte' && (req.body.data[req.body.rule.field] >= req.body.rule.condition_value)){
  return res.status(200).json({
    message: `field ${req.body.rule.field} successfully validated.`,
    status:"success",
    data:{
      validation: {
        error: false,
         field:`${req.body.rule.field.toString()}` ,
        field_value: String(`${req.body.data[req.body.rule.field.toString()]}`),
        condition:`${req.body.rule.condition}` ,
        condition_value: String(`${req.body.rule.condition_value}`)
      }
    }
  })
}
}else
{
  return res.status(400).json({
    message: `field ${req.body.rule.field} is missing from data.`,
    status: "error",
    data: null
})
}
// //CONTAINS Condition



if(Object.keys(req.body.data).includes(req.body.rule.field.toString())){
if(req.body.rule.condition === 'contains'

 ){

  if(req.body.rule.condition_value.toString() === req.body.data[req.body.rule.field].toString() ){
    return res.status(200).json({
      message: `field ${req.body.rule.field} successfully validated.`,
      status:"success",
      data:{
        validation: {
          error: false,
           field:`${req.body.rule.field.toString()}` ,
          field_value: String(`${req.body.data[req.body.rule.field.toString()]}`),
          condition:`${req.body.rule.condition}` ,
          condition_value: String(`${req.body.rule.condition_value}`)
        }
      }
    })
}else{

    return res.status(400).json({
      message: `field value ${req.body.data[req.body.rule.field]} does not contain the condition value.`,
      status: "error",
      data: null
  })
  }
  

     

 
}
}else{
  return res.status(400).json({
    message: `field ${req.body.rule.field} is missing from data.`,
    status: "error",
    data: null
})
}


  return res.status(400).json({

    message: `field ${req.body.rule.field} failed validation.`,
    status:"error",
    data:{
      validation: {
        error: true,
         field:`${req.body.rule.field.toString()}` ,
        field_value: String(`${req.body.data[req.body.rule.field.toString()]}`),
        condition:`${req.body.rule.condition}` ,
        condition_value: String(`${req.body.rule.condition_value}`)
      }
    }
  })





} catch (error) {
  return res.status(400).json({message: error.message, status: "error",
  data: null})
}
  

});
