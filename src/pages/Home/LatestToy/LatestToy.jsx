import React from 'react';

const LatestToy = () => {
    return (
        <>
          
            <div className="bg-gray-100">
                <main className="container mx-auto py-8">
                    <section className="my-8">
                        <div className="container mx-auto">
                            <h2 className="text-3xl font-bold mb-4">Featured Toys</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">

                                <div className="bg-white rounded shadow p-4">
                                    <img src="https://i.ibb.co/pwcc4mQ/ft.jpg" alt="Toy 1" className="w-full mb-2" />
                                    <h3 className="text-lg font-bold">Kids Baby set</h3>
                                    <p className="text-gray-700">Awesome Featured with World's best Product</p>
                                    <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 mt-4 rounded">Add to Cart</button>
                                </div>

                                <div className="bg-white rounded shadow p-4">
                                    <img src="https://i.ibb.co/cc27XgK/ft-1.jpg" alt="Toy 2" className="w-full mb-2" />
                                    <h3 className="text-lg font-bold">Kids animal set</h3>
                                    <p className="text-gray-700">Really Super Classic set with high class</p>
                                    <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 mt-4 rounded">Add to Cart</button>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="my-8">
                        <div className="container mx-auto">
                            <h2 className="text-3xl font-bold mb-4">Latest Arrivals</h2>
                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">

                                <div className="bg-white rounded shadow p-4">
                                    <img src="https://i.ibb.co/NF83qRT/lt-1.jpg" alt="Toy 3" className="w-full mb-2" />
                                    <h3 className="text-lg font-bold">Dinosaur Toy</h3>
                                    <p className="text-gray-700">Good toy with all kids and awesome product</p>
                                    <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 mt-4 rounded">Add to Cart</button>
                                </div>

                                <div className="bg-white rounded shadow p-4">
                                    <img src="https://i.ibb.co/NtXMhs7/heli.jpg" alt="Toy 4" className="w-full mb-2" />
                                    <h3 className="text-lg font-bold">Helicopter Toy</h3>
                                    <p className="text-gray-700">Super World-class Toy</p>
                                    <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 mt-4 rounded">Add to Cart</button>
                                </div>

                                <div className="bg-white rounded shadow p-4">
                                    <img src="https://i.ibb.co/KhHVtLG/wg.webp" alt="Toy 5" className="w-full mb-2" />
                                    <h3 className="text-lg font-bold">Water Gun</h3>
                                    <p className="text-gray-700">World Classic Best Toy</p>
                                    <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 mt-4 rounded">Add to Cart</button>
                                </div>
                            </div>
                        </div>
                    </section>
                </main>
            </div>

        </>
    );
};

export default LatestToy;