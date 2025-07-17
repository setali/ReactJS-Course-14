import React, { Component } from "react";
import Counter from "./1-Counter";
import LifeCycle from "./2-LifeCycle";
import UnMounting from "./3-UnMounting";
import ErrorBoundaries from "./4-ErrorBoundaries";
import ListKeys from "./5-ListKeys";
import Fragment from "./6-Fragment";
import Portal from "./7-Portal";
import Form from "./8-Form";
import AdvanceSetState from "./9-AdvanceSetState";
import CreateRef from "./10-CreateRef";
import PureComponent from "./11-PureComponent";
import Stateless from "./12-Stateless";
import ClassVsFunction from "./13-ClassVsFunction";
import UseState from "./14-UseState";
import UseEffect from "./15-UseEffect";
import AdvanceStateEffect from "./16-AdvanceStateEffect";
import HooksRules from "./17-HooksRules";
import CustomHooks from "./18-CustomHooks";
import TodosUseState from "./19-TodosUseState";
import UseReducer from "./20-UseReducer";
import TodosUseReducer from "./21-TodosUseReducer";
import UseMemo from "./22-UseMemo";
import HOCApp from "./HOC/App";
import Memo from "./23-Memo";
import UseRef from "./24-UseRef";
import UseCallback from "./25-UseCallback";

export default class App extends Component {
  render() {
    return (
      <div>
        <UseCallback />
        {/* <UseRef /> */}
        {/* <Memo /> */}
        {/* <HOCApp /> */}
        {/* <UseMemo /> */}
        {/* <TodosUseReducer /> */}
        {/* <UseReducer /> */}
        {/* <TodosUseState /> */}
        {/* <CustomHooks /> */}
        {/* <HooksRules /> */}
        {/* <AdvanceStateEffect /> */}
        {/* <UseEffect /> */}
        {/* <UseState /> */}
        {/* <ClassVsFunction /> */}
        {/* <Stateless /> */}
        {/* <PureComponent /> */}
        {/* <CreateRef /> */}
        {/* <AdvanceSetState /> */}
        {/* <Form /> */}
        {/* <Portal /> */}
        {/* <Fragment /> */}
        {/* <ListKeys /> */}
        {/* <ErrorBoundaries /> */}
        {/* <UnMounting /> */}
        {/* <LifeCycle /> */}
        {/* <Counter defaultValue={1} />
        <Counter defaultValue={10} />
        <Counter defaultValue={15} />
        <Counter /> */}
      </div>
    );
  }
}
