import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { RotatingLines } from 'react-loader-spinner';

import { AuthContext } from '../../povider/AuthProvider';
import MyToysList from './MyToysLIst';


const MyToys = () => {
    const [loader, setLoader] = useState(false)
    const { user } = useContext(AuthContext)
    const [myToys, setMyToys] = useState([])
    const [control, setControl] = useState(false);
    const navigate = useNavigate()

    useEffect(() => {
        setLoader(true);
        fetch(`http://localhost:5000/myToys/${user?.email}`)
            .then(res => res.json())
            .then(data => {
                if (!data.error) {

                    setMyToys(data);
                    setLoader(false);
                } else {

                    // logout and then navigate
                    navigate('/');
                }
            });
    }, [user, navigate])

    // const handleDelete = (id) => {
    //     fetch(`https://cars-doctor-server-nine.vercel.app/bookings/${id}`, {
    //         method: "DELETE"
    //     })
    //         .then(res => res.json())
    //         .then(data => {
    //             console.log(data)
    //             if (data?.deletedCount > 0) {
    //                 const remain = bookings?.filter(booking => booking._id !== id)
    //                 setBookings(remain)

    //                 setLoader(false)
    //             }
    //         })
    // }
    // const handleBookingConfirm = (id) => {
    //     fetch(`https://cars-doctor-server-nine.vercel.app/bookings/${id}`, {
    //         method: 'PATCH',
    //         headers: {
    //             'content-type': 'application/json'
    //         },
    //         body: JSON.stringify({ status: 'confirm' })
    //     })
    //         .then(res => res.json())
    //         .then(data => {
    //             console.log(data)
    //             if (data?.modifiedCount > 0) {
    //                 const remain = bookings?.filter(booking => booking._id !== id)
    //                 const updated = bookings?.find(booking => booking._id === id)
    //                 updated.status = 'confirm'
    //                 console.log(updated)
    //                 const newBookings = [updated, ...remain];
    //                 setBookings(newBookings)

    //                 setLoader(false)
    //             }
    //         })
    // }


    if (loader) {
        return <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '80vh' }}>
            <RotatingLines
                strokeColor="grey"
                strokeWidth="5"
                animationDuration="0.75"
                width="96"
                visible={true}
            />
        </div>
    }
    console.log(myToys)
    return (

        <div className="container mx-auto mt-5 px-2 py-8">
            <h1 className="text-2xl text-center font-bold mb-4">My Toys</h1>
            <div className="overflow-x-auto">
                <table className="table w-full border border-gray-300">
                    <thead>
                        <tr>
                            <th className="py-2">No</th>
                            <th className="py-2">Image</th>
                            <th className="py-2">Name</th>
                            <th className="py-2">Seller Name</th>
                            <th className="py-2">Seller Email</th>
                            <th className="py-2">Price</th>
                            <th className="py-2">Rating</th>
                            <th className="py-2">Quantity</th>
                            <th className="py-2">Sub-category</th>
                            <th className="py-2">Description</th>
                            <th className="py-2">Edit</th>
                            <th className="py-2">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {myToys?.map((toy, index) => (
                            <MyToysList key={toy._id} toy={toy} index={index} />
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyToys;