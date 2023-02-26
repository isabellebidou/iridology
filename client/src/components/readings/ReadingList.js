import React, { useEffect, useState } from 'react';



function ReadingList() {
    useEffect(() => {
        fetchItems();
    }, []);
    const [items, setItems] = useState([]);
    const fetchItems = async () => {
        const userData = await fetch(`/api/readings/`);
        const items = await userData.json();
        setItems(items);

    };

    return (
        <section>
           <fieldset>
           <legend><h2> Iridology Readings </h2></legend>
            <div className="grid-container">
                
                {
                    items.map(reading => {
                        return (

                            
                                <div key={reading._id} className="item photoThumbnail">
                                    
                                        {reading.expectations} reading ordered on: {new Date(reading.dateSent).toLocaleDateString()}
                                   
                                </div>
                            

                        );

                    })
                }
            </div>
            </fieldset>
        </section>
    );
}

export default ReadingList
