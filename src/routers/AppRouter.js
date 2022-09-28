import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "../page/Home";
import EditTask from "../page/EditTask";
import EditTag from "../page/EditTag";
import EditTime from "../page/EditTime";
import SetTime from "../page/SetTime";
import Detail from "../page/Detail";


const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Switch>
        <Route exact path="/"><Home /></Route>
        <Route path="/edit/task/"><EditTask /></Route>
        <Route path="/edit/tag/"><EditTag /></Route>
        <Route path="/edit/time/"><EditTime /></Route>
        <Route path="/set/time/"><SetTime /></Route>
        <Route path="/detail/"><Detail /></Route>
      </Switch>
    </div>
  </BrowserRouter>
)

export default AppRouter;