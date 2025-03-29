import { User } from "../models/clientSchema.js";
import bcrypt from 'bcrypt'


const registerClient = async (req,res) => {

    const {name, email, phone, city, password, cpassword} = req.body
    
    if (!name || !email || !phone || !city ||  !password || !cpassword)
    {
        res.status(422).json({ error: "please fill all the fields properly" })
    }
    
    try {

        const userExist = await User.findOne({ email: email })

        if (userExist)
        {
            return res.status(422).json({ error: "Email already Exist" })
        }
        else if (password != cpassword)
        {
            return res.status(422).json({ error: "Password and Confirm Password didn't match" })
        }
        else
        {
            const user = new User({ name, email, phone, city, password, cpassword})
        
            const register = await user.save()
        
            if (register)
            {

                res.status(201).json({ message: "user registered successfully" })
                
            }
        }
        
    } catch (err) {
        console.log(err)
    }
}

const loginInClient = async (req, res) => {
    try
    {
        const { email, password } = req.body

        if ( !email || !password )
        {
            return res.status(400).json({ error: "Please fill all the fields" })
        }

        const userLogin = await User.findOne({ email: email })        
        
        if (userLogin)
        {
            const isMatchUser = await bcrypt.compare(password, userLogin.password)
            if(!isMatchUser)
            {
                return res.status(400).json({ error: "Invalid Credentials" })
            }
            else
            {
                return res.status(201).json({ message: "Login Successfully" })
            }
        }
        else
        {
            return res.status(400).json({ error: "Invalid Credentials" })
        }
    

    } catch (err) {
        console.log(err)
    }
}


export {
    registerClient,
    loginInClient
}