import styled from "styled-components/macro";
import { motion } from "framer-motion";
import rightArrowIcon from "public/icons/right-arrow.svg";

export const ShoppingCartPopupContainer = styled(motion.aside)`
  height: 100vh;
  position: sticky;
  top: 0;
  max-width: 390px;
  margin-left: auto;
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 1000;
`;

export const Header = styled.header`
  height: 110px;
  width: 100%;
  background-color: var(--primary-color);
`;

export const ClosePopupBtn = styled.button`
  background-color: inherit;
  top: 35%;
  position: relative;
  cursor: pointer;
  margin-left: 40px;
`;

export const ClosePopupIcon = styled.img`
  filter: invert(1);
`;

export const CartText = styled.h2`
  font-family: var(--secondary-font-family);
  font-size: 30px;
  text-align: center;
  color: white;
`;

export const CartItemsList = styled.ul`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  row-gap: 30px;
  align-items: center;
  overflow: auto;
  height: 650px;
`;
export const NoProductsText = styled.h2`
  font-size: 25px;
  text-align: center;
`;

export const NoProductsLink = styled.a`
  font-size: 20px;
  margin-top: 20px;
  text-decoration: underline;
`;

export const CartItem = styled.li`
  display: flex;
  column-gap: 10px;
  align-items: center;
  margin-right: 35px;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Name = styled.p`
  font-size: 18px;
  font-weight: bold;
`;

export const FlexWrapper = styled.div`
  display: flex;
`;

export const Size = styled.p`
  font-size: 16px;
`;

export const Price = styled.p`
  font-size: 16px;
  font-weight: bold;
`;

export const Footer = styled.footer`
  height: 100px;
  position: absolute;
  z-index: 1;
  width: 100%;
  bottom: 0;
  background-color: #f3e6e6;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ViewCartBtn = styled.button`
  color: white;
  background-color: var(--primary-color);
  border: none;
  width: 300px;
  height: 45px;
  font-size: 20px;
  border-radius: 6px;
  &:hover {
    opacity: 0.9;
  }

  @media screen and (max-width: 310px) {
    width: 250px;
  }
`;

export const SumWrapper = styled.div`
  display: flex;
  margin-top: 30px;
  flex-direction: column;
  margin-top: 35px;
`;

export const SumText = styled.p`
  font-size: 30px;
  margin-left: 10px;
  font-family: var(--secondary-font-family);
`;
export const Sum = styled.p`
  font-size: 30px;
  font-family: var(--secondary-font-family);
  text-align: center;
  margin-top: 20px;
  font-weight: bold;
`;
