import React from 'react';

const Blogs = () => {
    return (
        <div>
            <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
                <header className="text-4xl font-bold mt-10 mb-8">
                    Welcome to My Blog
                </header>
                <section className="flex items-center justify-center w-[80%] bg-white rounded-lg shadow-lg p-8 mb-8">
                    <div>
                        <h2 className="text-xl font-bold mb-4">What is an access token and refresh token?</h2>
                        <h2 className="text-xl font-bold mb-4" >How do they work and where should we store them on the client-side?</h2>
                        <div className="text-gray-700">
                            <ol>
                                <li> 1 . An access token is a credential that grants a client application access to specific resources on behalf of an authenticated user.</li>
                                <li>2 . A refresh token is a credential used to obtain a new access token when the current one expires.</li>
                                <li> 3 . Access tokens are included in API requests to access protected resources.</li>
                                <li> 4 . Refresh tokens have a longer lifespan and are used to request new access tokens without re-authenticating the user.</li>
                                <li>5 . Access tokens should be stored in memory or short-lived storage, while refresh tokens should be stored securely in HTTP-only cookies or browser local storage.</li>
                            </ol>

                        </div>
                    </div>
                </section>
                <section className="flex items-center justify-center w-[80%] bg-white rounded-lg shadow-lg p-8 mb-8">
                    <div>
                        <h2 className="text-2xl font-bold mb-4">Compare SQL and NoSQL databases?</h2>
                        <p className="text-gray-700">
                            <li>
                                SQL Databases:
                                <ol>
                                    <li>Structured Query Language (SQL) databases are based on a relational model.</li>
                                    <li>They have a predefined schema that enforces data consistency and structure.</li>
                                    <li>They use tables with rows and columns to store and organize data.</li>
                                    <li>SQL databases provide strong ACID (Atomicity, Consistency, Isolation, Durability) transactional support.</li>
                                    <li>They are suitable for complex, structured data and applications that require complex joins and relationships.</li>
                                </ol>
                            </li>
                            <li>
                                NoSQL Databases:
                                <ol>
                                    <li>NoSQL databases are non-relational and do not use SQL as a query language.</li>
                                    <li>They have a flexible schema or schemaless design that allows for easy scalability and adaptation to changing data structures.</li>
                                    <li>They use various data models, such as key-value, document, columnar, and graph, to store and manage data.</li>
                                    <li>NoSQL databases are highly scalable, distributed, and optimized for performance and large-scale data handling.</li>
                                    <li>They are suitable for unstructured or semi-structured data, high-velocity data streams, and applications that require high scalability and availability.</li>
                                </ol>
                            </li>

                        </p>
                    </div>
                </section>
                <section className="flex items-center justify-center w-[80%] bg-white rounded-lg shadow-lg p-8 mb-8">
                    <div>
                        <h2 className="text-2xl font-bold mb-4">What is express js? What is Nest JS ?</h2>
                        <div className="text-gray-700">
                            <p> Express.js is a popular web application framework for Node.js. It provides a set of features and tools that make it easier to build web applications and APIs. Express.js simplifies tasks such as routing, handling HTTP requests and responses, and implementing middleware.</p>
                            <br />
                            <p> NestJS, on the other hand, is a progressive TypeScript framework for building efficient, scalable, and maintainable server-side applications. It is built on top of Express.js and provides an additional layer of structure and organization to your Node.js applications. NestJS follows the modular architecture and incorporates features like dependency injection, decorators, and modules, making it well-suited for building complex applications.
                            </p>
                        </div>


                    </div>
                </section>
                <section className="flex items-center justify-center w-[80%] bg-white rounded-lg shadow-lg p-8 mb-8">
                    <div>
                        <h2 className="text-2xl font-bold mb-4">What is MongoDB aggregate and how does it work?</h2>
                        <p className="text-gray-700">
                            MongoDB's aggregate is a powerful framework that allows you to perform advanced data processing operations on collections of documents. It provides a flexible way to perform complex queries, transformations, and aggregations on your data.

                            The aggregate method in MongoDB accepts an array of pipeline stages, where each stage defines a specific operation to be performed on the data. These stages are processed sequentially, with the output of each stage becoming the input for the next stage.
                        </p>
                    </div>
                </section>

            </div>
        </div>
    );
};

export default Blogs;