
import { useEffect, useState } from "react";
import GalleryCard from "./GalleryCard";

const Gallery = () => {
    const [kidToys, setkidToys] = useState([])
    useEffect(() => {
        const toys = [
            { id: 1, name: "Teddy Bear", price: 12.99, image: "https://example.com/toy1.jpg" },
            { id: 2, name: "Lego Set", price: 29.99, image: "https://example.com/toy2.jpg" },
            { id: 3, name: "Barbie Doll", price: 19.99, image: "https://example.com/toy3.jpg" },
            { id: 4, name: "RC Car", price: 39.99, image: "https://example.com/toy4.jpg" },
            { id: 5, name: "Play-Doh Set", price: 9.99, image: "https://example.com/toy5.jpg" },
            { id: 6, name: "Puzzle Game", price: 14.99, image: "https://example.com/toy6.jpg" },
            { id: 7, name: "Stuffed Animal", price: 8.99, image: "https://example.com/toy7.jpg" },
            { id: 8, name: "Building Blocks", price: 24.99, image: "https://example.com/toy8.jpg" },

        ];

        setkidToys(toys)
    }, [])


    return (
        <>
            <div className="text-center mt-5">

                <h1 className="text-4xl text-purple-500 font-semibold">Kidz Gallery Zone</h1>


            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-4 gap-4 container mx-auto mb-5 mt-5 p-5">
                {kidToys.map((toy) => (
                    <GalleryCard key={toy.id} toy={toy} />
                ))}
            </div>

        </>
    );
};

export default Gallery;