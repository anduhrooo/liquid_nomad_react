import maiTai from '../assets/maitai.jpg';
import monkeyMaiTai from '../assets/monkeymaitai.jpg';
import jungleBird from '../assets/junglebird.jpg';
import queenParkSwizzle from '../assets/qps.jpg';
import whiskeySour from '../assets/whiskeySour.JPG';
import oldFashioned from '../assets/oldFashioned.JPG';

export const menu = {
    cocktails: [
        {
            name: "'44 Mai Tai",
            ingredients: [
                "Jamaican Rum",
                "Rhum Agricole",
                "Lime Juice",
                "Demerara Syrup",
                "Orgeat (Almond) Syrup",
                "Curacao"
            ],
            tag: 'classic mai tai',
            // image: maiTai,
        },
        {
            name: 'Mai Tai',
            ingredients: [
                "Koloa Dark Rum",
                "Merchant's Reserve Aged Blended Rum",
                "Lime Juice",
                "Demerara Syrup",
                "Orgeat (Almond) Syrup",
                "Orange Liqueur",
            ], 
            tag: 'way cheaper than a plane ticket to Hawaii (use the money you saved to tip your bartender!)', 
            image: maiTai,
        },
        {
            name: "Jungle Bird",
            ingredients: [
                "Appleton Estate Jamaican Rum",
                "Pineapple Juice",
                "Aperol",
                "Demerara Syrup",
                "Lime Juice"
            ],
            tag: '...or therapy in a glass.',
            image: jungleBird,
        },
        {
            name: "Tradewinds",
            ingredients: [
                "Rum",
                "Lemon",
                "Apricot Liqueur",
                "Cream of Coconut",
                "Nutmeg"
            ],
            tag: 'a tropical delight',
        },
        {
            name: "Painkiller",
            ingredients: [
                "Rum",
                "Pineapple Juice",
                "Orange Juice",
                "Cream of Coconut"
            ],
            tag: 'a classic tiki drink',
        },
        {
            name: "Queen's Park Swizzle",
            ingredients: [
                "Hamilton 86 Demerara Rum",
                "Mint",
                "Lime Juice",
                "Simple Syrup",
                "Angostura Bitters"
            ],
            tag: 'A better mojito',
            image: queenParkSwizzle,
        },
        {
            name: "Old Fashioned",
            ingredients: [
                "Buffalo Trace Bourbon",
                'Demerara Syrup',
                "Angostura Bitters"
            ],
            tag: "a classic cocktail. Perfectly balanced.",
            image: oldFashioned
        },
        {
            name: "Whiskey Sour",
            ingredients: [
                "Old Grandad Bourbon",
                "Lemon Juice",
                "Demerara Syrup",
                "Red Wine"
            ],
            tag: 'clarified cocktail with a float of red wine. Tony Yang approved.',
            image: whiskeySour
        },
        {
            name: "Paper Plane",
            ingredients: [
                "Bourbon",
                "Aperol",
                "Amaro Nonino",
                "Lemon Juice"
            ],
            tag: 'a modern classic',
        },
        {
            name: "Mojito",
            ingredients: [
                "White Rum",
                "Mint",
                "Lime Juice",
                "Simple Syrup",
                "Soda Water"
            ],
            tag: 'refreshing and minty',
            image: 'https://picsum.photos/200/300', // Placeholder image
        }
    ],
};
