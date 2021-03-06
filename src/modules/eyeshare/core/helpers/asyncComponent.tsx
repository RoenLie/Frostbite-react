import React, { Component } from 'react';

const asyncComponent = (importComponent: any, Base: any) => {
  return class extends Base {
    state = {
      component: null
    }

    componentDidMount() {
      importComponent()
        .then((cmp: any) => {
          this.setState({ component: cmp.default });
        });
    }

    render() {
      const C: any = this.state.component;

      console.log(C);

      return C ? <C {...this.props} /> : null;
    }
  }
};

export default asyncComponent;