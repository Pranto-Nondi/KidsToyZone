

import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const ToyTabCategory = () => {
    const [toyCategories, setToyCategories] = useState([]);
    const [limit, setLimit] = useState(20);

    useEffect(() => {
        fetch(`https://kid-toy-site-server.vercel.app/allToys?limit=${limit}`)
            .then((res) => res.json())
            .then((data) => {
                console.log("Response data:", data);
                setToyCategories(data);
            })
            .catch((error) => {
                console.error("Error fetching toys:", error);
            });
    }, []);

    return (
        <>

           
            <Tabs className="container mx-auto pt-5">
                <h2 className="text-3xl text-center font-bold mb-4">Shop By Category</h2>
                <TabList>
                    <Tab>Vehicles</Tab>
                    <Tab>Sports Toys</Tab>
                    <Tab>Educational Toys</Tab>
                </TabList>

                <TabPanel>
                    <>
                        <div className="grid grid-cols-1 sm:grid-cols-2 container mx-auto">
                            {toyCategories.slice(0, 2).map(singleCategory => (
                                <div className="card w-[90%] h-[90%] bg-base-100 shadow-xl container mx-auto" key={singleCategory._id}>
                                    <figure>
                                        <img src={singleCategory?.pictureUrl} alt="Shoes" />
                                    </figure>
                                    <div className="card-body">
                                        <h2 className="card-title">{singleCategory.name}</h2>
                                        <h2 className="text-lg">Price: ${singleCategory.price}</h2>
                                        <h2 className="text-md">Rating: {singleCategory.rating}</h2>
                                        <div className="card-actions justify-start">
                                            <Link to={`/toyTabDetails/${singleCategory?._id}`}>
                                                <button className="btn btn-outline btn-info">View Details</button>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </>
                </TabPanel>

                <TabPanel>
                    <>
                        <div className="grid grid-cols-1 sm:grid-cols-2 container mx-auto">
                            {toyCategories.slice(2, 4).map(singleCategory => (
                                <div className="card w-[90%] h-[90%] bg-base-100 shadow-xl container mx-auto" key={singleCategory._id}>
                                    <figure>
                                        <img src={singleCategory?.pictureUrl} alt="Shoes" />
                                    </figure>
                                    <div className="card-body">
                                        <h2 className="card-title">{singleCategory.name}</h2>
                                        <h2 className="text-lg">Price: ${singleCategory.price}</h2>
                                        <h2 className="text-md">Rating: {singleCategory.rating}</h2>
                                        <div className="card-actions justify-start">
                                            <Link to={`/toyTabDetails/${singleCategory?._id}`}>
                                                <button className="btn btn-outline btn-info">View Details</button>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </>
                </TabPanel>

                <TabPanel>
                    <>
                        <div className="grid grid-cols-1 sm:grid-cols-2 container mx-auto">
                            {toyCategories.slice(4, 6).map(singleCategory => (
                                <div className="card w-[90%] h-[80%] bg-base-100 shadow-xl container mx-auto" key={singleCategory._id}>
                                    <figure>
                                        <img src={singleCategory?.pictureUrl} alt="Shoes" />
                                    </figure>
                                    <div className="card-body">
                                        <h2 className="card-title">{singleCategory.name}</h2>
                                        <h2 className="text-lg">Price: ${singleCategory.price}</h2>
                                        <h2 className="text-md">Rating: {singleCategory.rating}</h2>
                                        <div className="card-actions justify-start">
                                            <Link to={`/toyTabDetails/${singleCategory?._id}`}>
                                                <button className="btn btn-outline btn-info">View Details</button>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </>
                </TabPanel>
            </Tabs>
          


        </>
    );
};

export default ToyTabCategory;

