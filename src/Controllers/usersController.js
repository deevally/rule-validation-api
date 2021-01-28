// import  User from "../models/user"
// import asyncHandler from "../Middlewares/async"

// //TO COMPLETE
// // E.g. if the rule field is passed as a number instead of a valid object, your endpoint response should be:
// // field missions.count successfully validated.

// exports.User = asyncHandler(async(req, res)=>{
// try {

//   //body field exist
//   if(!req.body.rule) {
//     return res.status(400).json({
//       message: "rule is required.",
//       status: "error",
//       data: null
    
//   })
// }

// if(!req.body.rule.field || !req.body.rule.condition || !req.body.rule.condition_value) {
//   return res.status(400).json({
//     message: "rule field is required.",
//     status: "error",
//     data: null
  
// })
// }
//   //data field exist
// if(!req.body.data) {
//   return res.status(400).json({
//     message: "data is required.",
//     status: "error",
//     data: null
// })
// }

// // if(!typeof(req.body.rule !== 'object')){
// //   return res.status(400).json({
// //     message: "rule should be an object.",
// //     status: "error",
// //     data: null
// // })
// // }

// // if(typeof(req.body.rule !== 'object')){
// //   return res.status(400).json({
// //     message: "rule should be an object.",
// //     status: "error",
// //     data: null
// // })
// // }


//   //const user = await User.create(req.body);

// //EQ condition
// if(req.body.rule.condition === 'eq' && (req.body.data.missions == req.body.rule.condition_value)){
//   return res.status(200).json({
//     message: `field ${req.body.rule.field} successfully validated.`,
//     status:"success",
//     data:{
//       validation: {
//         error: false,
//         field:`${Object.keys(req.body.data)[4]}` ,
//         field_value: Number(`${req.body.data.missions}`),
//         condition:`${req.body.rule.condition}` ,
//         condition_value: Number(`${req.body.rule.condition_value}`)
//       }
//     }
//   })
// }
// //NEQ Condition
// else if(req.body.rule.condition === 'neq' && (req.body.data.missions !== req.body.rule.condition_value)){
//   return res.status(200).json({
//     message: `field ${req.body.rule.field} successfully validated.`,
//     status:"success",
//     data:{
//       validation: {
//         error: false,
//         field:`${Object.keys(req.body.data)[4]}` ,
//         field_value: Number(`${req.body.data.missions}`),
//         condition:`${req.body.rule.condition}` ,
//         condition_value: Number(`${req.body.rule.condition_value}`)
//       }
//     }
//   })
// }
// //GT Condition
// else if(req.body.rule.condition === 'gt' && (req.body.data.missions > req.body.rule.condition_value)){
//   return res.status(200).json({
//     message: `field ${req.body.rule.field} successfully validated.`,
//     status:"success",
//     data:{
//       validation: {
//         error: false,
//         field:`${Object.keys(req.body.data)[4]}` ,
//         field_value: Number(`${req.body.data.missions}`),
//         condition:`${req.body.rule.condition}` ,
//         condition_value: Number(`${req.body.rule.condition_value}`)
//       }
//     }
//   })
// }

// //GTE Condition
// else if(req.body.rule.condition === 'gte' && (req.body.data.missions >= req.body.rule.condition_value)){
//   return res.status(200).json({
//     message: `field ${req.body.rule.field} successfully validated.`,
//     status:"success",
//     data:{
//       validation: {
//         error: false,
//         field:`${Object.keys(req.body.data)[4]}` ,
//         field_value: Number(`${req.body.data.missions}`),
//         condition:`${req.body.rule.condition}` ,
//         condition_value: Number(`${req.body.rule.condition_value}`)
//       }
//     }
//   })
// }

// // //CONTAINS Condition

// else if(req.body.rule.condition === 'contains'
// //&& (req.body.rule.field === `${Object.keys(req.body.data)}`)
//  //&& (req.body.rule.field === `${Object.keys(req.body.data)}`)
//  ){

//   //Rule field Missing
//   let dataStringsTwo = `${Object.keys(req.body.data)}`.split(',')
//   if(!dataStringsTwo.includes(req.body.rule.field))
//   return res.status(400).json({
//     message: `field ${req.body.rule.field} is missing from data.`,
//     status: "error",
//     data: null
// })


//    let dataStrings = `${Object.values(req.body.data)}`.split(',')
//    console.log(dataStrings)
//    if(dataStrings.includes(req.body.rule.condition_value.toString()))
//   return res.status(200).json({
//     message: `field ${req.body.rule.field} successfully validated.`,
//     status:"success",
//     data:{
//       validation: {
//         error: false,
//         field:`${Object.keys(req.body.data)[4]}` ,
//         field_value: Number(`${req.body.data.missions}`),
//         condition:`${req.body.rule.condition}` ,
//         condition_value: Number(`${req.body.rule.condition_value}`)
//       }
//     }
//   })

 
// }
// else{
//   return res.status(400).json({

