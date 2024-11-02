import React from "react";
import { ProductTypes } from "@/app/types/productTypes";
import styled from "styled-components";

type ProductProps = {
  product: ProductTypes;
  index: number;
};

export const ProductCard: React.FC<ProductProps> = ({ product, index }) => {
  const ProductCard = styled.div`
    background-color: black;
  `;

  const ProductTitle = styled.h2`
    color: white;
  `;
  return (
    <div key={index}>
      <ProductCard>
        <ProductTitle>{product.title}</ProductTitle>
      </ProductCard>
    </div>
  );
};
