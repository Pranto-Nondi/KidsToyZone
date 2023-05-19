import React from 'react';

const MyToysList = ({ toy, index }) => {
    const { _id, pictureUrl, name, sellerName, email, subcategory, price, rating, quantity, description } = toy;

    return (
        <>
            <tr>
                <td>{index + 1}</td>
                <td><div className="avatar">
                    <div className="rounded w-24 h-24">
                        {pictureUrl && <img src={pictureUrl} alt="Avatar Tailwind CSS Component" />}
                    </div>
                </div></td>

                <td>{name}</td>
                <td>{sellerName}</td>
                <td>{email}</td>
                <td>${price}</td>
                <td>{rating}</td>
                <td>{quantity}</td>
                <td>{description}</td>
                <td>
                    <button className="btn btn-success btn-xs">Update</button>

                </td>
                <td>
                    <button className="btn btn-error btn-xs">Delete</button>

                </td>
               
            </tr>
        </>
    );
};

export default MyToysList;