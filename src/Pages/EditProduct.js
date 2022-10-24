import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useNavigate, useParams } from 'react-router-dom';

const EditProduct = () => {
    const [product, setProduct] = useState({});
    const [name, setName] = useState("");
  const [price, setPrice] = useState('');
  const [items, setItems] = useState('');
  const { ID } = useParams();
  const navigate = useNavigate();
    const formSubmit = (e) => {
        e.preventDefault();
        axios({
          method: "put",
          url: `http://localhost:9000/products/${ID}`,
          data: {
            name,
            price,
            items,
          },
        }).then((data) => {
          navigate("/products");
        });
      };
      useEffect(() => {
        axios({
          method: "get",
          url: `http://localhost:9000/products/${ID}`,
        }).then((data) => {
          // console.log(data.data);
          setProduct(data.data);
        });
      }, []);

  return (
    <div className="mt-5">
      <Form onSubmit={formSubmit}>
        <Form.Group className="mb-3" controlId="Product Name">
          <Form.Label>Product Name</Form.Label>
          <Form.Control
            type="search"
            placeholder={product.name}
            value={name}
            onChange={(e) => setName(e.currentTarget.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="Product Price">
          <Form.Label>Product Price</Form.Label>
          <Form.Control
            type="number"
            placeholder={product.price}
            value={price}
            onChange={(e) => setPrice(e.currentTarget.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="Product Items">
          <Form.Label>Product Items</Form.Label>
          <Form.Control
            type="number"
            placeholder={product.items}
            value={items}
            onChange={(e) => setItems(e.currentTarget.value)}
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  )
}

export default EditProduct
