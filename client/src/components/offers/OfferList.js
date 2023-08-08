import React, { useEffect, useState } from 'react';
import { logError } from "../../utils/utils";




function OfferList() {
    const [items, setItems] = useState([]);
    useEffect(() => {
        fetchItems();
    }, []);

    const fetchItems = async () => {
        try {
            const userData = await fetch(`/api/offers/`);
            const items = await userData.json();
            setItems(items);
        } catch (error) {
            logError(error)
        }


    };

    return (
        <section>
            <div className="grid-container">
                {
                    items.map(offer => {
                        return (

                            <div className="" key={offer._id}>
                                <div className="itemp photoThumbnail">

                                    <h2>{offer.name}</h2>
                                    
                                    {offer.description}

                                    <br />
                                    
                                        <span>{offer.price} $</span>

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