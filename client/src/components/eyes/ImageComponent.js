
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

  fetchRawUrl = async (picId) => {
    const rawUrl = await fetch(`/api/raw_eye_pic/${picId}`);
    return await rawUrl.json();
  }



  handleClick = async () => {
    const { id, side, dateSent } = this.props;
    const rawUrl = await this.fetchRawUrl(id);
    this.props.history.push({
      pathname: '/eyepic',
      state: {
        id,
        src: rawUrl, // use the rawUrl from the action if available, fallback to the original src
        alt: `${side} eye pic`,
        side,
        dateSent
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

      />
    );
  }
}



export default (withRouter(ImageComponent));
