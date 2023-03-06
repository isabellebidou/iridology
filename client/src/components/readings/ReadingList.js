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

                    {items.length > 0 &&
                        items.map(reading => {
                            return (


                                <div key={reading._id} className="item photoThumbnail">

                                    {reading.expectations} reading ordered on: {new Date(reading.dateSent).toLocaleDateString()}

                                </div>


                            );

                        })
                    }
                </div>
                {items.length === 0 &&
                    <p className='itemp'>You don't have any reading yet, fill in the required data before you book your reading</p>
                }
            </fieldset>
        </section>
    );
}

export default ReadingList
