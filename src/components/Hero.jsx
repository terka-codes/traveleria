import React from "react"

function Hero() {
    const [images, setImages] = React.useState([]);

    React.useEffect(() => {
        const fetchImages = async () => {
            const promises = Array.from({ length: 10 }, () => (
                fetch("https://apis.scrimba.com/unsplash/photos/random?orientation=landscape&query=tropical")
                    .then(res => res.json())
                    .then(data => data.urls.regular)
            ));
            const images = await Promise.all(promises);
            setImages(images);
        };
        fetchImages();
    }, []);

    const [currentImageIndex, setCurrentImageIndex] = React.useState(0);

    React.useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex(currentIndex => (currentIndex + 1) % images.length);
        }, 10000);
        return () => clearInterval(interval);
    }, [images]);

    return (
        <div
            className="h-screen w-full overflow-hidden relative"
        >
            <div
                className="min-h-min md:h-1/2 h-full bg-gray-800 bg-cover bg-center absolute inset-0 transition duration-500 ease-in-out"
                style={{
                    backgroundImage: `url(${images[currentImageIndex]})`,
                    transition: "all 2s easy-in-out"
                }}
            >
                <div className="md:h-1/2 h-full z-10 justify-center items-center md:p-36 p-6">
                    <h1 className="text-white text-4xl font-bold drop-shadow-lg">Are you ready for your unforgettable vacation? </h1>
                    <input type="text" className="py-2 px-4 my-4 w-4/5 drop-shadow-lg rounded-l-3xl relative" placeholder="Where do you wanna go?"></input>

                    <button className="text-white text-sm bg-gradient-to-r from-cyan-500 to-blue-600
                        py-2 px-5 rounded-3xl cursor-pointer btn-search
                        focus:outline-none focus:ring-2 drop-shadow hover:drop-shadow-lg
                        focus:ring-gray-900 focus:ring-offset-2 hover:scale-105 transition duration-700 ease-out"
                    >Search</button>
                </div>
            </div>
        </div >
    );
}

export default Hero;
