import React from "react";
import FeaturedProduct from "./products/FeaturedProduct";
import ProductList from './products/ProductList';
import Glandular from './products/Glandular';
import MorseFormulas from './products/MorseFormulas';
import { Helmet } from 'react-helmet-async';





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
            <div className="navigation-container">
                <a className="nav-link" href="#stones">ÅtayatÉ</a>
                <a className="nav-link" href="#products">Anastore products</a>
                <a className="nav-link" href="#morse">Dr Morse's Herbal formulas</a>
                <a className="nav-link" href="#ron">Dr Ron's Adrenals glandulars</a>


            </div>
            <p className="disclaimerp">Disclaimer: The content provided on this page is for informational and recreational purposes only. It is not intended to be a substitute for professional medical advice, diagnosis, or treatment. Only a licensed medical doctor can diagnose and prescribe medication or treatment. Any information provided on this page should not be relied upon for making decisions about your health or well-being. Before considering any treatment, it is essential to consult with your doctor or therapist to ensure that it is safe and suitable for your specific needs and medical history.</p>
            <fieldset>
                <legend><h2> ÅtayatÉ Stones  and bracelets</h2></legend>
                <div>
                    <img className="affiliatelogo" src="https://cdn.shopify.com/s/files/1/0655/4094/8233/files/atayate_droit_corrige.png?v=1676308709&width=200" alt="atayate" loading="lazy" title="atayate logo" width></img>
                    <p className="itemp">
                        Hammanh, Marc Boucher de Ligon, puts in coherence stones and bracelets specially for you. You will be redirected to his site where you can place a pre order.
                    </p></div>
                <span id="stones" >
                </span>
                <FeaturedProduct />

            </fieldset>

            <fieldset>
                <legend><h2> Anastore products </h2></legend>
                <div>
                    <img className="affiliatelogo" src="https://affiliation.anastore.com/en/images/logo_header.png" alt="anastore logo" loading="lazy" title="anastore logo" width></img>

                    <p className="itemp">
                        Anastore products are manufactured in France and Belgium and are delivered throughout Europe from distributions centres in Spain and France.
                    </p></div>
                <span id="products" >
                </span>
                <ProductList />

            </fieldset>

            <fieldset>
                <legend><h2> Dr Morse Herbal Formulas </h2></legend>

                <div>
                    <img className=" affiliatelogo" src="https://cdn.shopify.com/s/files/1/0725/6913/files/dr-morses-herbal-health-logo_200x.png?v=1613745566" alt="dr morse logo" loading="lazy" title="dr morse logo" width></img>

                    <p className="itemp">
                        Click on the links below to order and get a 10% discount. Alternatively you can use the coupon : AF.UPPROMOTE.COM to order from Dr. Morse's website directly.
                        Beware, the formulas are shipping from the US. International shipping costs DO NOT include Import fees, Duties, or Taxes. Not shipping to all countries.
                    </p></div>

                <span id="morse" >
                </span>
                <MorseFormulas />

            </fieldset>

            <fieldset>
                <legend><h2> Dr Rons Adrenal glandulars </h2></legend>

                <div>
                    <img className=" affiliatelogo" src="https://www.drrons.com/images/Logo-Header.png" alt="dr ron logo" loading="lazy" title="dr ron logo" width></img>

                    <p className="itemp">
                        Shipping from New Zealand
                    </p></div>
                <span id="ron" >
                </span>
                <Glandular />

            </fieldset>


        </div>
    </>
    )

}

export default Shop;