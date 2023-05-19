// import { useEffect, useState } from "react";
// import AllToyList from "./AllToyList";
// import { RotatingLines } from "react-loader-spinner";

// const AllToyPage = () => {
//     const [toyCollection, setToyCollection] = useState([]);
//     const [loader, setLoader] = useState(false);
//     const [searchQuery, setSearchQuery] = useState("");

//     useEffect(() => {
//         setLoader(true);
//         fetch(`http://localhost:5000/allToys`)
//             .then(res => res.json())
//             .then(data => setToyCollection(data))
//             .finally(() => setLoader(false));
//     }, []);

//     const handleSearch = (event) => {
//         setSearchQuery(event.target.value);
//     };

//     const filteredToys = toyCollection.filter(toy => toy.name.toLowerCase().includes(searchQuery.toLowerCase()));

//     if (loader) {
//         return (
//             <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '80vh' }}>
//                 <RotatingLines
//                     strokeColor="grey"
//                     strokeWidth="5"
//                     animationDuration="0.75"
//                     width="96"
//                     visible={true}
//                 />
//             </div>
//         );
//     }

//     return (
//         <div>
//             <h1 className="text-2xl text-center font-bold mb-4">All Toys</h1>
//             <div className="mb-4 text-center">
//                 <input
//                     type="text"
//                     placeholder="Search by toy name"
//                     className="border border-gray-300 p-2 rounded w-[30%]"
//                     value={searchQuery}
//                     onChange={handleSearch}
//                 />
//             </div>

//             <div className='container  mx-auto'>
//                 <div className="max-w-full overflow-hidden ">
//                     <table className="table w-full border border-gray-300">
//                         <thead>
//                             <tr>
//                                 <th className="py-2">No</th>
//                                 <th className="py-2">Image</th>
//                                 <th className="py-2">Name</th>
//                                 <th className="py-2">Seller Name</th>
//                                 <th className="py-2">Price</th>
//                                 <th className="py-2">Quantity</th>
//                                 <th className="py-2">Toy Info</th>
//                             </tr>
//                         </thead>
//                         <tbody>
//                             {filteredToys.map((singleToy, index) => (
//                                 <AllToyList key={singleToy._id} singleToy={singleToy} index={index} />
//                             ))}
//                         </tbody>
//                     </table>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default AllToyPage;
import { useEffect, useState } from "react";
import AllToyList from "./AllToyList";
import { RotatingLines } from "react-loader-spinner";

const AllToyPage = () => {
    const [toyCollection, setToyCollection] = useState([]);
    const [loader, setLoader] = useState(false);
    const [searchText, setSearchText] = useState("");

    useEffect(() => {
        setLoader(true);
        fetch(`http://localhost:5000/allToys`)
            .then(res => res.json())
            .then(data => setToyCollection(data))
            .finally(() => setLoader(false));
    }, []);



    const handleSearch = () => {
       
        fetch(`http://localhost:5000/allToys/${searchText}`)
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                setToyCollection(data);
               
            });
    }


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
                <input
                    onChange={(e) => setSearchText(e.target.value)}
                    type="text"
                    className="p-1 bg-slate-100"
                    placeholder="Search..."
                />{" "}
                <button className="btn btn-sm" onClick={handleSearch}>Search</button>
            </div>

            <div className='container  mx-auto'>
                <div className="max-w-full overflow-hidden ">
                    <table className="table w-full border border-gray-300">
                        <thead>
                            <tr>
                                <th className="py-2">No</th>
                                <th className="py-2">Image</th>
                                <th className="py-2">Name</th>
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

