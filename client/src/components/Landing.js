import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";



class Landing extends Component {


    renderButton() {
        if (this.props.auth) {
            return(

                    <Link to="/readings" className="">
                    <button className="actionbook" >book your reading today</button>
                  </Link>
            
                );
            

        } /*else {
            return(
                <a href="/auth/google" className="actionsign button"><img src="/btn_google_signin_dark_normal_web.png" /></a>
            
                );

        }*/
        
        

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
                            <a className="floata" href="#remedies">Remedies</a>
                        </li>
                        <li className="floatli" >
                            <a className="floata" href="#offer">Offer</a>
                        </li>
                        <li className="floatli" >
                            <a className="floata" href="#links">Resources & links</a>
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
                        While in Arizona to Reading is not going to replace an appointment with the doctor, it might help you or your therapist draw an overall picture of your health and provide insight about the priorities and actions ot ut in place.

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
                        You can
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

                    <dl>
                        <dt className="question">Can I take a picture of my irides myself with a smartphone?</dt>

                        <dd className="answer">Yes. If you are on your own, you can use a miror and see the reflection of the picture taken in the miror. take the picture when you can see the whole iris and the image is clear. It's a bit tricky but with a bit of patience and a few attempts you can achieve a good result.</dd>

                        <dt className="question">What device do I need to take the pictures ?</dt>

                        <dd className="answer">You can use a smartphone, a camera or iriscope.</dd>

                        <dt className="question">What kind of Iridology do I offer?</dt>

                        <dd className="answer">I learnt iridology from my two mentors : - Dr Morse with the International School of the Healing Arts and Science. - Thierry Casasnovas.</dd>

                        <dt className="question">What kind of protocols do I recommend?</dt>

                        <dd className="answer">Herbs, bentonite clay.. Depending on your needs I will usually recommend herbs that will help the body to detox and or regenerate itself. You should always consult your doctor before taking any supplement.</dd>
                        <dt className="question">how often should I get an iridology reading?</dt>

                        <dd className="answer">once every 6 months. If you are on a detox journey, it provides a visual of the progress you are making.
                            When you are making efforts to get better it is sometimes hard and sometimes you get worse and it can be very frustrating if you are in the blind and you if you don't see that you you are actually making progress.
                            After a few months, or a few years when you are on that your recovery journey you can get discouraged if you don't see that you're actually making progress. You could get so discouraged that you would actually give up instead of going on and working on your health recovery.
                        </dd>
                    </dl>
                </fieldset>


                <h2>Health Myths</h2>
                <p className="itemp" id="healthmyths">

                </p>
                <h2>Remedies</h2>
                <p className="itemp" id="remedies">

                </p>
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
//export default Landing;