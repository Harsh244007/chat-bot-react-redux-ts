import { createSlice } from "@reduxjs/toolkit";
type RootState = {
  enrollment: {
    step: number;
    appointment: string;
    name: string;
    age: string;
  };
  chatMessages: unknown[];
};

const enrollmentSlice = createSlice({
  name: "enrollment",
  initialState: {
    step: 1,
    appointment: "",
    name: "",
    age: "",
    
  },
  reducers: {
    setStep: (state, action) => {
      state.step = action.payload;
    },
    setAppointment: (state, action) => {
      state.appointment = action.payload;
    },
    setName: (state, action) => {
      state.name = action.payload;
    },
    setAge: (state, action) => {
      state.age = action.payload;
    },
    setChatMessages: (state, action) => {
        state.chatMessages = action.payload;
      },
  },
});

export const { setChatMessages,setStep,  setAppointment, setName, setAge } =
  enrollmentSlice.actions;

export const selectEnrollment = (state:RootState) => state.enrollment;

export default enrollmentSlice.reducer;
