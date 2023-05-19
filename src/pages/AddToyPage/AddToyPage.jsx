// import React, { useContext, useState } from 'react';
// import { AuthContext } from '../../povider/AuthProvider';

// const AddToyPage = () => {
//     const { user } = useContext(AuthContext);


//     const defaultSellerName = user?.displayName || '';
//     const defaultEmail = user?.email || '';

//     const [toyData, setToyData] = useState({
//         pictureUrl: '',
//         name: '',
//         sellerName: defaultSellerName,
//         email: defaultEmail,
//         subcategory: '',
//         price: '',
//         rating: '',
//         quantity: '',
//         description: ''
//     });

//     const handleChange = (e) => {
//         const { id, value } = e.target;
//         setToyData((prevState) => ({
//             ...prevState,
//             [id]: value
//         }));
//     };

//     const handleSubmit = (e) => {
//         e.preventDefault();

//         fetch(`http://localhost:5000/addToys`, {
//             method: "POST",
//             headers: {
//                 'content-type': 'application/json'
//             },
//             body: JSON.stringify(toyData)
//         })
//             .then(res => res.json())
//             .then(data => {
//                 console.log(data);
//                 if (data.insertedId) {
//                     alert('Service booked successfully');
//                 }
//             });

//         setToyData({
//             pictureUrl: '',
//             name: '',
//             sellerName: defaultSellerName,
//             email: defaultEmail,
//             subcategory: '',
//             price: '',
//             rating: '',
//             quantity: '',
//             description: ''
//         });
//     };

//     return (
//         <div className="container w-[60%] mx-auto p-4">
//             <h1 className="text-4xl text-center font-semibold">Add A Toy</h1>
//             <form onSubmit={handleSubmit} className="mt-4 grid grid-cols-2 gap-4">
//                 <div>
//                     <label htmlFor="pictureUrl" className="block font-semibold text-lg mb-2">Picture URL:</label>
//                     <input
//                         type="text"
//                         id="pictureUrl"
//                         value={toyData.pictureUrl}
//                         onChange={handleChange}
//                         className="border border-gray-300 p-2 w-full"
//                         required
//                     />
//                 </div>
//                 <div>
//                     <label htmlFor="name" className="block font-semibold text-lg mb-2">Name:</label>
//                     <input
//                         type="text"
//                         id="name"
//                         value={toyData.name}
//                         onChange={handleChange}
//                         className="border border-gray-300 p-2 w-full"
//                         required
//                     />
//                 </div>
//                 <div>
//                     <label htmlFor="sellerName" className="block font-semibold text-lg mb-2">Seller Name:</label>
//                     <input
//                         type="text"
//                         id="sellerName"
//                         value={toyData.sellerName}
//                         onChange={handleChange}
//                         defaultValue={defaultSellerName}
//                         readOnly
//                         className="border border-gray-300 p-2 w-full"
//                     />
//                 </div>
//                 <div>
//                     <label htmlFor="email" className="block font-semibold text-lg mb-2">Seller Email:</label>
//                     <input
//                         type="email"
//                         id="email"
//                         value={toyData.email}
//                         onChange={handleChange}
//                         defaultValue={defaultEmail}
//                         readOnly
//                         className="border border-gray-300 p-2 w-full"
//                     />
//                 </div>
//                 <div>
//                     <label htmlFor="subcategory" className="block font-semibold text-lg mb-2">Sub-category:</label>
//                     <select
//                         id="subcategory"
//                         value={toyData.subcategory}
//                         onChange={handleChange}
//                         className="border border-gray-300 p-2 w-full"
//                         required
//                     >
//                         <option value="">Select a subcategory</option>
//                         <option value="Vehicles">Vehicles </option>
//                         <option value="Sports Toys">Sports Toys </option>
//                         <option value="Educational Toys">Educational Toys</option>
//                     </select>
//                 </div>
//                 <div>
//                     <label htmlFor="price" className="block font-semibold text-lg mb-2">Price:</label>
//                     <input
//                         type="number"
//                         id="price"
//                         value={toyData.price}
//                         onChange={handleChange}
//                         className="border border-gray-300 p-2 w-full"
//                         required
//                     />
//                 </div>
//                 <div>
//                     <label htmlFor="rating" className="block font-semibold text-lg mb-2">Rating:</label>
//                     <input
//                         type="number"
//                         id="rating"
//                         value={toyData.rating}
//                         onChange={handleChange}
//                         className="border border-gray-300 p-2 w-full"
//                         required
//                     />
//                 </div>
//                 <div>
//                     <label htmlFor="quantity" className="block font-semibold text-lg mb-2">Available Quantity:</label>
//                     <input
//                         type="number"
//                         id="quantity"
//                         value={toyData.quantity}
//                         onChange={handleChange}
//                         className="border border-gray-300 p-2 w-full"
//                         required
//                     />
//                 </div>
//                 <div className="col-span-2">
//                     <label htmlFor="description" className="block font-semibold text-lg mb-2">Description:</label>
//                     <textarea
//                         id="description"
//                         value={toyData.description}
//                         onChange={handleChange}
//                         className="border border-gray-300 p-2 w-full h-32"
//                         required
//                     ></textarea>
//                 </div>
//                 <button
//                     type="submit"
//                     className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded col-span-2"
//                 >
//                     Add Toy
//                 </button>
//             </form>
//         </div>
//     );
// };

