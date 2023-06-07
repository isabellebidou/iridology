import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import $ from 'jquery';
//import CookieDisplay from "./CookieDisplay";
import CookieConsent from "react-cookie-consent";
import { updateCookieAcceptance } from '../actions';
import { fetchCookieValue } from '../actions';
import { Helmet } from 'react-helmet-async';


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
        return (<>
            <Helmet>
                <title>Get rid of the unwanted guests that infest your GI track</title>
                <meta name="description"
                    content=" Parasites, microorganisms and bacteria can wreak havoc in your GI track causing bloating, leaky gut and intestinal discomfort. What you can do about it"

                />
                <link rel='canonical' href='/parasitedetox' />
            </Helmet>
            <div className="page">
                <h1>Gastro Intestinal(GI) track detox</h1>

                <div className="navigation-container">
                    <a className="nav-link" href="#why">Why you need to detoxify your GI track</a>
                    <a className="nav-link" href="#how">4 Steps to detox your GI track</a>
                    <a className="nav-link" href="#hygiene">Colon and Small Intestines hygiene</a>
                    <a className="nav-link" href="#products">Remedies to help you detoxify</a>
                    <a className="nav-link" href="#iridologyGI">Iridology and the GI track</a>
                </div>

                <h1>
                    Get rid of the unwanted guests that infest your GI track
                </h1>
                <p className="disclaimerp">
                Disclaimer: The content provided on this page is for informational and recreational purposes only. It is not intended to be a substitute for professional medical advice, diagnosis, or treatment. Only a licensed medical doctor can diagnose and prescribe medication or treatment. Any information provided on this page should not be relied upon for making decisions about your health or well-being. Before considering any treatment, it is essential to consult with your doctor or therapist to ensure that it is safe and suitable for your specific needs and medical history.
                </p>
                <div className="col">
                    <p className="itemp">
                        Your GI track can be the host of :</p>
                    <ul className="ulp">
                        <li> parasites that come in the shape of worms like Ascaris lumbricoides (roundworm), Trichuris trichiura (whipworm), Enterobius vermicularis (pinworm), Taenia saginata and Taenia solium (tapeworms)...</li>
                        <li> microorganisms like the Candida albican yeast, a type of fungus commonly found in the human body, which can cause infections in the mouth, throat, genitals, and bloodstream when overgrown.
                            If left untreated it damages the intestinal lining, leading to increased permeability or "leaky gut." This allows toxins and undigested food particles to enter the bloodstream, triggering an immune response and potential health problems like food intelerances.
                        </li>
                        <li> bacteria like Escherichia coli (E. coli) or Streptococcus species that are responsible for SIBO (Small Intestinal Bacterial Overgrowth) when they happen to develop in the small intestines. </li>
                    </ul>
                    <p className="itemp">
                        There is a very subtle balance between fungus and bacteria in your GI track, what happens is when you fight bacteria off you get an explosion of fungus  and if you fight fungus off you get an explosion of bacteria.
                        The balance between fungus and bacteria is very hard to maintain once you start intervening.
                        It is extremely important that you take good care of your GI track and adopt sensible dietary habits.

                    </p>

                    <h2 id="why">Why you need to detox your GI track</h2>


                    <p className="itemp">
                        You may not be aware but chances are you are infested by worms. People are not always be aware of it but worms infections are very frequent, gut symptoms can be very impacting or not. You may experience bloating constipation,  diarrhea or feel miserable.
                        The state of your gut directly impact your whole body, your immune system and mental health since the transverse colon has a direct link with your brains.
                        Your unwanted guests have a negative impact on your health both physical and mental, they acidify and add up toxicity to your system, and deprive you of your much needed nutrients.
                    </p>

                    <p className="itemp">


                    </p>
                    <div>
                        <h2 id="how">4 Steps to detox your GI track</h2>
                        <img className="adrenalspic" src="/colon.png" alt="the colon and small intestines" loading="lazy" title="the colon and small intestines"></img>

                        <p className="itemp">
                            Get help from a doctor or therapist.
                            Put in place some healthy habits.
                        </p>

                    </div>


                    <ul className="ulp">
                        <li> Very often a parasite infestation goes hand-in-hand with slow bowel movement because the parasites find ways to change their environment and benefits from slow bowel movement. If it's the case then you're first effort has to go into taking control of your bowel movements and speed of motility.</li>
                        <li> If you are at the beginning of your detox trip chances are that your GI track is inflamed and full of mucus and agglomulations. Purging and cleaning is very important</li>
                        <li> It might be very hard and take a long time to completely get rid of parasites at this stage you can use herbal remedies to get rid of the parasites</li>
                    </ul>
                    <h2>#1 Speed up bowel movement</h2>


                    <p className="itemp">
                        Reduce your intake or avoid grains and starches because they are inflammatory (gluten) and act like glue inside your bowels. You can use some plants that accelerate motility like cascara sagrada or triphala. Dr Morse has a range of formulas called GI renew that you can choose from according to the number of bowel movements you have per day: </p>
                    <dl>
                        <dt>Dr Morse's GI renew formulas</dt>
                        <dd><a href="https://drmorsesherbalhealthclub.com/products/gi-renew-1-normal-90-capsules?sca_ref=3405638.5oYeVyhXwf">GI renew 1</a> Intended for those with normal bowel movements with proper diet (discount)</dd>
                        <dd><a href="https://drmorsesherbalhealthclub.com/products/gi-renew-2-mild-90-capsules?sca_ref=3405638.5oYeVyhXwf">GI renew 2</a> Beneficial for those that move their bowels once per day and need gentle moving power (discount)</dd>
                        <dd><a href="https://drmorsesherbalhealthclub.com/products/gi-renew-3-moderate-90-capsules?sca_ref=3405638.5oYeVyhXwf">GI renew 3</a> Suggested if bowels are not moving every day or if one occasionally misses a day (discount)</dd>
                        <dd><a href="https://drmorsesherbalhealthclub.com/products/gi-renew-4-strong-90-capsules?sca_ref=3405638.5oYeVyhXwf">GI renew 4</a> Consistently moving bowels every other day (discount)</dd>
                        <dd><a href="https://drmorsesherbalhealthclub.com/products/gi-renew-5-super-mover-90-capsules?sca_ref=3405638.5oYeVyhXwf">GI renew 5</a> Bowel movements occur every two days or more (discount)</dd>
                    </dl>


                    <h2>#2 Diet Adjustments: Intermitent fasting, minimally processed organic food and juicing</h2>
                    <p className="itemp">Stay away from refined sugars</p>
                    <p className="itemp">
                        Reducing the burden you put on your GI track is essential, adopting intermittent fasting will have a good effect on your digestion because it enables your system to clean it self.</p>
                    <p className="itemp">
                        If you are used to eating highly processed food you might want to reconsider and eat good quality minimally processed products with organic fruit and vegetables, good quality animal products (grassfed meat, non pasteurized raw dairy...) if and when you consume them. </p>
                    <p className="itemp">
                        If your GI track is inflamed you might want to avoid eating large amounts of raw vegetables because the fiber they contain might irritate your bowel walls, Alternatively you will benefit greatly of the alcalizing effect of the same raw vegetables juiced.
                    </p>
                    <img className="imgright" src="/worm.png" alt="worm" loading="lazy" title="worm"></img>

                    <h2 id="hygiene">#3 Colon and Small Intestines hygiene procedures</h2>

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
                        <li>enemas with distilled water or decoctions of plants using an <a href="https://www.amazon.com/Enema-Kit-Home-and-Travel/dp/B07TXVFTT3 " > enema kit </a>(colon)</li>
                        <li>castor oil purge (small intestines and colon)</li>
                    </ul>
                    <h2 id="hygiene">#4 Supplements and remedies</h2>
                    <ul className="ulp" id="products">
                        <li><a href="https://drmorsesherbalhealthclub.com/products/parasite-g-general-90-capsules?sca_ref=3405638.5oYeVyhXwf">get a discount on Dr. Morse 's Parasite G formula</a> for parasite detoxing</li>
                        <li><a href="https://drmorsesherbalhealthclub.com/products/parasite-m-micro-organisms-90-capsules?sca_ref=3405638.5oYeVyhXwf">get a discount on Dr. Morse 's Parasite M formula</a> for micro-organisms detoxing</li>
                        <li><a href="https://drmorsesherbalhealthclub.com/products/gi-broom-360-capsules?sca_ref=3405638.5oYeVyhXwf">get a discount on Dr. Morse 's GI broom formula</a> for cleasing the GI track</li>
                        <li><a href="https://www.abcdelanature.com/p-29-coup-de-balai-melange-regenere.html">abc de la nature: coup de balais</a> for for cleasing the GI track</li>
                        <li><a href="https://www.abcdelanature.com/p-70-parasites-melange-plantes.html">abc de la nature: Parasites (Intestins)</a> for parasites and micro-organisms</li>
                        <li>bentonite/montmorillonite clay with water away from meals</li>
                        <li>bentonite/montmorillonite  clay + activated charcoal + psillium husk (1teaspoon of each with water away from meals)</li>
                        <li>nettle powder or <a href="https://en.anastore.com/articles/JT10_organic_turmeric_powder.php?affiliated_id=2877&epi=buy-turmeric-button">turmeric</a> are great detox allies of the GI track (start with half a teaspoon and build up)</li>
                    </ul>

                    <p className="itemp">
                        Here are a few plants that can help you fight parasites:
                    </p>

                    <ul className="ulp">
                        <li>Artemisia annua, Mugwort</li>
                        <li>Cat's claw</li>
                        <li>Wormwood</li>
                        <li>Cloves</li>
                        <li>Elecampane</li>
                        <li>Liquorice</li>
                        <li>Turmeric</li>
                        <li>Cinnamon</li>
                        <li>Balck Walnut Hulls</li>
                    </ul>

                
                <h2 id="iridologyGI">Iridology and the GI track</h2>
                <div>
                <img className="adrenalspic" src="/iridologyGI.png" alt="iris" loading="lazy" title="iris with sulfur deposits, radii solaris and balooning"></img>
                
                <p className="itemp">
                    Most people have a toxic colon and small intestine to some level. You can clearly see the shape of the GI track in the iris. You can see balloonings that can be consistent with SIBO symptoms, strictions and areas of special toxicity. Radii Solaris appear frequently radiating from the transverse colon into the head area. This is a sign that the toxicity from the colon is leaking into the head area affecting the brain, cognitive faculties.. sight and earing etc. depending on the area.</p>
                <p className="itemp">    
                    You can't see parasites looking at the iris, but what you can see very clearly is sulphur deposits starting in the colon and spreading onto the rest of the iris. Sulphur deposits are a perfect breeding ground for candida albicans.
                    Most of the time it will be obvious that the person should detoxify their GI track upon looking at the results of an iridology reading.
                </p>
                </div>
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
        </>

        );
    }

}
function mapStateToProps({ cookie }) {

    return { cookie }

};

export default connect(mapStateToProps, { fetchCookieValue })(ParasiteDetox);