
import React, { useState } from 'react';

const AddToyPage = () => {
    const [toyData, setToyData] = useState({
        pictureUrl: '',
        name: '',
        sellerName: '',
        email: '',
        subcategory: '',
        price: '',
        rating: '',
        quantity: '',
        description: ''
    });

    const handleChange = (e) => {
        const { id, value } = e.target;
        setToyData((prevState) => ({
            ...prevState,
            [id]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Perform the submission logic here
        // You can access the form data using the toyData state object
        console.log(toyData);
        fetch(`http://localhost:5000/addToys`, {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(toyData)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.insertedId) {
                    alert('service book successfully')
                }
            })
        // Reset the form fields
        setToyData({
            pictureUrl: '',
            name: '',
            sellerName: '',
            email: '',
            subcategory: '',
            price: '',
            rating: '',
            quantity: '',
            description: ''
        });
    };

    return (
        <div className="container w-[60%] mx-auto p-4">
            <h1 className="text-4xl font-semibold">Add A Toy</h1>
            <form onSubmit={handleSubmit} className="mt-4 grid grid-cols-2 gap-4">
                <div>
                    <label htmlFor="pictureUrl" className="block font-semibold text-lg mb-2">Picture URL:</label>
                    <input
                        type="text"
                        id="pictureUrl"
                        value={toyData.pictureUrl}
                        onChange={handleChange}
                        className="border border-gray-300 p-2 w-full"
                        required
                    />
                </div>
                <div>
                    <label htmlFor="name" className="block font-semibold text-lg mb-2">Name:</label>
                    <input
                        type="text"
                        id="name"
                        value={toyData.name}
                        onChange={handleChange}
                        className="border border-gray-300 p-2 w-full"
                        required
                    />
                </div>
                <div>
                    <label htmlFor="sellerName" className="block font-semibold text-lg mb-2">Seller Name:</label>
                    <input
                        type="text"
                        id="sellerName"
                        value={toyData.sellerName}
                        onChange={handleChange}
                        className="border border-gray-300 p-2 w-full"
                    />
                </div>
                <div>
                    <label htmlFor="email" className="block font-semibold text-lg mb-2">Seller Email:</label>
                    <input
                        type="email"
                        id="email"
                        value={toyData.email}
                        onChange={handleChange}
                        className="border border-gray-300 p-2 w-full"
                    />
                </div>
                <div>
                    <label htmlFor="subcategory" className="block font-semibold text-lg mb-2">Sub-category:</label>
                    <select
                        id="subcategory"
                        value={toyData.subcategory}
                        onChange={handleChange}
                        className="border border-gray-300 p-2 w-full"
                        required
                    >
                        <option value="">Select a subcategory</option>
                        <option value="subcategory1">Subcategory 1</option>
                        <option value="subcategory2">Subcategory 2</option>
                        <option value="subcategory3">Subcategory 3</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="price" className="block font-semibold text-lg mb-2">Price:</label>
                    <input
                        type="number"
                        id="price"
                        value={toyData.price}
                        onChange={handleChange}
                        className="border border-gray-300 p-2 w-full"
                        required
                    />
                </div>
                <div>
                    <label htmlFor="rating" className="block font-semibold text-lg mb-2">Rating:</label>
                    <input
                        type="number"
                        id="rating"
                        value={toyData.rating}
                        onChange={handleChange}
                        className="border border-gray-300 p-2 w-full"
                        required
                    />
                </div>
                <div>
                    <label htmlFor="quantity" className="block font-semibold text-lg mb-2">Available Quantity:</label>
                    <input
                        type="number"
                        id="quantity"
                        value={toyData.quantity}
                        onChange={handleChange}
                        className="border border-gray-300 p-2 w-full"
                        required
                    />
                </div>
                <div className="col-span-2">
                    <label htmlFor="description" className="block font-semibold text-lg mb-2">Description:</label>
                    <textarea
                        id="description"
                        value={toyData.description}
                        onChange={handleChange}
                        className="border border-gray-300 p-2 w-full h-32"
                        required
                    ></textarea>
                </div>
                <button
                    type="submit"
                    className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded col-span-2"
                >
                    Add Toy
                </button>
            </form>
        </div>
    );
};

export default AddToyPage;


