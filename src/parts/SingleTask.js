import React from "react";

const SingleTask = ({ name, totalTime, targetTime, memo, onEditTask }) => (
  <div>
    <h3>{name}</h3>
    <ul>
      <li>Total Time: {totalTime}H</li>
      <li>Target Time: {targetTime}H</li>
    </ul>
    { memo && <p>memo: {memo}</p> }
    <button onClick={() => onEditTask(name)}>Edit</button>
  </div>
);

export default SingleTask;