//     message: `field ${req.body.rule.field} failed validation.`,
//     status:"error",
//     data:{
//       validation: {
//         error: true,
//         field:`${Object.keys(req.body.data)[4]}` ,
//         field_value: Number(`${req.body.data.missions}`),
//         condition:`${req.body.rule.condition}` ,
//         condition_value: Number(`${req.body.rule.condition_value}`)
//       }
//     }
//   })
// }

// //NEQ Condition


// } catch (error) {
//   // return res.status(400).json({message: error.message, status: "error",
//   // data: null})
//   console.log(error.message)
// }
  

// });




import asyncHandler from "../Middlewares/async"

//TO COMPLETE
// E.g. if the rule field is passed as a number instead of a valid object, your endpoint response should be:
// field missions.count successfully validated.

exports.User = asyncHandler(async(req, res)=>{
try {

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
  //data field exist
if(!req.body.data) {
  return res.status(400).json({
    message: "data is required.",
    status: "error",
    data: null
})
}

// if(!typeof(req.body.rule !== 'object')){
//   return res.status(400).json({
//     message: "rule should be an object.",
//     status: "error",
//     data: null
// })
// }

// if(typeof(req.body.rule !== 'object')){
//   return res.status(400).json({
//     message: "rule should be an object.",
//     status: "error",
//     data: null
// })
// }


  //const user = await User.create(req.body);

//EQ condition
if(req.body.rule.condition === 'eq' && (req.body.data.missions == req.body.rule.condition_value)){
  return res.status(200).json({
    message: `field ${req.body.rule.field} successfully validated.`,
    status:"success",
    data:{
      validation: {
        error: false,
        field:`${Object.keys(req.body.data)[4]}` ,
        field_value: Number(`${req.body.data.missions}`),
        condition:`${req.body.rule.condition}` ,
        condition_value: Number(`${req.body.rule.condition_value}`)
      }
    }
  })
}
//NEQ Condition
 if(req.body.rule.condition === 'neq' && (req.body.data.missions !== req.body.rule.condition_value)){
  return res.status(200).json({
    message: `field ${req.body.rule.field} successfully validated.`,
    status:"success",
    data:{
      validation: {
        error: false,
        field:`${Object.keys(req.body.data)[4]}` ,
        field_value: Number(`${req.body.data.missions}`),
        condition:`${req.body.rule.condition}` ,
        condition_value: Number(`${req.body.rule.condition_value}`)
      }
    }
  })
}
//GT Condition
 if(req.body.rule.condition === 'gt' && (req.body.data.missions > req.body.rule.condition_value)){
  return res.status(200).json({
    message: `field ${req.body.rule.field} successfully validated.`,
    status:"success",
    data:{
      validation: {
        error: false,
        field:`${Object.keys(req.body.data)[4]}` ,
        field_value: Number(`${req.body.data.missions}`),
        condition:`${req.body.rule.condition}` ,
        condition_value: Number(`${req.body.rule.condition_value}`)
      }
    }
  })
}

//GTE Condition
 if(req.body.rule.condition === 'gte' && (req.body.data.missions >= req.body.rule.condition_value)){
  return res.status(200).json({
    message: `field ${req.body.rule.field} successfully validated.`,
    status:"success",
    data:{
      validation: {
        error: false,
        field:`${Object.keys(req.body.data)[4]}` ,
        field_value: Number(`${req.body.data.missions}`),
        condition:`${req.body.rule.condition}` ,
        condition_value: Number(`${req.body.rule.condition_value}`)
      }
    }
  })
}

// //CONTAINS Condition

 if(req.body.rule.condition === 'contains'

 ){

  //Rule field Missing
  let dataStringsTwo = `${Object.keys(req.body.data)}`.split(',')
  if(!dataStringsTwo.includes(req.body.rule.field))
  return res.status(400).json({
    message: `field ${req.body.rule.field} is missing from data.`,
    status: "error",
    data: null
})


   let dataStrings = `${Object.values(req.body.data)}`.split(',')
   console.log(dataStrings)
   if(dataStrings.includes(req.body.rule.condition_value.toString()))
  return res.status(200).json({
    message: `field ${req.body.rule.field} successfully validated.`,
    status:"success",
    data:{
      validation: {
        error: false,
        field:`${Object.keys(req.body.data)[4]}` ,
        field_value: Number(`${req.body.data.missions}`),
        condition:`${req.body.rule.condition}` ,
        condition_value: Number(`${req.body.rule.condition_value}`)
      }
    }
  })

 
}
else{
  return res.status(400).json({

    message: `field ${req.body.rule.field} failed validation.`,
    status:"error",
    data:{
      validation: {
        error: true,
        field:`${Object.keys(req.body.data)[4]}` ,
        field_value: Number(`${req.body.data.missions}`),
        condition:`${req.body.rule.condition}` ,
        condition_value: Number(`${req.body.rule.condition_value}`)
      }
    }
  })
}

//NEQ Condition


} catch (error) {
  return res.status(400).json({message: error.message, status: "error",
  data: null})
}
  

});
