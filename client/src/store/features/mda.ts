import { createSlice,createAsyncThunk,createEntityAdapter } from "@reduxjs/toolkit";
import { RootState } from  '../store';
import axios from "axios";

interface Mda {
    _id?:string
    name:string,
    department:string,
    address:string,
    website:string,
    phone:string,
    isAgency?:string,
    isMinistry:string,
    isDepartment?:string
    minister?:string
    deputyMinister?:string
    director?:string
}

interface MdaSlice {
    // mda:Mda[],
    status:'idle' | 'loading' | 'succeeded' | 'failed',
    error: string | null
}

const BASE_URL='http://localhost:3000/api/v1/mda';

const mdaAdaptor = createEntityAdapter({
    sortComparer: (a,b) => b.id.localeCompare(a.id)
})

const initialState:MdaSlice = mdaAdaptor.getInitialState({
    // mda:[],
    status:'idle',
    error:null
})

export const getMda = createAsyncThunk('mda/getMda',async() => {
    const response = await axios.get(BASE_URL)
    return ( await response.data) as Mda[]
})

export const createMda = createAsyncThunk('mda/createMda', async(initialMda:Mda) => {
    const response = await axios.post(BASE_URL,initialMda)
    return (await response.data) as Mda
})

export const updateMda = createAsyncThunk('mda/updateMda', async(initialMda:Mda) => {
    const { _id } = initialMda;
    const response = await axios.patch(`${BASE_URL}/${_id}`,initialMda)
    return (await response.data) as Mda
})

const mdaSlice = createSlice({
    name:'mda',
    initialState,
    reducers:{},
    extraReducers(builder){
        builder.addCase(getMda.pending, (state) => {
            state.status = 'loading';

        })
        .addCase(getMda.fulfilled, (state,action) => {
            state.status = 'succeeded';
            mdaAdaptor.upsertMany(state,action.payload)
        })
        .addCase(getMda.rejected, (state,action) => {
            state.status = "failed";
            state.error = action.error.message ?? 'something went wrong'
        })
        .addCase(createMda.fulfilled, (state,action) => {
            state.mda.push(action.payload)
        })
        .addCase(updateMda.fulfilled, (state,action) => {
            state.mda.push(action.payload)
        })
    }
})

//sending the state
export const { selectAll:getAllMda } = mdaAdaptor.getSelectors(state => state.mda)

export default mdaSlice.reducer