import React from 'react';




function FeaturedProduct() {

    const items = [{
        title: ['ÅtayatÉ - La Pierre de Cohérence® '],
        id: ['stone'],
        link: [
            'https://www.atayate.com/collections/pierres-de-coherence'
        ],
        description: [
            'The Pierre de Coherence® (Consistency Stone) is a technology of Light and Coherence of a Stone to the Field of Universal Coherence, which was de-covered and implemented by Marc Boucher de Lignon 30 years ago.The Pierre de Coherence® is a unique technology that validates the latest discoveries in quantum physics and epigenetics (consistent with the work of Dr. Bruce Lipton).   Thus, this technology put at the service of collective harmony, allows everyone to be consistent with himself and with the Universe. Stone preparation involves a careful selection to promote balance and harmony in the users body.'
        ],
        'a:price': ['90 euros'],
        'a:image_link': [
            'https://cdn.shopify.com/s/files/1/0655/4094/8233/products/20230204_192831_250x.jpg?v=1678999429'
        ],

    },
    {
        title: ['Bracelet de Cohérence®'],
        id: ['bracelet'],
        link: [
            'https://www.atayate.com/collections/bracelets-de-coherence®'
        ],
        description: [
            'Prestigious bracelets in gold and natural stone beads, created by Tayata and designed in our workshop.They exist as supports of Coherence, which you can always carry around.While for some the bracelet is easier to wear than a Stone, Coherence® Bracelets are a complement to your Coherence® Stone.We have created them to manifest the subtle and wonderful harmony of the Coherence that they bear and that acts upon your being'
        ],
        'a:price': ['75 euros'],
        'a:image_link': [
            'https://cdn.shopify.com/s/files/1/0655/4094/8233/products/Braceletlapisjaspepehematite_250x.jpg?v=1679159278'
        ],

    }

    ]


    return (
        <section>
            <div className="grid-container">
                {
                    items.map(product => {
                        return (
                            <div className="itemp photoThumbnail" key={product.title} id={product.id}>
                               
                                    <img className="imgright" src={product['a:image_link']} alt={product.id} loading="lazy" title={product.title} width="200"></img>
                                    <a href={product.link} key={product.title+'link'} /// what to put here?
                                    >
                                        <h3 className='itemp productlink'>{product.title}</h3>
                                    </a>
                                    
                                    {product.description &&
                                        <p className='itemp'>{product.description} Price: {product['a:price']}</p>}

                               
                            </div>
                        );

                    })
                }
            </div>

        </section>
    );
}

export default FeaturedProduct