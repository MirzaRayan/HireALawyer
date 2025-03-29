import casestudy from "../models/caseStudySchema.js";






const postCaseStudy = async (req, res) => {

    const image= req.file.filename
      
    const {name, caseno, expertise,description} = req.body
  
    try {
            const casede = new casestudy({ name, caseno,  expertise,description,image })
        
  
  
            const register = await casede.save()
        
            if (!register)
            {
                return res.status(404).send({ message: "error while posting casestudy"})
            }

            return res.status(201).send({
                message:'casestudy posted successfully',
                data: register,
            })
        
        
    } catch (error) {
        console.log(error)
        return res.status(500).send('Something went wrong while posting caseStudy')
    }
}

const getAllCaseStudies = async (req, res) => {
    try{
  
        const casestudies= await casestudy.find({})
        if(!casestudies) {
            return res.status(404).send('No casestudy found')
        }
        return 
    }catch(error){
        console.log(error);
        return res.status(500).send('Something went wrong while finding casestudies!!!')
    }
}


export {
    postCaseStudy,
    getAllCaseStudies,
}