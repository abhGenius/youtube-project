import mongoose , { Schema} from "mongoose";
 import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";
const videoSchema = new Schema (
    {
        videoFile : {
            type : string , // cloudnary url 
            required : true 
        },
        thumbnail: {
            type : string , // cloudnary url 
            required : true 
        },
         title : {
            type : string ,  
            required : true 
        },
         description: {
            type : string , 
            required : true 
        },
          duration : {
            type : Number, // cloudnary url 
            required : true 
        },
        views : {
            type: Number ,
            default : 0
        },
        isPublished :{
            type : Boolean,
            default : true 
        },
        owner : {
            type : Schema.Types.ObjectId,
            ref : " User"
        }
    },
    {
        timestamps : true 
    }
)

videoSchema.plugin(mongooseAggregatePaginate)

userSchema.methods.generateAccessToken = function () {
    return jwt.sign(
        {
            _id: this._id,
            email:this.email,
            username:this.username,
            fullName : this.fullName
        },
        process.env.ACCESS_TOKEN_SECRET ,
        {
            expiresIn : process.env.ACCESS_TOKEN_EXPIRY
        }
    )
}
userSchema.methods.generateAccessToken = function () {
    return jwt.sign(
        {
            _id: this._id,
          
        },
        process.env.REFRESH_TOKEN_SECRET ,
        {
            expiresIn : process.env.REFRESH_TOKEN_EXPIRY
        }
    )
}
export const video = mongoose.model("video",videoSchema)