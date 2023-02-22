import React, { useEffect, useState } from 'react';



function FaqList() {
    const [items, setItems] = useState([]);
    useEffect(() => {
        fetchItems();
    }, []);
    
    const fetchItems = async () => {
        const userData = await fetch(`/api/faqs/`);
        const items = await userData.json();
        setItems(items);

    };



    return (
        <section>
             <dl key={0}>
                {
                    items.map((faq, i)=> {
                        return (

                                    
                            <div key={faq._id}><dt key={i+"dt"}>{faq.question}</dt><dd key={i+"dd"}>{faq.answer}</dd></div> 
           
                                
                        );

                    })
                }
           </dl>
        </section>
    );
}

export default FaqList