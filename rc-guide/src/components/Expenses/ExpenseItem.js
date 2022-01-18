// component is reactjs is just a js function
import React, { useState } from "react";

import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";
import Card from "../UI/Card";

function ExpenseItem(props) {
  //   const expenseDate = new Date(2021, 2, 28);
  //   const expenseTitle = "Antenna";
  //   const expenseAmount = 234.87;

  const [title, setTitle] = useState(props.title); //should be called inside component function (& not nested funcs)

  // let title = props.title;
  const clickHandler = () => {
    setTitle("Updated");
    console.log(title);
    // title = "Updated!";
  };

  return (
    <div>
      <Card className="expense-item">
        <ExpenseDate date={props.date} />
        <div className="expense-item__description">
          <h2>{title}</h2>
          <div className="expense-item__price">${props.amount}</div>
        </div>
        <button onClick={clickHandler}>Change title</button>
      </Card>
    </div>
  );
}

export default ExpenseItem;
