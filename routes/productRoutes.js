const _ = require('lodash')
const logError = require("../services/utils");
const morseformulas = require("../services/morseformulas.json");
const https = require('https');
const { parseStringPromise } = require('xml2js');
const bodyParser = require("body-parser");
const options = {
    hostname: 'affiliation.anastore.com',
    path: '/en/rss/rss_products_fr.xml?affiliated=2877',
    method: 'GET'
};

module.exports = (app) => {
    app.get("/api/products", async (req, res) => {
        const products = [];
        const productNames = ['Moulin Peugeot Modèle Paris Antique','boswellia', 'astragale', 'Acérola', 'Vitamine D3 - 5 μg (200 UI)', 'Cranberry Bio - 360 mg ', 'Anis étoilé bio', 'Ginkgo Biloba - 60 mg / 120 gélules', 'Ginkgo Biloba - 60 mg / 240 gélules','Gotu Kola', 'Psyllium Bio en poudre', 'Citron', 'Cacao cru bio', 'Ashwagandha', 'Chardon-marie', 'Curcuma', 'Cannelle', 'Schisandra chinensis', 'Ashwagandha Bio','Aloe Vera Bio en gélules', 'CordycepsPrime', 'Rhodiola Bio', 'Rhodiola Rosea - 400 mg', 'Saule Blanc' ]

        const request = https.request(options, async response => {
            let data = '';
            response.on('data', chunk => {
                data += chunk;
            });
            response.on('end', async () => {
                // Parse the XML data
                const parsedData = await parseStringPromise(data);

                // Filter the items for each product
                productNames.forEach(productName => {
                    const filteredData = parsedData.rss.channel[0].item.filter(item => item.title[0].toLowerCase().includes(productName.toLowerCase()));
                    products.push(...filteredData);
                });

                //console.log(products);
                res.send(products);
            });
        });

        request.on('error', error => {
            console.error(error);
        });

        request.end();
    });

    app.get("/api/morseformulas", bodyParser.json(), async (req, res, next) => {
          try {
            morseformulas.sort((a, b) => {
              if (a.herbName < b.herbName) return -1;
              if (a.herbName > b.herbName) return 1;
              return 0;
            });
          } catch (e) {
            logError(e)
            
          }
        try {
            res.send(morseformulas);
        } catch (error) {
            logError(error)
        }
      });
};


