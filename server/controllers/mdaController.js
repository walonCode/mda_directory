import Mda from "../models/mdaSchema.js";
import { mdaData } from "../data/mdaData.js";

//controller to get all mda from the database
export const getMda = async(req,res) => {
    try{
        const mda = await Mda.find({})
        if(mda.length === 0){
            return res.status(200).json({messsage:'Mda is empty'})
        }
        return res.status(200).json({ mda })
    }catch(error){
        console.error(`failed to get mda: ${error}`)
        return res.status(500).json({message:"server error"});
    }
}

//controller to push demo data to the database
export const insertData = async(req,res) => {
    try{
        await Mda.insertMany(mdaData)
        console.log('Mda inserted successfully');
    }catch(error){
        console.error(error)
        return res.status(500).json({message:'server error'})
    }
}

//controller to create an Mda in the database
export const createMda = async(res,req) => {
    try{
        if(!req.body){
            return res.status(400).json({message:'please send some data'})
        }
        const { name,address,website,phone,department,isMinistry,isAgency,isDepartment,minster,deputyMinister,director} = req.body
        if([name,address,phone,website,department].forEach(Element => Element.trim() === "")){
            return res.status(400).json({message:'All fields required'})
        }
        const mda = await Mda.findOne({ name })
        if(mda){
            return res.status(401).json({message:'Mda already exist'});
        }
        const newMda = new Mda({
            name,
            address,
            website,
            phone,
            department,
            isMinistry,
            isAgency,
            isDepartment,
            minster,
            deputyMinister,
            director
        })
        await newMda.save()
        
        return res.status(201).json({message:'mda created',newMda})
    }catch(error){
        console.log(error);
        return res.status(500).json({message:'server error'})
    }
}

export const updateMda = async(req,res) => {
    try{
        if(!req.body || !req.params) return 
        const { id } = req.params
        const updates = req.body

        const mda = await Mda.findOne({_id:id})
        if(!mda){
            return res.status(404).json({message:'Mda not found'})
        }
        const updatedMda = await Mda.findOne({_id:id},{$set:updates},{new:true, runValidators:true})    

        return res.status(200).json(updatedMda)
    }catch(error){
        console.error('updating mda failed',error)
        return res.status(500).json({message:'server error'})
    }
}

