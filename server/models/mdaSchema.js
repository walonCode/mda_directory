import mongoose, {Schema,model} from 'mongoose'

const mdaSchema = new Schema({
    name: {
        type:String,
        required:[true, 'Please provide a name']
    },
    address: {
        type:String,
        required:true,
    },
    website: {
        type:String,
        required:true,
    },
    phone: {
        type:String,
        required:true
    },
    department: {
        type:String,
        required:true,
    },
    isMinistry: {
        type:Boolean,
        default:false,
    },
    isAgency: {
        type:Boolean,
        default:false,
    },
    isDepartment:{
        type:Boolean,
        default:false
    },
    minister:{
        type:String,
    },
    deputyMinister: {
        type:String,
    },
    director: {
        type:String
    }
}, {timestamps: true})

const Mda = model('mda',mdaSchema)

export default Mda;