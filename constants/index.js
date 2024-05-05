import icons from "./icons";
import images from "./images";

export const sortCategoryData = ['All', 'Popular', 'Recommended', 'More'];

export const categoriesData = [
    {
        title: 'Garage ocean',
        image: require('../assets/images/ocean.png'),
        categoie: "Popular"
    },
    {
        title: 'Mountain',
        image: require('../assets/images/mountain.png'),
        categoie: "Popular"
    },
    {
        title: 'Camp',
        image: require('../assets/images/camp.png'),
        categoie: "Popular"
    },
    {
        title: 'Sunset',
        image: require('../assets/images/sunset.png'),
        categoie: "Recommended"
    },
    {
        title: 'Hiking',
        image: require('../assets/images/hiking.png'),
        categoie: "Recommended"
    },
    {
        title: 'Beach',
        image: require('../assets/images/beach.png'),
        categoie: "Popular"
    },
    {
        title: 'Forest',
        image: require('../assets/images/forest.png'),
        categoie: "Popular"
    },
    
]
export const destinationData = [
    {
        title: 'Garage ocean',
        duration: '12 Days',
        distance: '400 KM',
        weather: '20 C',
        price: 1200,
        shortDescription: "Osaka Castle is a Japanese castle in Chūō-ku, Osaka, Japan. The castle is one of Japan's most famous landmarks.",
        longDescription: "Osaka Castle is a Japanese castle in Chūō-ku, Osaka, Japan. The castle is one of Japan's most famous landmarks and it played a major role in the unification of Japan during the sixteenth century of the Azuchi-Momoyama period.",
        image: require('../assets/images/hotel.png')
    },
    {
        title: 'Island Itsukushima Shrine',
        duration: '7 Days',
        distance: '450 KM',
        weather: '30 C',
        price: 3000,
        shortDescription: "The Itsukushima shrine is one of Japan's most popular tourist attractions.",
        longDescription: "Itsukushima Shrine is a Shinto shrine on the island of Itsukushima, best known for its 'floating' torii gate. It is in the city of Hatsukaichi in Hiroshima Prefecture in Japan, accessible from the mainland by ferry at Miyajimaguchi Station.",
        image: require('../assets/images/island.png')
    },
    
    {
        title: 'Babusar Top',
        duration: '5 Days',
        distance: '299 KM',
        weather: '14 C',
        price: 1000,
        shortDescription: "Babusar Top is a mountain pass in Pakistan at the north of the 150 km long in beautiful Kaghan Valley",
        longDescription: "Babusar Pass or Babusar Top is a mountain pass in Pakistan at the north of the 150 km long Kaghan Valley, connecting it via the Thak Nala with Chilas on the Karakoram Highway. It is the highest point in Kaghan Valley that can be easily accessed by cars.",
        image: require('../assets/images/camp.png')
    },
    {
        title: 'Todaiji Temple',
        duration: '20 Days',
        distance: '604 KM',
        weather: '34 C',
        price: 400,
        shortDescription: "Todaiji is one of Japan's most famous and significant temples and a landmark of Nara.",
        longDescription: "Tōdai-ji is a Buddhist temple complex that was once one of the powerful Seven Great Temples, located in the city of Nara, Japan. Though it was originally founded in the year 738 CE, Tōdai-ji was not opened until the year 752 CE.",
        image: require('../assets/images/forest.png')
    },
]
export { icons, images };
