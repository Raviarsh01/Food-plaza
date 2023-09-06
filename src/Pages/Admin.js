import React from "react";
import burger from "../json Data/burger.json";
import pizza from "../json Data/pizza.json";
import users from "../json Data/users.json";
import "../Styles/Admin.css";

const Admin = () => {
  return (
    <div>
      <h3>Users</h3>
      <table>
        <tr>
          <th>Name</th>
          <th>City</th>
          <th>Email</th>
          <th>Password</th>
        </tr>
        {users.map((item) => (
          <tr>
            <td>{item.name}</td>
            <td>{item.city}</td>
            <td>{item.email}</td>
            <td>{item.password}</td>
          </tr>
        ))}
      </table>

      <h3>Burger</h3>
      <table>
        <tr>
          <th>Id</th>
          <th>Image</th>
          <th>Name</th>
          <th>Price</th>
          <th>Toping</th>
          <th>Description</th>
        </tr>
        {burger.map((item) => (
          <tr>
            <td>{item.id}</td>
            <td>
              <img src={item.image} />
            </td>
            <td>{item.name}</td>
            <td>{item.price}</td>
            <td>{item.toping}</td>
            <td>{item.description}</td>
          </tr>
        ))}
      </table>

      <h3>Pizza</h3>
      <table>
        <tr>
          <th>Id</th>
          <th>Image</th>
          <th>Name</th>
          <th>Price</th>
          <th>Toping</th>
          <th>Description</th>
        </tr>
        {pizza.map((item) => (
          <tr>
            <td>{item.id}</td>
            <td>
              <img src={item.image} />
            </td>
            <td>{item.name}</td>
            <td>{item.price}</td>
            <td>{item.toping}</td>
            <td>{item.description}</td>
          </tr>
        ))}
      </table>
    </div>
  );
};

export default Admin;
