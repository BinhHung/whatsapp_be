import mongoose from "mongoose";
import validator from "validator";


const userSchema = mongoose.Schema({
    name:{
        type: String,
        required: [true, "please provide your name"],
    },
    email:{
        type: String,
        required: [true, "please provide your email address"],
        unqiue: [true, "This email address already exist"],
        lowercae: true,
        validate:[validator.isEmail, "Please provide a valid email address"],
    },
    picture:{
        type: String,
        default: "https://res.cloudinary.com/dkd5jblv5/image/upload/v1675976806/Default_ProfilePicture_gjngnb.png",
    },
    status:{
        type: String,
        default: "Hey there! I am using whatsapp",
    },
    password:{
        type: String,
        required: [true, "Please provide your password"],
        minLength: [6, "Please make sure your password is atleast 6 characters long"],
        maxLength: [128, "Please make sure your password is less than 128 characters long"],
    },

},
{
   collection: "user",
   timestamps: true,

});

const UserModel =mongoose.models.UserModel || mongoose.model("Usermodel", userSchema);
export default UserModel;
