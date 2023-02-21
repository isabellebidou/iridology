import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";



function LinkList() {
    const [items, setItems] = useState([]);
    useEffect(() => {
        fetchItems();
    }, [items]);

    const fetchItems = async () => {
        try {
            const userData = await fetch(`/api/links/`);
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
                    items.map(link => {
                        return (

                            <div className="" key={link._id}>
                                <div className="item photoThumbnail">
                                    <p className="itemp">

                                        <a href={link.url} key={3}
                                            

                                        >
                                            {link.name}
                                        </a>
                                        <br />
                                        {link.comment &&
                                        <span>{link.comment}</span>}
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

export default LinkList