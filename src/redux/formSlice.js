import { createSlice } from '@reduxjs/toolkit'
const initialState = {
	formData: null,
  };

  export const formSlice = createSlice({
    name:"shipping",
    initialState,
    reducers:{
		setFormData: (state, action) => {
			state.formData = action.payload;
		  },
	}
  })

  export const {setFormData}=formSlice.actions;
  export default formSlice.reducer
