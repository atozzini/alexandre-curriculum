// src/withWindowSize.js
import React from 'react';

function withWindowSize(WrappedComponent) {
  return class WindowSizeProvider extends React.Component {
    state = {
      innerWidth: 1280,
      innerHeight: 800,
    };

    componentDidMount() {
      window.addEventListener('resize', this.onWindowResize);
      this.onWindowResize();
    }

    componentWillUnmount() {
      window.removeEventListener('resize', this.onWindowResize);
    }

    onWindowResize = () => {
      this.setState({
        innerWidth: window.innerWidth,
        innerHeight: window.innerHeight,
      });
    };

    render() {
      return <WrappedComponent {...this.props} {...this.state} />;
    }
  };
}

export default withWindowSize;
