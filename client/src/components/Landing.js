import React, { Component } from "react";

import { connect } from "react-redux";
import { Link } from "react-router-dom";
import FaqList from "./faqs/FaqList";
import FaqForm from "./faqs/FaqForm";
import LinkList from "./links/LinkList";
import LinkForm from "./links/LinkForm";
import OfferList from "./offers/OfferList";
//import $ from 'jquery';





class Landing extends Component {

/*handleClose(e){
    $("#signInBlock").slideToggle();

} */
renderFaqForm(){
    if (this.props.auth && this.props.auth.type ==="admin") {
        return(

                <FaqForm />
        
            );
        

    }

}
renderLinkForm(){
    if (this.props.auth && this.props.auth.type ==="admin") {
        return(

                <LinkForm />
        
            );
        

    }

}

    renderButton() {
        if (this.props.auth) {
            return(

                    <Link to="/readings" className="">
                    <button className="actionbook" >book your reading today</button>
                  </Link>
            
                );
            

        } else {//<span className="closeWindow" onClick={this.handleClose}>x</span>
            return(
                <span className="actionsign button" id ='signInBlock'>
                Sign in and book your reading today!<br />
                <a href="/auth/google" ><img src="/btn_google_signin_dark_normal_web.png" /></a>
                </span>
                );

        }
        
        

    }
    render() {
        return (
            <div className="landing" >


                <span data-role="navigation" className="" >
                    <ul className="navigationul">
                        <li className="floatli" >
                            <a className="floata" href="#can">What iridology can do</a>
                        </li>
                        <li className="floatli" >
                            <a className="floata" href="#faq">Iridology FAQ</a>
                        </li>

                        <li className="floatli" >
                            <a className="floata" href="#offer">Offer</a>
                        </li>
                        <li className="floatli" >
                            <a className="floata" href="#links">Resources & links</a>
                        </li>
                        <li className="floatli" >
                            <a className="floata" href="#contact">Contact</a>
                        </li>

                    </ul>

                </span>
                
                <h1>
                    Iridology Readings
                </h1>
                <div className="col">
                    <h2>Why you need an iridology reading to help you on your journey to a healthy life</h2>


                    <p className="itemp">
                        You have been trying to get well for a while now. You've looked at plenty of YouTube videos you've tried plenty of different diets. You've tried to work out and you seen a result and then you give up and then you try again and it's never ending and you're not sure because one day you read that something is good for you and then the next this is the very thing that is bad for you! Now you feel frustrated, confused and overwhelmed with your symptoms.
                        <br />
                        While an iridology reading is not going to replace an appointment with the doctor, it might help you or your therapist draw an overall picture of your health and provide insight about the priorities and actions ot ut in place.

                    </p>


                    <img className="imgright" src="/iridologypic.png" alt="iridologist"></img>

                    <p className="itemp">
                        Iridology is the study of the iris, the colored part of the eye, as a means of identifying the areas of your body that need attention. The iris can reveal information about a person's genetic predispositions, organ function, and overall health.

                        <br />
                        The advantages of getting an iridology reading are that it provides a comprehensive view of the individual's health, it is non-invasive, and it can help to identify health issues in the early stages, allowing for early intervention and preventative measures. Iridology readings can also help individuals to make lifestyle and dietary changes that support their health and wellness.
                        <br />
                        I have Studied iridology with Dr Morse and Thierry Casasnovas. The type of iridology I have learnt focusses on the endoctrine and lymphatic systems.

                     </p>
                        <h2>The lymphatic system</h2>
                        <p className="itemp">
                        The lymphatic system is a network of vessels, tissues, and organs that helps maintain fluid balance, filters waste and  toxins, and aids the body's immune response. It circulates lymph, a clear fluid that carries waste and immune cells, to the bloodstream for elimination.
                        The lymphatic system plays a very important role in detoxination and immunity.
                        </p>
                        <h2>The endocrine system</h2>
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



                    <img className="imgleft" src="/iridologypic2.png" alt="eye"></img>
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
                    <img className="imgright" src="/iridologypic3.png" alt="eye"></img>
                    <p className="itemp">Stop wasting your time, book your your iridology reading today and get a real time insight into what is going on in your body. Just sign in, fill in a form with basic information, upload your eye pics, buy credit and order your reading now.
                    {this.renderButton()}</p>
                    <br />
                </div>
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

                    <span id="contact" >
                    <p className="itemp">If you have questions, if you would like to book a reading and don't want to do it online... feel free to contact me. <a href="mailto:isa.bidou@gmail.com?subject=iridology information">email me</a></p>

                    </span>

                    
                </fieldset>
                <div >
                    {this.renderButton()}
                </div>




            </div>
        );
    }

}
function mapStateToProps({ auth }) {
    return { auth }

};

export default connect(mapStateToProps)(Landing);