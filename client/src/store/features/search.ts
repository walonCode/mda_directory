import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store"

interface term {
    searchValue: string
}

const initialState:term =  {
    searchValue:''
}

const searchSlice = createSlice({
    name:'search',
    initialState,
    reducers:{
        getValue:(state, action) => {
            const { value } = action.payload
            console.log(value)
            if(value.trim() === ""){
                return 
            }
            state.searchValue = value;
        }
    }
})

//importing the state of the search value
export const searchedValue = (state:RootState) => state.search.searchValue

export const { getValue } = searchSlice.actions

export default searchSlice.reducer