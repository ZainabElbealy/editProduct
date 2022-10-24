import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import "../Styles/Products.css";
import axios from "axios";
import Nav from "react-bootstrap/Nav";
import { NavLink } from "react-router-dom";
import Swal from "sweetalert2";

const Products = () => {
  const [products, setProducts] = useState([]);

  const deleteProduct = (product) => {
    Swal.fire({
      icon: "question",
      title: "Are You Sure You Want To Delete",
      showCancelButton: true,
    }).then((data) => {
      // console.log(data.isConfirmed);
      if (data.isConfirmed) {
        axios({
          method: "delete",
          url: `http://localhost:9000/products/${product.id}`,
        }).then((data) => {
          getData();
        });
      }
    });
  };

  const getData = () => {
    axios({
      method: "get",
      url: "http://localhost:9000/products",
    }).then((data) => {
      // console.log(data.data);
      setProducts(data.data);
    });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="product-table">
      <Nav.Link as={NavLink} to="/newproduct">
        <Button variant={"success"} className="mb-3">
          Add New Product
        </Button>
      </Nav.Link>

      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>ID</th>
            <th>Product Name</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td>{product.id}</td>
              <td className="items-table">
                <h1 className="fs-3">{product.name}</h1>
                <div className="products-btns">
                  <Nav.Link>
                    <Button
                      variant={"danger"}
                      onClick={() => deleteProduct(product)}
                    >
                      Delete
                    </Button>
                  </Nav.Link>
                  <Nav.Link as={NavLink} to={`/products/${product.id}`}>
                    <Button variant={"primary"}>View</Button>
                  </Nav.Link>
                  <Nav.Link as={NavLink} to={`/EditProduct/${product.id}`}>
                    <Button variant={"warning"}>Edite</Button>
                  </Nav.Link>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default Products;
