import axios from "axios";
import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router-dom";

const NewProduct = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [items, setItems] = useState(0);

  const navigate = useNavigate();
  const formSubmit = (e) => {
    e.preventDefault();
    axios({
      method: "post",
      url: "http://localhost:9000/products",
      data: {
        name,
        price,
        items,
      },
    }).then((data) => {
      navigate("/products");
    });
  };

  return (
    <div className="mt-5">
      <Form onSubmit={formSubmit}>
        <Form.Group className="mb-3" controlId="Product Name">
          <Form.Label>Product Name</Form.Label>
          <Form.Control
            type="search"
            placeholder="Product Name"
            value={name}
            onChange={(e) => setName(e.currentTarget.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="Product Price">
          <Form.Label>Product Price</Form.Label>
          <Form.Control
            type="number"
            placeholder="Product Price"
            value={price}
            onChange={(e) => setPrice(e.currentTarget.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="Product Items">
          <Form.Label>Product Items</Form.Label>
          <Form.Control
            type="number"
            placeholder="Product Items"
            value={items}
            onChange={(e) => setItems(e.currentTarget.value)}
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default NewProduct;
