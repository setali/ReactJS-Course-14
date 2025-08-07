import { configureStore, createSlice } from "@reduxjs/toolkit";

const { reducer, actions } = createSlice({
  name: "counter",
  initialState: 10,
  reducers: {
    increase: (state, { payload }) => state + payload,
    decrease: (state, { payload }) => state - payload,
  },
});

const { increase, decrease } = actions;

const store = configureStore({ reducer });

const { dispatch, getState, subscribe } = store;

const value = document.querySelector("#value");

subscribe(render);
render();

function render() {
  value.innerHTML = getState();
}

document.querySelector("#inc").addEventListener("click", () => {
  dispatch(increase(1));
});

document.querySelector("#inc2").addEventListener("click", () => {
  dispatch(increase(2));
});

document.querySelector("#inc3").addEventListener("click", () => {
  dispatch(increase(3));
});

document.querySelector("#dec").addEventListener("click", () => {
  dispatch(decrease(1));
});
