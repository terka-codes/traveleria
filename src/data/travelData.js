const destinations = [
    {
        id: 1,
        name: "Bali, Indonesia",
        description: "A paradise of beautiful beaches, lush landscapes and ancient temples",
        imageUrl: "https://example.com/bali-indonesia.jpg",
        attractions: [
            {
                name: "Uluwatu Temple",
                description: "A stunning cliff-side temple with breathtaking ocean views",
                imageUrl: "https://example.com/uluwatu-temple.jpg",
                rating: 4.6
            },
            {
                name: "Ubud Monkey Forest",
                description: "A nature reserve with hundreds of playful monkeys",
                imageUrl: "https://example.com/ubud-monkey-forest.jpg",
                rating: 4.7
            },
        ],
        hotels: [
            {
                name: "Four Seasons Resort Bali at Jimbaran Bay",
                description: "A luxurious resort with stunning ocean views and private villas",
                imageUrl: "https://example.com/four-seasons-resort-bali-jimbaran-bay.jpg",
                rating: 4.8,
                price: 800,
                currency: "USD",
                amenities: ["pool", "spa", "gym"]
            },
            {
                name: "The Legian Bali",
                description: "A beachfront hotel with elegant suites and excellent service",
                imageUrl: "https://example.com/the-legian-bali.jpg",
                rating: 4.9,
                price: 700,
                currency: "USD",
                amenities: ["pool", "restaurant"]
            },
        ]
    },
    {
        id: 2,
        name: "Maldives",
        description: "A tropical paradise of turquoise waters, white-sand beaches and stunning coral reefs",
        imageUrl: "https://example.com/maldives.jpg",
        attractions: [
            {
                name: "Biyadhoo Island",
                description: "A secluded island with beautiful beaches and coral reefs",
                imageUrl: "https://example.com/biyadhoo-island.jpg",
                rating: 4.5
            },
            {
                name: "Manta Point",
                description: "A world-famous dive site with large numbers of manta rays",
                imageUrl: "https://example.com/manta-point.jpg",
                rating: 4.8
            },
        ],
        hotels: [
            {
                name: "Soneva Fushi Resort",
                description: "A luxurious eco-resort with private villas and a spa",
                imageUrl: "https://example.com/soneva-fushi-resort.jpg",
                rating: 4.9,
                price: 1200,
                currency: "USD",
                amenities: ["pool", "spa", "restaurant"]
            },
            {
                name: "Conrad Maldives Rangali Island",
                description: "A luxurious resort with overwater villas and an underwater restaurant",
                imageUrl: "https://example.com/conrad-maldives-rangali-island.jpg",
                rating: 4.7,
                price: 1000,
                currency: "USD",
                amenities: ["pool", "spa", "restaurant"]
            },
        ]
    },
    {
        id: 3,
        name: "Phuket, Thailand",
        description: "A popular tourist destination with stunning beaches and lively nightlife",
        imageUrl: "https://example.com/phuket-thailand.jpg",
        attractions: [
            {
                name: "Phang Nga Bay",
                description: "A picturesque bay with towering limestone cliffs and clear waters",
                imageUrl: "https://example.com/phang-nga-bay.jpg",
                rating: 4.7
            },
            {
                name: "Big Buddha Phuket",
                description: "A giant Buddha statue with panoramic views of the island",
                imageUrl: "https://example.com/big-buddha-phuket.jpg",
                rating: 4.6
            },
        ],
        hotels: [
            {
                name: "The Naka Island, A Luxury Collection Resort & Spa",
                description: "A luxurious resort on a private island with stunning sea views",
                imageUrl: "https://example.com/the-naka-island-luxury-collection-resort-spa.jpg",
                rating: 4.9,
                price: 900,
                currency: "USD",
                amenities: ["pool", "spa", "restaurant"]
            },
            {
                name: "Banyan Tree Phuket",
                description: "A luxurious resort with private villas and a world-class spa",
                imageUrl: "https://example.com/banyan-tree-phuket.jpg",
                rating: 4.8,
                price: 800,
                currency: "USD",
                amenities: ["pool", "spa", "restaurant"]
            },
        ]
    },
    {
        id: 4,
        name: "Cancun, Mexico",
        description: "A popular resort city with beautiful beaches and ancient Mayan ruins",
        imageUrl: "https://example.com/cancun-mexico.jpg",
        attractions: [
            {
                name: "Chichen Itza",
                description: "An ancient Mayan city with impressive pyramids and temples",
                imageUrl: "https://example.com/chichen-itza.jpg",
                rating: 4.8
            },
            {
                name: "Playa Delfines",
                description: "A beautiful beach with clear waters and white sand",
                imageUrl: "https://example.com/playa-delfines.jpg",
                rating: 4.6
            },
        ],
        hotels: [
            {
                name: "Nizuc Resort & Spa",
                description: "A luxurious resort with private beach, spa and infinity pool",
                imageUrl: "https://example.com/nizuc-resort-spa.jpg",
                rating: 4.9,
                price: 1000,
                currency: "USD",
                amenities: ["pool", "spa", "restaurant"]
            },
            {
                name: "JW Marriott Cancun Resort & Spa",
                description: "A luxurious resort with ocean views and a world-class spa",
                imageUrl: "https://example.com/jw-marriott-cancun-resort-spa.jpg",
                rating: 4.8,
                price: 800,
                currency: "USD",
                amenities: ["pool", "spa", "restaurant"]
            },
        ]
    },
    {
        id: 5,
        name: "Bali, Indonesia",
        description: "A popular tropical island with beautiful beaches and unique Hindu culture",
        imageUrl: "https://example.com/bali-indonesia.jpg",
        attractions: [
            {
                name: "Tanah Lot Temple",
                description: "A Hindu temple on a rock formation surrounded by the sea",
                imageUrl: "https://example.com/tanah-lot-temple.jpg",
                rating: 4.7
            },
            {
                name: "Ubud Monkey Forest",
                description: "A natural forest sanctuary with playful monkeys and ancient temples",
                imageUrl: "https://example.com/ubud-monkey-forest.jpg",
                rating: 4.6
            },
        ],
        hotels: [
            {
                name: "The St. Regis Bali Resort",
                description: "A luxurious beachfront resort with private villas and a spa",
                imageUrl: "https://example.com/the-st-regis-bali-resort.jpg",
                rating: 4.9,
                price: 1200,
                currency: "USD",
                amenities: ["pool", "spa", "restaurant"]
            },
            {
                name: "Mandapa, a Ritz-Carlton Reserve",
                description: "A luxurious resort surrounded by rice fields with private pool villas",
                imageUrl: "https://example.com/mandapa-ritz-carlton-reserve.jpg",
                rating: 4.8,
                price: 1000,
                currency: "USD",
                amenities: ["pool", "spa", "restaurant"]
            },
        ]
    },
    {
        id: 6,
        name: "Hawaii, USA",
        description: "A popular tropical destination with stunning beaches, volcanoes and rich culture",
        imageUrl: "https://example.com/hawaii-usa.jpg",
        attractions: [
            {
                name: "Haleakala National Park",
                description: "A national park with a stunning volcanic crater and hiking trails",
                imageUrl: "https://example.com/haleakala-national-park.jpg",
                rating: 4.7
            },
            {
                name: "Waikiki Beach",
                description: "A world-famous beach with clear waters and iconic Diamond Head backdrop",
                imageUrl: "https://example.com/waikiki-beach.jpg",
                rating: 4.6
            },
        ],
        hotels: [
            {
                name: "Four Seasons Resort Maui at Wailea",
                description: "A luxurious beachfront resort with ocean view suites and a spa",
                imageUrl: "https://example.com/four-seasons-maui-wailea.jpg",
                rating: 4.9,
                price: 1500,
                currency: "USD",
                amenities: ["pool", "spa", "restaurant"]
            },
            {
                name: "The Ritz-Carlton Kapalua",
                description: "A luxurious resort with golf courses and a spa on a secluded beach",
                imageUrl: "https://example.com/the-ritz-carlton-kapalua.jpg",
                rating: 4.8,
                price: 1200,
                currency: "USD",
                amenities: ["pool", "spa", "restaurant"]
            },
        ]
    },
    {
        id: 7,
        name: "Phu Quoc Island, Vietnam",
        description: "A pristine tropical island with beautiful beaches and unique local culture",
        imageUrl: "https://example.com/phu-quoc-island-vietnam.jpg",
        attractions: [
            {
                name: "Phu Quoc National Park",
                description: "A national park with dense jungle and scenic hiking trails",
                imageUrl: "https://example.com/phu-quoc-national-park.jpg",
                rating: 4.7
            },
            {
                name: "Long Beach",
                description: "A beautiful white sand beach with clear waters and sunset views",
                imageUrl: "https://example.com/long-beach-phu-quoc.jpg",
                rating: 4.6
            },
        ],
        hotels: [
            {
                name: "JW Marriott Phu Quoc Emerald Bay Resort & Spa",
                description: "A luxurious beachfront resort with unique French colonial architecture and a spa",
                imageUrl: "https://example.com/jw-marriott-phu-quoc-resort.jpg",
                rating: 4.9,
                price: 1400,
                currency: "USD",
                amenities: ["pool", "spa", "restaurant"]
            },
            {
                name: "Salinda Resort Phu Quoc Island",
                description: "A beautiful resort with beachfront villas and a tropical garden",
                imageUrl: "https://example.com/salinda-resort-phu-quoc.jpg",
                rating: 4.8,
                price: 1200,
                currency: "USD",
                amenities: ["pool", "spa", "restaurant"]
            },
        ]
    },
    {
        id: 8,
        name: "Koh Samui, Thailand",
        description: "A beautiful tropical island with stunning beaches, waterfalls and temples",
        imageUrl: "https://example.com/koh-samui-thailand.jpg",
        attractions: [
            {
                name: "Big Buddha Temple",
                description: "A famous temple with a 12-metre tall golden Buddha statue",
                imageUrl: "https://example.com/big-buddha-temple-koh-samui.jpg",
                rating: 4.7
            },
            {
                name: "Na Muang Waterfall",
                description: "A stunning waterfall with a natural pool for swimming and relaxation",
                imageUrl: "https://example.com/na-muang-waterfall-koh-samui.jpg",
                rating: 4.6
            },
        ],
        hotels: [
            {
                name: "The Ritz-Carlton, Koh Samui",
                description: "A luxurious resort with private pool villas and ocean view rooms",
                imageUrl: "https://example.com/the-ritz-carlton-koh-samui.jpg",
                rating: 4.9,
                price: 2000,
                currency: "USD",
                amenities: ["pool", "spa", "restaurant"]
            },
            {
                name: "Four Seasons Resort Koh Samui",
                description: "A luxurious resort with hillside villas and a spa overlooking the sea",
                imageUrl: "https://example.com/four-seasons-koh-samui.jpg",
                rating: 4.8,
                price: 1800,
                currency: "USD",
                amenities: ["pool", "spa", "restaurant"]
            },
        ]
    },
    {
        id: 9,
        name: "Ubud, Bali",
        description: "A tranquil town in Bali known for its stunning rice terraces, temples and traditional arts",
        imageUrl: "https://example.com/ubud-bali.jpg",
        attractions: [
            {
                name: "Tegallalang Rice Terraces",
                description: "A famous rice terrace with scenic views and unique irrigation system",
                imageUrl: "https://example.com/tegallalang-rice-terraces-bali.jpg",
                rating: 4.7
            },
            {
                name: "Ubud Monkey Forest",
                description: "A sacred monkey forest with ancient temples and playful monkeys",
                imageUrl: "https://example.com/ubud-monkey-forest-bali.jpg",
                rating: 4.6
            },
        ],
        hotels: [
            {
                name: "Mandapa, A Ritz-Carlton Reserve",
                description: "A luxurious resort with private pool villas and scenic views of Ayung River",
                imageUrl: "https://example.com/mandapa-ubud-bali.jpg",
                rating: 4.9,
                price: 1800,
                currency: "USD",
                amenities: ["pool", "spa", "restaurant"]
            },
            {
                name: "The Chedi Club Tanah Gajah, Ubud",
                description: "A luxurious resort with serene villas surrounded by rice paddies",
                imageUrl: "https://example.com/the-chedi-club-tanah-gajah-ubud.jpg",
                rating: 4.8,
                price: 1500,
                currency: "USD",
                amenities: ["pool", "spa", "restaurant"]
            },
        ]
    },
    {
        id: 10,
        name: "Phuket, Thailand",
        description: "A beautiful island in Thailand known for its stunning beaches, vibrant nightlife and delicious food",
        imageUrl: "https://example.com/phuket-thailand.jpg",
        attractions: [
            {
                name: "Phi Phi Islands",
                description: "A group of stunning islands with crystal clear waters and limestone cliffs",
                imageUrl: "https://example.com/phi-phi-islands-thailand.jpg",
                rating: 4.8
            },
            {
                name: "Big Buddha Phuket",
                description: "A large Buddha statue on a hilltop with beautiful views of the island",
                imageUrl: "https://example.com/big-buddha-phuket-thailand.jpg",
                rating: 4.7
            },
        ],
        hotels: [
            {
                name: "Keemala Phuket",
                description: "A luxurious resort with unique villas nestled in the jungle",
                imageUrl: "https://example.com/keemala-phuket-thailand.jpg",
                rating: 4.9,
                price: 2000,
                currency: "USD",
                amenities: ["pool", "spa", "restaurant"]
            },
            {
                name: "The Surin Phuket",
                description: "A beautiful beachfront resort with elegant villas and a relaxing spa",
                imageUrl: "https://example.com/the-surin-phuket-thailand.jpg",
                rating: 4.8,
                price: 1800,
                currency: "USD",
                amenities: ["pool", "spa", "restaurant"]
            },
        ]
    },
    {
        id: 11,
        name: "Lapland, Finland",
        description: "A winter wonderland in the northernmost region of Finland, known for its aurora borealis and snow activities",
        imageUrl: "https://example.com/lapland-finland.jpg",
        attractions: [
            {
                name: "Santa Claus Village",
                description: "A popular attraction where you can meet Santa Claus, cross the Arctic Circle, and enjoy winter activities",
                imageUrl: "https://example.com/santa-claus-village-lapland.jpg",
                rating: 4.7
            },
            {
                name: "Aurora Sky Station",
                description: "A unique place to see the Northern Lights, with a cable car ride and a cozy restaurant",
                imageUrl: "https://example.com/aurora-sky-station-lapland.jpg",
                rating: 4.8
            },
        ],
        hotels: [
            {
                name: "Kakslauttanen Arctic Resort",
                description: "A resort with glass igloos and log cabins, perfect for viewing the Northern Lights",
                imageUrl: "https://example.com/kakslauttanen-arctic-resort-lapland.jpg",
                rating: 4.9,
                price: 3000,
                currency: "USD",
                amenities: ["sauna", "restaurant", "outdoor activities"]
            },
            {
                name: "Levin Iglut",
                description: "A boutique hotel with glass igloos, offering breathtaking views of the Northern Lights",
                imageUrl: "https://example.com/levin-iglut-lapland.jpg",
                rating: 4.8,
                price: 2500,
                currency: "USD",
                amenities: ["sauna", "restaurant", "outdoor activities"]
            },
        ]
    },
    {
        id: 12,
        name: "Banff, Canada",
        description: "A picturesque town in the Canadian Rockies, known for its ski resorts and winter activities",
        imageUrl: "https://example.com/banff-canada.jpg",
        attractions: [
            {
                name: "Banff National Park",
                description: "A beautiful national park with stunning landscapes and wildlife",
                imageUrl: "https://example.com/banff-national-park-canada.jpg",
                rating: 4.8
            },
            {
                name: "Lake Louise Ski Resort",
                description: "A popular ski resort with breathtaking mountain views and diverse terrain",
                imageUrl: "https://example.com/lake-louise-ski-resort-canada.jpg",
                rating: 4.7
            },
        ],
        hotels: [
            {
                name: "Fairmont Banff Springs",
                description: "A grand hotel with a castle-like appearance, offering luxurious accommodations and stunning views",
                imageUrl: "https://example.com/fairmont-banff-springs-canada.jpg",
                rating: 4.9,
                price: 4000,
                currency: "USD",
                amenities: ["pool", "spa", "restaurant"]
            },
            {
                name: "The Rimrock Resort Hotel",
                description: "A luxurious hotel with a spa and a panoramic view of the mountains",
                imageUrl: "https://example.com/the-rimrock-resort-hotel-canada.jpg",
                rating: 4.8,
                price: 875,
                currency: "USD",
                amenities: ["pool", "spa", "restaurant"]
            },
            {
                name: "Mount Royal Hotel",
                description: "A historic hotel in the heart of Banff town, with cozy rooms and a lively atmosphere",
                imageUrl: "https://example.com/mount-royal-hotel-canada.jpg",
                rating: 4.5,
                price: 1200,
                currency: "USD",
                amenities: ["restaurant", "bar", "hot tub"]
            },
        ]
    }
]

export default destinations;
