const rootContainer = document.querySelector("#root");

class Counter extends React.Component {
  state = {
    counter: 0,
  };

  render() {
    return (
      <div>
        <span>{this.state.counter}</span>
        <button
          style={{ margin: "5px" }}
          onClick={() => this.setState({ counter: this.state.counter + 1 })}
        >
          Increase
        </button>
        <button
          onClick={() => this.setState({ counter: this.state.counter - 1 })}
        >
          Decrease
        </button>
      </div>
    );
  }
}

const root = ReactDOM.createRoot(rootContainer);

root.render(
  <div>
    <Counter />
    <Counter></Counter>
    <Counter />
  </div>
);
