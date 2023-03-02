import React, { useEffect, useState } from 'react';
import { logError } from "../../utils/utils";



function LinkList() {
    const [items, setItems] = useState([]);
    useEffect(() => {
        fetchItems();
    }, []);

    const fetchItems = async () => {
        try {
            const userData = await fetch(`/api/links/`);
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
                    items.map(link => {
                        return (

                            <div className="" key={link._id}>
                                <div className="itemp photoThumbnail">
                                    
                                        <a href={link.url} key={3}
                                        >
                                            {link.name}
                                        </a>
                                        <br />
                                        {link.comment &&
                                        <span>{link.comment}</span>}
                                    
                                </div>
                            </div>

                        );

                    })
                }
            </div>
        </section>
    );
}

export default LinkList