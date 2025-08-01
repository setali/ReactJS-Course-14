// import { createStore } from "redux";

function createStore(reducer) {
  let state, subscribeFunction;

  function dispatch(action) {
    state = reducer(state, action);

    subscribeFunction?.();
  }

  function getState() {
    return state;
  }

  function subscribe(cb) {
    subscribeFunction = cb;
  }

  dispatch({ type: "@@REDUX/INIT" });

  return {
    dispatch,
    getState,
    subscribe,
  };
}

function reducer(state = 10, action) {
  console.log(state);
  console.log(action);

  switch (action.type) {
    case "INC":
      return state + action.payload;

    case "DEC":
      return state - action.payload;

    default:
      return state;
  }
}

const store = createStore(reducer);

const { dispatch, getState, subscribe } = store;

const value = document.querySelector("#value");

function render() {
  value.innerHTML = getState();
}

subscribe(render);
render();

function increase(payload) {
  return { type: "INC", payload };
}

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
