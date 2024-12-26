import React, { useState, useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet"; // Import Leaflet here

import card1 from "../assets/S1.jpg";
import card2 from "../assets/S2.jpg";
import card3 from "../assets/S3.jpg";
import Colombo from "../assets/Colombo.png";
import Galle from "../assets/Galle.png";
import Kandy from "../assets/Kandy.png";
import MountLavinia from "../assets/Mount Lavinia.png";
import Sigiriya from "../assets/Sigiriya.png";
import NuwaraEliya from "../assets/Nuwara Eliya.png";
import Ella from "../assets/Ella.png";
import Unawatuna from "../assets/Unawatuna.png";
import Mirissa from "../assets/Mirissa.png";
import Tangalle from "../assets/Tangalle.png";
import Hikkaduwa from "../assets/Hikkaduwa.png";
import Trincomalee from "../assets/Trincomalee.png";
import ArugamBay from "../assets/Arugam Bay.png";
import pasikuda from "../assets/pasikuda.png";
import Jaffna from "../assets/Jaffna.png";
import Mannar from "../assets/Mannar.png";
import Anuradhapura from "../assets/Anuradhapura.png";
import Polonnaruwa from "../assets/Polonnaruwa.png";
import Mihintale from "../assets/Mihintale.png";
import Adam from "../assets/Adam's Peak.png";
import Udawalawe from "../assets/Udawalawe National Park.png";
import Haputale from "../assets/Haputale.png";
import Wilpattu from "../assets/Wilpattu National Park.png";
import Pigeon from "../assets/Pigeon Island National Park.png";
import Delft from "../assets/Delft Island.png";
import info from "../assets/Info.jpg";
import info2 from "../assets/info2.jpg";
import info3 from "../assets/info3.jpg";
import info4 from "../assets/info4.jpg";
import Header from './header';



function Destination() {
    const imagess = [info,info2,info3,info4,];

        
    const [currentImage, setCurrentImage] = useState(0);
    const [selectedPlace, setSelectedPlace] = useState(null); // State to track selected place

    const images = [card1, card2, card3];

    const places = [
        {
            name: "Delft Island",
            description:
                "Delft Island, located off the northern coast of Sri Lanka in the Jaffna District, is known for its wild ponies and unique natural beauty. The island features rugged landscapes, ancient coral walls, and the historical Dutch Fort, a remnant of the island’s colonial past. Its pristine beaches and clear waters make it a serene and peaceful destination, offering visitors a quiet retreat. With its combination of history, wildlife, and natural charm, Delft Island provides an off-the-beaten-path experience for those looking to explore Sri Lanka’s more secluded destinations.",
            image: Delft,
            coordinates: [9.5203, 79.6595],
        },

        {
            name: "Pigeon Island National Park",
            description:
                "Pigeon Island National Park, located off the northeastern coast of Sri Lanka near Nilaveli, is a small marine park known for its vibrant coral reefs and rich marine life. The park, consisting of two islands, is famous for its population of rock pigeons and is a popular spot for snorkeling and diving. Its clear waters are home to diverse marine species, including reef sharks, turtles, and various fish. With its stunning coral gardens and tranquil atmosphere, Pigeon Island offers a perfect escape for nature lovers and underwater enthusiasts.",
            image: Pigeon,
            coordinates: [8.7348, 81.2468],
        },
        {
            name: "Wilpattu National Park",
            description:
                "Wilpattu National Park, located in northwest Sri Lanka, is the island’s largest and one of its oldest parks, covering around 1,300 square kilometers. Known for its unique villus (natural lakes), the park is home to a wide variety of wildlife, including leopards, elephants, sloth bears, and numerous bird species. Its diverse landscapes, including dry forests, grasslands, and wetlands, provide rich habitats for these animals. Less crowded than other parks, Wilpattu offers a peaceful and intimate safari experience, making it a perfect destination for wildlife enthusiasts and nature lovers.",
            image: Wilpattu,
            coordinates: [8.5768, 80.1018],
        },
        {
            name: "Haputale",
            description:
                "Haputale, located in Sri Lanka's central highlands, is a scenic town known for its cool climate, lush tea plantations, and breathtaking mountain views. Situated at an altitude of 1,430 meters, it offers stunning vistas, including the famous Lipton’s Seat, a viewpoint that overlooks vast tea fields. The town is also home to the picturesque Dunhinda Waterfall and the Sri Bhakta Hanuman Temple. With its serene atmosphere and natural beauty, Haputale is a perfect destination for nature lovers and those seeking a peaceful retreat amidst the hills.",
            image: Haputale,
            coordinates: [6.7685, 80.9636],
        },
        {
            name: "Colombo",
            description:
                "Colombo, the commercial capital of Sri Lanka, is a vibrant city that blends modern development with colonial-era charm. Located on the western coast, it is a hub for trade, culture, and tourism. Notable landmarks include the Galle Face Green, Gangaramaya Temple, and Beira Lake. Colombo is known for its diverse food scene, particularly seafood and Sri Lankan curries, and offers a mix of traditional and contemporary attractions, making it a popular destination for both locals and visitors.",
            image: Colombo,
            coordinates: [6.9271, 79.8612],
        },
        {
            name: "Kandy",
            description: "Kandy, nestled in the central highlands of Sri Lanka, is a cultural and spiritual hub surrounded by lush greenery and scenic hills. Known as the last royal capital of Sri Lanka, it is home to the Temple of the Sacred Tooth Relic (Sri Dalada Maligawa), one of the most sacred Buddhist sites in the world. The city’s serene Kandy Lake offers a tranquil escape in the heart of the bustling town. Kandy is also famous for its vibrant Esala Perahera, an annual procession featuring traditional dancers, drummers, and ornately decorated elephants. With its rich history, cool climate, and picturesque landscapes, Kandy is a must-visit destination for those exploring Sri Lanka’s cultural heritage.",
            image: Kandy,
            coordinates: [7.2906, 80.6337],
        },
        {
            name: "Galle",
            description: "Galle is a historic city located on the southwestern coast of Sri Lanka, known for its well-preserved colonial architecture and rich cultural heritage. The city is famous for the Galle Fort, a UNESCO World Heritage Site built by the Portuguese and later expanded by the Dutch. The fort offers stunning views of the Indian Ocean and is home to charming streets, old churches, museums, and vibrant cafes. Galle is also known for its beautiful beaches, such as Unawatuna and Mirissa, which are popular for swimming, snorkeling, and surfing. The city blends colonial influences with traditional Sri Lankan culture, making it a popular destination for tourists seeking history, culture, and natural beauty.",
            image: Galle,
            coordinates: [6.0325, 80.2168],
        },
        {
            name: "Mount Lavinia",
            description: "Mount Lavinia Hotel is a historic and iconic colonial-era hotel located in Mount Lavinia, Sri Lanka, just south of Colombo. Originally built in the 19th century as the residence of the British Governor, Sir Thomas Maitland, the hotel is known for its stunning views of the Indian Ocean and its colonial architectural charm. The hotel offers a blend of traditional and modern amenities, with elegantly decorated rooms, fine dining options, and a beautiful outdoor pool. The hotel’s Ocean Terrace restaurant is particularly popular for its seafood and stunning sunset views. Mount Lavinia Hotel is also a popular venue for weddings, events, and conferences, drawing both local and international visitors who wish to experience the elegance of Sri Lanka’s colonial past in a luxurious setting.",
            image: MountLavinia,
            coordinates: [6.8294, 79.8653],
        },
        {
            name: "Sigiriya",
            description: "Sigiriya, also known as the Lion's Rock, is an ancient rock fortress located in the central Matale District of Sri Lanka. It is one of the country’s most famous landmarks and a UNESCO World Heritage Site. The site features a massive rock plateau that rises nearly 200 meters above the surrounding jungle, with the remains of a royal palace and complex of gardens at its summit. The fortress is most notable for the impressive Lion’s Gate, which once featured a giant lion’s head, and the beautiful Sigiriya frescoes, which depict women in vibrant colors. Visitors can climb to the top via a series of stairs and pathways, where they are rewarded with panoramic views of the surrounding landscape. Sigiriya is a symbol of Sri Lanka's rich history, architecture, and engineering, attracting travelers from around the world.",
            image: Sigiriya,
            coordinates: [7.9568, 80.7603],
        },
        {
            name: "Nuwara Eliya",
            description: "Nuwara Eliya, often referred to as Little England, is a charming hill station located in the central highlands of Sri Lanka. Known for its cool climate, lush green landscapes, and colonial-era architecture, it offers a refreshing escape from the island’s tropical heat. Nuwara Eliya is famous for its tea plantations, where visitors can tour tea factories and enjoy the scenic views of rolling hills covered in tea bushes. The town features landmarks such as the Victoria Park, Lake Gregory, and the Hakgala Botanical Garden, making it a popular destination for nature lovers. Nuwara Eliya is also known for its British-inspired architecture, including the Grand Hotel and Nuwara Eliya Golf Club, adding to its unique charm. The town is a perfect blend of natural beauty, colonial heritage, and relaxing cool weather.",
            image: NuwaraEliya,
            coordinates: [6.9497, 80.7891],
        },
        {
            name: "Ella",
            description: "Ella is a picturesque town nestled in the central highlands of Sri Lanka, known for its stunning natural beauty, cool climate, and relaxed atmosphere. Surrounded by lush tea plantations, misty mountains, and cascading waterfalls, it is a haven for nature lovers and adventure enthusiasts. One of Ella's most iconic attractions is the Nine Arches Bridge, a stunning viaduct set amidst dense greenery and a popular spot for photography. Visitors can also hike to Ella Rock or Little Adam’s Peak, both offering breathtaking panoramic views of the surrounding landscapes. Nearby, the Ravana Falls, a spectacular waterfall tied to local legends, is another must-visit. Ella is also a hub for tea culture, with several tea plantations and factories open for tours. Its laid-back vibe, scenic beauty, and range of activities make Ella a favorite destination for travelers seeking tranquility and adventure.",
            image: Ella,
            coordinates: [6.8748, 81.0462],
        },
        {
            name: "Unawatuna",
            description: "Unawatuna is a picturesque coastal town located on the southern coast of Sri Lanka, renowned for its stunning beaches, turquoise waters, and laid-back vibe. It is one of the most popular beach destinations in the country, offering activities such as swimming, snorkeling, diving, and sunbathing. The crescent-shaped Unawatuna Beach is lined with palm trees, beach bars, and seafood restaurants, making it a favorite spot for relaxation.Nearby attractions include the Japanese Peace Pagoda, which offers serene surroundings and panoramic ocean views, and the Jungle Beach, a secluded spot perfect for a quiet escape. Unawatuna is also known for its vibrant marine life, with coral reefs that attract snorkelers and divers. Its charming blend of natural beauty, lively atmosphere, and cultural highlights make Unawatuna a must-visit destination for travelers seeking a tropical getaway.",
            image: Unawatuna,
            coordinates: [5.9785, 80.4298],
        },
        {
            name: "Mirissa",
            description: "Mirissa is a serene coastal town on the southern coast of Sri Lanka, famous for its pristine beaches, vibrant marine life, and laid-back atmosphere. The Mirissa Beach, with its golden sands and turquoise waters, is ideal for swimming, sunbathing, and surfing. A key highlight of Mirissa is its whale and dolphin watching tours, which attract visitors from around the world during the migration season.The town is also home to the iconic Coconut Tree Hill, a picturesque palm tree viewpoint overlooking the ocean, perfect for photography and sunsets. Mirissa offers a mix of lively beach bars and quiet retreats, making it suitable for both relaxation and adventure. Its stunning natural beauty and unique experiences make it one of Sri Lanka’s most beloved beach destinations.",
            image: Mirissa,
            coordinates: [5.9489, 80.4591],
        },
        {
            name: "Tangalle",
            description: "Tangalle is a tranquil coastal town located on the southern coast of Sri Lanka, known for its pristine beaches, turquoise waters, and serene atmosphere. It is a haven for those seeking relaxation away from crowded tourist spots. Tangalle boasts several beautiful beaches, including Tangalle Beach, Goyambokka Beach, and Silent Beach, ideal for swimming, sunbathing, and long leisurely walks.The town is also a gateway to natural attractions such as the Rekawa Lagoon, a hotspot for birdwatching, and the Rekawa Turtle Conservation Project, where visitors can witness sea turtles nesting. Nearby, the Mulkirigala Rock Temple, a historic Buddhist site featuring ancient cave paintings and statues, offers a cultural experience. Tangalle’s peaceful charm, stunning landscapes, and local seafood make it a perfect destination for travelers seeking a quiet coastal retreat.",
            image: Tangalle,
            coordinates: [6.0241, 80.7984],
        },
        {
            name: "Hikkaduwa",
            description: "Hikkaduwa is a lively coastal town on the southwestern coast of Sri Lanka, renowned for its stunning beaches, vibrant nightlife, and rich marine life. It is one of the country’s top destinations for water sports, including snorkeling, scuba diving, and surfing. The Hikkaduwa Coral Sanctuary, located close to the shore, is a major attraction, offering visitors the chance to explore colorful coral reefs and spot tropical fish.The town also boasts a bustling beachside scene with restaurants, bars, and shops selling local crafts and souvenirs. Hikkaduwa Beach is ideal for swimming and relaxing, while the nearby Tsunami Memorial serves as a poignant reminder of the 2004 tsunami. Hikkaduwa’s energetic atmosphere, combined with its natural beauty, makes it a favorite destination for both adventure seekers and beach lovers.",
            image: Hikkaduwa,
            coordinates: [6.1404, 80.1031],
        },
        {
            name: "Trincomalee",
            description: "Trincomalee, located on the northeastern coast of Sri Lanka, is a historic port city known for its pristine beaches, cultural landmarks, and vibrant marine life. The city is home to the stunning Nilaveli Beachfth and Uppuveli Beach, both famous for their soft sands and clear waters, making them ideal for swimming, snorkeling, and diving. Nearby, Pigeon Island National Park offers a rich underwater world with coral reefs and tropical fish.Trincomalee is steeped in history and culture, with landmarks like the Koneswaram Temple, an ancient Hindu temple perched on a cliff overlooking the sea, and the Fort Frederick, a colonial-era fortress built by the Portuguese. The city is also known for its natural harbor, one of the finest in the world, and the hot water springs at KanniyaD, a popular attraction. With its mix of natural beauty, historical significance, and relaxing beaches, Trincomalee is a must-visit destination in Sri Lanka.",
            image: Trincomalee,
            coordinates: [8.5874, 81.2152],
        },
        {
            name: "Arugam Bay",
            description: "Arugam Bay, located on the southeastern coast of Sri Lanka, is a world-renowned surf destination and a paradise for beach lovers. Known for its laid-back atmosphere and stunning coastal beauty, it attracts surfers from around the globe, especially during the surfing season from April to October. The main surf spot, Main Point, offers consistent waves for advanced surfers, while other spots like Whiskey Point and Peanut Farm cater to beginners and intermediate surfers.Beyond surfing, Arugam Bay is perfect for relaxation, with golden sandy beaches and crystal-clear waters. The area is also rich in biodiversity, with nearby attractions like Lahugala National Park, home to elephants, and the Kudumbigala Monastery, an ancient rock temple with panoramic views. Whether for surfing, wildlife, or simply soaking up the sun, Arugam Bay is a must-visit destination for a laid-back coastal experience.",
            image: ArugamBay,
            coordinates: [6.8500, 81.8308],
        },
        {
            name: "Pasikuda",
            description: "Pasikuda, located on the eastern coast of Sri Lanka, is famous for its tranquil turquoise waters, white sandy beaches, and shallow coastline, making it one of the island’s most picturesque destinations. The calm, reef-protected waters are ideal for swimming, snorkeling, and paddleboarding, offering a safe environment even for beginners.Pasikuda is known for its luxury resorts and relaxed atmosphere, making it perfect for a serene beach getaway. Nearby, visitors can explore attractions such as Batticaloa Lagoon, famous for its “singing fish,” and the historic Batticaloa Fort, built by the Portuguese. The area’s natural beauty and warm hospitality make Pasikuda a must-visit spot for travelers seeking relaxation and coastal charm.",
            image: pasikuda,
            coordinates: [7.9230, 81.5615],
        },
        {
            name: "Jaffna",
            description: "Jaffna, in northern Sri Lanka, is a vibrant city rich in Tamil culture, history, and tradition. Known for landmarks like the Nallur Kandaswamy Temple and the colonial-era Jaffna Fort, it blends ancient heritage with modern charm. The city is famous for its unique cuisine, featuring spicy curries and seafood, including the renowned Jaffna crab curry. Nearby, Nagadeepa Island and Delft Island offer spiritual and natural attractions. With its warm hospitality and cultural depth, Jaffna provides a unique and enriching experience for travelers.",
            image: Jaffna,
            coordinates: [9.6615, 80.0255],
        },
        {
            name: "Mannar",
            description: "Mannar, a serene coastal town in northwestern Sri Lanka, is known for its rich history, natural beauty, and cultural significance. It is home to the ancient Thiruketheeswaram Temple, the historic Mannar Fort, and the unique Adam’s Bridge, a chain of limestone shoals connecting Sri Lanka to India. The region’s tranquil beaches, sprawling lagoons, and iconic baobab trees offer a peaceful retreat, making Mannar a fascinating destination for those seeking history, nature, and quiet charm.",
            image: Mannar,
            coordinates: [8.9786, 79.9034],
        },
        {
            name: "Anuradhapura",
            description: "Anuradhapura, one of Sri Lanka’s ancient capitals, is a UNESCO World Heritage Site renowned for its well-preserved ruins and sacred significance. As the heart of Buddhism in Sri Lanka, it is home to iconic landmarks like the Sri Maha Bodhi, a sacred fig tree believed to have been grown from a sapling of the tree under which Buddha attained enlightenment. The city also features impressive stupas such as the Ruwanwelisaya and Jetavanaramaya, along with ancient monasteries and palaces. Surrounded by serene reservoirs and lush greenery, Anuradhapura offers a glimpse into Sri Lanka’s glorious past and spiritual heritage, making it a must-visit destination for history and culture enthusiasts.",
            image: Anuradhapura,
            coordinates: [8.3114, 80.4037],
        },
        {
            name: "Polonnaruwa",
            description: "Polonnaruwa, a UNESCO World Heritage Site, is one of Sri Lanka’s ancient capitals and a treasure trove of archaeological wonders. Renowned for its well-preserved ruins, the city showcases the grandeur of medieval Sri Lankan architecture and engineering. Iconic landmarks include the Gal Vihara, a group of stunning Buddha statues carved from granite, and the Parakrama Samudra, a vast man-made reservoir built by King Parakramabahu the Great. The ancient city features royal palaces, temples, and stupas, offering a glimpse into the island’s rich history. Polonnaruwa’s blend of history, culture, and scenic beauty makes it a must-visit destination for travelers exploring Sri Lanka’s heritage.",
            image: Polonnaruwa,
            coordinates: [7.9335, 81.0018],
        },
        {
            name: "Mihintale",
            description: "Mihintale, located near Anuradhapura in Sri Lanka, is a significant Buddhist site and a place of historical importance. It is believed to be the spot where Mahinda, a Buddhist monk from India, introduced Buddhism to the island in the 3rd century BCE, marking the beginning of the religion's spread across Sri Lanka. The site features a series of ancient temples, stupas, and monuments, with the  Mihintale Rock offering a panoramic view of the surrounding area. Key attractions include the Aradhana Gala, a large stone platform, and the Mihintale Stupa, a sacred Buddhist site. With its rich spiritual and historical significance, Mihintale remains a peaceful pilgrimage site for Buddhists and an important cultural landmark in Sri Lanka.",
            image: Mihintale,
            coordinates: [8.3504, 80.5112],
        },
        {
            name: "Adam's Peak (Sri Pada)",
            description: "Adam's Peak, or Sri Pada, is a sacred mountain in central Sri Lanka, famous for the footprint-shaped impression at its summit, which is revered by Buddhists, Hindus, Christians, and Muslims. Standing at 2,243 meters, it is a major pilgrimage site, with thousands of visitors ascending its 5,000 steps to reach the top, especially during the pilgrimage season from December to May. The climb offers stunning views of the surrounding forests and landscapes, making it a popular destination for both spiritual seekers and nature enthusiasts. Adam's Peak is a unique blend of natural beauty and religious significance.",
            image: Adam,
            coordinates: [6.8094, 80.4999],
        },
        {
            name: "Udawalawe National Park",
            description: "Udawalawe National Park, located in southern Sri Lanka, is a haven for wildlife, particularly famous for its large population of wild elephants. Spanning over 30,000 hectares, the park features a diverse landscape of grasslands, forests, and wetlands, home to various species such as water buffalo, leopards, and numerous birds, including the Sri Lanka Junglefowl. The Udawalawe Reservoir is a key attraction, drawing wildlife, especially during the dry season. The park is a popular destination for safaris, offering visitors a chance to experience the island's rich biodiversity and observe elephants in their natural habitat.",
            image: Udawalawe,
            coordinates: [6.4757, 80.8891],
        },


    ];

    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % imagess.length);
        }, 3000);

        return () => clearInterval(interval); // Clean up on component unmount
    }, [imagess.length]);

    const nextImage = () => {
        setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    };

    const prevImage = () => {
        setCurrentImage((prevImage) =>
            prevImage === 0 ? images.length - 1 : prevImage - 1
        );
    };

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImage((prevImage) => (prevImage + 1) % images.length);
        }, 5000);
        return () => clearInterval(interval);
    }, [images.length]);

    const handleMarkerClick = (place) => {
        setSelectedPlace(place); // Update the selected place state when a marker is clicked
    };

    return (
        <>
        <div>
        <Header />
            <div
                style={{
                    position: "relative",
                    width: "100%",
                    height: "500px",
                    overflow: "hidden",
                }}
            >
                
                <img
                    src={images[currentImage]}
                    alt="Sri Lanka"
                    style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        transition: "opacity 1s ease-in-out",
                        opacity: 0.7,
                    }}
                />
                <div
                    style={{
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                        color: "white",
                        fontSize: "3rem",
                        fontFamily: "Arial, sans-serif",
                        textShadow: "2px 2px 4px rgba(0, 0, 0, 0.6)",
                        textAlign: "center",
                    }}
                >
                    <h1 style={{ fontSize: '50px' }}>Destination Sri Lanka</h1>
                    <br />
                    <h4>මෙම ස්ථාන සුරැකීම අපගේ යුතුකමයි.</h4>
                    <h4>It is our duty to save these places.</h4>
                    <h4>இந்த இடங்களை காப்பாற்ற வேண்டியது நமது கடமை.</h4>
                </div>

                <button
                    onClick={prevImage}
                    style={{
                        position: "absolute",
                        top: "50%",
                        left: "10px",
                        transform: "translateY(-50%)",
                        background: "rgba(0, 0, 0, 0.5)",
                        color: "white",
                        border: "none",
                        padding: "10px",
                        fontSize: "1.5rem",
                        cursor: "pointer",
                        borderRadius: "50%",
                    }}
                >
                    &#8249;
                </button>

                <button
                    onClick={nextImage}
                    style={{
                        position: "absolute",
                        top: "50%",
                        right: "10px",
                        transform: "translateY(-50%)",
                        background: "rgba(0, 0, 0, 0.5)",
                        color: "white",
                        border: "none",
                        padding: "10px",
                        fontSize: "1.5rem",
                        cursor: "pointer",
                        borderRadius: "50%",
                    }}
                >
                    &#8250;
                </button>
            </div>


            <div
                style={{
                    display: "flex",
                    justifyContent: "space-between",
                    flexWrap: "wrap",
                    margin: "50px auto",
                    width: "98%",
                    maxWidth: "1200px",
                }}
            >
                {/* intro*/}
                <div
                    style={{
                        margin: '50px auto',
                        width: '50%',
                        maxWidth: '800px',
                        background: '#f8f9fa',
                        borderRadius: '10px',
                        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                        textAlign: 'center',
                        padding: '30px',
                        height: 'auto',
                    }}
                >
                    <h1
                        style={{
                            fontSize: '2.5rem',
                            color: '#333',
                            marginBottom: '10px',
                        }}
                    >
                        ආයුබෝවන් !
                    </h1>
                    <h3
                        style={{
                            fontSize: '1.5rem',
                            color: '#555',
                            margin: '5px 0',
                        }}
                    >
                        WELCOME TO DESTINATION SRI LANKA
                    </h3>
                    <h3
                        style={{
                            fontSize: '1.5rem',
                            color: '#555',
                            margin: '5px 0',
                        }}
                    >
                        இலக்கு இலங்கைக்கு வரவேற்கிறோம்
                    </h3>
                    <div
                        style={{
                            marginTop: '40px',
                            lineHeight: '1.8',
                            color: '#666',
                            textAlign: 'justify',
                            fontSize: '16px',
                        }}
                    >
                        <p>
                            Embark on an extraordinary journey to the Pearl of the Indian Ocean, a land of timeless beauty, rich culture, and unparalleled charm. Sri Lanka, with its diverse landscapes and vibrant traditions, offers an experience like no other.
                        </p>
                        <p style={{ marginTop: '15px' }}>
                            From the sun-kissed shores of its golden beaches to the emerald hills of its tea plantations, every corner of Sri Lanka tells a story waiting to be discovered. Marvel at ancient ruins and sacred temples that whisper the tales of a 2,500-year-old history. Explore bustling cities alive with energy and serene villages that seem untouched by time.
                        </p>
                        <p style={{ marginTop: '15px' }}>
                            For the adventure seekers, Sri Lanka offers thrilling safaris through wildlife-rich national parks, hikes to mist-shrouded peaks, and water sports in crystal-clear lagoons. For those in search of tranquility, the island’s pristine beaches and wellness retreats provide the perfect escape.
                        </p>
                        <p style={{ marginTop: '15px' }}>
                            Indulge your senses in Sri Lanka’s world-renowned cuisine, a fusion of exotic spices and fresh ingredients, and experience the warmth of its people, whose smiles and hospitality will make you feel at home.
                        </p>
                        <p style={{ marginTop: '15px' }}>
                            Whether you’re seeking relaxation, adventure, cultural exploration, or spiritual awakening, Destination Sri Lanka is your gateway to unforgettable memories. Let the magic of this island paradise captivate your heart and inspire your soul.
                        </p>
                        <p
                            style={{
                                marginTop: '15px',
                                fontWeight: 'bold',
                                textAlign: 'center',
                                color: '#444',
                            }}
                        >
                            Your adventure begins here. Welcome to Sri Lanka! 🌴✨
                        </p>
                    </div>
                    <div
                style={{
                    marginTop: '30px',
                    borderRadius: '10px',
                    overflow: 'hidden',
                    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                }}
            >
                <img
                    src={imagess[currentImageIndex]}
                    alt="Beautiful Sri Lanka"
                    style={{
                        width: '100%',
                        height: 'auto',
                        display: 'block',
                    }}
                />
                <div
                    style={{
                        padding: '20px',
                        background: '#fff',
                        textAlign: 'center',
                    }}
                >
                    <h3 style={{ fontSize: '1.3rem', color: '#333', margin: '10px 0' }}>
                        Discover the Beauty of Sri Lanka
                    </h3>
                    <p style={{ fontSize: '14px', color: '#666' }}>
                        From scenic beaches to lush greenery, let your journey begin.
                    </p>
                </div>
            </div>
                </div>


                {/* Map Section */}
                <div style={{ flex: 1, width: '40%', marginLeft: '50px', marginTop: '50px', marginRight: '0px' }}>
                    <h2 style={{ textAlign: "center", marginBottom: "30px" }}>
                        Explore Destinations on the Map
                    </h2>
                    <MapContainer
                        center={[7.8731, 80.7718]} // Coordinates of Sri Lanka
                        zoom={7}
                        style={{ height: "500px", width: "100%", borderRadius: "10px" }}
                    >
                        <TileLayer
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                        />

                        {/* Markers for each place */}
                        {places.map((place, index) => (
                            <Marker
                                key={index}
                                position={place.coordinates}
                                icon={new L.Icon({
                                    iconUrl: place.image,
                                    iconSize: [32, 32],
                                    iconAnchor: [16, 32],
                                    popupAnchor: [0, -32]
                                })}
                                eventHandlers={{
                                    click: () => handleMarkerClick(place) // Show card on marker click
                                }}
                            >
                                <Popup>{place.name}</Popup>
                            </Marker>
                        ))}
                    </MapContainer>

                    {selectedPlace && (
                        <div style={{
                            marginTop: '20px', padding: '20px', backgroundColor: '#f8f9fa', borderRadius: '10px', lineHeight: '1.8',
                            color: '#666',
                            textAlign: 'justify',
                            fontSize: '16px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                        }}>
                            <h3>{selectedPlace.name}</h3>
                            <p>{selectedPlace.description}</p>
                            <br />
                            <img
                                src={selectedPlace.image}
                                alt={selectedPlace.name}
                                style={{ width: '100%', borderRadius: '10px' }}
                            />
                        </div>
                    )}
                </div>
            </div>
            </div>
        </>
    );
}

export default Destination;
