
import { useState, useEffect } from "react";

const GalleryCard = ({ toy }) => {
    const { id, name, img, price } = toy;
    const [isHovered, setIsHovered] = useState(false);

    useEffect(() => {
        setIsHovered(true);

    }, []);

    const handleHover = () => {
        setIsHovered(!isHovered);
    };

    return (
        <div
            className={`relative bg-base-100 shadow-xl overflow-hidden ${isHovered ? "scale-105" : ""
                }`}
            onMouseEnter={handleHover}
            onMouseLeave={handleHover}
        >
            <img src="https://m.media-amazon.com/images/I/71w5Z4THfgL._AC_SL1000_.jpg" alt="Toy" className="object-cover w-full h-52" />
            <div
                className={`absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 ease-in-out ${isHovered ? "opacity-100" : ""
                    }`}
            >
                <div className="text-center">
                    <h2 className="text-white text-lg font-semibold">{name}</h2>
                    <p className="text-red-500 font-semibold">Price: ${price}</p>
                </div>
            </div>
        </div>
    );
};

export default GalleryCard;