// export default AddToyPage;
import React, { useContext, useState } from 'react';
import { AuthContext } from '../../povider/AuthProvider';

const AddToyPage = () => {
    const { user } = useContext(AuthContext);

    const defaultSellerName = user?.displayName || '';
    const defaultEmail = user?.email || '';

    const [toyData, setToyData] = useState({
        pictureUrl: '',
        name: '',
        sellerName: defaultSellerName,
        email: defaultEmail,
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

        fetch(`http://localhost:5000/addToys`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(toyData)
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                if (data.insertedId) {
                    alert('Toy added successfully');
                }
            });

        setToyData({
            pictureUrl: '',
            name: '',
            sellerName: defaultSellerName,
            email: defaultEmail,
            subcategory: '',
            price: '',
            rating: '',
            quantity: '',
            description: ''
        });
    };

    const handleSubcategoryChange = (e) => {
        const { value } = e.target;

        // Logic to fetch and display toy information based on the selected subcategory
        // You can replace the following lines with your actual logic

        // Example toy data for each subcategory
        const toyDataBySubcategory = {
            Vehicles: {
                name: 'Provide Vehicles Type Toy name',
                price: 19.99,
                rating: 4.5,
                image: 'provide img url'
            },
            'Sports Toys': {
                name: 'Provide Sports Type Toy name',
                price: 9.99,
                rating: 4.2,
                image: 'provide  img url'
            },
            'Educational Toys': {
                name: ' Provide Educational Type toy name',
                price: 14.99,
                rating: 4.8,
                image: 'provide img url'
            }
        };

        // Set the toy data based on the selected subcategory
        setToyData((prevState) => ({
            ...prevState,
            subcategory: value,
            name: toyDataBySubcategory[value]?.name || '',
            price: toyDataBySubcategory[value]?.price || '',
            rating: toyDataBySubcategory[value]?.rating || '',
            pictureUrl: toyDataBySubcategory[value]?.image || ''
        }));
    };

    return (
        <div className="container w-[60%] mx-auto p-4">
            <h1 className="text-4xl text-center font-semibold">Add A Toy</h1>
            <form onSubmit={handleSubmit} className="mt-4 grid grid-cols-2 gap-4">
                <div>
                    <label htmlFor="pictureUrl" className="block font-semibold text-lg mb-2">
                        Picture URL:
                    </label>
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
                    <label htmlFor="name" className="block font-semibold text-lg mb-2">
                        Name:
                    </label>
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
                    <label htmlFor="sellerName" className="block font-semibold text-lg mb-2">
                        Seller Name:
                    </label>
                    <input
                        type="text"
                        id="sellerName"
                        value={toyData.sellerName}
                        onChange={handleChange}
                        defaultValue={defaultSellerName}
                        readOnly
                        className="border border-gray-300 p-2 w-full"
                        required
                    />
                </div>
                <div>
                    <label htmlFor="email" className="block font-semibold text-lg mb-2">
                        Email:
                    </label>
                    <input
                        type="email"
                        id="email"
                        value={toyData.email}
                        onChange={handleChange}
                        defaultValue={defaultEmail}
                        readOnly
                        className="border border-gray-300 p-2 w-full"
                        required
                    />
                </div>
                <div>
                    <label htmlFor="subcategory" className="block font-semibold text-lg mb-2">
                        Subcategory:
                    </label>
                    <select
                        id="subcategory"
                        value={toyData.subcategory}
                        onChange={handleSubcategoryChange}
                        className="border border-gray-300 p-2 w-full"
                        required
                    >
                        <option value="" disabled>
                            Select a subcategory
                        </option>
                        <option value="Vehicles">Vehicles</option>
                        <option value="Sports Toys">Sports Toys</option>
                        <option value="Educational Toys">Educational Toys</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="price" className="block font-semibold text-lg mb-2">
                        Price:
                    </label>
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
                    <label htmlFor="rating" className="block font-semibold text-lg mb-2">
                        Rating:
                    </label>
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
                    <label htmlFor="quantity" className="block font-semibold text-lg mb-2">
                        Quantity:
                    </label>
                    <input
                        type="number"
                        id="quantity"
                        value={toyData.quantity}
                        onChange={handleChange}
                        className="border border-gray-300 p-2 w-full"
                        required
                    />
                </div>
                <div className='col-span-2'>
                    <label htmlFor="description" className="block font-semibold text-lg mb-2">
                        Description:
                    </label>
                    <textarea
                        id="description"
                        value={toyData.description}
                        onChange={handleChange}
                        className=" border border-gray-300 p-2 w-full h-16"
                        required
                    ></textarea>
                </div>
                <div className="col-span-2">
                    <button
                        type="submit"
                        className="btn  btn-block
                         bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded col-span-2"
                    >
                        Add Toy
                    </button>
                </div>
            </form>
        </div>
    );
};

export default AddToyPage;





