import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import $ from 'jquery';
//import CookieDisplay from "./CookieDisplay";
import CookieConsent from "react-cookie-consent";
import { updateCookieAcceptance } from '../actions';
import { fetchCookieValue } from '../actions';
import { Helmet } from 'react-helmet-async';
import VanillaLazyLoad from "vanilla-lazyload";






class AdrenalFatigue extends Component {

    constructor(props) {
        super(props);
        this.iframeRef = React.createRef();
    }
    componentDidMount() {
        this.props.fetchCookieValue();
        const lazyLoadInstance = new VanillaLazyLoad({
            elements_selector: ".lazy",
        });
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
                <title>How to deal with Adrenal Fatigue and Burn out</title>
                <meta name="description"
                    content="Some information about adrenal fatigue and how to handle it with hormesis, rest, a change of habits, spiritual and emotional hyiene, and herbal remedies "

                />
                <link rel='canonical' href='/adrenalfatigue' />
            </Helmet>
            <div className="page">
                <h1>Adrenal fatigue</h1>

                <div className="navigation-container" role="navigation">
                    <a className="nav-link" href="#symptoms">Symptoms of Adrenal fatigue</a>
                    <a className="nav-link" href="#why">Factors and causes of Adrenal fatigue</a>
                    <a className="nav-link" href="#how">4 steps to combat Adrenal Fatigue</a>
                    <a className="nav-link" href="#products">Supplements for adrenal glands</a>
                    <a className="nav-link" href="#spititualhygiene">Spiritual and emotional hygiene</a>
                    <a className="nav-link" href="#iridologyadrenal">Iridology and Adrenal fatigue</a>
                </div>

                <h1>
                    Adrenal Fatigue and Burn out
                </h1>
                <p className="disclaimerp">
                    Disclaimer: The content provided on this page is for informational and recreational purposes only. It is not intended to be a substitute for professional medical advice, diagnosis, or treatment. Only a licensed medical doctor can diagnose and prescribe medication or treatment. Any information provided on this page should not be relied upon for making decisions about your health or well-being. Before considering any treatment, it is essential to consult with your doctor or therapist to ensure that it is safe and suitable for your specific needs and medical history.
                </p>
                <div className="col">

                    <h2 id="symptoms">Symptoms of Adrenal fatigue</h2>
                    <p className="itemp" >
                        There is a wide range of symptoms that may be attributed to adrenal fatigue such as chronique low energy, depression low tolerance to stress, intolerance to cold, When decision-making becomes impossible and when it puts a strain on you. No energy in the morning to start the day and a paradoxical difficulty to unwind in the evening to relax and find sleep at bed time.
                        When you find yourself exhausted in social situations and you see that they drain a lot of your energy when other people are actually doing okay. When you see that it takes you substantially longer to recover from stressful events than it used to in the past. When you see that you're just not bouncing back.

                    </p>
                    <h2 id="why">Factors that cause a strain on adrenal health</h2>


                    <p className="itemp">
                        Adrenal fatigue typically happens when you've put too much strain on your adaptability for too long, you have depleted your energy.
                        There is a number of factors that can put a strain on your adrenal glands like too much physical or mental adaptation, solicitation for too long without the needed recovery time.
                        The body has to adapt when not given enough sleep, overworked, lack of nutrients, cold, hot, pressure, activity, lack of physical activity, basically anything that sets it out of balance for too long.

                    </p>
                    <img className="imgright" src="/fatigue.png" alt="tired woman" loading="lazy" title="tired woman"></img>
                    <h2 id="how">4 steps to combat Adrenal Fatigue</h2>
                    <ul className="ulp">
                        <li> Rest</li>
                        <li> Change the conditions that led to the adrenals depletion</li>
                        <li> Hormesis</li>
                        <li> Take natural remedies such as adaptogens or glandulars</li>
                    </ul>
                    <h2>#1: Rest</h2>
                    <p className="itemp">
                    Rest is essential for managing adrenal fatigue because the adrenal glands are responsible for producing hormones that regulate our body's response to stress. Chronic stress can cause the adrenals to become overworked, leading to fatigue, anxiety, and other symptoms. Rest allows the adrenals to recover and regenerate, promoting hormone balance and overall well-being.
                    </p>
                    <h2>#2: reform the conditions/ environment that led to the state of depletion</h2>
                    <p className="itemp">
                        When people need to work on their adrenals, it is necessary to determine honestly what contributed/ contributes to the nervous strain their nervous system is/ was under. Is it strain at work? A family situation? Too much partying? Too much online gaming? Excess in a competitive physical activity? Unhealthy habits? College Exams?
                        Even in the cases where the adrenal state is a result of heredity, an effort will have to be made for the situation to improve. One way to start is learning to relax, unwind and adopting a healthy lifestyle with proper sleep, food and physical activity.
                    </p>
                    <h2>#3: Hormesis</h2>
                    <p className="itemp">
                        What is Hormesis? Hormesis is a biological phenomenon in which a low dose of a potentially harmful agent stimulates an adaptive response that results in improved health and increased resistance to future stressors.</p>
                    <p className="itemp">
                        In plain words that means that the body should be stimulated, challenged but always within its limits and those limits are different for everyone.
                        Small challenges followed by periods of rest/ anabolism are necessary to improve adrenals function, and the phase of recovery is as important as the active phase, you can never stress that enough. In a nutshell, the idea is to challenge those limits progressively and learn how to listen to our body and emotions not to be carried away and go too far.
                        If you challenge yourself within your limits and get enough time to recover you get stronger, if you challenge yourself too much without rest you are going to deplete your adrenals further and this is detrimental. Only you know the limits if you tune into yourself and trust your instinct.</p>


                    <div>
                        <h2 id="products">#4: Supplements for adrenal glands</h2>
                        <img className="adrenalspic" src="/adrenalglands.png" alt="the adrenal glands" loading="lazy" title="the lymphatic system"></img>

                        <p className="itemp">
                            A number of plants  and supplements are usually used to help the adrenal glands
                            adaptogens like rhodiola, nettle, ashwaganda, siberian ginseng... If you don't have high blood pressure licorice is a great plant for low adrenals. Schizandra is a great adaptogen and is also good for the pituitary gland.
                            example of supplements for adrenals:
                        </p>

                    </div>


                    <ul className="ulp">
                        <li> <a href="https://www.abcdelanature.com/p-44-glandes-surrenales-melange-regenere.html"> SurrénoBoost from ABC de la nature</a></li>
                        <li> <a href="https://lddy.no/1fnvg">New Zealand Adrenal Glandulars</a></li>
                        <li> <a href="https://drmorsesherbalhealthclub.com/products/adrenal-support-2oz-tincture?_pos=1&_sid=d9fa9b3cf&_ss=r">Dr Morse's Adrenal formula: Adrenal Support in tincture</a></li>
                        <li> <a href="https://drmorsesherbalhealthclub.com/collections/signature-formulas/products/adrenal-support-90-capsules?_pos=1&_sid=d9fa9b3cf&_ss=r">Dr Morse's Adrenal formula: Adrenal Support in capsule form</a></li>
                        <li> <a href="https://en.anastore.com/articles/PC90_Cordyceps_Sinensis.php?affiliated_id=2877&epi=buy-cordyceps-button">Cordyceps</a></li>
                        <li> <a href="https://en.anastore.com/articles/NB60_eleutherococcus-siberian_ginseng.php?affiliated_id=2877&epi=buy-eleutero-button">Eleutherococcus</a></li>
                        <li> <a href="https://en.anastore.com/articles/MS20_Schisandra_Chinensis.php?affiliated_id=2877&epi=buy-schisandra-button">Schisandra</a></li>
                        <li> <a href="https://en.anastore.com/articles/RR40_rhodiola_rosea.php?affiliated_id=2877&epi=buy-rhodiola-button">Rhodiola</a></li>
                        <li> <a href="https://en.anastore.com/articles/NA15_ashwagandha.php?affiliated_id=2877&epi=buy-ashwaganda-button">Ashwaganda</a></li>
                    </ul>
                    <h2 id="spititualhygiene">Spriritual and emotional hygiene</h2>


                    <p className="itemp">
                        Yes you did the job. You have reformed your diet you have taken steps to reform your lifestyle, you've started a cleansing journey detoxifying your bowels, your skin and your physical body.. Now is the time to go a little bit deeper.
                        You've started to take care of the toxins in your body, now is the time to take care of the toxins in your soul. What thoughts, behaviours and attitude of yours are actually toxic? How  have  you caused harm to other people? What is toxic or what was toxic in your behaviour and your thought process?</p>
                    <p className="itemp">
                        Now is the time to reflect and think about your thought process, patterns, deeds. It's time to make amends, to repent. Once you find it in yourself to fully take responsibility and see yourself in your integrity both the good and not so good you can really start healing. Life is full of teachings it's not meant to hurt for no reason, there is a lesson to be learnt.
                        you will start to heal when you gather the strength to look inside and look at the wounds that are hurting your soul. It certainly isn't about judging, it's about acknowledging what is and take responsibility. Think about your exploration as a very smooth healing touch filled with light and love.</p>
                    <p className="itemp">
                        As my mentor, Thierry Casasnovas, explained in a video, talking about his personal experience of his healing process: he was reflecting about the wrongs he had inflicted upon people in the past.  He goes on explaining how he made a list of the people he had wronged in the past and how he reached out to them to express he was sorry and to make amends and this is when he recalls 'truly really starting healing',
                        We live in a materialistic world that tends to remove, deprive the soul of its reality and it's wrong because your soul is really not only a part of you but may possibly be the only real you. If you're reading these lines, chances are your soul is in pain.
                    </p>
                    <p className="itemp">
                        The principle behind hollistic healing is that a person is more than the association of a bunch of bones and organs and that no healing is possible if you only tend to the material side of things with reforming our diet and adopting a good physical exercice routine. A person with the perfect diet and perfect physical activity will still have to work on releasing trapped emotions and healing spiritual wounds. Healing is not 'done' when your buy a bottle of pills, it takes a deep comitment in many levels of your life.

                    </p>

                    <h2 id="spiritualdetox">Tools for Spiritual and emotional detox</h2>

                    <p className="itemp">
                        There is a number of techniques and therapists that can help you on your spiritual and emotional journey detox, you might feel attracted to one, or another one. It's just a matter of really feeling what resonates with you at a given time. You need to find something that feels right to you.
                    </p>
                    <ul className="ulp">
                        <li>Repent: make a list of the people you have wronged and make amends</li>
                        <li>meditate</li>
                        <li>get help from a therapist: energy therapist, healer, chaman...</li>
                        <li>dance, sing, start a theater class, paint, play a musical instrument, walk in nature, do some gardening, create : give your soul the space it needs to breath and express itself</li>
                        <li>pray, go on a pilgrimage, do charity work...</li>

                    </ul>
                    <h2>Non exhaustive list of the therapists and thinkers that helped or inspired me on my spiritual detox journey</h2>



                    <div>
                        <h2><a href="https://www.rgnr.fr/">Thierry Casasnovas</a> </h2>
                        <p className="itemp">has recorded many YouTube videos that are available on different chanels that provide in depth information about the physiology of the human body that is accessible and understandable by everyone (french)</p>
                        <p className="itemp"><a href="https://youtu.be/JoJOdkTL7dE">Ce qui m'a réellement "sauvé la vie" !</a> is the video that inspired me so much about sprititual detox. This is the most inspiring one in the subject, in my opinion</p>
                        <div><iframe className="lazy video" width="409" height="230" data-src="https://www.youtube.com/embed/JoJOdkTL7dE" title="Ce qui m&#39;a réellement &quot;sauvé la vie&quot; ! - www.regenere.org" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                        </div>
                        <h2><a href="https://boutique.santeglobale.world/">Christian Tal Schaller</a>  </h2>
                        <p className="itemp">has written many books and recorded many audios, a lot of them available on YouTube about hollistic healing. He provides audio recordings to help you and give you simple keys and ways to manage your emotions and release past lives traumas.</p>
                        <p className="itemp"><a href="https://youtu.be/YjRj-toG5nE">la peur (fear)</a></p>
                        <p className="itemp"><a href="https://youtu.be/oYtU88KYf5o">La psychothérapie spirituelle pour guérir le passé</a></p>
                        <iframe className="lazy video" width="409" height="230" data-src="https://www.youtube.com/embed/oYtU88KYf5o" title="La psychothérapie spirituelle pour guérir le passé" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>

                        <h2><a href="https://www.natachacalestreme.fr/">Natasha Calestreme</a> </h2>
                        <p className="itemp">Has written two books that contain protocols you can use to heal your soul from wounds that come from your personal experience but also from people in your family and your ancestors he explains how the lack of energy that is impacting your life today might come from one of your ancestors past experiences and that you might be living, feeling pains that don't actually belong to you. (french)</p>
                        <p className="itemp"> "la clef de votre energie" </p>
                        <p className="itemp"> "trouver ma place" </p>
                        <iframe className="lazy video" width="409" height="230" data-src="https://www.youtube.com/embed/FmZmTY5_Cbs" title="Présentation des thèmes de &quot;Trouver ma place&quot;" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>

                        <h2><a href="https://rachelfortun.wixsite.com/hypnose-rachel-paris">Rachel Fortun</a>  </h2>
                        <p className="itemp">is a therapist who practices esoteric regressive hypnosis. This discipline unveils problems or pains related to an esoteric cause, so the removal of implants and energy cleaning can be performed. She provides therapy sessions. (french)</p>
                        <iframe className="lazy video" width="409" height="230" data-src="https://www.youtube.com/embed/MAsl6s6Y9Do" title="LIVE Télépathie, médiumnité, énergétique, spirituel avec Rachel Fortun, invitée par Severine Cabrit." frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>


                    </div>

                    <h2>Iridology and Adrenal fatigue</h2>
                    <div id='iridologyadrenal'>
                        <img className="adrenalspic" src="/iridologyadrenal.png" alt="iris" loading="lazy" title="iris with stress circles and toxicity in the adrenals and kidney areas"></img>
                        <p className="itemp">
                            One of the typical markers of adrenal depletion doing an iridology reading would be spotting some toxicity in the kidney and adrenals areas of the iris.
                            Another marker of adrenal depletion is the appearance of stress rings around the pupils those circles are the result of excessive dilation and striction of the of the pupil.
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

export default connect(mapStateToProps, { fetchCookieValue })(AdrenalFatigue);