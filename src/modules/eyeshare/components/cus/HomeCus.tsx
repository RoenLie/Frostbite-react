import React from 'react'
import HomeSys from "../../core/components/home/index";

export default class HomeCus extends HomeSys {
  constructor() { super(); }
  componentDidMount() {
    // super.componentDidMount();
    console.log("custom home component mounted");
  }
}