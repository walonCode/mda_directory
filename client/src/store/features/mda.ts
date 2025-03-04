import { createSlice, createAsyncThunk, createEntityAdapter, EntityState } from "@reduxjs/toolkit";
import { RootState } from '../store';
import axios from "axios";

interface Mda {
    _id?: string;
    name: string;
    department: string;
    address: string;
    website: string;
    phone: string;
    isAgency?: boolean;
    isMinistry: boolean;
    isDepartment?: boolean;
    minister?: string;
    deputyMinister?: string;
    director?: string;
}

interface MdaSlice extends EntityState<Mda,string> {
    status: 'idle' | 'loading' | 'succeeded' | 'failed';
    error: string | null;
}

const BASE_URL = 'http://localhost:3000/api/v1/mda';

// Entity Adapter
const mdaAdaptor = createEntityAdapter({
    selectId: (mda:Mda) => mda._id ?? '',
    sortComparer: (a, b) => (b._id ?? '').localeCompare(a._id ?? ''),
});

const initialState: MdaSlice = mdaAdaptor.getInitialState({
    status: 'idle',
    error: null,
});

// Async Thunks
export const getMda = createAsyncThunk('mda/getMda', async () => {
    const response = await axios.get(BASE_URL);
    console.log(response.data)
    return (await response.data.mda) as Mda[];
});

export const createMda = createAsyncThunk('mda/createMda', async (initialMda: Mda) => {
    const response = await axios.post(BASE_URL, initialMda);
    return (await response.data) as Mda;
});

export const updateMda = createAsyncThunk('mda/updateMda', async (initialMda: Mda) => {
    const { _id } = initialMda;
    const response = await axios.patch(`${BASE_URL}/${_id}`, initialMda);
    return (await response.data) as Mda;
});

// Slice
const mdaSlice = createSlice({
    name: 'mda',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getMda.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(getMda.fulfilled, (state, action) => {
                state.status = 'succeeded';
                mdaAdaptor.upsertMany(state, action.payload);
            })
            .addCase(getMda.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.error.message ?? 'Something went wrong';
            })
            .addCase(createMda.fulfilled, (state, action) => {
                mdaAdaptor.addOne(state, action.payload);
            })
            .addCase(updateMda.fulfilled, (state, action) => {
                mdaAdaptor.upsertOne(state, action.payload);
            });
    }
});

// Selectors
export const { 
    selectAll: getAllMda,
    selectById: getMdaById,
    selectIds: getMdaId
} = mdaAdaptor.getSelectors((state: RootState) => state.mda);

export default mdaSlice.reducer;
