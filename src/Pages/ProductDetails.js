import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ProductDetails = () => {
  const [product, setProduct] = useState({});
  const { ID } = useParams();

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
    <div>
      <h1>ProductDetails number {ID}</h1>

      <h1>Name: {product.name}</h1>
      <h1>Price: {product.price}$</h1>
      <h1>Quantity: {product.items}</h1>
    </div>
  );
};

export default ProductDetails;
