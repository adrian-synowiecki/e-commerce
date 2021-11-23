import styled from "styled-components/macro";
import crossIcon from "public/icons/cross.svg";
import couponIcon from "public/icons/coupon.svg";
import errorIcon from "public/icons/error.svg";
import lockIcon from "public/icons/lock.svg";

export const ShoppingCartContainer = styled.main`
  width: 75vw;
  margin: 0 auto;
  margin-top: 150px;
  margin-bottom: 150px;
`;

export const Main = styled.main`
  display: flex;
  min-height: 400px;
  column-gap: 50px;
`;

export const MyCartText = styled.h1`
  font-size: 20px;
  color: var(--secondary-color);
`;

export const ShoppingCartList = styled.ul`
  display: flex;
  flex-direction: column;
  row-gap: 60px;
  flex-basis: 76%;
`;

export const ShoppingCart = styled.li`
  display: flex;
  align-items: center;
`;

export const ImgWrapper = styled.div`
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`;

export const NamePriceWrapper = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 5px;
  flex-basis: 100%;
  margin-left: 20px;
`;

export const Name = styled.p`
  font-size: 18px;
  color: #393c3e;
`;

export const Price = styled.p`
  font-size: 16px;
  color: #393c3e99;
`;

export const ProductTotalPrice = styled.p`
  font-size: 18px;
  text-align: center;
  min-width: 285px;
`;

export const ExitIcon = styled(crossIcon)`
  display: inline-block;
  overflow: visible;
`;

export const CouponIcon = styled(couponIcon)``;

export const EnterPromoCodeText = styled.p`
  color: #b73030;
  font-size: 16px;
  margin-left: 7px;
`;

export const EnterPromoCodeBtn = styled.button`
  border: none;
  display: flex;
  margin-bottom: -30px;
  &:hover ${EnterPromoCodeText} {
    opacity: 0.8;
  }
  &:hover ${CouponIcon} {
    opacity: 0.8;
  }
`;

export const EnterPromoCodeWrapper = styled.div`
  height: 45px;
  display: flex;
  position: relative;
  margin-top: -20px;
`;

export const EnterPromoCodeInput = styled.input`
  width: 236px;
  border: 1px solid rgb(122, 126, 128);
  border-right: none;
  padding-left: 10px;
  ::placeholder {
    font-size: 17px;
  }
  &:hover {
    border: 1px solid rgb(57, 60, 62);
    border-right: none;
  }
  &:focus {
    border: 1px solid rgb(57, 60, 62);
    border-right: none;
    outline: none;
  }
`;

export const ErrorIcon = styled(errorIcon)`
  align-self: center;
  margin-left: 10px;
  position: absolute;
  left: 190px;
  z-index: 99;
`;

export const ApplyPromoCodeBtn = styled.button`
  border: 1px solid #992424;
  color: #992424;
  font-size: 17px;
  width: 100px;
  &:hover {
    background-color: #992424;
    color: white;
    transition: 0.2s;
  }
`;

export const AddCommentBtn = styled.button`
  border: none;
  color: #b73030;
  font-size: 15px;
  &:hover {
    color: var(--primary-color);
  }
`;

export const OrderSummaryWrapper = styled.aside`
  display: flex;
  flex-direction: column;
  row-gap: 10px;
`;

export const OrderSummaryText = styled.h2`
  color: var(--secondary-color);
  font-size: 23px;
  font-family: var(--secondary-font-family);
`;

export const FlexWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const PartialAmountText = styled.p`
  font-size: 17px;
  color: #393c3e;
`;

export const PartialAmount = styled.p`
  font-size: 18px;
  color: var(--gray-color);
`;

export const ShippingText = styled.p`
  font-size: 17px;
  color: var(--gray-color);
`;

export const ShippingPrice = styled.p`
  font-size: 18px;
  color: var(--gray-color);
`;

export const ShippingCountryBtn = styled.button`
  font-size: 17px;
  color: var(--gray-color);
  text-decoration: underline;
`;
export const TotalPriceText = styled.p`
  font-size: 22px;
  color: var(--gray-color);
  font-weight: bold;
`;

export const TotalPrice = styled.p`
  font-size: 22px;
  color: var(--gray-color);
  font-weight: bold;
`;

export const MakeAnOrderBtn = styled.button`
  width: 280px;
  height: 42px;
  background-color: var(--primary-color);
  color: #fff;
  font-size: 20px;
  border: none;
  border-radius: 4px;
  margin-top: 10px;

  &:hover {
    opacity: 0.8;
    transition: 0.2s;
  }
`;

export const LockIcon = styled(lockIcon)`
  width: 18px;
  height: 16px;
  margin-bottom: -2px;
`;
