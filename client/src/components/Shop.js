import React from "react";
import FeaturedProduct from "./products/FeaturedProduct";
import AnastoreProductList from './products/AnastoreProductList';
import Glandular from './products/Glandular';
import MorseFormulas from './products/MorseFormulas';
import AmazonProducts from './products/AmazonProducts';
import { Helmet } from 'react-helmet-async';
import Coupon from "./Coupon";
import { AiFillVideoCamera } from "react-icons/ai";





const Shop = () => {

    return (<>
        <Helmet>
            <title>My affiliate health products list</title>
            <meta name="description"
                content="Shop premium health products from top brands including Anastore, Dr Ron's Ultra Pure, Dr Morse Herbal Club, and ÅtayatÉ - La Pierre de Cohérence® with our affiliate program. Discover natural solutions to improve your wellbeing and enjoy the benefits of high-quality supplements, herbs, and more. Join our community today!"

            />
            <link rel='canonical' href='/shop' />
        </Helmet>


        <div className="page">
            <h1>Affiliate Shop</h1>
            <p className="itemp"> Welcome to my affiliate shop. I will receive a commission or purchase credit if you buy a product via the links in the page. I have used most of the articles presented, or I am planning to use them. Don't hesitate to ask me for further advice. Thank you.</p>
            <div className="navigation-container">
                <a className="nav-link" href="#stones"><img className="affiliatelogocontainer" src="https://cdn.shopify.com/s/files/1/0655/4094/8233/files/atayate_droit_corrige.png?v=1676308709&width=200" alt="atayate" loading="lazy" title="see atayate products" ></img></a>
                <a className="nav-link" href="#products"><img className="affiliatelogocontainer" src="https://affiliation.anastore.com/en/images/logo_header.png" alt="anastore logo" loading="lazy" title="anastore logo" ></img></a>
                <a className="nav-link" href="#morse"><img className=" affiliatelogocontainer" src="https://cdn.shopify.com/s/files/1/0725/6913/files/dr-morses-herbal-health-logo_200x.png?v=1613745566" alt="dr morse logo" loading="lazy" title="see dr morse products" ></img></a>
                <a className="nav-link" href="#ron"><img className=" affiliatelogocontainer" src="https://www.drrons.com/images/Logo-Header.png" alt="dr ron logo" loading="lazy" title="see dr ron products" ></img></a>
                <a className="nav-link" href="#amazon"><img className=" affiliatelogocontainer" src="https://m.media-amazon.com/images/G/01/AdProductsWebsite/images/AUX/03_available_at_amazon_logo_stacked_RGB_SQUID._TTW_.png" alt="available at amazon" loading="lazy" title="see Amazon.com products" ></img></a>

            </div>
            <p className="disclaimerp">Disclaimer: The content provided on this page is for informational and recreational purposes only. It is not intended to be a substitute for professional medical advice, diagnosis, or treatment. Only a licensed medical doctor can diagnose and prescribe medication or treatment. Any information provided on this page should not be relied upon for making decisions about your health or well-being. Before considering any treatment, it is essential to consult with your doctor or therapist to ensure that it is safe and suitable for your specific needs and medical history.</p>
            <fieldset>

                <div>
                    <img className="affiliatelogo" src="https://cdn.shopify.com/s/files/1/0655/4094/8233/files/atayate_droit_corrige.png?v=1676308709&width=200" alt="atayate" loading="lazy" title="atayate logo" ></img>
                    <p className="itemp">
                        Hammanh, Marc Boucher de Ligon, puts in coherence stones and bracelets specially for you.
                    </p>
                    <p className="itemp"> For further information have a look at the video: <a href="https://youtu.be/GnrAHBxt64Y">Êtes-vous en Cohérence ? Les Pierres de Cohérence - ÅtayatÉ <AiFillVideoCamera style={{ color: "#7f5f87" }} /></a> </p>

                </div>
                <span id="stones" >
                </span>
                <FeaturedProduct />

            </fieldset>

            <fieldset>

                <div>
                    <img className="affiliatelogo" src="https://affiliation.anastore.com/en/images/logo_header.png" alt="anastore logo" loading="lazy" title="anastore logo" ></img>

                    <p className="itemp">
                        Anastore products are manufactured in France and Belgium and are delivered throughout Europe from distributions centres in Spain and France.
                    </p>
                </div>
                <span id="products" >
                </span>
                <AnastoreProductList />

            </fieldset>

            <fieldset>


                <div>
                    <img className=" affiliatelogo" src="https://cdn.shopify.com/s/files/1/0725/6913/files/dr-morses-herbal-health-logo_200x.png?v=1613745566" alt="dr morse logo" loading="lazy" title="dr morse logo" ></img>

                    <p className="itemp">

                        You can use the Coupon :
                        <Coupon
                            text='ISABELLEBIDOU'
                        ></Coupon> To order from Dr. Morse's website directly USING the coupon visit :
                        <a href="https://drmorsesherbalhealthclub.com/">Dr Morse's herbal health club</a>
                        <br />
                        <br />
                        OR <br />you can click on the links below to order without using the coupon.
                        <br />
                        <br />
                        Beware, the formulas are shipping from the US. International shipping costs DO NOT COVER Import fees, Duties, or Taxes. International buyers will have to pay additional taxes. Not shipping to all countries.
                    </p>
                    <p className="itemp">
                        example of a 6 weeks detox program in 3 simple steps:
                        <ul>
                            <li>step 1 (week 1 and 2 ): select one of the GI renew formulas and
                                either GI broom or Parasite G and or Parasite M</li>
                            <li>step 2 (week 3 and 4): pick one of the Kidneys and Bladder formulas</li>
                            <li>step 3 (week 5 and 6) : pick one of the lymphatic System formulas</li>
                        </ul>





                    </p>

                </div>

                <span id="morse" >
                </span>
                <MorseFormulas />

            </fieldset>

            <fieldset>


                <div>
                    <img className=" affiliatelogo" src="https://www.drrons.com/images/Logo-Header.png" alt="dr ron logo" loading="lazy" title="dr ron logo" ></img>

                    <p className="itemp">
                        Shipping from New Zealand
                    </p></div>
                <span id="ron" >
                </span>
                <Glandular />

            </fieldset>



            <div>
                <img className=" affiliatelogo" src="https://m.media-amazon.com/images/G/01/AdProductsWebsite/images/AUX/03_available_at_amazon_logo_stacked_RGB_SQUID._TTW_.png" alt="available at Amazon logo" loading="lazy" title="available at Amazon logo" ></img>

                <p className="itemp">
                    This is an affiliate program. I will receive a commission if you buy any of the articles via the links below.
                </p></div>
            <span id="amazon" >
            </span>
            <AmazonProducts />




        </div>
    </>
    )

}

export default Shop;