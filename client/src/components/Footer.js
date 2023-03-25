import React, { Component } from "react";
import { Link } from "react-router-dom";




class Footer extends Component {



  render() {
    // Get the browser locale
    const browserLocale = navigator.language || navigator.userLanguage;

    // Extract the country code from the locale
    const countryCode = browserLocale.split('-')[1];

    return (
      <div className="footer">
        <hr />
        <span className="item">Isabelle Bidou - copyright {new Date().getFullYear()}</span>
        {(countryCode !== 'FR' || countryCode !== 'fr') &&
          <span className="item">
            <Link key={'legalnoticelink'}
              to={'/legalnotice'}
            >
              Legal Notice
            </Link>
          </span>}
          {(countryCode === 'FR' || countryCode === 'fr') &&
          <span className="item">
            <Link key={'mentionslegaleslink'}
              to={'/mentionslegales'}
            >
              Mentions legales
            </Link>
          </span>}
      </div>


    );
  }
}

export default Footer;
