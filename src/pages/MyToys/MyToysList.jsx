import React from 'react';
import { Link } from 'react-router-dom';

const MyToysList = ({ toy, index, handleDelete }) => {
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
                    <Link to={`/mySingleToy/${_id}`}><button className="btn btn-success btn-xs">Update</button></Link>

                </td>
                <td>
                    <button onClick={() => handleDelete(_id)} className="btn btn-error btn-xs">Delete</button>

                </td>

            </tr>
        </>
    );
};

export default MyToysList;