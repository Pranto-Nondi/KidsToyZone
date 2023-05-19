import React from 'react';

const AllToyList = ({ singleToy, index }) => {
    const { _id, pictureUrl, name, sellerName, email, subcategory, price, rating, quantity, description } = singleToy;

    return (
        <>
            <tr>
                <td>{index + 1}</td>
                <td><div className="avatar">
                    <div className="rounded w-24 h-24">
                        {pictureUrl && <img src={pictureUrl} alt="Avatar Tailwind CSS Component" />}
                    </div>
                </div>
                </td>
                <td>{name}</td>
                <td>{sellerName}</td>
                <td>${price}</td>
                <td>{quantity}</td>
                <td>
                    <button className="btn btn-info btn-xs">View Details</button>

                </td>


            </tr>
        </>
    );
};

export default AllToyList;