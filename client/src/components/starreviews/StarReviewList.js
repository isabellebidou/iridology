import React, { useEffect, useState } from 'react';
import { AiFillStar } from "react-icons/ai";
import { logError } from "../../utils/utils";



function StarReviewList() {
    const [items, setItems] = useState([]);
    useEffect(() => {
        fetchItems();
    }, []);

    const fetchItems = async () => {
        try {
            const reviews = await fetch(`/api/starreviews/`);
            const items = await reviews.json();
            setItems(items);
        } catch (error) {
            logError(error)
        }

    };

    return (
        <section>
            <div className="grid-container">
                {
                    items.map(review => {
                        const name = review.name ? review.name : 'anonymous';
                        return (

                            <div className="" key={review._id}>
                                <div className="itemp photoThumbnail">
                                    <div>
                                        {Array(review.number)
                                            .fill()
                                            .map((_, index) =>

                                                <AiFillStar
                                                    style={{ color: "orange" }}
                                                    key={index + 'AiFillStar'}
                                                />

                                            )}
                                    </div>
                                    <span>{name}</span>
                                    <br />
                                    {review.comment &&
                                        <span>{review.comment}</span>}

                                </div>
                            </div>

                        );

                    })
                }
            </div>
        </section>
    );
}

export default StarReviewList