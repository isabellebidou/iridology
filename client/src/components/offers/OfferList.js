import React, { useEffect, useState } from 'react';




function OfferList() {
    const [items, setItems] = useState([]);
    useEffect(() => {
        fetchItems();
    }, [items]);

    const fetchItems = async () => {
        try {
            const userData = await fetch(`/api/offers/`);
            const items = await userData.json();
            setItems(items);
        } catch (error) {
            console.error(error)
        }


    };

    return (
        <section>
            <div className="grid-container">
                {
                    items.map(offer => {
                        return (

                            <div className="" key={offer._id}>
                                <div className="item photoThumbnail">
                                    <p className="itemp">

                                        <h2>{offer.name}</h2>
                                            

                                        
                                            {offer.description}
                                       
                                        <br />
                                        {offer.price &&
                                        <span>{offer.price} $</span>}
                                    </p>
                                </div>
                            </div>

                        );

                    })
                }
            </div>
        </section>
    );
}

export default OfferList