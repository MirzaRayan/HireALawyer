import jwt from 'jsonwebtoken'
import { Lawyer } from '../models/lawyerSchema.js'

export const verfityJWT = async (req, res, next) => {

    try {
        const token = req.cookies.accessToken
    
        if (!token) {
            return res.status(401).send('lawyer not authenticated')
        }
    
        const decodedToken = jwt.verify(token , process.env.ACCESS_TOKEN_SECRET)
        
        const lawyer = await Lawyer.findById(decodedToken._id).select('-password -refreshToken')
    
        if(!lawyer) {
            return res.status(401).send('Invalid Access Token!!!');
        }
    
        req.lawyer = lawyer;
        next();
    } catch (error) {
        console.log(error);
        return res.status(401).send('Something went wrong while verifying token!!!');
    }
}

