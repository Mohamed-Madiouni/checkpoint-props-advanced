import React from "react";
import logo from "./logo.svg";
import "./App.css";
import protoTypes from "prop-types"

let item1 = {
  price: "300 €",
  name: "LG TV",
  category: "Electronics",
};
let item2 = {
  price: "500 €",
  name: "Playstation 4",
  category: "Electronics",
};
let item3 = {
  price: "50 €",
  name: "T-shirt",
  category: "Clothes",
};
let item4 = {
  price: "80 €",
  name: "Coat",
  category: "Clothes",
};

let product = [item1, item2, item3, item4];

const ProductTable = ({ table }) => {
  return (
    <table
      style={{
        width: "50vw",
        borderCollapse: "collapse",
        fontFamily: "Trebuchet MS, Arial, Helvetica, sans-serif",
        textAlign:"center",
        margin:"20px"
        
      }}
    >
      <thead>
      <tr style={{ border: "1px solid black" }}>
        <th style={{ width: "33%",border: "1px solid black",backgroundColor: "#4CAF50"}}>Name</th>
        <th style={{ width: "33%",border: "1px solid black",backgroundColor: "#4CAF50"}}>Category</th>
        <th style={{ backgroundColor: "#4CAF50"}}>Price</th>
      </tr>
      </thead>
      <tbody>
      {table.map((e) => (
        <tr style={{ border: "1px solid black" }}>
          <td style={{ border: "1px solid black" }}>{e.name}</td>
          <td style={{ border: "1px solid black" }}>{e.category}</td>
          <td>{e.price}</td>
        </tr>
      ))}
      </tbody>
    </table>
  );
};

function App() {
  return (
    <>
      <ProductTable table={product} />
    </>
  );
}

ProductTable.protoTypes={
  table:protoTypes.array
}

export default App;
