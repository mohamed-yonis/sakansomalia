import mongoose from "mongoose";


const UserShema = new mongoose.Schema({
    full_name:{
        type: 'string',
        required: true,
     },
     
user_name:{
        type:'string',
        required: true,
        unique: true,
     },
     password:{
        type:'string',
        required: true,
     }
})

const user = new mongoose.model('user',UserShema)
export default user