import styled from "styled-components/macro";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

export const RelatedProductsContainer = styled.section`
  border-top: 1px solid var(--secondary-color);
  padding-top: 10px;
  font-family: var(--secondary-font-family);
  font-size: 25px;
  margin-top: 30px;

  @media screen and (max-width: 950px) {
    margin-left: 20px;
    margin-right: 20px;
  }

  @media screen and (max-width: 500px) {
    text-align: center;
  }
`;

export const RelatedProductsText = styled.h2`
  font-family: var(--secondary-font-family);
  font-size: 25px;
  margin-top: 30px;

  @media screen and (max-width: 500px) {
    text-align: center;
  }
`;

export const RelatedProductsList = styled(Carousel)`
  display: flex;
  align-items: center;
  column-gap: 30px;
  margin-top: 60px;
  margin-bottom: 100px;
`;

export const RelatedProductWrapper = styled.li`
  display: inline-block;
  position: relative;
`;

export const BestSeller = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  background-color: var(--primary-color);
  padding: 8px;
  color: white;
  font-size: 15px;
`;

export const Name = styled.p`
  font-size: 16px;
  color: #393c3e;
  max-width: 200px;
`;

export const Price = styled.p`
  font-size: 20px;
  color: var(--secondary-color);
  margin-top: 5px;
  font-weight: bold;
  max-width: 200px;
`;
