import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import FaqList from "./faqs/FaqList";
import FaqForm from "./faqs/FaqForm";
import LinkList from "./links/LinkList";
import LinkForm from "./links/LinkForm";
import OfferList from "./offers/OfferList";
import StarReviewList from "./starreviews/StarReviewList";
import $ from 'jquery';
//import CookieDisplay from "./CookieDisplay";
import CookieConsent from "react-cookie-consent";
import { updateCookieAcceptance } from '../actions';
import { fetchCookieValue } from '../actions';






class Landing extends Component {
    componentDidMount() {
        this.props.fetchCookieValue();
       // $(".logo").removeClass("logo").addClass("logo_mounted");

       

    }


    handleClose(e) {

        $(".actionsign").slideToggle();

    }
    renderFaqForm() {
        if (this.props.auth && this.props.auth.type === "admin") {
            return (

                <FaqForm />

            );


        }

    }
    renderLinkForm() {
        if (this.props.auth && this.props.auth.type === "admin") {
            return (

                <LinkForm />

            );

        }

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

    renderButton() {
        if (this.props.auth) {
            return (

                <Link to="/readings" className="">
                    <button className="actionbook" >book your reading today</button>
                </Link>

            );


        } else {
            return (
                <span className="actionsign button" >
                    Sign in and book your reading today!<br />
                    <span className="closeWindow" onClick={this.handleClose}>x</span>
                    <a href="/auth/google" ><img alt="google sign in" loading="eager" title="sign in with google" src="/btn_google_signin_dark_normal_web.png" /></a>
                </span>
            );

        }

    }
    render() {
        const { cookie } = this.props;
         // Get the browser locale

    const browserLocale = navigator.language || navigator.userLanguage;

    // Extract the country code from the locale
    const countryCode = browserLocale.split('-')[1];
        return (
            <div className="page" >

                <div className="navigation-container">
                    <a className="nav-link" href="#can">What iridology can do</a>
                    <a className="nav-link" href="#reviews">Reviews</a>
                    <a className="nav-link" href="#faq">Iridology FAQ</a>
                    <a className="nav-link" href="#offer">Offer</a>
                    <a className="nav-link" href="#links">Resources & links</a>
                    <a className="nav-link" href="#contact">Contact</a>
                </div>

                <h1>
                    Iridology Readings for health and detox purposes
                </h1>
                <p className="disclaimerp">
                Disclaimer: The content provided on this page is for informational and recreational purposes only. It is not intended to be a substitute for professional medical advice, diagnosis, or treatment. Only a licensed medical doctor can diagnose and prescribe medication or treatment. Any information provided on this page should not be relied upon for making decisions about your health or well-being. Before considering any treatment, it is essential to consult with your doctor or therapist to ensure that it is safe and suitable for your specific needs and medical history.
                </p>
                <div className="col">
                    <h2>Why you need an iridology reading to help you on your journey to a healthy life</h2>


                    <p className="itemp">
                        You have been trying to get well for a while now. You've looked at plenty of YouTube videos you've tried plenty of different diets. You've tried to work out and you experienced different symptoms and then you give up and then you try again and it's never ending and you're not sure because one day you read that something is good for you and then the next this is the very thing that is bad for you! Now you feel frustrated, confused and overwhelmed with your symptoms.
                        <br />
                        While an iridology reading is not going to replace an appointment with the doctor, it might help you or your therapist draw an overall picture of your health and provide insight about the priorities and actions to put in place. Most of the time the road to a healthy and painfree life is long and this can be confusing.

                    </p>


                    <img className="imgright" src="/iridologypic.png" alt="iridologist" loading="lazy" title="iridologist" ></img>

                    <p className="itemp">
                        Iridology is the study of the iris, the colored part of the eye, as a means of identifying the areas of your body that need attention. The iris can reveal information about a person's genetic predispositions, organ function, and overall health.

                        <br />
                        The advantages of getting an iridology reading are that it provides a comprehensive view of the individual's health, it is non-invasive, and it can help to identify health issues in the early stages, allowing for early intervention and preventative measures. Iridology readings can also help individuals to make lifestyle and dietary changes that support their health and wellness.
                        <br />
                        I have Studied iridology with Dr Morse and Thierry Casasnovas. The type of iridology I have learnt focusses on the endoctrine and lymphatic systems.

                    </p>
                    <div>
                    <h2>The lymphatic system</h2>
                    <img className ="lymphaticpic"  src="/lymphaticsystem.png" alt="the lymphatic system" loading="lazy" title="the lymphatic system" ></img>

                    <p className="itemp">
                        The lymphatic system is a network of vessels, tissues, and organs that helps maintain fluid balance, filters waste and  toxins, and aids the body's immune response. It circulates lymph, a clear fluid that carries waste and immune cells, to the bloodstream for elimination.
                        The lymphatic system plays a very important role in detoxination and immunity.
                    </p>
                    
                    </div>
                    <h2>The endocrine system</h2>
                    <img className="adrenalspic"  src="/adrenalglands.png" alt="the adrenal glands" loading="lazy" title="adrenal glands"></img>
                    <p className="itemp">
                        The endocrine system is a network of glands that secrete hormones to regulate various bodily functions such as growth, metabolism, sexual development and function, and response to stress. These hormones act as chemical messengers to target organs and tissues, regulating their activity.
                        <br />
                        In the context of a detox program an iridology reading will help you or your therapist:

                    </p>
                   
                    <ul className="ulp">
                        <li>Uncover hidden health issues that may be contributing to toxic overload</li>
                        <li>Provide insight into a person's unique metabolic and constitutional makeup, which can inform personalized detox protocols</li>
                        <li>Track progress and monitor the effectiveness of a detox program</li>
                    </ul>

                    <span id="cant" ></span>

                    <img className="imgleft" src="/iridologypic2.png" alt="eye" loading="lazy" title="eye"></img>
                    <p className="itemp">Iridology readings CANNOT diagnose: diseases, blood sugar levels, B 12 levels, cancers, viruses, parasites,pregnancy ...</p>


                    <span id="can" ></span>
                    <br />
                    <br />
                    <h2>What an iridology reading can do for you</h2>


                    <p className='itemp'>Identifying the areas of lymphatic congestions in your body gives clues about your detox capacities and needs, and reveals the main priorities to reach your health goals. Iridology can tell about :</p>

                    <ul id="canul" className="ulp">
                        <li>your constitution,</li>
                        <li>the condition of the cells of your body,</li>
                        <li>the condition of the fluids of your body,</li>
                        <li>heredity,</li>
                        <li>weak areas/organs, congestions in your body,</li>
                        <li>sulfur, drug deposits...</li>
                    </ul>
                    <img className="imgright" src="/iridologypic3.png" alt="eye" loading="lazy" title="eye"></img>
                    <p className="itemp">Stop wasting your time, book your your iridology reading today and get a real time insight into what is going on in your body. Just sign in, fill in a form with basic information, upload your eye pics and order your reading now.
                    </p>
                    <br />
                </div>
                <fieldset>
                    <legend><h2> Reviews </h2></legend>

                    <span id="reviews" >

                    </span>
                    <StarReviewList />
                    {(this.props.auth && this.props.auth.numberOfReadings > 0) &&
                        <Link to="/readings" className="">
                            <button className="actionupload" >leave a review on your profile</button>
                        </Link>}


                </fieldset>
                <fieldset>
                    <legend><h2> Frequently Asked Questions </h2></legend>

                    <span id="faq" >

                    </span>
                    <FaqList />
                    {this.renderFaqForm()}


                </fieldset>


                <fieldset>
                    <legend><h2> Offer </h2></legend>

                    <span id="offer" >

                    </span>
                    <OfferList />


                </fieldset>

                <fieldset>
                    <legend><h2> Links </h2></legend>

                    <span id="links" >

                    </span>

                    <LinkList />
                    {this.renderLinkForm()}


                </fieldset>

                <fieldset>
                    <legend><h2> Contact </h2></legend>

                    <div id="contact" >
                    <img className ="me"  src="/me.png" alt="isabelle bidou" loading="lazy" title="Isabelle Bidou"></img>
                        <p className="itemp">My name is Isabelle Bidou. If you have questions, if you would like to book a reading and don't want to do it online... feel free to contact me. <a href="mailto:isa.bidou@gmail.com?subject=iridology information">isa.bidou@gmail.com</a></p>

                    </div>

                </fieldset>
                {(cookie === true || cookie === '' || cookie === null) && <span>{this.renderButton()}</span>}
                <div >

                </div>
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
        );
    }

}
function mapStateToProps({ auth, cookie }) {

    return { auth, cookie }

};

export default connect(mapStateToProps, { fetchCookieValue })(Landing);