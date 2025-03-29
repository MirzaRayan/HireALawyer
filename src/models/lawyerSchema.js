import mongoose from 'mongoose'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

const lawyerSchema = new mongoose.Schema({
   
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    
    description:{
        type:String,
        required:true
    },
    password: {
        type: String,
        required: true
    },
    cpassword: {
        type: String,
        required: true
    },
    cnic:{
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    experience: {
        type: String,
        required: true
    },
    qualification: {
        type: String,
        required: true
    },
    expertise: {
        type: String,
        required: true
    },
    refreshToken: {
        type: String,
    }
    // image:{
    //     type:String,
    //     required:true
    // }
})

lawyerSchema.pre('save', async function (next) {
    if(!this.isModified ('password') ) return next()
    {
        this.password = await bcrypt.hash(this.password, 12)
        this.cpassword = await bcrypt.hash(this.cpassword, 12)
    }
    next()
})


lawyerSchema.methods.generateAccessToken = function () {
    return jwt.sign(
      {
        _id: this._id,
        email: this.email,
      },
      process.env.ACCESS_TOKEN_SECRET,
      {
        expiresIn: process.env.ACCESS_TOKEN_EXPIRY,
      }
    );
  };
  
  // **Generate Refresh Token**
  lawyerSchema.methods.generateRefreshToken = function () {
    return jwt.sign(
      {
        _id: this._id,
      },
      process.env.REFRESH_TOKEN_SECRET,
      {
        expiresIn: process.env.REFRESH_TOKEN_EXPIRY,
      }
    );
  };

const Lawyer = mongoose.model('LAWYERPRACTICE', lawyerSchema)

export {Lawyer}
