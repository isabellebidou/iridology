import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import $ from 'jquery';
//import CookieDisplay from "./CookieDisplay";
import CookieConsent from "react-cookie-consent";
import { updateCookieAcceptance } from '../actions';
import { fetchCookieValue } from '../actions';






class ParasiteDetox extends Component {
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
                    <a className="nav-link" href="#hygiene">Colon and Small Intestines hygiene</a>
                    <a className="nav-link" href="#products">Remedies to help you deworm</a>
                </div>

                <h1>
                    Get rid of the unwanted guests that infest your GI track
                </h1>
                <div className="col">
                <p className="itemp">
                        Your GI track can be the host of :
                        <ul className="ulp">
                        <li> parasites that come in the shape of worms like Ascaris lumbricoides (roundworm), Trichuris trichiura (whipworm), Enterobius vermicularis (pinworm), Taenia saginata and Taenia solium (tapeworms)...</li>
                        <li> microorganisms like the Candida albican yeast, a type of fungus commonly found in the human body, which can cause infections in the mouth, throat, genitals, and bloodstream when overgrown</li>
                        <li> bacteria like Escherichia coli (E. coli) or Streptococcus species that are responsible for SIBO (Small Intestinal Bacterial Overgrowth) when they happen to develop in the small intestines</li>
                    </ul>

                    There is a very subtle balance between fungus and bacteria in your GI track, what happens is when you fight bacteria off you get an explosion of fungus  and if you fight fungus off you get an explosion of bacteria.
                    The balance between fungus and bacteria is very hard to maintain once you start intervening. 
                    It is extremely important that you take good care of your GI track and adopt sensible dietary habits.
                        
                    </p>    
                    
                    <h2 id ="why">Why you need to deworm</h2>


                    <p className="itemp">
                        You may not be aware but chances are you are infested by warns people may not always be aware of it but mum infections are very frequent got symptoms and can be very annoying or not often a Parasite infection can reveal itself by disturbance of your digestion and GI track you may experience bloating constipation or diarrhea .
                        You may or may not see the worms in your stool.
                    </p>

                    <p className="itemp">


                    </p>
                    <div>
                        <h2 id ="how">What can I do to deworm myself?</h2>
                        <img className="adrenalspic" src="/colon.png" alt="the colon and small intestines" loading="lazy" title="the colon and small intestines"></img>

                        <p className="itemp">
                            You can get help from a doctor or therapist.
                            There is also a number of remedies you can put in place to fight against a parasite infection.
                            Depending on the case you might need some time to consider the possible remedies and get in tune with the remedies.
                            You might want to prepare yourself mentaly.
                        </p>

                    </div>


                    <ul className="ulp">
                        <li> Very often a parasite infestation goes hand-in-hand with slow bowel movement because the parasites find ways to change their environment and benefits from slow bowel movement. If it's the case then you're first effort has to go into taking control of your bowel movements and speed of motility.</li>
                        <li> If you are at the beginning of your detox trip chances are that your GI track is inflamed and full of mucus and agglomulations. Purging and cleaning is very important</li>
                        <li> It might be very hard and take a long time to completely get rid of parasites at this stage you can use herbal remedies to get rid of the parasites</li>
                    </ul>
                    <h2>Speed up bowel movement</h2>


                    <p className="itemp">
                        Reduce your intake or avoid grains and starches from your diet because they act like glue inside your bowels and if you're eating gluten it could add up as an inflammatory agent. You can use some plants that accelerate motility like cascara sagrada or triphala. Reducing the burden you put on your GI track is a good idea as well, adopting intermittent fasting can have a good effect on your digestion because it enables your system to clean it self.
                        If you are used to eating transformed food you might want to reconsider and eat Good quality products with organic fruit and vegetable, Good quality animal products if you consume them.
                    </p>
                    <img className="imgright" src="/worm.png" alt="worm" loading="lazy" title="worm"></img>

                    <h2 id="hygiene">Colon and Small Intestines hygiene</h2>

                    <p className="itemp">
                        In an ideal environment with the ideal diet the GI track cleans itself, the trouble is that if you constantly have a fridge with food at your disposal and if you constantly have cravings and you're eating too often and not giving your GI track enough time to rest, the GI track misses the opportunity to clean itself and waste accumulates on the walls.
                        This causes stagnation of stool, malabsorption and the perfect conditions for bacteria parasites and microorganisms to thrive.
                        Overtime waste accumulates and dries up and it becomes more and more difficult to get rid of. This is why you need to put in place some hygiene protocol.</p>
                    <p className="itemp">   
                        To cleanse you colon you might want to schedule a series of colonics with a therapist and/or try and grow a habit of having enemas.
                        To cleanse the Small Intestines, the only access is by the mouth. Not everybody agrees on it but I occasionally purge myself with Castor Oil, two tablespoons away from meals, on an empty stomach.
                        I would not purge myself with castor oil if I am constipated or agglomulaed and I would ensure I have a fairly clean colon before I do a castor oil purge.</p>
                    <p className="itemp">     
                        There is a number of ways one can use to detox one's GI track, you may consider trying some of the following:
                    </p>
                    <ul className="ulp" id="products">
                        <li>a set of colonics with a health practitioner (colon)</li>
                        <li>enemas with distilled water or decoctions of plants using an <a href="https://www.amazon.com/Enema-Kit-Home-and-Travel/dp/B07TXVFTT3 " >enema kit</a>(colon)</li>
                        <li>castor oil purge (small intestines and colon)</li>
                        <li><a href="https://drmorsesherbalhealthclub.com/products/parasite-g-general-90-capsules?sca_ref=3405638.5oYeVyhXwf">get a 10% discount on Dr. Morse 's Parasite G formula</a></li>
                        <li><a href="https://drmorsesherbalhealthclub.com/products/gi-broom-360-capsules?sca_ref=3405638.5oYeVyhXwf">get a 10% discount on Dr. Morse 's GI broom formula</a></li>
                        <li><a href="https://www.abcdelanature.com/p-29-coup-de-balai-melange-regenere.html">abc de la nature: coup de balais</a></li>
                        <li>bentonite/montmorillonite clay with water away from meals</li>
                        <li>bentonite/montmorillonite  clay + activated charcoal + psillium husk (1teaspoon of each with water away from meals)</li>
                        <li>nettle powder or <a href="https://en.anastore.com/articles/JT10_organic_turmeric_powder.php?affiliated_id=2877&epi=buy-turmeric-button">turmeric</a> are great detox allies of the GI track (start with half a teaspoon and build up)</li>
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

export default connect(mapStateToProps, { fetchCookieValue })(ParasiteDetox);