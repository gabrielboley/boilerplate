module.exports = {
    "userData": {
        "isOwner": false, // if they're the owner we might want to add in edit features? like delete and comment moderation?
        "userId": 123456789, // customer id of voter/or owner
        "displayName": " scrubby bubbles", // NULL by default until/if they update
        "vote": {
            "hasVoted": true, // false by default until they've voted && commented? maybe just voted?
            "decision": 8859663, // NULL by default
            "data": "Friday the 22nd, April 2016", // NULL by default
            "reason": "I like turtles" // NULL by default... or maybe turtles?
        }
    },
    "listData": {
        "id": "1", // compare list ID // unique to customer? unique to overstock? how is this defined?
        "dateCreated": "Thursday the 21st, April 2016",
        "listName": "Help me pick a couch!", // custom name defined in favorite modal app?
        "listDescription": "I need help picking out a couch that I can sit on and relax for hours after coming home from a 24 night of coding. Help!",
        "user": "123456789", // list owner's customer number
        "visibility": "public", // this might always be public during the hackathon but I added it in case we wanted to add in a private option
        "numProducts": 2, // we can limit it to just two, but we'll still need to keep track just in case there is only one
        "products": [
            // available content to be available on page load for each product. if an owner/voter? wants more we can call product.json
            {
                "id": 8859663,
                "sku": "16087013",
                "numVotes": 1,
                "meta": {
                    "htmlUrl": "http://www.overstock.com/Home-Garden/INSPIRE-Q-Elston-Linen-Tufted-Sloped-Track-Sofa/8859663/product.html",
                    "imageBaseUrl": "http://ak1.ostkcdn.com/images/products/"
                },
                "name": "INSPIRE Q Elston Linen Tufted Sloped Track Sofa",
                "reviewsCount": 93,
                "rating": "img/mxc/stars4_0.gif",
                "priceSet": {
                    "label": "Today:",
                    "formattedPrice": "$566.99",
                    "priceType": "CURRENT_PRICE"
                },
                "shortDescription": "Make your guests feel at home with a sofa that perfectly blends comfort with style. The sloping arms, T-shaped seat cushions and espresso-stained feet are the hallmarks of the light brown tufted Cameron sofa.",
                "description": "Relax in chic style with this Inspire Q Elston sloped-arm sofa. The\nmaterial is a soft linen that stands up to daily use. This\nsloped-arm sofa has removable cushions, allowing you to adjust how\nmuch back support you use while sitting. The cushions are filled\nwith high-density foam that cradles your body for the ultimate in\ncomfort. <br /><br /><ul>  <li>Removable cushions</li>  <li>Tool-free assembly</li>  <li>Set includes: One (1) sofa</li>  <li>Materials: Rubberwood, CA117 fire-retardant foam, linen\n  fabric</li>  <li>Finish: Espresso</li>  <li>Upholstery color option: Light brown, dark grey, white</li>  <li>Upholstery fill: High-density foam</li>  <li>Foam density: D25</li>  <li>Seat dimensions: 18.9 inches high x 22 inches deep</li>  <li>Dimensions: 32.25 inches high x 78.3 inches wide x 35.4\n  inches deep</li></ul><br /><b>Pillows sold separately</b><br /> <br /><b>The cushions feature a high density foam with an innerspring\ncore that helps distribute weight evenly across the cushion,\npreventing your cushions from packing or sagging. Innerspring\ncushions will initially sit firmer, but will soften up over time.\nAs the springs are used, they will gain elasticity.</b><br /> <br /> <b>  <i>Assembly required. This product ships in two (2) boxes.</i></b><br /> <br /><i>Use a professional cleaner to help resist staining and prevent\noverall soiling.</i><br />",
                // how many images do we want to display? carousel/slider? limiting to one feels like we are forcing the user to click to the product page to see more?
                "oViewerImages": [
                    {
                        "id": "28a5ff4c-caef-43ff-b46e-7b86064a161c",
                        "cdnPath": "8859663/INSPIRE-Q-Elston-Linen-Tufted-Sloped-Track-Sofa-28a5ff4c-caef-43ff-b46e-7b86064a161c.jpg",
                        "originalWidth": 2000,
                        "originalHeight": 2000,
                        "imageSizes": [
                            {
                                "imagePath": "8859663/INSPIRE-Q-Elston-Linen-Tufted-Sloped-Track-Sofa-28a5ff4c-caef-43ff-b46e-7b86064a161c_320.jpg",
                                "height": 320,
                                "width": 320
                            },
                            {
                                "imagePath": "8859663/INSPIRE-Q-Elston-Linen-Tufted-Sloped-Track-Sofa-28a5ff4c-caef-43ff-b46e-7b86064a161c_600.jpg",
                                "height": 600,
                                "width": 600
                            },
                            {
                                "imagePath": "8859663/INSPIRE-Q-Elston-Linen-Tufted-Sloped-Track-Sofa-28a5ff4c-caef-43ff-b46e-7b86064a161c_1000.jpg",
                                "height": 1000,
                                "width": 1000
                            }
                        ]
                    }
                ],
                // if we want an owner to specify a product option then it will need to be added on the product page, S/N pages are not option specific
                // which means the option's price set will take priority over the priceSet obj above
                "options": [
                    {
                        "optionId": 14405821,
                        "description": "Dark Gray Linen",
                        "onSale": false,
                        "priceSet": [
                            {
                                "label": "Today:",
                                "formattedPrice": "$566.99",
                                "priceType": "CURRENT_PRICE"
                            }
                        ]
                    }
                ]
            },
            {
                "id": 9959631,
                "sku": "17112523",
                "numVotes": 2,
                "meta": {
                    "htmlUrl": "http://www.overstock.com/Home-Garden/Christopher-Knight-Home-Vicenza-Three-Seat-Sofa-Sleeper/9959631/product.html",
                    "imageBaseUrl": "http://ak1.ostkcdn.com/images/products/"
                },
                "name": "Christopher Knight Home Vicenza Three Seat Sofa Sleeper",
                "reviewsCount": 93,
                "rating": "img/mxc/stars4_0.gif",
                "priceSet": {
                    "label": "Sale:",
                    "formattedPrice": "$545.39",
                    "priceType": "CURRENT_PRICE"
                },
                "shortDescription": "This contemporary, adjustable sofa bed can be laid flat or propped upright to create a backrest, turning it quickly and easily from day lounge to sofa. No matter what your activity, do it in style with the Vicenza three seat sofa sleeper.",
                "description": "Give your living room a contemporary look with this three-seat sofa sleeper from Christopher Knight Home. As functional as it is attractive, this sofa sleeper includes a fold-down cushion that reveals integrated cup holders, perfect for viewing the big game or your favorite movie. The modern style of this sofa fits in nicely with nearly any decor.\n<br><br>Make this adaptable piece a functional part of your living room, or put it in your den. Use the sofa in your media room, and fold its central cushion down to reveal two integrated cup holders. This chic sofa's smooth style makes it an ideal complement to transitional or contemporary decor.<br><br><ul><li>Includes: One (1) sofa</li><li>Materials: PU with metal frame</li><li>Color: Brown</li><li>Assembly required: Yes</li><li>Weight: 66-pounds</li><li>Dimensions: 30.75 inches high x 68 inches wide x 31.50 inches deep </li><li>Seat dimensions: 16 inches high x 68 inches wide x 19.25 inches deep </li></ul>",
                "oViewerImages": [
                    {
                        "id": "f7091a14-b16a-4607-b46f-0f2a798d0d4b",
                        "cdnPath": "9959631/Christopher-Knight-Home-Vicenza-Three-Seat-Sofa-Sleeper-f7091a14-b16a-4607-b46f-0f2a798d0d4b.jpg",
                        "originalWidth": 2500,
                        "originalHeight": 2500,
                        "imageSizes": [
                            {
                                "imagePath": "9959631/Christopher-Knight-Home-Vicenza-Three-Seat-Sofa-Sleeper-f7091a14-b16a-4607-b46f-0f2a798d0d4b_320.jpg",
                                "height": 320,
                                "width": 320
                            },
                            {
                                "imagePath": "9959631/Christopher-Knight-Home-Vicenza-Three-Seat-Sofa-Sleeper-f7091a14-b16a-4607-b46f-0f2a798d0d4b_600.jpg",
                                "height": 600,
                                "width": 600
                            },
                            {
                                "imagePath": "9959631/Christopher-Knight-Home-Vicenza-Three-Seat-Sofa-Sleeper-f7091a14-b16a-4607-b46f-0f2a798d0d4b_1000.jpg",
                                "height": 1000,
                                "width": 1000
                            }
                        ]
                    }
                ],
                "options": [
                    {
                        "optionId": 15002948,
                        "description": "Brown",
                        "onSale": true,
                        "priceSet": [
                            {
                                "label": "Sale:",
                                "formattedPrice": "$545.39",
                                "priceType": "CURRENT_PRICE"
                            }
                        ],
                        "messages": [
                            {
                                "message": "Club O Gold Rewards: $27.27 (5%)",
                                "messageType": "CLUBO_REWARDS",
                                "imageUrl": "https://www.overstock.com/img/mxc/mobile/logo_clubo_gold_pp.png"
                            }
                        ]
                    }
                ]
            }
        ]
    },
    "commentData": [
        {
            "id": "b6ac6ac111d81c52fc6f", // hash ID for comment
            "productId": 9959631,
            "userId": 123456789, // if overstock id, otherwise hash? NULL?
            "displayName": "Couch Fan Boy #46",
            "datePosted": "Thursday the 22nd, April 2016",
            "reason": "I do not like turtles so therefore this couch is better."
        },
        {
            "id": "3109dc6ff5463e601280", // hash ID for comment
            "productId": 8859663,
            "userId": 123456789, // if overstock id, otherwise hash? NULL?
            "displayName": "Couch Fan Boy #30",
            "datePosted": "Thursday the 22nd, April 2016",
            "reason": "I slept on this one once."
        },
        {
            "id": "5a06045603f5afb3e43c", // hash ID for comment
            "productId": 8859663,
            "userId": 123456789, // if overstock id, otherwise hash? NULL?
            "displayName": "Couch Hater #27",
            "datePosted": "Thursday the 22nd, April 2016",
            "reason": "I suppose... "
        }
    ]
};