const rootContainer = document.querySelector("#root");

class Counter extends React.Component {
  state = {
    counter: 0,
  };

  counter = () => React.createElement("span", {}, this.state.counter);

  increase = () =>
    React.createElement(
      "button",
      {
        style: { margin: "5px" },
        onClick: () => this.setState({ counter: this.state.counter + 1 }),
      },
      "Increase"
    );

  decrease = () =>
    React.createElement(
      "button",
      {
        onClick: () => this.setState({ counter: this.state.counter - 1 }),
      },
      "Decrease"
    );

  render() {
    console.log(this.state);
    return React.createElement(
      "div",
      {},
      this.counter(),
      this.increase(),
      this.decrease()
    );
  }
}

const root = ReactDOM.createRoot(rootContainer);

const el = React.createElement(Counter);
const el2 = React.createElement(Counter);
const el3 = React.createElement(Counter);
const parent = React.createElement("div", {}, el, el2, el3);

root.render(parent);
