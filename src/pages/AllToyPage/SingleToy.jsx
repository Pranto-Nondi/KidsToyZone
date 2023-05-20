import React, { useEffect, useState } from 'react';
import { RotatingLines } from 'react-loader-spinner';
import { Link, useParams } from 'react-router-dom';

const SingleToy = () => {
    const [singleToy, setSingleToy] = useState([])
    const { _id, pictureUrl, name, sellerName, email, price, rating, quantity, description } = singleToy || {};
    const { id } = useParams();
    const [loader, setLoader] = useState(false);
    useEffect(() => {
        setLoader(true)
        fetch(`http://localhost:5000/allToySingleInfo/${id}`)
            .then((res) => res.json())
            .then((data) => {
                // console.log(data)
                setSingleToy(data)
                setLoader(false)
            });
    }, [])
    if (loader) {
        return (
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '80vh' }}>
                <RotatingLines
                    strokeColor="grey"
                    strokeWidth="5"
                    animationDuration="0.75"
                    width="96"
                    visible={true}
                />
            </div>
        );
    }
    return (

        <div className="flex items-center justify-center h-screen">
            <div className="max-w-6xl w-full bg-white shadow-lg rounded-lg overflow-hidden flex">
                <div className="card-body">
                    <img className="w-full h-full object-cover" src={pictureUrl} alt="Album" />
                </div>
                <div className="p-8 w-2/3">
                    <h2 className="text-2xl font-bold mb-4">Toy Name: {name}</h2>
                    <h2 className="text-2xl font-bold mb-4">Seller Name: {sellerName}</h2>
                    <h2 className="text-lg mb-4">Seller Email: {email}</h2>
                    <h2 className="text-md mb-4">Price: $ {price}</h2>
                    <h2 className="text-md mb-4">Rating: {rating}</h2>
                    <h2 className="text-md mb-4">Quantity: {quantity}</h2>
                    <h2 className="text-md mb-4">Description: {description}</h2>
                    <div className="flex justify-start mt-6">
                        <Link to='/allToys'><button className="px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-lg">
                            Go Back
                        </button></Link>
                    </div>
                </div>
            </div>
        </div>




    );
};

export default SingleToy;