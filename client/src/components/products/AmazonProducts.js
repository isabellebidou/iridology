
import React, { useEffect, useState } from 'react';





function AmazonProducts() {

    //const [items, setItems] = useState([]);
    const [usItems, setUsItems] = useState([]);
    const [frItems, setFrItems] = useState([]);
    const [spItems, setSpItems] = useState([]);
    const [ukItems, setUkItems] = useState([]);
    useEffect(() => {
        fetchItems();
    }, []);

    const fetchItems = async () => {
        try {
            const data = await fetch(`/api/amazonproducts`);
            const items = await data.json();


            //setItems(items);
            setUsItems(items[0].us)
            setFrItems(items[1].fr)
            setSpItems(items[2].sp)
            setUkItems(items[3].uk)

        } catch (error) {
            console.log(error)
        }

    };



    return (
        <section>
            <div className="navigation-container">
                <a className="nav-link_no_border" href="#us"><img className="affiliateflagcontainer" src="/usaflag.png" alt="USA flag" loading="lazy" title="go to USA section" ></img></a>
                <a className="nav-link_no_border" href="#fr"><img className="affiliateflagcontainer" src="/frenchflag.png" alt="French flag" loading="lazy" title="go to French section" ></img></a>
                <a className="nav-link_no_border" href="#sp"><img className=" affiliateflagcontainer" src="/spanishflag.png" alt="Spanish flag" loading="lazy" title="go to Spanish section" ></img></a>
                <a className="nav-link_no_border" href="#uk"><img className=" affiliateflagcontainer" src="/ukflag.png" alt="UK flag" loading="lazy" title="go to UK section" ></img></a>
            </div>
            <fieldset>
                <h2 id="us">Products shipping from the USA</h2>
                <p className="itemp">
                    follow this link to look for <a target="_blank" rel="noreferrer" href="https://www.amazon.com/b?_encoding=UTF8&tag=iridologyread-20&linkCode=ur2&linkId=e22b79e6d0e5957f3b1583fb268441f7&camp=1789&creative=9325&node=23675621011">Supplements</a>
                    <br />follow this link to look for <a target="_blank" rel="noreferrer" href="https://www.amazon.com/b?_encoding=UTF8&tag=iridologyread-20&linkCode=ur2&linkId=0c0973c425489d37f8cb72fd0ea2a1dc&camp=1789&creative=9325&node=3760941">Health Care</a>
                    <br />or choose from the my special selection below:
                </p>
                <div className="shop-grid-container">

                    {
                        usItems.map(product => {
                            return (
                                <div className="itemp photoThumbnail" key={product.title} id={product.title}>
                                    <img className="amazonproductpic" src={product.image} alt={product.title} loading="lazy" title={product.title} width="200"></img>
                                    <a href={product.url} key={product.title + 'link'}
                                    >
                                        <h3 className='itemp productlink'>{product.title}</h3>
                                    </a>

                                    {product.description &&
                                        <p className='itemp'>{product.description} </p>}

                                </div>
                            );
                        })
                    }
                </div>
            </fieldset>

            <fieldset>
                <h2 id="fr">Products shipping from France</h2>
                <p className='itemp'>
                    Ceci est un programme d’affiliation. Je recevrai une commission si vous achetez l’un des articles via les liens ci-dessous.
                    <br />
                    Utilisez ce lien pour acheter <a target="_blank" rel="noreferrer" href="https://www.amazon.fr/b?_encoding=UTF8&tag=iridologyread-21&linkCode=ur2&linkId=fe2a246b8b804265eb350b46cd80a7ac&camp=1642&creative=6746&node=212045031">Supplements, plantes, compléments alimentaires</a>
                    <br /> ou choisissez parmi les articles ci-dessous:
                </p>
                <h2>Exemple de cure detox en trois étapes sur 6 semaines</h2>
                <ul className='ulp'>
                    <li>Etape 1 pour les semaines 1 et 2 :
                    Argile verte loin des repas, cascara sagrada ou triphala, AntiPar qui contient de l’absinthe, du clou de girofle, de la cannelle, du curcuma et de l’ortie ou Bitter Love accompagné de curcuma et de cannelle. 
                    </li>
                    <li>Etape 2 pour les semaines 3 et 4 :
                    continuer argile verte loin des repas, cascara sagrada ou triphala. Ajouter: comprimés ou  capsules d’ortie et/ou pissenlit et/ou chiendent</li>
                    <li>Etape 3 pour les semaines 5 et 6 :
                    comprimés ou  capsules de :
                    gratteron et/ou plantain et/ou souci officinal et/ou fenugrec</li>
                </ul>
                <div className="shop-grid-container">
                    {
                        frItems.map(product => {
                            return (
                                <div className="itemp photoThumbnail" key={product.title} id={product.title}>
                                    <img className="amazonproductpic" src={product.image} alt={product.title} loading="lazy" title={product.title} width="200"></img>
                                    <a href={product.url} key={product.title + 'link'}
                                    >
                                        <h3 className='itemp productlink'>{product.title}</h3>
                                    </a>

                                    {product.description &&
                                        <p className='itemp'>{product.description} </p>}

                                </div>
                            );
                        })
                    }
                </div>
            </fieldset>


            <fieldset>
                <h2 id="sp">Products shipping from Spain</h2>
                <p className='itemp'>
                    Este es un programa de afiliados. Recibiré una comisión si usted compra cualquiera de los artículos a través de los enlaces de abajo
                </p>


                <div className="shop-grid-container" >
                    {
                        spItems.map(product => {
                            return (
                                <div className="itemp photoThumbnail" key={product.title} id={product.title}>
                                    <img className="amazonproductpic" src={product.image} alt={product.title} loading="lazy" title={product.title} width="200"></img>
                                    <a href={product.url} key={product.title + 'link'}
                                    >
                                        <h3 className='itemp productlink'>{product.title}</h3>
                                    </a>

                                    {product.description &&
                                        <p className='itemp'>{product.description} </p>}

                                </div>
                            );
                        })
                    }
                </div>
            </fieldset>

            <fieldset>
                <h2 id="uk">Products shipping from the UK</h2>
                <p className='itemp'>
                    This is an affiliate program. I will receive a commission if you buy any of the articles via the links below.
                    <br />
                    Follow this link to buy <a target="_blank" rel="noreferrer" href="https://www.amazon.co.uk/b?_encoding=UTF8&tag=iridologyre08-21&linkCode=ur2&linkId=fe74c29e31ad116db1823c11cd58cc7c&camp=1634&creative=6738&node=2826484031">vitamins, minerals and supplements</a>
                    <br /> or choose from the products below:
                </p>
                <div className="shop-grid-container">
                    {
                        ukItems.map(product => {
                            return (
                                <div className="itemp photoThumbnail" key={product.title} id={product.title}>
                                    <img className="amazonproductpic" src={product.image} alt={product.title} loading="lazy" title={product.title} width="200"></img>
                                    <a href={product.url} key={product.title + 'link'}
                                    >
                                        <h3 className='itemp productlink'>{product.title}</h3>
                                    </a>

                                    {product.description &&
                                        <p className='itemp'>{product.description} </p>}

                                </div>
                            );
                        })
                    }
                </div>
            </fieldset>
        </section>
    );
}

export default AmazonProducts



