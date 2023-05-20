
import { useEffect, useState } from "react";
import GalleryCard from "./GalleryCard";

const Gallery = () => {
    const [kidToys, setkidToys] = useState([])
    useEffect(() => {
        const toys = [
            { id: 1, name: "Cars", price: 12.99, image: "https://i.ibb.co/cNc9Mbg/t1.jpg" },
            { id: 2, name: "Trains", price: 29.99, image: "https://i.ibb.co/Kq5vCmv/train1.jpg" },
            { id: 3, name: "Air Plain", price: 19.99, image: "https://i.ibb.co/5B9jNqX/tp.jpg" },
            { id: 4, name: "Alphabet blocks", price: 39.99, image: "https://i.ibb.co/60PL0CD/alp1.jpg" },
            { id: 5, name: "Math puzzle", price: 9.99, image: "https://i.ibb.co/9ZSS2CX/pazzle2.jpg" },
            { id: 6, name: "Truck", price: 14.99, image: "https://i.ibb.co/V3wFP1r/tk.jpg" },
            { id: 7, name: "Motor Bike", price: 8.99, image: "https://i.ibb.co/2YDQzfn/tb.jpg" },
            { id: 8, name: "Water Gun", price: 24.99, image: "https://i.ibb.co/FWvwb0X/tg.jpg" },

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