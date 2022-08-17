import React from "react";
import { deleteProduct } from "../../services/startwars.service";
import "./style.css";

export default function Admin({ products }) {
    const deleteHandler = async (id) => {
        await deleteProduct(id);
    };

    return (
        <div className="admin-container">
            <h2>All Products</h2>
            <table id="products-table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Category</th>
                        <th>Description</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map((product) => (
                        <tr key={product.id}>
                            <td>{product.id}</td>
                            <td>{product.name}</td>
                            <td>${product.price}</td>
                            <td>{product.category}</td>
                            <td>{product.description.slice(0, 100)}...</td>
                            <td>
                                <button
                                    className="btn-delete"
                                    onClick={() => deleteHandler(product.id)}
                                >
                                    Delete
                                </button>
                                <button className="btn-edit">Edit</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
