"use client";
import { useState, useEffect } from "react";
import styled from "styled-components";
import { getAllProducts } from "./services/getAllProducts";
import { ProductCard } from "./components/ProductCard/ProductCard";

export default function Home() {
  const [product, setProducts] = useState([]);

  useEffect(() => {
    const apiCallProducts = async () => {
      const allProducts = await getAllProducts();
      setProducts(allProducts);
    };
    apiCallProducts();
  }, []);

  const CardProductContainer = styled.div`
    diplay: flex;
    flex-wrap: wrap;
    width: 100%;
    background-color: #A5FFFF;
    justify-content: center;
  `;
  return (
    <CardProductContainer>
      {product.map((element, index) => (
        <ProductCard product={element} key={index} />
      ))}
    </CardProductContainer>
  );
}
