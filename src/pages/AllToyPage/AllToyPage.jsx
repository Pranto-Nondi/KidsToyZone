
import { useEffect, useState } from "react";
import AllToyList from "./AllToyList";
import { RotatingLines } from "react-loader-spinner";

const AllToyPage = () => {
    const [toyCollection, setToyCollection] = useState([]);
    const [loader, setLoader] = useState(false);
    const [searchText, setSearchText] = useState("");
    const [limit, setLimit] = useState(20);

    useEffect(() => {
        setLoader(true);
        fetch(`http://localhost:5000/allToys?limit=${limit}`)
            .then((res) => res.json())
            .then((data) => {
                console.log("Response data:", data)
                setToyCollection(data);
                setLoader(false);
            })
            .catch((error) => {
                console.error("Error fetching toys:", error);
                setLoader(false);
            });
    }, []);

    const handleSearch = () => {
        fetch(`http://localhost:5000/allToys/${searchText}`)
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                setToyCollection(data);
            })
            .catch((error) => {
                console.error("Error searching toys:", error);
            });
    };



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
        <div>
            <h1 className="text-2xl text-center font-bold mb-4">All Toys</h1>
            <div className="mb-4 text-center">
                <div className="flex justify-center align-middle ">
                    <input
                        onChange={(e) => setSearchText(e.target.value)}
                        type="text"
                        className="p-1 rounded bg-slate-100 w-[20%] mr-2"
                        placeholder="Search..."
                    />
                    <button className="btn btn-sm" onClick={handleSearch}>
                        Search
                    </button>
                </div>
            </div>



            <div className="container mx-auto">
                <div className="max-w-full overflow-hidden">
                    <table className="table w-full border border-gray-300">
                        <thead>
                            <tr>
                                <th className="py-2">No</th>
                                <th className="py-2">Image</th>
                                <th className="py-2">Name</th>
                                <th className="py-2">Sub-Category</th>
                                <th className="py-2">Seller Name</th>
                                <th className="py-2">Price</th>
                                <th className="py-2">Quantity</th>
                                <th className="py-2">Toy Info</th>
                            </tr>
                        </thead>
                        <tbody>
                            {toyCollection.map((singleToy, index) => (
                                <AllToyList key={singleToy._id} singleToy={singleToy} index={index} />
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default AllToyPage;

