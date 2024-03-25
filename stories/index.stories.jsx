import React from "react";
import MyCounter , {CemCounter}from "../src/index";

export default {
  parameters: {
    // layout: "centered",
  },
};

export const story1 = () => <MyCounter></MyCounter>;
export const story2 = () => <CemCounter></CemCounter>;
