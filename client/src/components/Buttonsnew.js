import React, { useEffect, useState } from 'react';



function Buttons() {
    useEffect(() => {
        fetchData();
    }, []);
    useEffect(() => {
        fetchData();
    }, []);
    const [data, setData] = useState([]);
    const [eyes, setEyes] = useState([]);
    const fetchData = async () => {
        const userData = await fetch(`/api/user_data/`);
        const data = await userData.json();
        setData(data);

    };

    return (
        <section>
            <div className="grid-container">
                {
                    items.map(reading => {
                        return (

                            <div className="" key={reading._id}>
                                <div className="item photoThumbnail">
                                    <p className="item">
                                        {reading.comments} reading ordered on: {new Date(reading.dateSent).toLocaleDateString()}
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

export default Buttons