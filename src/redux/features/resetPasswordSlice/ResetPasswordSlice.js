// Import necessary libraries
const { createSlice } = require('@reduxjs/toolkit');

// Create the slice
const resetPasswordSlice = createSlice({
  name: 'resetPassword',
  initialState: {
    isFormToggle: false, // Initially, the form is not visible
  },
  reducers: {
    ToggleResePassword: state => {
      state.isFormToggle = !state.isFormToggle; // Toggle the visibility
    },
  },
});

// Export the actions and reducer
export const { ToggleResePassword } = resetPasswordSlice.actions;
export default resetPasswordSlice.reducer;
