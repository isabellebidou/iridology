import React, { Component } from 'react';
//import './Logo.css'; // Import the CSS file containing logo styles


class Logo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isMounted: false
    };
  }

  componentDidMount() {
  
    setTimeout(() => {
      this.setState({ isMounted: true });
    }, 0); // Delay the state update to allow the transition to take effect
  }

  render() {
    const { isMounted } = this.state;
    const logoClassName = isMounted ? 'logo_mounted' : 'logo';

    return (
      <a href="/">
        <img className={logoClassName} src='/seagul.png'salt="logo" loading="eager" title="iridology by isabelle logo" />
      </a>
    );
  }
}

export default Logo;
