import mongoose from 'mongoose'

const { Schema } = mongoose;

const userSchema = new Schema({

    rule: {
        field:  { type: String },
        condition:  { type: String },
        condition_value:  { type: Number }
      },
    data: {
      name:  { type: String },
      crew:  { type: String },
      age:  { type: Number },
      position:  { type: String },
      missions:  { type: Number }
    }
    // rule: {
    //   type: new Schema({
    //     field:  { type: String },
    //     condition:  { type: String },
    //     condition_value:  { type: Number }
    //   }),
    //   required: true
    //   },
      // data: {
      //   type: new Schema({
      //     name:  { type: String },
      //     crew:  { type: String },
      //     age:  { type: Number },
      //     position:  { type: String },
      //     missions:  { type: Number }
      //   }),
      //   required:true
       
      // }
   
})

const User = mongoose.model("User", userSchema);

export default User;