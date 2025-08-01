import { configureStore, createAction, createReducer } from "@reduxjs/toolkit";

const reducer = createReducer(10, (builder) => {
  return builder
    .addCase("INC", (state, { payload }) => state + payload)
    .addCase("DEC", (state, { payload }) => state - payload);
});

const store = configureStore({ reducer });

const { dispatch, getState, subscribe } = store;

const value = document.querySelector("#value");

function render() {
  value.innerHTML = getState();
}

subscribe(render);
render();

const increase = createAction("INC");

function decrease(payload) {
  return { type: "DEC", payload };
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
