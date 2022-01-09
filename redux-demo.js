const redux = require("redux");

// reducer. Will run initially; we must give a default state
const counterReducer = (state = { counter: 0 }, action) => {
  if (action.type === "increment") {
    return {
      counter: state.counter + 1,
    };
  }

  if (action.type === "decrement") {
    return {
      counter: state.counter - 1,
    };
  }

  return state;
};

const store = redux.createStore(counterReducer);

//subscriber
const counterSubscriber = () => {
  const latestState = store.getState(); //get latest state
  console.log(latestState);
};

store.subscribe(counterSubscriber); //expects a function that redux will execute for us whenever the data in the store changes

store.dispatch({ type: "increment" }); //dispatch causes reducer to run
store.dispatch({ type: "decrement" });