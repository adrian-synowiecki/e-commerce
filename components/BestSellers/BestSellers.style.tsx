import styled from "styled-components/macro";
import { motion } from "framer-motion";
import Image from "next/image";

type BestSellersListProps = {
  ref: Function;
  initial: string;
  animate: object;
  variants: object;
};

type ImageProps = {
  src: string;
  width: number;
  height: number;
};

type HeadingsProps = BestSellersListProps;

export const BestSellersContainer = styled.section`
  width: 95%;
  margin: 0 auto;
  padding-left: 40px;
  margin-top: 80px;
`;

export const Heading = styled(motion.h2)<HeadingsProps>`
  color: var(--secondary-color);
  font-size: 36px;
  font-family: var(--secondary-font-family);
`;

export const BestSellersList = styled(motion.ul)<BestSellersListProps>`
  display: flex;
  margin-top: 40px;
  column-gap: 30px;
`;

export const BestSellerWrapper = styled(motion.li)`
  position: relative;
  &:hover {
    transform: scale(1.1);
    cursor: pointer;
  }
  transition: transform 0.2s;
`;

export const BestSellerImg = styled(Image)<ImageProps>`
  transform: translateY(10px);
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
  font-size: 18px;
  color: #393c3e;
`;

export const Price = styled.p`
  font-size: 24px;
  color: var(--secondary-color);
  margin-top: 5px;
  font-weight: bold;
`;
