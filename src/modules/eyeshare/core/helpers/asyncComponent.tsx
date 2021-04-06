import React, { Component } from 'react';

const asyncComponent = (importComponent, Base) => {
  return class extends Base {
    state = {
      component: null
    }

    componentDidMount() {
      importComponent()
        .then(cmp => {
            this.setState({component: cmp.default});
        });
    }

    render() {
      const C = this.state.component;

      console.log(C);
      
      return C ? <C {...this.props}/> : null;
    }
  }
};

export default asyncComponent;