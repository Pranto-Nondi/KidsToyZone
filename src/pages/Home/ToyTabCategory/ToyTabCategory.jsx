import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const ToyTabCategory = () => {
    const toyCategories = [
        {
            categoryName: 'Vehicles',
            toys: [
                {
                  
                    name: 'Toy cars',
                    price: 9.99,
                    rating: 4.5,
                    image: 'https://i.ibb.co/cNc9Mbg/t1.jpg',
                },
                {
                   
                    name: 'Toy trains',
                    price: 14.99,
                    rating: 4.2,
                    image: 'https://i.ibb.co/Kq5vCmv/train1.jpg',
                },
            ],
        },
        {
            categoryName: 'Sports Toys',
            toys: [
                {
                   
                    name: 'Mini basketball hoop',
                    price: 12.99,
                    rating: 4.8,
                    image: 'https://i.ibb.co/fFwQmS6/minibasket1.jpg',
                },
                {
                 
                    name: 'Soccer ball',
                    price: 9.99,
                    rating: 4.6,
                    image: 'https://i.ibb.co/jGkwv3t/sport1.jpg',
                },
            ],
        },
        {
            categoryName: 'Educational Toys',
            toys: [
                {
                  
                    name: 'Alphabet blocks',
                    price: 19.99,
                    rating: 4.7,
                    image: 'https://i.ibb.co/60PL0CD/alp1.jpg',
                },
                {
                   
                    name: 'Math puzzle',
                    price: 16.99,
                    rating: 4.4,
                    image: 'https://i.ibb.co/9ZSS2CX/pazzle2.jpg',
                },
            ],
        },
    ];

    return (
        <div className='container mx-auto p-4'>
            <Tabs>
                <TabList className='flex space-x-4'>
                    {toyCategories.map((category, index) => (
                        <Tab key={index}>{category.categoryName}</Tab>
                    ))}
                </TabList>

                {toyCategories.map((category, index) => (
                    <TabPanel key={index}>
                        <div className='grid grid-cols-2 gap-4'>
                            {category.toys.map((toy) => (
                                <div key={toy.id} className='bg-white rounded shadow p-4'>
                                    <img
                                        src="https://coolmompicks.com/wp-content/uploads/2016/12/custom-super-hero-doll-herome.jpg"
                                        alt={toy.name}
                                        className='object-cover w-full h-80 '
                                    />
                                    <h3 className='text-lg font-semibold mt-2'>{toy.name}</h3>
                                    <p className='text-gray-600'>Price: ${toy.price}</p>
                                    <div className='flex items-center mt-2'>
                                        <span className='text-yellow-500'>{toy.rating}</span>
                                        <svg
                                            xmlns='http://www.w3.org/2000/svg'
                                            className='h-4 w-4 text-yellow-500 ml-1'
                                            viewBox='0 0 20 20'
                                            fill='currentColor'
                                        >
                                            <path
                                                fillRule='evenodd'
                                                d='M10 2.5a1 1 0 011 1v3.224l1.557-.778A1 1 0 0114 5.671V8.5l1.557-.778A1 1 0 0118 7.328V13a1 1 0 01-1 1h-4.332l-1.447 1.789A1 1 0 0110 16.5V13H6a1 1 0 01-1-1V7.328a1 1 0 01.443-.839L6 5.671v-2.5a1 1 0 011-1zm2 8a1 1 0 00-1-1H6a1 1 0 00-1 1v4a1 1 0 001 1h5a1 1 0 001-1v-4z'
                                                clipRule='evenodd'
                                            />
                                        </svg>
                                    </div>
                                    <button className='mt-4 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded'>
                                        View Details
                                    </button>
                                </div>
                            ))}
                        </div>
                    </TabPanel>
                ))}
            </Tabs>
        </div>
    );
};

export default ToyTabCategory;
