
import React, { useEffect, useState } from 'react';





function MorseFormulas() {

    const [items, setItems] = useState([]);
    useEffect(() => {
        fetchItems();
    }, []);

    const fetchItems = async () => {
        try {
            const data = await fetch(`/api/morseformulas`);
            const items = await data.json();
            setItems(items);
        } catch (error) {
            console.log(error)
        }

    };



    return (
        <section>
            <div className="shop-grid-container">
                {
                    items.map(product => {
                        return (
                            <div className="itemp photoThumbnail" key = {product.title+Math.floor(Math.random() * 10)} id={product.title}>
                                <img className="imgright" src={product.image} alt={product.title} loading="lazy" title={product.title} width="200"></img>
                                <a href={product.url} key={product.title + 'link'} /// what to put here?
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
        </section>
    );
}

export default MorseFormulas

