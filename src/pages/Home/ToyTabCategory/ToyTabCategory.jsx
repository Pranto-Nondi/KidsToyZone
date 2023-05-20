

import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const ToyTabCategory = () => {
    const [toyCategories, setToyCategories] = useState([]);
    const [limit, setLimit] = useState(20);

    useEffect(() => {
        fetch(`http://localhost:5000/allToys?limit=${limit}`)
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
            <Tabs className="container mx-auto">
                <TabList>
                    <Tab>Vehicles</Tab>
                    <Tab>Sports Toys</Tab>
                    <Tab>Educational Toys</Tab>
                </TabList>

                <TabPanel>
                    <>
                        <div className="grid grid-cols-2 ">
                            {
                                toyCategories.slice(0, 2).map(singleCategory => (
                                    <div className="card w-[90%] h-[80%] bg-base-100 shadow-xl" key={singleCategory._id}>
                                        <figure>
                                            <img src={singleCategory?.pictureUrl} alt="Shoes" />
                                        </figure>
                                        <div className="card-body">
                                            <h2 className="card-title">
                                                {singleCategory.name}

                                            </h2>
                                            <h2 className=" text-lg ">
                                                Price: ${singleCategory.price}

                                            </h2>
                                            <h2 className="text-md ">
                                                Rating: {singleCategory.rating}

                                            </h2>

                                            <div className="card-actions justify-start">
                                                <Link to={`/toyTabDetails/${singleCategory?._id}`}> <button className="btn btn-outline btn-info">View Details</button></Link>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            }

                        </div>
                    </>
                </TabPanel>

                <TabPanel>
                    <>
                        <div className="grid grid-cols-2 ">
                            {
                                toyCategories.slice(2, 4).map(singleCategory => (
                                    <div className="card w-[90%] h-[80%] bg-base-100 shadow-xl" key={singleCategory._id}>
                                        <figure>
                                            <img src={singleCategory?.pictureUrl} alt="Shoes" />
                                        </figure>
                                        <div className="card-body">
                                            <h2 className="card-title">
                                                {singleCategory.name}

                                            </h2>
                                            <h2 className=" text-lg">
                                                Price: ${singleCategory.price}

                                            </h2>
                                            <h2 className="text-md">
                                                Rating: {singleCategory.rating}

                                            </h2>
                                            <div className="card-actions justify-start">
                                                <Link to={`/toyTabDetails/${singleCategory?._id}`}> <button className="btn btn-outline btn-info">View Details</button></Link>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            }

                        </div>
                    </>
                </TabPanel>

                <TabPanel>
                    <>
                        <div className="grid grid-cols-2 ">
                            {
                                toyCategories.slice(4, 6).map(singleCategory => (
                                    <div className="card w-[90%] h-[80%] bg-base-100 shadow-xl" key={singleCategory._id}>
                                        <figure>
                                            <img src={singleCategory?.pictureUrl} alt="Shoes" />
                                        </figure>
                                        <div className="card-body">
                                            <h2 className="card-title">
                                                {singleCategory.name}

                                            </h2>
                                            <h2 className=" text-lg">
                                                Price: ${singleCategory.price}

                                            </h2>
                                            <h2 className="text-md">
                                                Rating: {singleCategory.rating}

                                            </h2>
                                            <div className="card-actions justify-start">
                                                <Link to={`/toyTabDetails/${singleCategory?._id}`}> <button className="btn btn-outline btn-info">View Details</button></Link>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            }

                        </div>
                    </>
                </TabPanel>
            </Tabs>
        </>
    );
};

export default ToyTabCategory;

