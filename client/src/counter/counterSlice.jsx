import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  count: 0,
  lastAction : "",
  times : 0,
  history : [   ]
}

export const counterSlice = createSlice({
  name: 'counterSlice',
  initialState,
  reducers: {
    increment: (state, action) => {
      state.count += 1
      state.lastAction = "increment";
      state.times +=1;
      state.history.push("increment");
    },
    decrement: (state, action) => {
        state.count -= 1
      state.lastAction = "decrement";
      state.times +=1;
      state.history.push("decrement");
    },
    // incrementByAmount: (state, action) => {
    //   state.value += action.payload
    // },
  },
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = counterSlice.actions

export default counterSlice.reducer;