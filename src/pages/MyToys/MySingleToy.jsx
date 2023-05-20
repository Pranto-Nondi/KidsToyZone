import React, { useContext, useState } from 'react';
import { AuthContext } from '../../povider/AuthProvider';
import { useParams } from 'react-router-dom';
import swal from 'sweetalert';
const MySingleToy = () => {
    const { user } = useContext(AuthContext);
    const { id } = useParams();


    const [toyData, setToyData] = useState({

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

        fetch(`http://localhost:5000/updateToy/${id}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(toyData),
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data)
                if (data?.modifiedCount > 0) {
                    swal("Good job!", "Toy Updated SuccessFull", "success")
                }
            });


        setToyData({
            price: '',
            rating: '',
            quantity: '',
            description: ''
        });
    };



    // Set the toy data based on the selected subcategory



    return (
        <div className="container w-[60%] mx-auto p-4">
            <h1 className="text-4xl text-center font-semibold">Update Toy</h1>
            <form onSubmit={handleSubmit} className="mt-4 grid grid-cols-2 gap-4">

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
                <div className>
                    <label htmlFor="description" className="block font-semibold text-lg mb-2">
                        Description:
                    </label>
                    <textarea
                        id="description"
                        value={toyData.description}
                        onChange={handleChange}
                        className=" border border-gray-300 h-10 w-full "
                        required
                    ></textarea>
                </div>
                <div className="col-span-2">
                    <button
                        type="submit"
                        className="btn  btn-block
                         bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded col-span-2"
                    >
                        Update Toy
                    </button>
                </div>
            </form>
        </div>
    );
}
export default MySingleToy;





