
import React from 'react';
import { withRouter } from "react-router-dom";

class ImageComponent extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      width: 100,
      height: 100,
      zIndex: 1,
      className: 'simple'
    };
  }



  handleMouseOver = () => {
    this.setState({
      className: 'focus'

    });

  };

  handleMouseOut = () => {
    this.setState({
      className: 'simple'
    });

  };

  handleClick = () => {
    this.props.history.push({
      pathname: '/eyePic',
      state: {
        id: this.props.id,
        src: this.props.src,
        alt: this.props.alt,
        side: this.props.side,
        dateSent: this.props.dateSent
      }
    });
  };

  render() {
    return (
      <img
        id={this.props.id}
        src={this.props.src}
        alt={this.props.alt}
        style={this.props.zIndex}
        width={this.state.width + '%'}
        height={this.state.height + '%'}
        className={this.state.className}
        onClick={this.handleClick}
      // onMouseOver={this.handleMouseOver}
      // onMouseOut={this.handleMouseOut}

      />
    );
  }
}

export default withRouter(ImageComponent);
