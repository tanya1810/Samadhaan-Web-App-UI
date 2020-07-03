import React from "react";
import { Route, Switch } from "react-router-dom";
import Flexbox from "./flexbox";
import Feedbackpopup from "./feedbackpopup";

const LandingComplaint = (props) => {
  return (
    <Switch>
      <Route component={Flexbox} exact path="/complaints" />
      <Route component={Feedbackpopup} path="/complaints/feedback" />
    </Switch>
  );
  {
    console.log(props);
  }
};

export default LandingComplaint;