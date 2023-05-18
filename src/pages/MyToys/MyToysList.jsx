import React from 'react';

const MyToysList = ({ toy }) => {
    const { _id, pictureUrl, name, sellerName, email, subcategory, price, rating, quantity, description } = toy;

    return (
        <>
            <tr>
                <td>
                    <button className="btn btn-sm btn-circle">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </td>
                <td><div className="avatar">
                    <div className="rounded w-24 h-24">
                        {pictureUrl && <img src={pictureUrl} alt="Avatar Tailwind CSS Component" />}
                    </div>
                </div></td>
                <td>{name}</td>
                <td>{sellerName}</td>
                <td>{email}</td>
                <td>{subcategory}</td>
                <td>${price}</td>
                <td>{rating}</td>
                <td>{quantity}</td>
                <td>{description}</td>
                <td>
                    <button className="btn btn-bg-success btn-xs">Update</button>

                </td>
                {/* <td>
                    <button className="btn btn-bg-danger btn-xs">Delete</button>

                </td> */}
            </tr>
        </>
    );
};

export default MyToysList;