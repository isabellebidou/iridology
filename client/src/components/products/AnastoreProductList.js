import React, { useEffect, useState } from 'react';
import { logError } from "../../utils/utils";



function AnastoreProductList() {
    const [items, setItems] = useState([]);
    useEffect(() => {
        fetchItems();
    }, []);

    const fetchItems = async () => {
        try {
            const userData = await fetch(`/api/products/`);
            const items = await userData.json();
            setItems(items);
        } catch (error) {
            logError(error)
        }

    };

    return (
        <section>
            <div className="shop-grid-container">
                {
                    items.map(product => {
                        return (

                            <div className="itemp photoThumbnail" key={product.title + Math.floor(Math.random() * 10)} id={product.title}>

                                <img className="imgright" src={product['a:image_link']} alt={product.title} loading="lazy" title={product.title} width="200"></img>
                                <a href={product.link} key={product.title + 'link'} /// what to put here?
                                >
                                    <h3 className='itemp productlink'>{product.title}</h3>
                                </a>

                                {product['a:price'] &&
                                    <p className='itemp'> Price: {product['a:price']}</p>}

                            </div>

                        );

                    })
                }
            </div>
        </section>
    );
}

export default AnastoreProductList