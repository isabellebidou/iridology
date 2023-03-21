import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import $ from 'jquery';
//import CookieDisplay from "./CookieDisplay";
import CookieConsent from "react-cookie-consent";
import { updateCookieAcceptance } from '../actions';
import { fetchCookieValue } from '../actions';






class SulfurDetox extends Component {
    componentDidMount() {
        this.props.fetchCookieValue();

    }


    handleClose(e) {

        $(".actionsign").slideToggle();

    }




    handleAccept = () => {
        updateCookieAcceptance(true);
        this.props.fetchCookieValue();
        // this.renderButton()
    };

    handleDecline = () => {
        updateCookieAcceptance(false);
        $(".actionsign").hide();
        $(".actionbook").hide();
    };


    render() {
        const { cookie } = this.props;
        // Get the browser locale
        const browserLocale = navigator.language || navigator.userLanguage;

        // Extract the country code from the locale
        const countryCode = browserLocale.split('-')[1];
        return (
            <div className="page">

                <div className="navigation-container">
                    <a className="nav-link" href="#why">Why you need to deworm</a>
                    <a className="nav-link" href="#how">what can I do to deworm myself?</a>
                    <a className="nav-link" href="#products">herbal remedies and products to help you deworm</a>
                </div>

                <h1>
                    Get rid of the unwanted parasite that infest yor GI track
                </h1>
                <div className="col">
                    <h2>Why you need to deworm</h2>


                    <p className="itemp">
                        You may not be aware but chances are you are infested by warns people may not always be aware of it but mum infections are very frequent got symptoms and can be very annoying or not often a Parasite infection can reveal itself by disturbance of your digestion and GI track you may experience bloating constipation or diarrhea .
                        You may or may not see the worms in your stool.
                    </p>


                    <img className="imgright" src="/iridologypic.png" alt="iridologist" loading="lazy" title="iridologist"></img>

                    <p className="itemp">


                    </p>
                    <div>
                        <h2>what can I do to deworm myself?</h2>
                        <img className="lymphaticpic" src="/lymphaticsystem.png" alt="the lymphatic system" loading="lazy" title="the lymphatic system"></img>

                        <p className="itemp">
                            There is a number of remedies you can put in place to fight against a parasite infection.
                            Depending on the case you might need some time to consider the possible remedies and get in tune with the remedies.
                            You might want to prepare yourself your mental.
                        </p>

                    </div>


                    <ul className="ulp">
                        <li> Very often a parasite infection goes hand-in-hand with snow bowel movement because the parasites find ways to change their environment and benefits from slow bowel movement. If it's the case then you're first effort has to go into taking control of your bowel movements and speed of motility.</li>
                        <li> If you are at the beginning of your detox trip chances are that your GI track is inflamed and full of mucus and agglomulations. Purging and cleaning is very important</li>
                        <li> It might be very hard and take a long time to completely get rid of parasites at this stage you can use herbal remedies to get rid of the parasites</li>
                    </ul>
                    <h2>Speed up bowel movement</h2>


                    <p className="itemp">
                        Reduce your intake or avoid grains and starches from your diet Because they act like glue inside your bowels and if you're eating gluten it could add up as an inflammatory agent. You can use some plants that accelerate motility like cascara sagrada or triphala. Reducing the burden are you on your GI track is a good idea as well adopting intermittent fasting can have a good effect on your digestion because it enables your system to clean it self.
                        If you are used to eating transformed food you might want to reconsider and eat Good quality products with organic fruit and vegetable, Good quality animal products if you consume them.
                    </p>

                    <h2>Colon hygiene</h2>

                    <p className="itemp">
                        You might do a series of colonics With a therapist. You might want to try and obtain a habit of having enemas.
                        There is a number of ways one can use to detox one's GI track, you may consider trying some of the following:
                    </p>
                    <ul>
                        <li>a set of colonics with a health practitioner (very effective)</li>
                        <li>Taking special supplements or herbs like:</li>
                        <li>if you are in the US you will get a 10% discount on Dr. Morse 's GI broom formula<a href="https://drmorsesherbalhealthclub.com/collections/signature-formulas/products/gi-broom-7oz-powder?_pos=1&_sid=f26638637&_ss=r"></a></li>

                        https://www.abcdelanature.com/p-29-coup-de-balai-melange-regenere.html
                        <li>bentonite/montmorillonite clay with water away from meals</li>
                        <li>bentonite/montmorillonite  clay + activated charcoal + psillium husk (1teaspoon of each with water away from meals)</li>
                        <li>enemas with distilled water or decoctions of plants using an enema kit</li>
                        <li><a href="https://www.amazon.com/Enema-Kit-Home-and-Travel/dp/B07TXVFTT3 " >enama kit on amazon</a></li>
                        <li>nettle powder or turmeric are great detox allies of the GI track (start with half a teaspoon and build up)</li>
                    </ul>




                </div>






                <fieldset>
                    <legend><h2> Contact </h2></legend>

                    <div id="contact">
                        <img className="me" src="/me.png" alt="isabelle bidou" loading="lazy" title="Isabelle Bidou"></img>
                        <p className="itemp">My name is Isabelle Bidou. If you have questions, if you would like to book a reading and don't want to do it online... feel free to contact me. <a href="mailto:isa.bidou@gmail.com?subject=iridology information">isa.bidou@gmail.com</a></p>

                    </div>

                </fieldset>






                <div>
                    <CookieConsent
                        location="bottom"
                        buttonText="ok"
                        cookieName="iridologyCookieConsent"
                        style={{ background: "#2B373B" }}
                        buttonStyle={{ color: "#4e503b", fontSize: "13px" }}
                        expires={150}
                        enableDeclineButton
                        onDecline={() => {

                            this.handleDecline()
                        }}
                        onAccept={() => {
                            this.handleAccept()

                        }}
                        overlay
                    >
                        This website uses cookies for authentication with google OAuth and payment with Stripe, to enhance the user experience.{" "}
                        If you consent to using cookies you can authentify with your google credentials and order a reading online. Alternatively you can send me an email or book a reading via fiverr.
                        <br />
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

                        {" "}

                    </CookieConsent>
                </div>
            </div>

        );
    }

}
function mapStateToProps({ cookie }) {

    return { cookie }

};

export default connect(mapStateToProps, { fetchCookieValue })(SulfurDetox);