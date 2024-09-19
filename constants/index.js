import { requireNativeComponent } from "react-native";
import icons from "./icons";
import images from "./images";

export const sortCategoryData = ['All', 'Popular', 'Recommended', 'More'];

export const categoriesData = [
    {
        title: 'conseille',
        image: require('../assets/images/images.jpeg'),
        categoie: "Popular",
        link: "wa.me/+213559230000"
    },
    {
        title: 'service Allo Tabibi',
        image: require('../assets/images/images.jpeg'),
        categoie: "Popular"
    },


    {
        title: 'teleconsultation',
        image: require('../assets/images/images.jpeg'),
        categoie: "Popular"
    },
    {
        title: 'rendez vous',
        image: require('../assets/images/images.jpeg'),
        categoie: "Popular"
    },
    
]


export const destinationData = [
    {
        title: 'conseille',
        shortDescription: "Osaka Castle is a Japanese castle in Chūō-ku, Osaka, Japan. The castle is one of Japan's most famous landmarks.",
        image: require('../assets/images/one.jpeg'),
        pdfUrl: require('../assets/pdf/نصائح البحارة.pdf')

    },
    {
        title: 'service Allo Tabibi',
        shortDescription: "The Itsukushima shrine is one of Japan's most popular tourist attractions.",
        image: require('../assets/images/5.jpg')

    },
    
    {
        title: 'teleconsultation',
        shortDescription: "Babusar Top is a mountain pass in Pakistan at the north of the 150 km long in beautiful Kaghan Valley",
        image: require('../assets/images/images.jpeg')
    },
    {
        title: 'Renouvellement fascicule',
        shortDescription: "Todaiji is one of Japan's most famous and significant temples and a landmark of Nara.",
        image: require('../assets/images/renouv.jpeg')
    },
    {
        title: 'A propos',
        shortDescription: "Our marine instruction mobile app is designed to make learning maritime skills accessible and convenient. With interactive lessons, videos, and quizzes, you can master navigation techniques, sea safety, and much more, all from your phone. Whether you're a beginner or an experienced sailor, our platform supports you every step of the way to ensure your success on the water.",
        image: require('../assets/images/a-propos-de.png'),
       },
]
export { icons, images };
