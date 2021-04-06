import React from 'react'
import asyncComponent from '../../helpers/asyncComponent';


class HomeSys extends React.Component {
  constructor() { super(); }
  componentDidMount() {
    console.log("base Home component mounted");
  }

  render() {
    return <div>hei</div>;
  }
}

const Home = asyncComponent(() => {
  return import("../../../components/cus/HomeCus");
}, HomeSys);

export default Home;

