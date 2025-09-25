// src/components/GridBackground/GridBackground.js
import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import flow from 'lodash/flow';
import withWindowSize from '../../withWindowSize';
import GridItem from './GridItem';

class GridBackground extends React.PureComponent {
  constructor(props) {
    super(props);

    const { innerWidth = 1280, innerHeight = 800 } = this.props;
    this.state = {
      itemWidth: this.calcItemWidth(innerWidth, innerHeight),
      itemHeight: this.calcItemHeight(innerHeight),
    };
  }

  componentWillReceiveProps(nextProps) {
    if (
      this.props.innerHeight !== nextProps.innerHeight ||
      this.props.innerWidth !== nextProps.innerWidth
    ) {
      this.processSize(nextProps);
    }
  }

  calcItemWidth = (innerWidth, innerHeight) => {
    if (innerHeight === 0) return 0;
    const itemHeight = innerHeight / 6;
    const cols = Math.floor(innerWidth / itemHeight) || 1;
    return itemHeight + (innerWidth % itemHeight) / cols;
  };

  calcItemHeight = (innerHeight) => innerHeight / 6;

  processSize = (props = this.props) => {
    const { innerWidth, innerHeight } = props;

    this.setState({
      itemWidth: this.calcItemWidth(innerWidth, innerHeight),
      itemHeight: this.calcItemHeight(innerHeight),
    });
  };

  generateDOM() {
    const { itemWidth, itemHeight } = this.state;
    const { children, innerWidth } = this.props;

    const itemsNumberByLine = Math.floor(innerWidth / itemWidth) || 1;
    let interval = 0;

    return _.map(_.range(150), (i) => {
      if (i - itemsNumberByLine >= 0 && i % itemsNumberByLine === 0) {
        interval += itemsNumberByLine - 2;
      }

      const childIndex = (i - interval) % children.length;
      const child = React.createElement(children[childIndex].type, {
        ...children[childIndex].props,
        style: {
          ...children[childIndex].props.style,
          border: `0px solid black`,
          width: '100%',
          height: '100%',
        },
      });

      return (
        <GridItem key={i} width={itemWidth} height={itemHeight}>
          {child}
        </GridItem>
      );
    });
  }

  render() {
    // Protege contra SSR
    if (typeof navigator !== 'undefined' && navigator.userAgent === 'ReactSnap') {
      return <div />;
    }

    return (
      <div style={{ display: 'flex', flexWrap: 'wrap', height: '100%' }}>
        {this.generateDOM()}
      </div>
    );
  }
}

GridBackground.propTypes = {
  innerHeight: PropTypes.number,
  innerWidth: PropTypes.number,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

GridBackground.defaultProps = {
  innerHeight: 0,
  innerWidth: 0,
};

const decorators = flow([withWindowSize]);

export default decorators(GridBackground);
