import mongoose,{Schema} from "mongoose";
import jwt from "jsonwebtoken"
import bcrypt from "bcrypt"
const userSchema = new Schema(
    {
        username : {
            type : string ,
            required : true ,
            unique : true ,
            lowercase : true , 
            trim : true , 
            index : true 
        },
         email : {
            type : string ,
            required : true ,
            unique : true ,
            lowercase : true , 
            trim : true 
        },
         fullname : {
            type : string ,
            required : true , 
            trim : true,
            index: true  
        },
         avatar : {
            type : string ,// cloudinary url 
            required : true ,  
        },
        coverImage : {
             type : string ,// cloudinary url 
        },
        watchHistory : [
            {
                type : Schema.Types.ObjectId,
                ref: "video"
            }
        ],
        password: {
            type : string ,
            required: [ true , ' password is requred ']
        },
        refreshToken:{
          type: string   
        }
    },
    {
        timestamps:true 
    }
)


 userSchema.pre("save", async function (next) {
    if( !this.isModified("password")) return next();
    this.password = bcrypt.hash( this.password , 10)
    next()
 })


 userSchema.methods.isPasswordCorrect = async function 
 ( password){
    return await bcrypt.compare(password, this.password)
 }
export const user = mongoose.model("User", userSchema)
