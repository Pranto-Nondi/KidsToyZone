
import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { RotatingLines } from 'react-loader-spinner';
import swal from 'sweetalert';
import { AuthContext } from '../../povider/AuthProvider';
import MyToysList from './MyToysLIst';
import useTitle from '../../hooks/useTitle';

const MyToys = () => {
    const [loader, setLoader] = useState(false);
    const { user } = useContext(AuthContext);
    const [myToys, setMyToys] = useState([]);
    const [sortOrder, setSortOrder] = useState('ascending');
    const navigate = useNavigate();
    const [userEmail, setUserEmail] = useState('');
    useTitle(`My Toys`)


    useEffect(() => {
        setLoader(true);
        setUserEmail(user?.email); // Set the user's email
        fetch(`https://kid-toy-site-server.vercel.app/myToys/${user?.email}`)
            .then((res) => res.json())
            .then((data) => {
                if (!data.error) {
                    setMyToys(data);
                    setLoader(false);
                } else {
                    // logout and then navigate
                    navigate('/');
                }
            });
    }, [user, navigate]);


    const handleDelete = (id) => {
        swal({
            title: 'Are you sure you want to delete?',
            text: 'Once deleted, this toy will be deleted',
            icon: 'warning',
            buttons: true,
            dangerMode: true,
        }).then((willDelete) => {
            if (willDelete) {
                fetch(`https://kid-toy-site-server.vercel.app/deleteToy/${id}`, {
                    method: 'DELETE',
                })
                    .then((res) => res.json())
                    .then((data) => {
                        console.log(data);
                        if (data?.deletedCount > 0) {
                            const remain = myToys?.filter((singleMyToy) => singleMyToy._id !== id);
                            setMyToys(remain);
                            setLoader(false);
                            swal('Good Job! Your toy has been deleted!', {
                                icon: 'success',
                            });
                        }
                    });
            } else {
                swal('Toy is not deleted');
            }
        });
    };

    // Inside the handleSort function
    const handleSort = () => {
        setLoader(true);
        const sortedToys = [...myToys].sort((a, b) => {
            if (sortOrder === 'ascending') {
                return a.price - b.price;
            } else {
                return b.price - a.price;
            }
        });

        setMyToys(sortedToys);
        setSortOrder((prevSortOrder) => (prevSortOrder === 'ascending' ? 'descending' : 'ascending'));
        setLoader(false);
    };




    if (loader) {
        return (
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '80vh' }}>
                <RotatingLines strokeColor="grey" strokeWidth="5" animationDuration="0.75" width="96" visible={true} />
            </div>
        );
    }

    return (
        <div className="container mx-auto">
            <h1 className="text-2xl text-center font-bold mb-4">My Toys</h1>
            <div className="flex justify-center items-center gap-4 mb-5">
                <button className="btn bg-danger" onClick={handleSort}>
                    {sortOrder === 'ascending' ? 'Ascending' : 'Descending'}
                </button>
            </div>

            <div className="max-w-full overflow-hidden">
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
                            <th className="py-2">Description</th>
                            <th className="py-2">Edit</th>
                            <th className="py-2">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {myToys?.map((toy, index) => (
                            <MyToysList key={toy._id} toy={toy} index={index} handleDelete={handleDelete} />
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyToys;
